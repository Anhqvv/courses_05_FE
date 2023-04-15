import axios from 'axios'
const baseURL = import.meta.env.VITE_BACKEND_URL

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true
})

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('error', error?.response?.data)
    return error?.response?.data ?? Promise.reject(error)
  }
)

export default instance
