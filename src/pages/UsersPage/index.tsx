import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Page from '../../components/Page'
import { getUsers } from '../../ducks/users.js'
import UserDrawer from './UserDrawer'
import UsersList from './UsersList'

const UsersPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <Page>
      <UsersList />
      <UserDrawer />
    </Page>
  )
}

export default UsersPage