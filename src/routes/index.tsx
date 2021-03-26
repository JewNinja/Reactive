import { Switch, Route } from 'react-router-dom'
import UsersPage from '../pages/UsersPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={ () => <UsersPage /> }/>
      <Route path='/users' render={ () => <UsersPage /> }/>
      <Route path='/create' render={ () => <></> }/>
      <Route render={ () => <UsersPage /> }/>
    </Switch>
  )
}

export default Routes