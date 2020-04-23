/*
 * Unauthorized Messages
 *
 * This contains all the text for the Unauthorized component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Unauthorized';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Sorry, you are not authorized to access this page.',
  },
  backHome: {
    id: `${scope}.backHome`,
    defaultMessage: 'Back Home',
  },
});
