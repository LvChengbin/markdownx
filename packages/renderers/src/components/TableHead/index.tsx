/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: TableHead/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { default as T } from '@material-ui/core/TableHead';

const useStyles = makeStyles( ( theme: Theme ) => {
    return createStyles( {
        root : {
            backgroundColor : theme.palette.grey[ 500 ]
        }
    } );
} );

export interface TableHeadProps {
    children: React.ReactNode;
}

export default function TableHead( props: TableHeadProps ): React.ReactNode {

    const styles = useStyles();

    return (
        <T className={styles.root}>
            { props.children }
        </T>
    );
}
