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

const useStyles = makeStyles( ( theme: Theme ) => {
    return createStyles( {
        root : {
            position : 'fixed',
            zIndex : theme.zIndex.appBar - 1,
            right : theme.spacing( 4 ),
            width : 300,
            height : '100vh',
            top : 0,
            // transition : 'all .3s ease-out',
            display : 'flex',
            flexDirection : 'row-reverse',
            overflow : 'hidden',
            boxShadow : theme.shadows[ 2 ],
            background : theme.palette.common.white,
            [ theme.breakpoints.down( 'md' ) ] : {
                display : 'none'
            }
        },
        list : {
            padding : theme.spacing( 2 ),
            width : '100%',
            height : '100%',
            overflow : 'auto',
            position : 'relative'
        },
        close : {
            position : 'absolute',
            top : theme.spacing( 1 ),
            right : theme.spacing( 1 ),
            color : theme.palette.grey[ 400 ],
            cursor : 'pointer',
            '&:hover' : {
                color : theme.palette.primary.light
            }
        },
        switch : {
            width : 50,
            height : 50,
            justifyContent : 'center',
            alignItems : 'center',
            color : theme.palette.primary.light,
            background : theme.palette.common.white,
            cursor : 'pointer',
            display : 'none',
            position : 'absolute',
            right : 0,
            top : 0,
            zIndex : theme.zIndex.appBar
        },
        link : {},
        level1 : {},
        level2 : {
            marginLeft : theme.spacing( 2 )
        },
        level3 : {
            marginLeft : theme.spacing( 4 )
        },
        level4 : {
            marginLeft : theme.spacing( 6 )
        },
        level5 : {
            marginLeft : theme.spacing( 8 )
        },
        level6 : {
            marginLeft : theme.spacing( 10 )
        },
        collapse : {
            top : theme.spacing( 4 ),
            right : theme.spacing( 4 ),
            width : 50,
            height : 50,
            borderRadius : '50%',
            '& $switch' : {
                display : 'flex'
            }
        }
    } );
} );

export default function Toc( props: TocProps ): React.ReactNode {
    const styles = useStyles();
    const { toc } = props;

    const [ collapse, setCollapse ] = useState( true );

    return (
        <div className={clsx( styles.root, collapse && styles.collapse )}>
            <div className={styles.switch} onClick={(): boolean => setCollapse( false )}>
                <TocIcon />
            </div>
            <div className={styles.list}>
                <div className={styles.close} onClick={(): boolean => setCollapse( true )}>
                    <CloseIcon />
                </div>
                {toc.map( ( x, i: number ): React.ReactNode => {
                    return (
                        <p key={i} className={clsx( styles.link, styles[ `level${x.level}` ] )}>
                            <Link href={x.anchor}>{x.text}</Link>
                        </p>
                    );
                } )}
            </div>
        </div>
    );
}
