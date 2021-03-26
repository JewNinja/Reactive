import { axiosInstance } from './client'
import {
  endpoint
} from './endpoint'

const getPosts = (order = {}, filter = {}) => axiosInstance({
  method: 'get',
  url: endpoint.posts.list,
  params: {
    ...filter,
  },
})

export default {
  getPosts,
}
