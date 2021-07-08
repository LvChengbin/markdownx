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
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import is from '@lvchengbin/is';

type BooleanStr = 'true' | 'false';

export interface ImageProps {
    className?: string;
    src: string;
    alt?: string;
    title: string;
    width?: number | string;
    height?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    inline?: boolean | BooleanStr;
    floatLeft?: boolean | BooleanStr;
    floatRight?: boolean | BooleanStr;
    align?: 'left' | 'right' | 'center';
    zoomable?: boolean | BooleanStr;
};

interface ImageStyleProps {
    zoomable: boolean | BooleanStr;
}

const useStyles = makeStyles( ( { spacing, palette }: Theme ) => {
    return createStyles( {
        root : {
            fontSize : 0,
            display : 'inline-block',
            margin : `0 ${spacing( 1 )}`,
            cursor : ( { zoomable }: ImageStyleProps ) => is.generalizedTrue( zoomable ) ? 'zoom-in' : 'inherit'
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
            display : 'block',
            width : '100%',
            height : '100%',
            cursor : ( { zoomable }: ImageStyleProps ) => is.generalizedTrue( zoomable ) ? 'zoom-in' : 'inherit'
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
        },
        'view-layer' : {
            position : 'absolute',
            top : 0,
            left : 0,
            right : 0,
            bottom : 0,
            border : 0,
            overflow : 'auto'
        },
        'view-layer-img' : {
            transition : 'all 0.5s ease-in-out',
            cursor : 'zoom-out'
        }
    } );
} );

export default function Image( props: ImageProps ): JSX.Element {

    const {
        src, alt, title, className,
        width = 'auto',
        height = 'auto',
        maxWidth = 'none',
        maxHeight = 'none',
        align = 'left',
        inline = true,
        floatLeft = false,
        floatRight = false,
        zoomable = true,
        ...rest
    } = props;

    const styles = useStyles( { zoomable } );

    const [ isReady, setIsReady ] = useState( false );
    const [ isTiny, setIsTiny ] = useState( false );
    const [ openImageViewLayer, setOpenImageViewLayer ] = useState( false );
    const [ imageViewImageStyle, setImageViewImageStyle ] = useState<React.CSSProperties>();
    const ref = React.createRef<HTMLImageElement>();

    const initialImageViewLayer = (): void => {
        if( !ref.current ) return;
        const { left, top } = ref.current.getBoundingClientRect();
        const { width } = ref.current;

        setImageViewImageStyle( {
            width,
            transform : `translate( ${left}px, ${top}px )`
        } );
    };

    const fixImageViewLayer = (): void => {
        if( !ref.current || !openImageViewLayer ) return;
        const { naturalWidth, naturalHeight } = ref.current;
        const { innerWidth, innerHeight } = window;

        const innerAspectRatio = innerWidth / innerHeight;
        const naturalAspectRatio = naturalWidth / naturalHeight;

        let displayWidth = naturalWidth;
        let displayHeight = naturalHeight;

        const ratio = .95;

        const validWidth = innerWidth * ratio;
        const validHeight = innerHeight * ratio;

        if( naturalWidth > innerWidth * ratio || naturalHeight > innerHeight * ratio ) {
            if( naturalAspectRatio > innerAspectRatio ) {
                displayWidth = validWidth;
                displayHeight = displayWidth / naturalAspectRatio;
            } else if( naturalAspectRatio < innerAspectRatio ) {
                displayHeight = validHeight;
                displayWidth = displayHeight * naturalAspectRatio;
            }
        }

        setImageViewImageStyle( {
            width : displayWidth,
            transform : `translate(${( innerWidth - displayWidth ) / 2}px, ${ ( innerHeight - displayHeight ) / 2 }px )`
        } );
    };

    const handleOpenImageViewLayer = (): void => {
        initialImageViewLayer();
        setOpenImageViewLayer( true );
    };

    const handleCloseImageViewLayer = (): void => {
        setOpenImageViewLayer( false );
    };


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

        /**
         * Reposition the image in popup
         */
        const onresize = (): void => {
            fixImageViewLayer();
        };

        window.addEventListener( 'resize', onresize, { passive : true } );

        return (): void => {
            /**
             * remove the resize listener
             */
            window.removeEventListener( 'resize', onresize );
        };
    } );

    return (
        <>
            { isReady ? (
                isTiny ? (
                    <Tooltip title={title}>
                        <img src={src}
                            className={clsx(
                                styles.root,
                                styles[ align ],
                                is.generalizedFalse( inline ) && styles.block,
                                is.generalizedTrue( floatLeft ) && styles[ 'float-left' ],
                                is.generalizedTrue( floatRight ) && styles[ 'float-right' ]
                            )}
                            ref={ref}
                            alt={alt}
                            width={width}
                            height={height}
                            onClick={handleOpenImageViewLayer}
                            {...rest}
                        />
                    </Tooltip>
                ) : (
                    <Box component="span"
                        className={clsx(
                            className,
                            styles.root,
                            styles[ align ],
                            is.generalizedFalse( inline ) && styles.block,
                            is.generalizedTrue( floatLeft ) && styles[ 'float-left' ],
                            is.generalizedTrue( floatRight ) && styles[ 'float-right' ]
                        )}
                    >
                        <Box component="span" className={styles.box} sx={{ width, height, maxWidth, maxHeight }}>
                            <img {...rest} ref={ref} className={styles.image} src={src} title={title} alt={alt} onClick={handleOpenImageViewLayer} />
                            <Typography component="span" variant="body2" className={styles.note}>{title}</Typography>
                        </Box>
                    </Box>
                )
            ) : (
                <Box component="span" className={styles.loading}>
                    <CircularProgress size={30} />
                </Box>
            ) }
            { zoomable && (
                <Modal open={openImageViewLayer} onClose={handleCloseImageViewLayer}>
                    <Fade timeout={{ exit : 800, enter : 100 }}
                        in={openImageViewLayer}
                        onEntered={fixImageViewLayer}
                        onExiting={initialImageViewLayer}
                    >
                        <div className={styles[ 'view-layer' ]} onClick={handleCloseImageViewLayer}>
                            <img className={styles[ 'view-layer-img' ]} style={imageViewImageStyle} src={src} />
                        </div>
                    </Fade>
                </Modal>
            ) }
        </>
    );
}
