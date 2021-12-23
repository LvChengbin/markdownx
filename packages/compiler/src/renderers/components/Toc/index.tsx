/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Toc/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/

import React, { useState } from 'react';
import clsx from 'clsx';
import msx from '@nextseason/msx';
import { SxProps, Theme, styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
import TocIcon from '@mui/icons-material/Toc';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export type TocProps = {
    className?: string;
    sx?: SxProps<Theme>;
    toc: {
        text: React.ReactNode;
        level: string | number;
        anchor: string;
    }[];
};

const Switch = styled( Box )( ( { theme : { palette, zIndex } } ) => ( {
    width : 50,
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    color : palette.primary.light,
    background : palette.common.white,
    cursor : 'pointer',
    display : 'none',
    position : 'absolute',
    right : 0,
    top : 0,
    zIndex : zIndex.appBar
} ) );

const Container = styled( Box )( ( { theme : { zIndex, spacing, shadows, palette, breakpoints } } ) => ( {
    position : 'fixed',
    zIndex : zIndex.appBar - 1,
    right : spacing( 4 ),
    width : 300,
    height : '100vh',
    top : 0,
    // transition : 'all .3s ease-out',
    display : 'flex',
    flexDirection : 'row-reverse',
    overflow : 'hidden',
    boxShadow : shadows[ 2 ],
    background : palette.common.white,
    [ breakpoints.down( 'md' ) ] : {
        display : 'none'
    }
} ) );

export default function Toc( props: TocProps ): JSX.Element {

    const { className, sx = [], toc } = props;

    const [ collapse, setCollapse ] = useState( true );

    return (
        <Container className={clsx( className )}
            sx={msx(
                collapse && ( {
                    top : 4,
                    right : 4,
                    width : 48,
                    height : 48,
                    borderRadius : '50%',
                    '& .switch' : {
                        display : 'flex'
                    }
                } ),
                sx
            )}
        >
            <Switch className="switch" onClick={(): void => { setCollapse( false ) }}>
                <TocIcon />
            </Switch>
            <Box p={2}
                sx={{
                    width : 1,
                    height : 1,
                    overflow : 'auto',
                    position : 'relative'
                }}
            >
                <Box onClick={(): void => { setCollapse( true ) }}
                    sx={{
                        position : 'absolute',
                        top : 1,
                        right : 1,
                        color : 'grey.400',
                        cursor : 'pointer',
                        '&:hover' : {
                            color : 'primary.light'
                        }
                    }}
                >
                    <CloseIcon />
                </Box>
                {toc.map( ( x, i: number ): React.ReactNode => {
                    return (
                        <Typography component="p" key={i} ml={( x.level as number - 1 ) * 2}> {/* eslint-disable-line react/no-array-index-key */}
                            <Link href={x.anchor}>{x.text}</Link>
                        </Typography>
                    );
                } )}
            </Box>
        </Container>
    );
}
