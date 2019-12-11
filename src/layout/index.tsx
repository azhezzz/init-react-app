import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import router from '../router';

const tabs = [
  {
    link: '/bracket',
    text: '赛前',
  },
  {
    link: '/immediate',
    text: '赛中',
  },
  {
    link: '/analysis',
    text: '赛后',
  },
];
const Layout = () => (
  <div>
    <ul>
      {tabs.map(item => (
        <li>
          <Link to={item.link}>{item.text}</Link>
        </li>
      ))}
    </ul>
    <hr />
    <Switch>
      {router.map(item => (
        <Route exact path={item.path}>
          {item.component}
        </Route>
      ))}
    </Switch>
  </div>
);

export default Layout;
