/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: ListItem/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/

import React from 'react';
import clsx from 'clsx';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { default as L } from '@material-ui/core/ListItem';

export interface ListItemProps {
    task: boolean;
    children?: React.ReactNode;
}

const useStyles = makeStyles( ( { spacing }: Theme ) => {
    return createStyles( {
        root : {
            display : 'list-item',
            paddingLeft : 0
        },
        task : {
            listStyle : 'none',
            padding : spacing( .5 )
        }
    } );
} );

export default function List( { children, task }: ListItemProps ): JSX.Element {
    const styles = useStyles();
    return (
        <L className={clsx( styles.root, task && styles.task )}>
            {children}
        </L>
    );
}
