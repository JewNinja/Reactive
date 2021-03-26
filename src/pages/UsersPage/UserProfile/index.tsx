import React, { useState, useEffect } from 'react'
import Page from '../../../components/Page'
import { withRouter } from 'react-router-dom'
import UserPosts from './UserPosts'
import PostsService from '../../../api/PostsService'
import { notification } from 'antd'

interface IProps {
  match: { params: { id: any }},
}


const UsersPage = (props: IProps) => {
  const { id: userId } = props.match.params

  const [posts, setPosts] = useState({ data: [], isLoaded: false })

  useEffect(() => {
    PostsService.getPosts({}, { userId }).then(({ data }) => {
      setPosts({ data, isLoaded: true })
    }).catch(err => {
      setPosts({ data: [], isLoaded: false })
      notification.error({
        message: 'Ошибка запроса постов пользователя',
      })
    })
  }, [userId])

  return (
    <Page>
      <UserPosts posts={posts} />
    </Page>
  )
}

export default withRouter(UsersPage)