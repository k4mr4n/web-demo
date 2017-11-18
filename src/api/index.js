import Config from '../config/app_config'
import BaseApi from './protected_api'

// our "constructor"
const create = () => {
  const api = BaseApi(Config.BASE_URL)

  const fetchHotels = (body) => api.post('/hotels', body)

  return {
    fetchHotels
  }
}

// let's return back our create method as the default.
export default {
  create
}
