'use client'

import { useState } from 'react'
import { Typography, Form, Input, Select, Upload, Button, Space } from 'antd'
import { UploadOutlined, SaveOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AddNewItemPage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<any[]>([])
  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: createItem } = Api.item.create.useMutation()
  const { mutateAsync: generateMetadata } = Api.ai.generateText.useMutation()

  const handleSubmit = async (values: any) => {
    try {
      let fileUrl = ''
      if (fileList.length > 0) {
        const uploadResult = await uploadFile({
          file: fileList[0].originFileObj,
        })
        fileUrl = uploadResult.url
      }

      const metadata = await generateMetadata({
        prompt: `Generate categories and metadata for the following item: ${JSON.stringify(values)}`,
      })

      const newItem = await createItem({
        data: {
          type: values.type,
          content: values.content,
          url: values.url,
          fileUrl,
          title: values.title,
          description: values.description,
          metadata: metadata.answer,
          userId: user?.id || '',
          organizationId: params.organizationId,
        },
      })

      enqueueSnackbar('Item saved successfully', { variant: 'success' })
      router.push(`/organizations/${params.organizationId}/items/${newItem.id}`)
    } catch (error) {
      console.error(error)
      enqueueSnackbar('Failed to save item', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Add New Item</Title>
        <Text>Save a new item to store things you come across.</Text>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          style={{ marginTop: '24px' }}
        >
          <Form.Item name="type" label="Item Type" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="link">Link</Select.Option>
              <Select.Option value="password">Password</Select.Option>
              <Select.Option value="memo">Memo</Select.Option>
              <Select.Option value="code">Code Snippet</Select.Option>
              <Select.Option value="image">Image</Select.Option>
              <Select.Option value="pdf">PDF</Select.Option>
              <Select.Option value="other">Other File</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name="content" label="Content">
            <TextArea rows={6} />
          </Form.Item>
          <Form.Item name="url" label="URL">
            <Input />
          </Form.Item>
          <Form.Item label="File Upload">
            <Upload
              beforeUpload={() => false}
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                Save Item
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
