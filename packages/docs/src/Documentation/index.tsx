/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Documentation/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@mui/material/Box';
import IndexMDX from '../markdown';

export default function Documentation(): JSX.Element {
    return (
        <Box p={3} pl={4} pr={4}>
            <IndexMDX />
        </Box>
    );
}
