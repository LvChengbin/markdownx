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

const useStyles = makeStyles( ( { spacing, palette, shape, breakpoints }: Theme ) => {
    return createStyles( {
        root : {
            position : 'relative',
            marginTop : spacing( 2 )
        },
        block : {
            padding : spacing( 2 ),
            background : palette.grey[ 200 ],
            borderRadius : shape.borderRadius,
            [ breakpoints.down( 'md' ) ] : {
                padding : spacing( 1 )
            }
        },
        btnbox : {
            position : 'absolute',
            right : spacing( 1.5 ),
            top : spacing( 1.5 ),
            color : palette.common.white
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
            padding : spacing( 4, 2 ),
            border : `solid 1px ${palette.grey[ 300 ]}`,
            borderRadius : shape.borderRadius,
            marginBottom : spacing( 2 ),
            background : palette.common.white,
            '&>*' : {
                margin : spacing( 1 )
            },
            [ breakpoints.down( 'md' ) ] : {
                padding : spacing( 2, 1 )
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

export default function Code( props: CodeProps ): JSX.Element {
    const styles = useStyles( props );
    const { lang, code, component } = props;

    return (
        <div className={clsx( styles.root, component && styles.block )}>
            { !!component && (
                <div className={styles.demo}>
                    {component}
                </div>
            ) }
            <div className={styles.code}>
                <div className={styles.btnbox}>
                    <Copy content={code} className={styles.btn} />
                </div>
                {/* eslint-disable-next-line react/forbid-component-props */}
                <Prism language={lang} style={okaidia}>
                    {code}
                </Prism>
            </div>
        </div>
    );
}
