'use client'

import { Prisma } from '@prisma/client'
import { useState, useEffect } from 'react'
import {
  Typography,
  Card,
  Button,
  Space,
  Input,
  Spin,
  List,
  Avatar,
} from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
  CloseOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ItemDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [item, setItem] = useState<Prisma.ItemGetPayload<{
    include: {
      itemCategorys: { include: { category: true } }
      itemTags: { include: { tag: true } }
    }
  }> | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedItem, setEditedItem] = useState<any>(null)
  const [relatedItems, setRelatedItems] = useState<any[]>([])

  const {
    data: itemData,
    isLoading,
    refetch,
  } = Api.item.findUnique.useQuery({
    where: { id: params.itemId },
    include: {
      itemCategorys: { include: { category: true } },
      itemTags: { include: { tag: true } },
    },
  })

  const updateItem = Api.item.update.useMutation()
  const deleteItem = Api.item.delete.useMutation()
  const generateRelatedItems = Api.ai.generateText.useMutation()

  useEffect(() => {
    if (itemData) {
      setItem(itemData)
      setEditedItem(itemData)
      fetchRelatedItems(itemData)
    }
  }, [itemData])

  const fetchRelatedItems = async (currentItem: any) => {
    try {
      const prompt = `Given the item: "${currentItem.title}", suggest 3 related items in JSON format with title and description.`
      const response = await generateRelatedItems.mutateAsync({ prompt })
      const parsedResponse = JSON.parse(response.answer)
      setRelatedItems(parsedResponse)
    } catch (error) {
      console.error('Error fetching related items:', error)
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    try {
      await updateItem.mutateAsync({
        where: { id: item?.id },
        data: {
          title: editedItem.title,
          description: editedItem.description,
          metadata: editedItem.metadata,
        },
      })
      setIsEditing(false)
      refetch()
      enqueueSnackbar('Item updated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update item', { variant: 'error' })
    }
  }

  const handleCancel = () => {
    setEditedItem(item)
    setIsEditing(false)
  }

  const handleDelete = async () => {
    try {
      await deleteItem.mutateAsync({ where: { id: item?.id } })
      enqueueSnackbar('Item deleted successfully', { variant: 'success' })
      router.push(`/organizations/${organization?.id}/home`)
    } catch (error) {
      enqueueSnackbar('Failed to delete item', { variant: 'error' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 800, margin: '0 auto' }}>
        <Title level={2}>Item Details</Title>
        {item && (
          <>
            {isEditing ? (
              <Space direction="vertical" style={{ width: '100%' }}>
                <Input
                  value={editedItem.title}
                  onChange={e =>
                    setEditedItem({ ...editedItem, title: e.target.value })
                  }
                />
                <Input.TextArea
                  value={editedItem.description}
                  onChange={e =>
                    setEditedItem({
                      ...editedItem,
                      description: e.target.value,
                    })
                  }
                />
                <Input.TextArea
                  value={editedItem.metadata}
                  onChange={e =>
                    setEditedItem({ ...editedItem, metadata: e.target.value })
                  }
                />
                <Space>
                  <Button icon={<SaveOutlined />} onClick={handleSave}>
                    Save
                  </Button>
                  <Button icon={<CloseOutlined />} onClick={handleCancel}>
                    Cancel
                  </Button>
                </Space>
              </Space>
            ) : (
              <>
                <Paragraph>
                  <Text strong>Title:</Text> {item.title}
                </Paragraph>
                <Paragraph>
                  <Text strong>Description:</Text> {item.description}
                </Paragraph>
                <Paragraph>
                  <Text strong>Metadata:</Text> {item.metadata}
                </Paragraph>
                <Paragraph>
                  <Text strong>Categories:</Text>{' '}
                  {item.itemCategorys?.map(ic => ic.category?.name).join(', ')}
                </Paragraph>
                <Paragraph>
                  <Text strong>Tags:</Text>{' '}
                  {item.itemTags?.map(it => it.tag?.name).join(', ')}
                </Paragraph>
                <Space>
                  <Button icon={<EditOutlined />} onClick={handleEdit}>
                    Edit
                  </Button>
                  <Button
                    icon={<DeleteOutlined />}
                    danger
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </Space>
              </>
            )}
          </>
        )}
      </Card>

      <Card style={{ maxWidth: 800, margin: '20px auto' }}>
        <Title level={3}>Related Items</Title>
        <List
          itemLayout="horizontal"
          dataSource={relatedItems}
          renderItem={(item: any) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<EditOutlined />} />}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Card>
    </PageLayout>
  )
}
