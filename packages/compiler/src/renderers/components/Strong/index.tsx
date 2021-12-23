/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Strong/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/12/2020
 * Description:
 ******************************************************************/

import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

export interface StrongProps extends TypographyProps {
    raw: string;
    content: React.ReactNode;
    sx?: SxProps<Theme>;
};

export default function Strong( props: StrongProps ): JSX.Element {
    const { raw, content, sx = [], ...rest } = props;

    const error = /^(!!!!|error|danger|严重警告|严重声明)/i.test( raw );
    const warning = /^(!!!|warn|caveat|警告|注意|声明|⚠️)/i.test( raw );
    const notice = /^(!!|notice|tip|info|hint|提示|贴示|小贴示|小提示)/i.test( raw );

    return (
        <Typography component="strong" {...rest}
            sx={[
                {
                    fontWeight : 'bold',
                    mt : 1,
                    mb : 1,
                    ...( error && ( { color : 'palette.error.dark' } ) ),
                    ...( warning && ( { color : 'palette.warning.dark' } ) ),
                    ...( notice && ( { color : 'palette.info.dark' } ) )
                },
                ...( Array.isArray( sx ) ? sx : [ sx ] )
            ]}
        >{content}
        </Typography>
    );
}
