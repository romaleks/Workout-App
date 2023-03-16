import axios from 'axios'
import Cookies from 'js-cookie'

import { TOKEN } from './app.constants'
import serverPath from './utils/server-path'

const API_URL = `${serverPath}/api`

export const $axios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : '',
  },
})
