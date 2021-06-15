/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: TableRow/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import React from 'react';
// import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { default as T } from '@material-ui/core/TableRow';

const useStyles = makeStyles( () => {
    return createStyles( {
        root : {
            '&:nth-of-type(odd)' : {
                // backgroundColor : palette.action.hover
            }
        }
    } );
} );

export interface TableRowProps {
    children?: React.ReactNode;
};

export default function TableRow( { children }: TableRowProps ): JSX.Element {
    const styles = useStyles();
    return (
        <T className={styles.root}>
            {children}
        </T>
    );
}
