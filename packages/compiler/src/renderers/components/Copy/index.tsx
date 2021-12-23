/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Copy/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import React, { useRef } from 'react';
import clsx from 'clsx';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export interface CopyProps {
    className?: string;
    content?: string;
    sx?: SxProps<Theme>;
};

export default function Copy( props: CopyProps ): JSX.Element {
    const { content, className, sx = [] } = props;
    const input = useRef<HTMLTextAreaElement>( null );

    const handleCopy = (): void => {
        input?.current?.select?.();
        document.execCommand( 'copy' );
    };

    return (
        <Box className={clsx( className )}
            sx={[
                { display : 'inline-block', cursor : 'pointer' },
                ...( Array.isArray( sx ) ? sx : [ sx ] )
            ]}
        >
            <FileCopyIcon fontSize="small" onClick={handleCopy} sx={{ fontSize : 'inherit' }} />
            <Box component="textarea" ref={input} value={content} readOnly
                sx={{ opacity : 0, width : 0, height : 0, position : 'fixed', left : -99999, top : -99999 }}
            />
        </Box>
    );
}
