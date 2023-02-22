import React from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';

const News = () => {
  return (
    <div>
      News
    </div>
  );
};

export default withAuthRedirect(News);