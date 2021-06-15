/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: List/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/

import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/styles';
import { default as L } from '@material-ui/core/List';

const useStyles = makeStyles( () => {
    return createStyles( {
        root : {
            listStyle : 'disc',
            listStylePosition : 'inside'
        },
        ordered : {
            listStyleType : 'decimal'
        }
    } );
} );

export type ListProps = React.PropsWithChildren<{
    ordered?: boolean;
}>;

export default function List( { children, ordered }: ListProps ): JSX.Element {
    const styles = useStyles();
    return ( <L className={clsx( styles.root, ordered && styles.ordered )}>{children}</L> );
}
