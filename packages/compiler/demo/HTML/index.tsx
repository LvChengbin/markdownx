/******************************************************************
 * Copyright (C) 2022 LvChengbin
 *
 * File: HTML/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 01/01/2022
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@mui/material/Box';
import Html from '../../src/renderers/components/HTML';

const figma = '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQ0rPf5bXLBnX8uxOhKXId3%2FUntitled%3Fnode-id%3D0%253A1" allowfullscreen></iframe>';

export default function HTMLDemo(): JSX.Element {
    return (
        <Box component="div">
            <Html content={figma} />
        </Box>
    );
}
