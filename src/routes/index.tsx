import { Switch, Route } from 'react-router-dom'
import UsersPage from '../pages/UsersPage'
import UserProfile from '../pages/UsersPage/UserProfile'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={ () => <UsersPage /> }/>
      <Route exact path='/users' render={ () => <UsersPage /> }/>
      <Route path='/users/:id' render={ () => <UserProfile /> }/>
      <Route render={ () => <UsersPage /> }/>
    </Switch>
  )
}

export default Routes