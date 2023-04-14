import { Button, Form, Input, Divider, message } from 'antd'
import { useState } from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onFinish = async () => {}
  const navigate = useNavigate()

  return (
    <div className='login-page'>
      <main className='main'>
        <section className='wrapper'>
          <section className='container'>
            <div className='heading'>
              <h2 className='text'>Login User</h2>
              <Divider />
            </div>

            <Form
              name='basic'
              labelCol={{ span: 8 }}
              className='form'
              onFinish={onFinish}
            >
              <Form.Item
                label='Username'
                name='username'
                rules={[
                  { required: true, message: 'Please input your username!' }
                ]}
              >
                <Input
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' }
                ]}
              >
                <Input.Password
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  type='primary'
                  htmlType='submit'
                  onClick={() => onFinish()}
                >
                  Login
                </Button>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <span>You don't have acctount?</span>
                <Button type='link' onClick={() => navigate('/register')}>
                  {' '}
                  Register
                </Button>
              </Form.Item>
            </Form>
          </section>
        </section>
      </main>
    </div>
  )
}

export default LoginPage
