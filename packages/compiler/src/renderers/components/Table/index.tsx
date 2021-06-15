/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Table/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { default as T, TableProps as TableBaseProps } from '@material-ui/core/Table';

const useStyles = makeStyles( ( { spacing }: Theme ) => {
    return createStyles( {
        root : {
            marginTop : spacing( 2 )
        }
    } );
} );

export type TableProps = TableBaseProps;

export default function Table( { children, ...x }: TableProps ): JSX.Element {
    const styles = useStyles();

    return (
        <T className={styles.root} {...x}>
            {children}
        </T>
    );
}
