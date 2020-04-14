import getLoadable from 'utils/getLoadable';

export default {
  exact: true,
  path: '/list',
  fatherPath: '/',
  component: getLoadable(() => import('./index'))
};