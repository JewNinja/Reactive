import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button, Col, Drawer, Input, Row, Spin, Table, Form, Divider
} from 'antd'
import { StateType } from '../../../ducks'
import './style.css'
import { IUser } from '../../../ducks/models/Users'
import { closeUserDrawer, updateUser, createUser } from '../../../ducks/users'

const UserDrawer = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: StateType) => state.users)
  const { id: userId } = useSelector((state: StateType) => state.users.drawer)
  const isOpen = useSelector((state: StateType) => state.users.drawer.isOpen)

  const currentUser = users.data.find((user: IUser) => user.id === userId) || {}

  const [form] = Form.useForm()
  
  const onFinish = (values: any) => {
    if (userId) {
      dispatch(updateUser({...currentUser, ...values}))
    } else {
      dispatch(createUser(values))
    }

    dispatch(closeUserDrawer())
  };

  const onClose = () => {
    dispatch(closeUserDrawer())
  }

  return (
    <Drawer
      title={userId ? 'Редактирование юзера' : 'Создание юзера'}
      closable={false}
      width={900}
      onClose={onClose}
      visible={isOpen}
      className="drawer-wrapper"
      destroyOnClose
    >
      <Form
        layout="vertical"
        form={form}
        scrollToFirstError
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Spin spinning={users.isLoading}>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                label="Имя"
                name="name"
                rules={[{
                  required: true,
                  message: "Введите имя",
                }]}
                // @ts-ignore
                initialValue={currentUser?.name}
              >
                <Input
                  placeholder="Введите имя"
                  autoComplete="off"
                  // disabled={isCreating || isUpdating}
                />
              </Form.Item>
            </Col>
          </Row>
          {/* <Divider /> */}
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Телефон"
                name="phone"
                rules={[{
                  required: true,
                  message: "Введите телефон",
                }]}
                // @ts-ignore
                initialValue={currentUser?.phone}
              >
                <Input
                  placeholder="Введите телефон"
                  autoComplete="off"
                  // disabled={isCreating || isUpdating}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{
                  required: true,
                  type: 'email',
                  message: "Введите email",
                }]}
                // @ts-ignore
                initialValue={currentUser?.email}
              >
                <Input
                  placeholder="Введите mail"
                  autoComplete="off"
                  // disabled={isCreating || isUpdating}
                />
              </Form.Item>
            </Col>
          </Row>
        </Spin>
        <div
          className="button-group-container"
        >
          <Button
            onClick={onClose}
            style={{ marginRight: 8 }}
          >
            Отмена
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            // disabled={isLoading}
            // loading={isCreating || isUpdating}
          >
            Сохранить
          </Button>
        </div>
      </Form>
    </Drawer>
  )
}

export default UserDrawer
