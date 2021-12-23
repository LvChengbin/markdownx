/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Codespan/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2020
 * Description:
 ******************************************************************/


import React from 'react';
import clsx from 'clsx';
import { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export interface CodespanProps {
    code?: string;
    className?: string;
    sx?: SxProps<Theme>;
};

export default function Codespan( props: CodespanProps ): JSX.Element {
    const { code, className, sx = [] } = props;

    return (
        <Box component="span" className={clsx( className )} dangerouslySetInnerHTML={{ __html : code ?? '' }}
            sx={[
                {
                    color : 'primary.main',
                    bgcolor : 'grey.200',
                    fontSize : 14,
                    borderRadius : 1,
                    p : '2px 4px',
                    m : 1
                },
                ...( Array.isArray( sx ) ? sx : [ sx ] )
            ]}
        />
    );
}
