import React from 'react';
import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

export default function DataTable({ rows }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>Recent Analyses</Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>File</TableCell>
                <TableCell>Language</TableCell>
                <TableCell>Result</TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((r, idx) => (
                <TableRow key={idx} hover>
                  <TableCell>{r.file}</TableCell>
                  <TableCell>{r.lang}</TableCell>
                  <TableCell>{r.result}</TableCell>
                  <TableCell>{r.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
