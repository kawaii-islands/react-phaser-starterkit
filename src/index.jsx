import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import { Fragment } from 'react';

// Components
import Game from './Game';

// Styles
import './index.css';

const theme = createTheme();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Fragment>
    <Helmet>
      <title>My Phaser Game</title>
    </Helmet>
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  </Fragment>
);
