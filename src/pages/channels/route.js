import getLoadable from 'utils/getLoadable';

export default {
  exact: true,
  path: '/channels',
  fatherPath: '/',
  component: getLoadable(() => import('./index'))
};