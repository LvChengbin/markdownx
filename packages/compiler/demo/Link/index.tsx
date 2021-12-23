/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Link/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 07/03/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@mui/material/Box';
import Link from '../../src/renderers/components/Link';

export default function BlockquoteDemo(): JSX.Element {
    return (
        <Box component="div">
            <Box>
                <Link href="#xxx" title="Internal Link" text="Internal Link" />
            </Box>
            <Box>
                <Link href="https://google.com" title="Google.com" text="Google" />
            </Box>
            <Box>
                <Link href="https://google.com" />
            </Box>
        </Box>
    );
}
