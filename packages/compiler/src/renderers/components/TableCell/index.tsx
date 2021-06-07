/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: TableCell/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { default as T } from '@material-ui/core/TableCell';

const useStyles = makeStyles( ( { palette }: Theme ) => {
    return createStyles( {
        root : {
            border : `solid 1px ${palette.grey[ 300 ]}`
        }
    } );
} );

export interface TableCellProps {
    children: React.ReactNode;
    align?: 'left' | 'right' | 'center';
}

export default function TableCell( props: TableCellProps ): JSX.Element {
    const styles = useStyles();
    return (
        <T className={styles.root}>
            { props.children }
        </T>
    );
}
