'use client'

import { Typography, Space, Card } from 'antd'
import {
  InfoCircleOutlined,
  RocketOutlined,
  TeamOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
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
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={1} style={{ textAlign: 'center' }}>
          Welcome to Our Application
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '18px' }}>
          Discover how our application can help you organize and manage your
          items efficiently.
        </Paragraph>

        <Card>
          <Space direction="vertical" size="middle">
            <Space>
              <InfoCircleOutlined
                style={{ fontSize: '24px', color: '#1890ff' }}
              />
              <Title level={3}>How It Works</Title>
            </Space>
            <Paragraph>
              Our application allows you to easily manage and categorize your
              items. You can add new items, assign them to categories, and tag
              them for easy searching and organization.
            </Paragraph>
          </Space>
        </Card>

        <Card>
          <Space direction="vertical" size="middle">
            <Space>
              <RocketOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
              <Title level={3}>Key Features</Title>
            </Space>
            <ul>
              <li>Add and manage items with detailed information</li>
              <li>Create and organize categories</li>
              <li>Tag items for quick reference</li>
              <li>Search and filter your items easily</li>
              <li>Collaborate with team members in your organization</li>
            </ul>
          </Space>
        </Card>

        <Card>
          <Space direction="vertical" size="middle">
            <Space>
              <TeamOutlined style={{ fontSize: '24px', color: '#faad14' }} />
              <Title level={3}>Get Started</Title>
            </Space>
            <Paragraph>
              To begin, navigate to the "Add New Item" page to create your first
              item. You can then explore the categories and tags features to
              organize your items effectively.
            </Paragraph>
          </Space>
        </Card>
      </Space>
    </PageLayout>
  )
}
