import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';

export default function LineChartCard({ data, title }) {
  return (
    <Card sx={{ width: '100%', height: 320 }}>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>{title}</Typography>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data}>
            <defs>
              <linearGradient id="lineGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#6a11cb" stopOpacity={1} />
                <stop offset="100%" stopColor="#2575fc" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.06} />
            <XAxis dataKey="name" tick={{ fill: '#a8bedc' }} />
            <YAxis tick={{ fill: '#a8bedc' }} />
            <Tooltip />
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#lineGrad)"
                strokeWidth={3}
                dot={{ r: 0 }}
                isAnimationActive={true}
                animationDuration={800}
              />
            </motion.g>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
