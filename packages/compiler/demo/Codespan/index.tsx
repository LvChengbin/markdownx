/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Codespan/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 12/21/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@mui/material/Box';
import Codespan from '../../src/renderers/components/Codespan';

export default function CodespanDemo(): JSX.Element {
    return (
        <Box component="div">
            <Codespan code="function Demo() {}" lang="typescript" />
        </Box>
    );
}
