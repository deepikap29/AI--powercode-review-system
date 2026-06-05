import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function StatCard({ title, value, delta, icon }) {
  return (
    <Card sx={{ minWidth: 200, flex: 1 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h5">{value}</Typography>
          </Box>
          <Box>
            {icon || <TrendingUpIcon color="primary" sx={{ fontSize: 36 }} />}
          </Box>
        </Box>
        {delta && (
          <Typography variant="caption" color="text.secondary">{delta}</Typography>
        )}
      </CardContent>
    </Card>
  );
}
