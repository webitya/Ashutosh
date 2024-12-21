import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Construction, Refresh } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MaintenancePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Stack
        spacing={3}
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ display: 'inline-block' }}
        >
          <Construction sx={{ fontSize: 80, color: '#FFD700' }} />
        </motion.div>

        {/* Title */}
        <Typography variant="h3" fontWeight="bold">
          We're Under Maintenance
        </Typography>

        {/* Subtitle */}
        <Typography variant="subtitle1" sx={{ maxWidth: 500, mx: 'auto' }}>
          Our website is currently under maintenance to serve you better. Please check back soon!
        </Typography>

        {/* Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            startIcon={<Refresh />}
            sx={{
              backgroundColor: '#FFD700',
              color: '#0f2027',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#ffcc00',
              },
            }}
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: '#FFD700',
              borderColor: '#FFD700',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
              },
            }}
            onClick={() => navigate('/')}
          >
            Back to Home Page
          </Button>
        </Stack>

        {/* Footer */}
        <Typography variant="caption">
          Powered by <strong>Webitya Web Services</strong>
        </Typography>
      </Stack>
    </Box>
  );
};

export default MaintenancePage;
