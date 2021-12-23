/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Heading/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 12/21/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@mui/material/Box';
import Heading from '../../src/renderers/components/Heading';

export default function HeadingDemo(): JSX.Element {
    return (
        <Box component="div">
            <Heading anchor="#h1" level="1" text="Heading 1" />
            <Heading anchor="#h2" level="2" text="Heading 2" />
            <Heading anchor="#h3" level="3" text="Heading 3" />
            <Heading anchor="#h4" level="4" text="Heading 4" />
            <Heading anchor="#h5" level="5" text="Heading 5" />
            <Heading anchor="#h6" level="6" text="Heading 6" />
        </Box>
    );
}
