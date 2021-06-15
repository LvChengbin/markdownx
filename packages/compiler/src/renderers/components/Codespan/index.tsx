/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Codespan/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2020
 * Description:
 ******************************************************************/


import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';

export interface CodespanProps {
    code?: string;
};

const useStyles = makeStyles( ( { palette }: Theme ) => {
    return createStyles( {
        root : {
            color : palette.primary.main,
            background : palette.grey[ 200 ],
            fontSize : 14,
            borderRadius : 3,
            padding : '2px 4px',
            margin : 4
        }
    } );
} );

export default function Codespan( props: CodespanProps ): JSX.Element {
    const styles = useStyles( props );
    const { code } = props;

    return (
        <span className={styles.root}
            dangerouslySetInnerHTML={{ __html : code ?? '' }}
        />
    );
}
