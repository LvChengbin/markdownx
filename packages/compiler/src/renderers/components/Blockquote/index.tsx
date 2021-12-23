/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Blockquote/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 07/03/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Typography from '@mui/material/Typography';

export interface BlockquoteProps {
    children?: React.ReactNode;
}

export default function Blockquote( { children }: BlockquoteProps ): JSX.Element {
    return (
        <Typography variant="body1" component="div"
            sx={{
                m : [ 2, 0, 0 ],
                pl : 2,
                borderLeft : 4,
                borderColor : 'grey.300',
                '&:hover' : {
                    bgcolor : 'grey.100'
                },
                '& > p' : {
                    mt : 0
                }
            }}
        >
            {children}
        </Typography>
    );
}
