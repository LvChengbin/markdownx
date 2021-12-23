/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: docs/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Documentation from './Documentation';

ReactDOM.render( (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Documentation />
    </ThemeProvider>
), document.getElementById( 'root' ) );
