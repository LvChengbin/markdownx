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

export interface ListItemProps {
    task: boolean;
    children?: React.ReactNode;
}

export type ListItemStyleProps = ListItemProps;

const useStyles = makeStyles( () => {
    return createStyles( {
        root : {
            display : 'list-item',
            paddingLeft : 0,
            listStyle : ( { task }: ListItemStyleProps ) => task ? 'none' : 'inherit'
        },
        inner : {
            display : 'flex'
        }
    } );
} );

export default function List( { children, task }: ListItemProps ): JSX.Element {
    const styles = useStyles( { task } );
    return (
        <L className={styles.root}>
            <div className={styles.inner}>{children}</div>
        </L>
    );
}
