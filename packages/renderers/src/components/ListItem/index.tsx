/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: ListItem/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/

import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { default as L } from '@material-ui/core/ListItem';

const useStyles = makeStyles( () => {
    return createStyles( {
        root : {
            display : 'list-item'
        }
    } );
} );

export interface ListItemProps {
    children: React.ReactNode;
};

export default function List( props: ListItemProps ): React.ReactNode {
    const styles = useStyles( props );
    const { children } = props;
    return ( <L className={styles.root}>{children}</L> );
}
