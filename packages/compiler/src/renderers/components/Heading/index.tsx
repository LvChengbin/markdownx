/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Heading/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Copy from '../Copy';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
    text: React.ReactNode;
    level: '1' | '2' | '3' | '4' | '5' | '6';
    anchor: string;
};

const Anchor = styled( 'a' )( ( { theme } ) => {
    const { spacing, palette } = theme;

    return {
        textDecoration : 'none',
        paddingRight : spacing( .5 ),
        color : palette.grey[ 500 ],
        marginLeft : '-.8em',
        opacity : 0
    };
} );

export default function Heading( props: HeadingProps ): JSX.Element {
    const { level = '1', text, anchor } = props;

    const url = new URL( window.location.href );
    url.hash = anchor;

    return (
        <div id={url.hash.slice( 1 )}>
            <Typography variant={`h${level}` as HeadingVariant}
                sx={{
                    mt : level === '2' ? 4 : level === '3' ? 3 : 2,
                    '&:hover .anchor' : {
                        opacity : 1
                    },
                    '&:hover .copy' : {
                        opacity : .8
                    }
                }}
            >
                <Anchor href={anchor} className="anchor">#</Anchor>{text}
                <Copy content={url.href} className="copy" sx={{ opacity : 0, fontSize : '.8em', ml : 1, verticalAlign : '-2px' }} />
            </Typography>
        </div>
    );
}
