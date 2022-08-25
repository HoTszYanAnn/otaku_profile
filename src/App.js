import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header, YoutubePlayer, TokiyaSection } from './components';
import theme from './style/theme';

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Header />
      <TokiyaSection />
      <YoutubePlayer />
    </ThemeProvider>
  </>
)

export default App;
