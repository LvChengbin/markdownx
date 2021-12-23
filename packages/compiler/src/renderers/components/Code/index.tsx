/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Code/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/

import React from 'react';
import msx from '@nextseason/msx';
import { styled } from '@mui/material/styles';
import { Prism } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Box from '@mui/material/Box';
import Copy from '../Copy';

export interface CodeProps {
    code: string;
    lang?: string;
    colorscheme?: string;
    component?: React.ReactNode;
};

const Demo = styled( Box )( ( { theme } ) => {
    const { spacing, palette, breakpoints } = theme;

    return {
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent : 'center',
        alignItems : 'center',
        padding : spacing( 4, 2 ),
        border : `solid 1px ${palette.grey[ 300 ]}`,
        borderRadius : 1,
        marginBottom : spacing( 2 ),
        background : palette.common.white,
        '&>*' : {
            margin : spacing( 1 )
        },
        [ breakpoints.down( 'md' ) ] : {
            padding : spacing( 2, 1 )
        }
    };
} );

export default function Code( { lang, code, component }: CodeProps ): JSX.Element {

    return (
        <Box
            sx={msx(
                { position : 'relative', mt : 2 },
                component && ( {
                    p : { sm : 1, md : 2 },
                    bgcolor : 'grey.200',
                    borderRadius : 1
                } )
            )}
        >
            { !!component && <Demo>{component}</Demo> }
            <Box
                sx={{
                    m : 0,
                    position : 'relative',
                    '& pre' : {
                        m : 0
                    }
                }}
            >
                <Box sx={{ position : 'absolute', right : 1.5, top : 1.5, color : 'common.white' }}>
                    <Copy content={code}
                        sx={{
                            opacity : .6,
                            cursor : 'pointer',
                            fontSize : 14,
                            '&:hover' : {
                                opacity : 1
                            }
                        }}
                    />
                </Box>
                {/* eslint-disable-next-line react/forbid-component-props */}
                <Prism language={lang} style={okaidia}>
                    {code}
                </Prism>
            </Box>
        </Box>
    );
}
