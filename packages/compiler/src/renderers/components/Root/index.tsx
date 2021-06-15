/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Root/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@material-ui/core/Box';

export interface RootProps {
    children?: React.ReactNode;
}

export default function Root( { children }: RootProps ): JSX.Element {
    return (
        <Box>
            {children}
        </Box>
    );
}
