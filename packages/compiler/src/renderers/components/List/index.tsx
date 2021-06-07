/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: List/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/

import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';
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

export interface ListProps {
    children: React.ReactNode;
    ordered?: boolean;
};

export default function List( props: ListProps ): JSX.Element {
    const styles = useStyles( props );
    const { children, ordered } = props;
    return ( <L className={clsx( styles.root, ordered && styles.ordered )}>{children}</L> );
}
