/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Checkbox/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 12/21/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '../../src/renderers/components/Checkbox';

export default function CheckboxDemo(): JSX.Element {
    return (
        <Box component="div">
            <Checkbox />
        </Box>
    );
}
