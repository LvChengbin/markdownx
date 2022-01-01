/******************************************************************
 * Copyright (C) 2022 LvChengbin
 *
 * File: HTML/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 01/01/2022
 * Description:
 ******************************************************************/

import React from 'react';
import clsx from 'clsx';
import msx from '@nextseason/msx';
import { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export interface HTMLProps {
    content?: string;
    sx?: SxProps<Theme>;
    className?: string;
}

export default function HTML( { content = '', className, sx }: HTMLProps ): JSX.Element {

    return (
        <Box className={clsx( className )} dangerouslySetInnerHTML={{ __html : content }}
            sx={msx(
                {
                    '& iframe, & p, & div' : {
                        mt : 2
                    }
                },
                sx
            )}
        />
    );
}
