/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Strong/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 12/21/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@mui/material/Box';
import Strong from '../../src/renderers/components/Strong';

export default function StrongDemo(): JSX.Element {
    return (
        <Box component="div">
            <Strong content="Stray birds of summer come to my window to sing and fly away. And yellow leaves of autumn, which have no songs, flutter and fall there with a sigh." />
        </Box>
    );
}
