'use client'

import { Typography, List, Card, Row, Col, Spin } from 'antd'
import { FolderOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CategoriesPage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: categories, isLoading } = Api.category.findMany.useQuery({
    where: { userId: user?.id },
    include: { itemCategorys: true },
  })

  const handleCategoryClick = (categoryId: string) => {
    router.push(
      `/organizations/${params.organizationId}/categories/${categoryId}`,
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>AI-Generated Categories</Title>
          <Paragraph>
            Browse your items by category. Click on a category to see all items
            within it.
          </Paragraph>

          {isLoading ? (
            <Spin size="large" />
          ) : (
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 3 }}
              dataSource={categories}
              renderItem={category => (
                <List.Item>
                  <Card
                    hoverable
                    onClick={() => handleCategoryClick(category.id)}
                    style={{ textAlign: 'center' }}
                  >
                    <FolderOutlined
                      style={{ fontSize: '24px', marginBottom: '8px' }}
                    />
                    <Title level={4}>{category.name}</Title>
                    <Paragraph>{category.itemCategorys.length} items</Paragraph>
                  </Card>
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
