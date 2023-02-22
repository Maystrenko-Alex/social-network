import React from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';

const Music = () => {
  return (
    <div>
      Music
    </div>
  );
};

export default withAuthRedirect(Music);