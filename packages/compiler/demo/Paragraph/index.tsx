/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Paragraph/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 12/21/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@mui/material/Box';
import Paragraph from '../../src/renderers/components/Paragraph';

export default function ParagraphDemo(): JSX.Element {
    return (
        <Box component="div">
            <Paragraph>Stray birds of summer come to my window to sing and fly away. And yellow leaves of autumn, which have no songs, flutter and fall there with a sigh.</Paragraph>
        </Box>
    );
}
