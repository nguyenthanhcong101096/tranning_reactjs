import React, { Component } from 'react';
import * as urls from './services/constans';
import * as call from './services/call';

export default class Api extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    call.callApi({ url: urls.mock_api, method: 'GET' })
      .then(res => {
        this.setState({ products: res.data })
      })
  }

  addProduct() {
    var data = {
      name: 'Thêm mới',
      price: 100000,
      status: true
    }
    call.callApi({ url: urls.mock_api, method: 'POST', body: data })
      .then(() => { this.getData() })
  }

  deleteProduct(id) {
    call.callApi({ url: urls.mock_api.concat(`/${id}`), method: 'DELETE' })
      .then(() => { this.getData() })
  }

  
  updateProduct(id){
    call.callApi({url: urls.mock_api.concat(`${id}`), method: 'PUT', body: {name: 'nguyễn thành công'}})  
  }
  
  renderList() {
    var data = []
    const { products } = this.state;
    products.map((ele) => {
      data.push(
        <div style={{ display: 'flex' }} key={ele.id}>
          <h5 style={{ marginRight: 16 }}>{ele.name}</h5>
          <h5 style={{ marginRight: 16 }}>{ele.price}</h5>
          <button
            style={{ marginRight: 10 }}
            onClick={() => { this.deleteProduct(ele.id) }}>
            Delete products api
           </button>
        </div>
      )
    })
    return data
  }

  render() {
    return (
      <div>
        <h1>Api</h1>
        <div style={{ display: 'flex' }}>
          <div>
            {this.renderList()}
          </div>
          <div>
            <button style={{ marginRight: 10 }} onClick={() => { this.addProduct() }}>Add products api</button>
          </div>
        </div>
      </div>
    )
  }
}
