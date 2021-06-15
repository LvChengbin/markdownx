/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Image/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/15/2021
 * Description:
 ******************************************************************/

import React from 'react';
import clsx from 'clsx';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export interface ImageProps {
    className?: string;
    src: string;
    alt: string;
    title: string;
    width?: number | string;
    height?: number | string;
    inline?: boolean;
    floatLeft?: boolean;
    floatRight?: boolean;
    align?: 'left' | 'right' | 'center';
};

const useStyles = makeStyles( ( { spacing }: Theme ) => {
    return createStyles( {
        root : {
            display : 'inline-block',
            margin : `0 ${spacing( 1 )}`
        },
        block : {
            display : 'block'
        },
        'float-left' : {
            float : 'left',
            margin : spacing( 1 )
        },
        'float-right' : {
            float : 'right',
            margin : spacing( 1 )
        },
        left : {
            textAlign : 'left'
        },
        center : {
            textAlign : 'center'
        },
        right : {
            textAlign : 'right'
        },
        box : {
            position : 'relative',
            overflow : 'hidden',
            display : 'inline-block',
            '&:hover $note' : {
                transform : 'translateY( 0 )'
            }
        },
        image : {
            display : 'block'
        },
        note : {
            position : 'absolute',
            bottom : 0,
            left : 0,
            right : 0,
            width : '100%',
            padding : spacing( 1 ),
            backgroundColor : 'rgba( 255, 255, 255, .6 )',
            transform : 'translateY( 100% )',
            transition : 'all .3s ease',
            maxHeight : '5em',
            overflow : 'scroll'
        }
    } );
} );

export default function Image( props: ImageProps ): JSX.Element {
    const styles = useStyles();
    const {
        src, alt, title, className,
        width = 'auto',
        height = 'auto',
        align = 'left',
        inline = true,
        floatLeft = false,
        floatRight = false
    } = props;

    return (
        <Box component="span"
            className={clsx( styles.root, className, styles[ align ], inline || styles.block, floatLeft && styles[ 'float-left' ], floatRight && styles[ 'float-right' ] )}
        >
            <Box component="span" className={styles.box}>
                <img className={styles.image} src={src} title={title} alt={alt} width={width} height={height} />
                <Typography component="span" variant="body2" className={styles.note}>{title}</Typography>
            </Box>
        </Box>
    );
}
