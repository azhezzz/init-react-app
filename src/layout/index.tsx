import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <div>home</div>
        </Route>
        <Route path="/about">
          <div>about</div>
        </Route>
        <Route path="/dashboard">
          <div>dashboard</div>
        </Route>
      </Switch>
    </div>
  );
}
