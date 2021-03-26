import { Card, List, Typography } from 'antd'
import React from 'react'
import { IPost } from '../../../ducks/models/Posts'

interface IProps {
  posts: {
    data: Array<IPost>,
    isLoaded: boolean,
  }
}

const UsersPage = ({ posts }: IProps) => {
  
  return (
    <Card>
      <List
        header={<h2>Посты пользователя</h2>}
        dataSource={posts.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.body}
            />
          </List.Item>
        )}
      />
    </Card>
  )
}

export default UsersPage