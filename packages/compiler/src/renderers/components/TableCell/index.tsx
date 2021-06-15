/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: TableCell/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import React from 'react';
// import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { default as T } from '@material-ui/core/TableCell';

const useStyles = makeStyles( () => {
    return createStyles( {
        root : {
            // border : `solid 1px ${palette.grey[ 300 ]}`
        }
    } );
} );

export type TableCellProps = React.PropsWithChildren<{
    align?: 'left' | 'right' | 'center';
}>;

export default function TableCell( { children }: TableCellProps ): JSX.Element {
    const styles = useStyles();
    return (
        <T className={styles.root}>
            { children }
        </T>
    );
}
