/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: ListItem/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/

import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { default as L } from '@material-ui/core/ListItem';

const useStyles = makeStyles( () => {
    return createStyles( {
        root : {
            display : 'list-item',
            paddingLeft : 0
        }
    } );
} );

export interface ListItemProps {
    children?: React.ReactNode;
}

export default function List( { children }: ListItemProps ): JSX.Element {
    const styles = useStyles();
    return ( <L className={styles.root}>{children}</L> );
}
