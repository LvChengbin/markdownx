/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Heading/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import React from 'react';
import clsx from 'clsx';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Copy from '../Copy';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
    text: React.ReactNode;
    level: '1' | '2' | '3' | '4' | '5' | '6';
    anchor: string;
};

const useStyles = makeStyles( ( { spacing, palette }: Theme ) => {
    return createStyles( {
        root : {},
        heading : {
            '&:hover $anchor' : {
                opacity : 1
            },
            '&:hover $copy' : {
                opacity : .8
            }
        },
        anchor : {
            textDecoration : 'none',
            paddingRight : spacing( .5 ),
            color : palette.grey[ 500 ],
            marginLeft : '-.8em',
            opacity : 0
        },
        copy : {
            opacity : 0,
            fontSize : '.8em',
            marginLeft : spacing( 1 ),
            verticalAlign : '-2px'
        },
        h1 : {},
        h2 : {
            marginTop : spacing( 1 )
        },
        h3 : {
            marginTop : spacing( 1 )
        },
        h4 : {
            marginTop : spacing( 1 )
        },
        h5 : {
            marginTop : spacing( 1 )
        },
        h6 : {
            marginTop : spacing( 1 )
        }
    } );
} );

export default function Heading( props: HeadingProps ): JSX.Element {
    const styles = useStyles( props );
    const { level, text, anchor } = props;

    const url = new URL( window.location.href );
    url.hash = anchor;

    return (
        <div className={styles.root} id={url.hash.slice( 1 )}>
            <Typography variant={`h${level}` as HeadingVariant}
                className={clsx( styles.heading, styles[ `h${level}` ] )}
            >
                <a href={anchor} className={styles.anchor}>#</a>{text}
                <Copy content={url.href} className={styles.copy} />
            </Typography>
        </div>
    );
}

Heading.defaultProps = {
    level : '1'
};
