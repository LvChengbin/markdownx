/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Image/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/15/2021
 * Description:
 ******************************************************************/

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
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
    float?: 'left' | 'right' | 'none';
    align?: 'left' | 'right' | 'center';
    zoomable?: boolean | BooleanStr;
};

const ImageContainer: React.ComponentType<BoxProps<React.ElementType, { component?: React.ElementType}>> = styled( Box, {
    shouldForwardProp : prop => prop !== 'inline'
} )<{
    zoomable?: boolean;
    inline?: boolean | BooleanStr;
    float?: 'left' | 'right' | 'none';
    align?: 'left' | 'right' | 'center';
}>( ( { zoomable, inline, float, align, theme : { spacing } } ) => {

    return {
        fontSize : 0,
        margin : float && float !== 'none' ? spacing( 1 ) : `${spacing( 0 )}px ${spacing( 1 )}px`,
        cursor : is.generalizedTrue( zoomable ) ? 'zoom-in' : 'inherit',
        textAlign : align,
        float : float ?? 'none',
        display : is.generalizedFalse( inline ) ? 'block' : 'inline-block'
    };
} );

const Note: React.ComponentType<TypographyProps<React.ElementType, { component?: React.ElementType}>> = styled( Typography )( ( { theme : { palette, spacing } } ) => ( {
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
} ) );

const ImageBox = styled( Box )( {
    position : 'relative',
    overflow : 'hidden',
    display : 'inline-block'
} );

const ViewLayer = styled( 'div' )( {
    position : 'absolute',
    top : 0,
    left : 0,
    right : 0,
    bottom : 0,
    border : 0,
    overflow : 'auto'
} );

const ViewLayerImg = styled( 'img' )( {
    transition : 'all 0.5s ease-in-out',
    cursor : 'zoom-out'
} );

export default function Image( props: ImageProps ): JSX.Element {

    const {
        src, alt, title,
        width = 'auto',
        height = 'auto',
        maxWidth = 'none',
        maxHeight = 'none',
        align = 'left',
        inline = true,
        float = 'none',
        zoomable = true,
        ...rest
    } = props;

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
                        <ImageContainer component="img" src={src} {...{ inline, align, float, ref, alt, width, height }}
                            onClick={handleOpenImageViewLayer}
                            {...rest}
                        />
                    </Tooltip>
                ) : (
                    <ImageContainer component="span" {...{ inline, align, float }}>
                        <ImageBox component="span"
                            sx={{
                                width,
                                height,
                                maxWidth,
                                maxHeight,
                                '&:hover .note' : {
                                    transform : 'translateY( 0 )'
                                }
                            }}
                        >
                            <Box component="img"
                                sx={{
                                    display : 'block',
                                    width : '100%',
                                    height : '100%',
                                    cursor : is.generalizedTrue( zoomable ) ? 'zoom-in' : 'inherit'
                                }}
                                {...rest}
                                {...{ ref, src, title, alt }}
                                onClick={handleOpenImageViewLayer}
                            />
                            <Note className="note" component="span" variant="body2">{title}</Note>
                        </ImageBox>
                    </ImageContainer>
                )
            ) : (
                <Box component="span" sx={{ m : 1, display : 'block' }}>
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
                        <ViewLayer onClick={handleCloseImageViewLayer}>
                            {/* eslint-disable-next-line react/forbid-component-props */}
                            <ViewLayerImg style={imageViewImageStyle} src={src} />
                        </ViewLayer>
                    </Fade>
                </Modal>
            ) }
        </>
    );
}
