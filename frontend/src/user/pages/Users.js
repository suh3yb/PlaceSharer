import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarts',
      image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--PRo8JZYQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/b8fijmje1zfn1xckv0ur.png',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
