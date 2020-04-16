import getLoadable from 'utils/getLoadable';

export default {
  exact: true,
  path: '/p/:id',
  fatherPath: '/',
  component: getLoadable(() => import('./index'))
};