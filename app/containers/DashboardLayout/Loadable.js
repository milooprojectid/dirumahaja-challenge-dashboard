/**
 *
 * Asynchronously loads the component for DashboardLayout
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
