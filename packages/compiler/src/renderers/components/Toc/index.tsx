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
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';
import TocIcon from '@material-ui/icons/Toc';

export type TocProps = {
    toc: {
        text: React.ReactNode;
        level: string | number;
        anchor: string;
    }[];
};

const useStyles = makeStyles( ( { zIndex, spacing, shadows, palette, breakpoints }: Theme ) => {
    return createStyles( {
        root : {
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
        },
        list : {
            padding : spacing( 2 ),
            width : '100%',
            height : '100%',
            overflow : 'auto',
            position : 'relative'
        },
        close : {
            position : 'absolute',
            top : spacing( 1 ),
            right : spacing( 1 ),
            color : palette.grey[ 400 ],
            cursor : 'pointer',
            '&:hover' : {
                color : palette.primary.light
            }
        },
        switch : {
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
        },
        link : {},
        level1 : {},
        level2 : {
            marginLeft : spacing( 2 )
        },
        level3 : {
            marginLeft : spacing( 4 )
        },
        level4 : {
            marginLeft : spacing( 6 )
        },
        level5 : {
            marginLeft : spacing( 8 )
        },
        level6 : {
            marginLeft : spacing( 10 )
        },
        collapse : {
            top : spacing( 4 ),
            right : spacing( 4 ),
            width : 50,
            height : 50,
            borderRadius : '50%',
            '& $switch' : {
                display : 'flex'
            }
        }
    } );
} );

export default function Toc( props: TocProps ): JSX.Element {
    const styles = useStyles();
    const { toc } = props;

    const [ collapse, setCollapse ] = useState( true );

    return (
        <div className={clsx( styles.root, collapse && styles.collapse )}>
            <div className={styles.switch} onClick={(): void => { setCollapse( false ) }}>
                <TocIcon />
            </div>
            <div className={styles.list}>
                <div className={styles.close} onClick={(): void => { setCollapse( true ) }}>
                    <CloseIcon />
                </div>
                {toc.map( ( x, i: number ): React.ReactNode => {
                    return (
                        <p key={i} className={clsx( styles.link, styles[ `level${x.level}` ] )}> {/* eslint-disable-line react/no-array-index-key */}
                            <Link href={x.anchor}>{x.text}</Link>
                        </p>
                    );
                } )}
            </div>
        </div>
    );
}
