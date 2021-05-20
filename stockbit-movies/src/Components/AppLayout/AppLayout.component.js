import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div>
      <h1>Judul</h1>
      { children }
    </div>
  );
};

export default AppLayout;