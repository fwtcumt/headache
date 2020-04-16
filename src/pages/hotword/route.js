import getLoadable from 'utils/getLoadable';

export default {
  exact: true,
  path: '/hot',
  fatherPath: '/',
  component: getLoadable(() => import('./index'))
};