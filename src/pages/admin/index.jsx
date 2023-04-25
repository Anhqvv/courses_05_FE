import React, { Children, useState } from 'react'
import {
  AppstoreOutlined,
  ExceptionOutlined,
  HeartTwoTone,
  TeamOutlined,
  UserOutlined,
  DollarCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined
} from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd'
import { Link } from 'react-router-dom'
import { Footer } from 'antd/es/layout/layout'

const { Header, Sider, Content } = Layout

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const items = [
    {
      label: <Link to='/admin'>Dashboard</Link>,
      key: 'dashboard',
      icon: <AppstoreOutlined />
    },
    {
      label: <span>Manage Users</span>,
      // key: 'user',
      icon: <UserOutlined />,
      children: [
        {
          label: <Link to='/admin/user'>CRUD</Link>,
          key: 'crud',
          icon: <TeamOutlined />
        },
        {
          label: 'Files1',
          key: 'file1',
          icon: <TeamOutlined />
        }
      ]
    },
    {
      label: <Link to='/admin/book'>Manage Books</Link>,
      key: 'book',
      icon: <ExceptionOutlined />
    },
    {
      label: <Link to='/admin/order'>Manage Orders</Link>,
      key: 'order',
      icon: <DollarCircleOutlined />
    }
  ]
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme='light'
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div style={{ height: 32, margin: 16, textAlign: 'center' }}>Admin</div>
        <Menu
          theme='light'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
        />
      </Sider>
      <Layout className='site-layout'>
        <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64
          }}
        />
        <Content style={{ margin: '0 16px' }}>
          <div>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AdminPage
