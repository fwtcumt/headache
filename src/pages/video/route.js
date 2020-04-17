import getLoadable from 'utils/getLoadable';

export default {
  exact: true,
  path: '/video/:id',
  fatherPath: '/',
  component: getLoadable(() => import('./index'))
};