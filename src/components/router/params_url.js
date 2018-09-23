import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import ParamsDetail from './params_detail';

export default class ParamsUrl extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var params = [
      { id: 1, name: 'user1', company: '1pacvn', slug: '1pac-viet-nam' },
      { id: 2, name: 'user2', company: '1pacjp', slug: '1pac-japan' },
      { id: 3, name: 'user3', company: '1pacvn', slug: '1pac-tokyo' }
    ]

    var { match, location } = this.props // variable get params in url
    var url = match.url;
    console.log(location)
    
    return (
      <div>
        <h1>Get params url</h1>
        {
          params.map((ele) => {
            return (
              <NavLink to={`${url}/${ele.slug}`} key={ele.id} >
                <div style={{ display: 'flex' }}>
                  <h5 style={{ marginRight: 12 }}>{ele.id}</h5>
                  <h5 style={{ marginRight: 12 }}>{ele.name}</h5>
                  <h5 style={{ marginRight: 12 }}>{ele.company}</h5>
                </div>
              </NavLink>
            )
          })
        }
        <div>
          <Route patch = "/params/:slug" component ={ParamsDetail} />
        </div>
      </div>
    )
  }
}
