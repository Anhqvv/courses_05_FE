import {
  Button,
  Form,
  Input,
  Divider,
  message,
  notification,
  Space
} from 'antd'
import './register.scss'
import { useState } from 'react'
import { callRegister } from '../../services/api'
import { useNavigate } from 'react-router-dom'
const RegisterPage = () => {
  const [fullName, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const resetForm = () => {
    setFullname('')
    setEmail('')
    setPassword('')
    setPhone('')
  }
  const navigate = useNavigate()
  const onFinish = async () => {
    let res = await callRegister(fullName, email, password, phone)
    console.log('res data', res)
    if (res?.data?._id) {
      message.success('Đăng ký tài khoản thành công!')
      resetForm()
      navigate('/login')
    } else {
      notification.error({
        message: 'Có lỗi xảy ra',
        description: res.message,
        duration: 5
      })
    }
  }

  return (
    <div className='register-page'>
      <main className='main'>
        <section className='wrapper'>
          <section className='container'>
            <div className='heading'>
              <h2 className='text'>Register New User</h2>
              <Divider />
            </div>

            <Form
              name='basic'
              labelCol={{ span: 8 }}
              className='form'
              onFinish={onFinish}
            >
              <Form.Item
                label='Full name'
                name='fullname'
                rules={[
                  { required: true, message: 'Please input your username!' }
                ]}
              >
                <Input
                  value={fullName}
                  onChange={e => setFullname(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  { required: true, message: 'Please input your email!' }
                ]}
              >
                <Input value={email} onChange={e => setEmail(e.target.value)} />
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
              <Form.Item
                label='Phone'
                name='phone'
                rules={[
                  { required: true, message: 'Please input your phone!' }
                ]}
              >
                <Input value={phone} onChange={e => setPhone(e.target.value)} />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </section>
        </section>
      </main>
    </div>
  )
}

export default RegisterPage
