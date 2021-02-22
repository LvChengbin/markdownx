/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Table/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { default as T } from '@material-ui/core/Table';

const useStyles = makeStyles( ( theme: Theme ) => {
    return createStyles( {
        root : {
            marginTop : theme.spacing( 2 )
        }
    } );
} );

export interface TableProps {
    children: React.ReactNode;
}

export default function Table( props: TableProps ): React.ReactNode {
    const styles = useStyles();

    return (
        <T className={styles.root}>
            {props.children}
        </T>
    );
}
