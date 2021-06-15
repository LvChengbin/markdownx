/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Container/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@material-ui/core/Box';

export interface ContainerProps {
    children?: React.ReactNode;
}

export default function Container( { children }: ContainerProps ): JSX.Element {
    return (
        <Box>
            {children}
        </Box>
    );
}
