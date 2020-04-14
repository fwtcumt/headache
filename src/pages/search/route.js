import getLoadable from 'utils/getLoadable';

export default {
  exact: true,
  path: '/search',
  fatherPath: '/',
  component: getLoadable(() => import('./index'))
};