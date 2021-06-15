/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Paragraph/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2020
 * Description:
 ******************************************************************/

import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( ( { spacing }: Theme ) => {
    return createStyles( {
        root : {
            marginTop : spacing( 2 ),
            lineHeight : 2,
            /**
             * clearfix
             */
            overflow : 'auto'
        }
    } );
} );

export interface ParagraphProps {
    children?: React.ReactNode;
};

export default function Paragraph( { children }: ParagraphProps ): JSX.Element {
    const styles = useStyles();

    return (
        <Typography variant="body1" className={styles.root}>
            {children}
        </Typography>
    );
}
