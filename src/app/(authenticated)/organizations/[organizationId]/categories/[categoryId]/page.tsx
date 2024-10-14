'use client'

import { Typography, Card, Row, Col, Button, Spin } from 'antd'
import { HeartOutlined, HeartFilled, EyeOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CategoryItemsPage() {
  const router = useRouter()
  const params = useParams<{ categoryId: string; organizationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const { data: category, isLoading: isCategoryLoading } =
    Api.category.findUnique.useQuery({
      where: { id: params.categoryId },
    })

  const { data: items, isLoading: isItemsLoading } = Api.item.findMany.useQuery(
    {
      where: {
        itemCategorys: {
          some: {
            categoryId: params.categoryId,
          },
        },
        organizationId: params.organizationId,
      },
    },
  )

  const toggleFavorite = (itemId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(itemId)) {
        newFavorites.delete(itemId)
        enqueueSnackbar('Removed from favorites', { variant: 'info' })
      } else {
        newFavorites.add(itemId)
        enqueueSnackbar('Added to favorites', { variant: 'success' })
      }
      return newFavorites
    })
  }

  const viewItemDetails = (itemId: string) => {
    router.push(`/organizations/${params.organizationId}/items/${itemId}`)
  }

  if (isCategoryLoading || isItemsLoading) {
    return (
      <PageLayout layout="full-width">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>{category?.name}</Title>
        <Text>Explore items in this category</Text>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          {items?.map(item => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <Card
                hoverable
                cover={
                  item.fileUrl && (
                    <img
                      alt={item.title}
                      src={item.fileUrl}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  )
                }
                actions={[
                  <Button
                    key="favorite"
                    icon={
                      favorites.has(item.id) ? (
                        <HeartFilled />
                      ) : (
                        <HeartOutlined />
                      )
                    }
                    onClick={() => toggleFavorite(item.id)}
                  >
                    {favorites.has(item.id) ? 'Unfavorite' : 'Favorite'}
                  </Button>,
                  <Button
                    key="view"
                    icon={<EyeOutlined />}
                    onClick={() => viewItemDetails(item.id)}
                  >
                    View
                  </Button>,
                ]}
              >
                <Card.Meta title={item.title} description={item.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}
