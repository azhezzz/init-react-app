import Bracket from '../pages/bracket';
import Analysis from '../pages/analysis';
import Immediate from '../pages/immediate';
import NotFound from '../pages/404';

export default [
  { path: '/', component: Bracket },
  { path: '/bracket', component: Bracket },
  { path: '/immediate', component: Immediate },
  { path: '/analysis', component: Analysis },
  { path: '*', component: NotFound },
];
