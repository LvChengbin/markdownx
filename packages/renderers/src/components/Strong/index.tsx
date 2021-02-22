/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Strong/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/12/2020
 * Description:
 ******************************************************************/

import React from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export type StrongProps = {
    raw: string;
    content: React.ReactNode;
};

const useStyles = makeStyles( ( theme: Theme ) => {
    return createStyles( {
        root : {
            fontWeight : theme.typography.fontWeightBold,
            margin : `${theme.spacing( 1 )}px 0`
        },
        notice : {
            color : theme.palette.info.dark
        },
        warning : {
            color : theme.palette.warning.dark
        },
        error : {
            color : theme.palette.error.dark
        }
    } );
} );

export default function Strong( props: StrongProps ): React.ReactNode {
    const styles = useStyles( props );
    const { raw, content } = props;

    const error = /^(!!!!|error|danger|严重警告|严重声明)/i.test( raw );
    const warning = /^(!!!|warn|caveat|警告|注意|声明|⚠️)/i.test( raw );
    const notice = /^(!!|notice|tip|info|hint|提示|贴示|小贴示|小提示)/i.test( raw );

    return (
        <Typography component="strong" className={ clsx(
            styles.root,
            error && styles.error,
            warning && styles.warning,
            notice && styles.notice
        ) }>{content}</Typography>
    );
}
