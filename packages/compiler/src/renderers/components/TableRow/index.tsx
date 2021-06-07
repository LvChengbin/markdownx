/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: TableRow/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { default as T } from '@material-ui/core/TableRow';

const useStyles = makeStyles( ( { palette }: Theme ) => {
    return createStyles( {
        root : {
            '&:nth-of-type(odd)' : {
                backgroundColor : palette.action.hover
            }
        }
    } );
} );

export interface TableRowProps {
    children: React.ReactNode;
}

export default function TableRow( props: TableRowProps ): JSX.Element {
    const styles = useStyles();
    return (
        <T className={styles.root}>
            { props.children }
        </T>
    );
}
