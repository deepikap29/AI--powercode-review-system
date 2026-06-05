import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import LineChartCard from '../components/LineChartCard';
import DataTable from '../components/DataTable';

const sampleChart = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 60 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 80 },
  { name: 'Jun', value: 95 },
];

const sampleRows = [
  { file: 'main.py', lang: 'Python', result: 'Optimized', time: '2m' },
  { file: 'App.js', lang: 'JavaScript', result: 'Fixed', time: '5m' },
  { file: 'index.html', lang: 'HTML', result: 'Suggested', time: '1m' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 16 } },
};

export default function Dashboard() {
  return (
    <Container maxWidth="lg">
      <motion.div initial="hidden" animate="show" variants={container}>
        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <motion.div variants={item}>
              <StatCard title="Analyses" value="1,248" delta="+8% this week" />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div variants={item}>
              <StatCard title="Issues Found" value="42" delta="-3%" />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div variants={item}>
              <StatCard title="Avg. Time" value="3m 12s" delta="-5%" />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <motion.div variants={item}>
              <LineChartCard data={sampleChart} title="Analyses Over Time" />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div variants={item}>
              <DataTable rows={sampleRows} />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
      <Box sx={{ height: 40 }} />
    </Container>
  );
}
