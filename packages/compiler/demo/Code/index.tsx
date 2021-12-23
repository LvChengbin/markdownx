/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Code/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 12/21/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@mui/material/Box';
import Code from '../../src/renderers/components/Code';

export default function CodeDemo(): JSX.Element {
    return (
        <Box component="div">
            <Code code="function Demo() {}" lang="typescript" />
        </Box>
    );
}
