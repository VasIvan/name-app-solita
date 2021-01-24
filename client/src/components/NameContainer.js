import React from 'react';

import NameSort from './NameSort';

const NameContainer = (props) => {
  const { value, addRefresh } = props;
  return (
    <>
      {value === 0 && (
        <NameSort value={value} addRefresh={addRefresh} page={'date'} />
      )}
      {value === 1 && (
        <NameSort value={value} addRefresh={addRefresh} page={'alpha'} />
      )}
      {value === 2 && (
        <NameSort value={value} addRefresh={addRefresh} page={'amount'} />
      )}
    </>
  );
};

export default NameContainer;
