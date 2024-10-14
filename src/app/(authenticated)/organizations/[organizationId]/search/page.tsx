'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Input,
  Select,
  DatePicker,
  List,
  Card,
  Space,
  Button,
} from 'antd'
import {
  SearchOutlined,
  FilterOutlined,
  SortAscendingOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SearchResultsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchQuery, setSearchQuery] = useState('')
  const [itemType, setItemType] = useState('')
  const [category, setCategory] = useState('')
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null]
  >([null, null])
  const [sortBy, setSortBy] = useState('relevance')

  const {
    data: items,
    isLoading,
    refetch,
  } = Api.item.findMany.useQuery({
    where: {
      organizationId: params.organizationId,
      OR: [
        { title: { contains: searchQuery, mode: 'insensitive' } },
        { description: { contains: searchQuery, mode: 'insensitive' } },
      ],
      type: itemType ? { equals: itemType } : undefined,
      itemCategorys: category
        ? { some: { category: { name: { equals: category } } } }
        : undefined,
      createdAt:
        dateRange[0] && dateRange[1]
          ? {
              gte: dateRange[0].toDate(),
              lte: dateRange[1].toDate(),
            }
          : undefined,
    },
    include: { itemCategorys: { include: { category: true } } },
    orderBy: sortBy === 'date' ? { createdAt: 'desc' } : undefined,
  })

  const { data: categories } = Api.category.findMany.useQuery({
    where: { userId: user?.id },
  })

  useEffect(() => {
    refetch()
  }, [searchQuery, itemType, category, dateRange, sortBy])

  const handleSearch = () => {
    refetch()
  }

  const handleItemClick = (itemId: string) => {
    router.push(`/organizations/${params.organizationId}/items/${itemId}`)
  }

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={2}>Search Results</Title>
        <Text>
          Find specific items in your collection by searching, filtering, and
          sorting.
        </Text>

        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Input
            placeholder="Search items..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onPressEnter={handleSearch}
            suffix={
              <SearchOutlined
                onClick={handleSearch}
                style={{ cursor: 'pointer' }}
              />
            }
          />

          <Space>
            <Select
              style={{ width: 150 }}
              placeholder="Item Type"
              value={itemType}
              onChange={setItemType}
              allowClear
            >
              <Option value="document">Document</Option>
              <Option value="image">Image</Option>
              <Option value="video">Video</Option>
            </Select>

            <Select
              style={{ width: 150 }}
              placeholder="Category"
              value={category}
              onChange={setCategory}
              allowClear
            >
              {categories?.map(cat => (
                <Option key={cat.id} value={cat.name}>
                  {cat.name}
                </Option>
              ))}
            </Select>

            <DatePicker.RangePicker
              value={dateRange}
              onChange={dates =>
                setDateRange(dates as [dayjs.Dayjs | null, dayjs.Dayjs | null])
              }
            />

            <Select
              style={{ width: 150 }}
              placeholder="Sort By"
              value={sortBy}
              onChange={setSortBy}
            >
              <Option value="relevance">Relevance</Option>
              <Option value="date">Date</Option>
            </Select>
          </Space>
        </Space>

        <List
          loading={isLoading}
          dataSource={items}
          renderItem={item => (
            <Card
              key={item.id}
              hoverable
              onClick={() => handleItemClick(item.id)}
              style={{ marginBottom: 16 }}
            >
              <Space direction="vertical">
                <Title level={4}>{item.title}</Title>
                <Text>{item.description}</Text>
                <Space>
                  <Text type="secondary">Type: {item.type}</Text>
                  <Text type="secondary">
                    Categories:{' '}
                    {item.itemCategorys
                      ?.map(ic => ic.category?.name)
                      .join(', ')}
                  </Text>
                  <Text type="secondary">
                    Created: {dayjs(item.createdAt).format('YYYY-MM-DD')}
                  </Text>
                </Space>
              </Space>
            </Card>
          )}
        />
      </Space>
    </PageLayout>
  )
}
