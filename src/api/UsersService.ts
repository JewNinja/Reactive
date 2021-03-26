import { axiosInstance } from './client'
import {
  endpoint
} from './endpoint'

const getUsers = () => axiosInstance({
  method: 'get',
  url: endpoint.users.list,
  params: {},
})

export default {
  getUsers,
}
