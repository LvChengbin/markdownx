/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Image/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/15/2021
 * Description:
 ******************************************************************/

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

export interface ImageProps {
    className?: string;
    src: string;
    alt?: string;
    title: string;
    width?: number | string;
    height?: number | string;
    inline?: boolean;
    floatLeft?: boolean;
    floatRight?: boolean;
    align?: 'left' | 'right' | 'center';
};

const useStyles = makeStyles( ( { spacing, palette }: Theme ) => {
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
            backgroundColor : 'rgba( 0, 0, 0, .6 )',
            color : palette.common.white,
            transform : 'translateY( 100% )',
            transition : 'all .3s ease',
            maxHeight : '5em',
            overflow : 'scroll'
        },
        loading : {
            margin : spacing( 1 ),
            display : 'block'
        }
    } );
} );

const Image = React.forwardRef( function Image( props: ImageProps, ref?: React.LegacyRef<HTMLImageElement> ) {
    const styles = useStyles();
    const {
        src, alt, title, className,
        width = 'auto',
        height = 'auto',
        align = 'left',
        inline = true,
        floatLeft = false,
        floatRight = false,
        ...rest
    } = props;

    const [ isReady, setIsReady ] = useState( false );
    const [ isTiny, setIsTiny ] = useState( false );

    useEffect( () => {
        const img = new window.Image();
        img.onload = (): void => {
            let displayWidth: number;

            if( typeof width === 'number' ) {
                displayWidth = width;
            } else {
                if( width === 'auto' ) {
                    displayWidth = img.width;
                } else if( width.includes( '%' ) ) {
                    const w = parseInt( width );
                    displayWidth = isNaN( w ) ? img.width : img.width * w / 100;
                } else {
                    const w = parseInt( width );
                    displayWidth = isNaN( w ) ? img.width : w;
                }
            }

            if( displayWidth < 100 ) setIsTiny( true );
            setIsReady( true );
        };
        img.src = src;
    } );

    return isReady ? (
        isTiny ? (
            <Tooltip title={title}>
                <img src={src}
                    ref={ref}
                    className={clsx(
                        styles.root,
                        styles[ align ],
                        inline || styles.block,
                        floatLeft && styles[ 'float-left' ],
                        floatRight && styles[ 'float-right' ]
                    )}
                    alt={alt}
                    width={width}
                    height={height}
                    {...rest}
                />
            </Tooltip>
        ) : (
            <Box component="span"
                className={clsx(
                    className,
                    styles.root,
                    styles[ align ],
                    inline || styles.block,
                    floatLeft && styles[ 'float-left' ],
                    floatRight && styles[ 'float-right' ]
                )}
            >
                <Box component="span" className={styles.box}>
                    <img {...rest} ref={ref} className={styles.image} src={src} title={title} alt={alt} width={width} height={height} />
                    <Typography component="span" variant="body2" className={styles.note}>{title}</Typography>
                </Box>
            </Box>
        )
    ) : (
        <Box component="span" className={styles.loading}>
            <CircularProgress size={30} />
        </Box>
    );
} );

export default Image;
