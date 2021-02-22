/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Paragraph/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2020
 * Description:
 ******************************************************************/

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( ( theme: Theme ) => {
    return createStyles( {
        root : {
            marginTop : theme.spacing( 2 ),
            lineHeight : 2
        }
    } );
} );

export interface ParagraphProps {
    children?: React.ReactNode;
};

export default function Paragraph( props: ParagraphProps ): React.ReactNode {
    const { children } = props;
    const styles = useStyles( props );

    return (
        <Typography variant="body1" className={styles.root}>
            {children}
        </Typography>
    );
}
