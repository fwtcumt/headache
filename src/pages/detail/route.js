import getLoadable from 'utils/getLoadable';

export default {
  exact: true,
  path: '/detail',
  fatherPath: '/',
  component: getLoadable(() => import('./index'))
};