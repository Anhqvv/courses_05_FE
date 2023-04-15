import { Button, Form, Input, Divider, message, notification } from 'antd'
import { useState } from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { callLogin } from '../../services/api'
const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onFinish = async () => {
    let res = await callLogin(username, password)
    if (res?.data) {
      console.log('res data', res.data.access_token)
      message.success('Login is success!')
      localStorage.setItem('access_token', res.data.access_token)
      navigate('/')
    } else {
      notification.error({
        message: 'Having something wrong',
        description: res.message,
        duration: 5
      })
    }
  }
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
                <Button type='primary' htmlType='submit'>
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
