/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Codespan/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2020
 * Description:
 ******************************************************************/


import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface CodespanProps {
    code?: string;
};

const useStyles = makeStyles( ( theme: Theme ) => {
    return createStyles( {
        root : {
            color : theme.palette.primary.main,
            background : theme.palette.grey[ 200 ],
            fontSize : 14,
            borderRadius : 3,
            padding : '2px 4px',
            margin : 4
        }
    } );
} );

export default function Codespan( props: CodespanProps ): React.ReactNode {
    const styles = useStyles( props );
    const { code } = props;

    return (
        <span className={styles.root}
            dangerouslySetInnerHTML={{ __html : code ?? '' }}
        />
    );
}
