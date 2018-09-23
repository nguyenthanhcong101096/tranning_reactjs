import React from 'react'
import Home from './home';
import Contact from './contact';
import ParamsUrl from './params_url';
import ParamsDetail from './params_detail';
import Login from './login';
import NotFound from './not_found';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/login',
    exact: false,
    main: ({ location }) => <Login location={location} />
  },
  {
    path: '/contact',
    exact: false,
    main: () => <Contact />
  },
  {
    path: '/params',
    exact: true,
    main: ({ match, location }) => <ParamsUrl match={match} location={location} />
  },
  {
    path: '/params/:slug',
    exact: false,
    main: () => <ParamsDetail />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  }
]

export default routes
