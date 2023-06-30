import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Title = ({ title }) => {
  return (
    <Typography
      component="h2"
      variant="h4"
      sx={{ textAlign: 'center', mb: '20px' }}
    >
      {title}
    </Typography>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
