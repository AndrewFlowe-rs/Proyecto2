import React from 'react';

const Alert = ({ message }) => {
  return (
    <div class="alert alert-danger" role="alert">
   { message }
  </div>
  );
};
Alert.propTypes = {}
export default Alert;
