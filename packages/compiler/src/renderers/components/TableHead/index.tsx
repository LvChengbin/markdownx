/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: TableHead/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import React from 'react';
// import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { default as T } from '@material-ui/core/TableHead';

const useStyles = makeStyles( () => {
    return createStyles( {
        root : {
            // backgroundColor : palette.grey[ 500 ]
        }
    } );
} );

export interface TableHeadProps {
    children?: React.ReactNode;
}

export default function TableHead( { children }: TableHeadProps ): JSX.Element {

    const styles = useStyles();

    return (
        <T className={styles.root}>
            {children}
        </T>
    );
}
