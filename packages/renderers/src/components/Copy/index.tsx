/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Copy/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import React, { useRef } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FileCopyIcon from '@material-ui/icons/FileCopy';

export interface CopyProps {
    className?: string;
    content?: string;
};

const useStyles = makeStyles( () => {
    return createStyles( {
        root : {
            display : 'inline-block',
            cursor : 'pointer'
        },
        input : {
            opacity : 0,
            width : 0,
            height : 0,
            position : 'fixed',
            left : '-99999px',
            top : '-99999px'
        },
        icon : {
            fontSize : 'inherit'
        }
    } );
} );

export default function Copy( props: CopyProps ): React.ReactNode {
    const styles = useStyles( props );
    const { content, className } = props;
    const input = useRef( null );

    const handleCopy = (): void => {
        input?.current?.select?.();
        document.execCommand( 'copy' );
    };

    return (
        <div className={clsx( styles.root, className )}>
            <FileCopyIcon fontSize="small" onClick={handleCopy} className={styles.icon} />
            <textarea className={styles.input} ref={input} value={content} readOnly></textarea>
        </div>
    );
}
