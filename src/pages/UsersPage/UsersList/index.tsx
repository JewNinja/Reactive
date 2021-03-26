import { Button, Skeleton, Table } from 'antd'
import {
  EditOutlined,
} from '@ant-design/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../../ducks'
import { IUser } from '../../../ducks/models/Users'
import { openUserDrawer } from '../../../ducks/users'
import './style.css'

const UsersList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: StateType) => state.users)
  debugger
  return (
    <div>
      <Button
        type="primary"
        className="add-new-user-btn"
        // @ts-ignore
        onClick={() => dispatch(openUserDrawer({ id: null }))}
      >
        Добавить пользователя
      </Button>
      <Table
        rowKey="guid"
        dataSource={users.isLoading ? Array(10).fill({}) : users.data}
      >
        <Table.Column
          title="Имя"
          dataIndex="name"
          key="name"
          render={text => (users.isLoading ? (
            <Skeleton title={false} paragraph={{ rows: 1 }} active />
          ) : (
            <div>{text}</div>
          ))}
        />
        <Table.Column
          title="Телефон"
          dataIndex="phone"
          key="phone"
          render={text => (users.isLoading ? (
            <Skeleton title={false} paragraph={{ rows: 1 }} active />
          ) : (
            <div>{text}</div>
          ))}
        />
        <Table.Column
          title="Email"
          dataIndex="email"
          key="email"
          render={text => (users.isLoading ? (
            <Skeleton title={false} paragraph={{ rows: 1 }} active />
          ) : (
            <div>{text}</div>
          ))}
        />
        <Table.Column
          title="Компания"
          dataIndex="company.name"
          key="company.name"
          render={(_, record: IUser) => (users.isLoading ? (
            <Skeleton title={false} paragraph={{ rows: 1 }} active />
          ) : (
            <div>{record.company?.name}</div>
          ))}
        />
        <Table.Column
          title="Действия"
          dataIndex="action"
          key="action"
          render={(_, record: IUser) => (users.isLoading ? (
            <Skeleton title={false} paragraph={{ rows: 1 }} active />
          ) : (
            <Button
              icon={<EditOutlined />}
              // @ts-ignore
              onClick={() => dispatch(openUserDrawer({ id: record.id }))}
            >
              Редактировать
            </Button>
          ))}
        />
      </Table>
    </div>
  )
}

export default UsersList