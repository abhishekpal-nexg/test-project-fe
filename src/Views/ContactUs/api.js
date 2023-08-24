import axios from 'axios'

export const sendMailReq = (data) => {
    return axios.post(`https://www.authserver-staging-be.theyogainstituteonline.org/v1/ali/mail`, data)
  }