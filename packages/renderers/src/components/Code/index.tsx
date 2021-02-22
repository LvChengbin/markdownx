/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Code/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/

import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Prism } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Copy from '../Copy';

export interface CodeProps {
    code: string;
    lang?: string;
    colorscheme?: string;
    component?: React.ReactNode;
};

const useStyles = makeStyles( ( theme: Theme ) => {
    return createStyles( {
        root : {
            position : 'relative',
            marginTop : theme.spacing( 2 )
        },
        block : {
            padding : theme.spacing( 2 ),
            background : theme.palette.grey[ 200 ],
            borderRadius : theme.shape.borderRadius,
            [ theme.breakpoints.down( 'md' ) ] : {
                padding : theme.spacing( 1 )
            }
        },
        btnbox : {
            position : 'absolute',
            right : theme.spacing( 1.5 ),
            top : theme.spacing( 1.5 ),
            color : theme.palette.common.white
        },
        btn : {
            opacity : .6,
            cursor : 'pointer',
            fontSize : '14px',
            '&:hover' : {
                opacity : 1
            }
        },
        demo : {
            display : 'flex',
            flexWrap : 'wrap',
            justifyContent : 'center',
            alignItems : 'center',
            padding : theme.spacing( 4, 2 ),
            border : `solid 1px ${theme.palette.grey[ 300 ]}`,
            borderRadius : theme.shape.borderRadius,
            marginBottom : theme.spacing( 2 ),
            background : theme.palette.common.white,
            '&>*' : {
                margin : theme.spacing( 1 )
            },
            [ theme.breakpoints.down( 'md' ) ] : {
                padding : theme.spacing( 2, 1 )
            }
        },
        code : {
            margin : 0,
            position : 'relative',
            '& pre' : {
                margin : '0!important'
            }
        }
    } );
} );

export default function Code( props: CodeProps ): React.ReactNode {
    const styles = useStyles( props );
    const { lang, code, component } = props;

    return (
        <div className={ clsx( styles.root, component && styles.block ) }>
            { component && (
                <div className={styles.demo}>
                    {component}
                </div>
            ) }
            <div className={styles.code}>
                <div className={styles.btnbox}>
                    <Copy content={code} className={styles.btn} />
                </div>
                <Prism language={lang} style={okaidia}>
                    {code}
                </Prism>
            </div>
        </div>
    );
}
