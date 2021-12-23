/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Paragraph/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2020
 * Description:
 ******************************************************************/

import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

export interface ParagraphProps extends TypographyProps {
    sx?: SxProps<Theme>;
}

export default function Paragraph( props: ParagraphProps ): JSX.Element {

    const { sx = [], children, ...rest } = props;

    return (
        <Typography variant="body1" {...rest}
            sx={[
                { mt : 2, lineHeight : 2, overflow : 'auto' },
                ...( Array.isArray( sx ) ? sx : [ sx ] )
            ]}
        >
            {children}
        </Typography>
    );
}
