import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, CircularProgress, Typography, TextField, Skeleton } from '@mui/material';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as codeTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

export default function AnalyzerCard() {
  const [codeSnippet, setCodeSnippet] = useState('');
  const [codeResponse, setCodeResponse] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      const message = event.data;
      if (message.type === 'analyzeCode') {
        setCodeSnippet(message.code);
        analyzeCode(message.code);
      }
    });
  }, []);

  const analyzeCode = async (code) => {
    setError('');
    setLoading(true);
    setCodeResponse('');
    setSuggestions([]);
    try {
      const resp = await axios.post('/analyze', { code });
      const data = resp.data;
      if (data.error) throw new Error(data.error);
      setCodeResponse(data.corrected_code || '');
      setSuggestions(data.suggestions || []);
    } catch (err) {
      console.error(err);
      setError('There was an error analyzing the code.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    // small UX feedback
    setError('Copied to clipboard');
    setTimeout(() => setError(''), 1500);
  };

  return (
    <Card id="analyzer" sx={{ maxWidth: 900, margin: '0 auto', mb: 6 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Code Analyzer
        </Typography>
        <TextField
          label="Paste code here or send from editor"
          multiline
          minRows={6}
          value={codeSnippet}
          onChange={(e) => setCodeSnippet(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
          <Button variant="contained" onClick={() => analyzeCode(codeSnippet)} disabled={loading || !codeSnippet}>
            {loading ? <CircularProgress size={20} color="inherit" /> : 'Analyze'}
          </Button>
          <Button variant="outlined" onClick={() => { setCodeSnippet(''); setCodeResponse(''); setSuggestions([]); }}>
            Clear
          </Button>
        </Box>

        {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

        {loading && (
          <Box sx={{ mb: 2 }}>
            <Skeleton variant="rectangular" height={160} sx={{ mb: 1 }} />
            <Skeleton width="40%" />
          </Box>
        )}

        {!loading && codeResponse && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Optimal Code</Typography>
              <SyntaxHighlighter language="python" style={codeTheme}>
                {codeResponse}
              </SyntaxHighlighter>
              <Button variant="contained" color="secondary" onClick={() => copyToClipboard(codeResponse)} sx={{ mt: 1 }}>
                Copy Code
              </Button>
            </Box>
          </motion.div>
        )}

        {!loading && suggestions && suggestions.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Box>
              <Typography variant="h6">Suggestions</Typography>
              <ul>
                {suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </Box>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
