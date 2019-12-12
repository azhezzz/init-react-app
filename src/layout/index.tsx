import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { LayoutWrapper, NavWrapper } from './styled';
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
const Layout: () => React.ReactElement = () => (
  <LayoutWrapper>
    <NavWrapper>
      <ul>
        {tabs.map(item => (
          <li key={item.link}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </NavWrapper>
    <hr />
    <Switch>
      {router.map(item => (
        <Route exact path={item.path} key={item.path}>
          {item.component}
        </Route>
      ))}
    </Switch>
  </LayoutWrapper>
);

export default Layout;
