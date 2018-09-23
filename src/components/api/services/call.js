import axios from 'axios';

export const callApi = ({ url, method = 'GET', body = null, headers = null }) => {
  return (axios({
    method: method,
    headers: headers,
    url: url,
    data: body
  }))
}
