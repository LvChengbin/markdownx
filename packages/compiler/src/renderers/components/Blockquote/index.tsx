/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Blockquote/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 07/03/2021
 * Description:
 ******************************************************************/

import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( ( { spacing, palette }: Theme ) => {
    return createStyles( {
        root : {
            margin : `${spacing( 2 )} 0 0`,
            paddingLeft : spacing( 2 ),
            borderLeft : `solid 4px ${palette.grey[ 300 ]}`,
            '&:hover' : {
                background : palette.grey[ 100 ]
            },
            '& > p' : {
                marginTop : 0
            }
        }
    } );
} );

export interface BlockquoteProps {
    children?: React.ReactNode;
}

export default function Blockquote( { children }: BlockquoteProps ): JSX.Element {
    const styles = useStyles();
    return (
        <Typography variant="body1" component="div" className={styles.root}>
            {children}
        </Typography>
    );
}
