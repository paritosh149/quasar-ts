import axios from 'axios'

export default (vue: any ) => {
  vue.prototype.$axios = axios
}
