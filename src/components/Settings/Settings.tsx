import React from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';

const Settings = () => {
  return (
    <div>
      Settings
    </div>
  );
};

export default withAuthRedirect(Settings);