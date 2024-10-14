'use client'

import { Typography, Input, Card, List, Space, Tag, Spin } from 'antd'
import { SearchOutlined, TagOutlined, LinkOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchTerm, setSearchTerm] = useState('')
  const [categories, setCategories] = useState<any[]>([])
  const [suggestedItems, setSuggestedItems] = useState<any[]>([])

  const { data: items, isLoading: isLoadingItems } = Api.item.findMany.useQuery(
    {
      where: { userId: user?.id, organizationId: params.organizationId },
      include: {
        itemCategorys: { include: { category: true } },
        itemTags: { include: { tag: true } },
      },
    },
  )

  const { data: categoriesData, isLoading: isLoadingCategories } =
    Api.category.findMany.useQuery({
      where: { userId: user?.id },
    })

  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData)
    }
  }, [categoriesData])

  useEffect(() => {
    // Simulating AI-suggested items based on user's history
    if (items) {
      const suggested = items.slice(0, 3) // Just taking first 3 items as suggestions for demo
      setSuggestedItems(suggested)
    }
  }, [items])

  const filteredItems = items?.filter(
    item =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.itemTags?.some(itemTag =>
        itemTag.tag?.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  )

  const handleItemClick = (itemId: string) => {
    router.push(`/organizations/${params.organizationId}/items/${itemId}`)
  }

  const renderItem = (item: any) => (
    <List.Item
      key={item.id}
      onClick={() => handleItemClick(item.id)}
      style={{ cursor: 'pointer' }}
    >
      <Card title={item.title} style={{ width: '100%' }}>
        <Text>{item.description}</Text>
        <br />
        <Space direction="vertical" style={{ width: '100%' }}>
          <Text strong>Categories:</Text>
          <Space>
            {item.itemCategorys?.map((itemCategory: any) => (
              <Tag key={itemCategory.id} color="blue">
                {itemCategory.category?.name}
              </Tag>
            ))}
          </Space>
          <Text strong>Tags:</Text>
          <Space>
            {item.itemTags?.map((itemTag: any) => (
              <Tag key={itemTag.id} icon={<TagOutlined />}>
                {itemTag.tag?.name}
              </Tag>
            ))}
          </Space>
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <LinkOutlined /> View Original
            </a>
          )}
        </Space>
      </Card>
    </List.Item>
  )

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={2}>My Saved Items</Title>
        <Input
          placeholder="Search items or tags"
          prefix={<SearchOutlined />}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        {isLoadingItems || isLoadingCategories ? (
          <Spin size="large" />
        ) : (
          <>
            <Card title="Categories">
              <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={categories}
                renderItem={category => (
                  <List.Item>
                    <Card
                      hoverable
                      onClick={() =>
                        router.push(
                          `/organizations/${params.organizationId}/categories/${category.id}`,
                        )
                      }
                    >
                      {category.name}
                    </Card>
                  </List.Item>
                )}
              />
            </Card>
            <Title level={3}>All Items</Title>
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={filteredItems}
              renderItem={renderItem}
            />
            <Title level={3}>Suggested Items</Title>
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={suggestedItems}
              renderItem={renderItem}
            />
          </>
        )}
      </Space>
    </PageLayout>
  )
}
