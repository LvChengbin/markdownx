/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Documentation/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/

import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import IndexMDX from '../markdown';

const useStyles = makeStyles( ( { spacing }: Theme ) => {
    return createStyles( {
        root : {
            padding : `${spacing( 3 )}px ${spacing( 4 )}px`
        }
    } );
} );

export default function Documentation(): JSX.Element {
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <IndexMDX />
        </div>
    );
}
