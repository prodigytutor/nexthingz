'use client'

import { Typography, Card, Button, Space, Row, Col, Input } from 'antd'
import { SaveOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ExplorePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [feedback, setFeedback] = useState('')

  const {
    data: suggestions,
    isLoading,
    refetch,
  } = Api.item.findMany.useQuery({
    where: { userId: user?.id },
    take: 5,
    orderBy: { createdAt: 'desc' },
  })

  const { mutateAsync: saveItem } = Api.item.create.useMutation()
  const { mutateAsync: provideFeedback } =
    Api.suggestionFeedback.create.useMutation()

  const handleSaveItem = async (item: any) => {
    try {
      await saveItem({
        data: {
          type: item.type,
          content: item.content,
          url: item.url,
          fileUrl: item.fileUrl,
          title: item.title,
          description: item.description,
          metadata: item.metadata,
          userId: user?.id!,
          organizationId: params.organizationId,
        },
      })
      enqueueSnackbar('Item saved successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to save item', { variant: 'error' })
    }
  }

  const handleProvideFeedback = async (item: any, isPositive: boolean) => {
    try {
      await provideFeedback({
        data: {
          feedback: isPositive ? 'Positive' : 'Negative',
          userId: user?.id!,
          itemId: item.id,
        },
      })
      enqueueSnackbar('Feedback provided successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to provide feedback', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Explore New Items</Title>
        <Text>Discover new content based on your interests</Text>

        {isLoading ? (
          <Text>Loading suggestions...</Text>
        ) : (
          <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
            {suggestions?.map(item => (
              <Col xs={24} sm={12} md={8} key={item.id}>
                <Card
                  title={item.title}
                  extra={
                    <Button
                      icon={<SaveOutlined />}
                      onClick={() => handleSaveItem(item)}
                    >
                      Save
                    </Button>
                  }
                  actions={[
                    <Button
                      icon={<LikeOutlined />}
                      onClick={() => handleProvideFeedback(item, true)}
                    >
                      Like
                    </Button>,
                    <Button
                      icon={<DislikeOutlined />}
                      onClick={() => handleProvideFeedback(item, false)}
                    >
                      Dislike
                    </Button>,
                  ]}
                >
                  <Text>{item.description}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <Space
          direction="vertical"
          style={{ width: '100%', marginTop: '20px' }}
        >
          <Title level={4}>Provide Additional Feedback</Title>
          <Input.TextArea
            rows={4}
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
          />
          <Button
            type="primary"
            onClick={() => {
              enqueueSnackbar('Feedback submitted successfully', {
                variant: 'success',
              })
              setFeedback('')
            }}
          >
            Submit Feedback
          </Button>
        </Space>
      </div>
    </PageLayout>
  )
}
