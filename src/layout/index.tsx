import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import router from '../router';
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const Layout = () => (
  <div>
    <ul>
      <li>
        <Link to="/bracket">赛前</Link>
      </li>
      <li>
        <Link to="/immediate">赛中</Link>
      </li>
      <li>
        <Link to="/analysis">赛后</Link>
      </li>
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
