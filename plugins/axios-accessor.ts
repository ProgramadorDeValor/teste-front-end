import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/axiosApi'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
