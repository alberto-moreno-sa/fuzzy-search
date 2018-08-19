// @flow

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { StyledMain, StyledIcon, StyledTypography } from './styled';

const App = () => (
  <StyledMain>
    <AppBar position="static">
      <Toolbar>
        <StyledIcon color="inherit" aria-label="Menu">
          <MenuIcon />
        </StyledIcon>
        <StyledTypography variant="title" color="inherit">
          News
        </StyledTypography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </StyledMain>
);

export default App;
