/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Link/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 07/03/2021
 * Description:
 ******************************************************************/

import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { default as L } from '@material-ui/core/Link';


const useStyles = makeStyles( () => {
    return createStyles( {
        root : {
        }
    } );
} );

export interface LinkProps {
    href: string;
    title?: string;
    text?: string;
};

export default function Link( props: LinkProps ): JSX.Element {
    const styles = useStyles();

    const {
        href,
        title = new URL( href, location.href ).href,
        text = title
    } = props;

    const targetURL = new URL( href, location.href );
    const currentURL = new URL( location.href );

    targetURL.searchParams.sort();
    currentURL.searchParams.sort();

    targetURL.hash = '';
    currentURL.hash = '';

    return (
        <L className={styles.root}
            href={href}
            title={title}
            target={targetURL.href !== currentURL.href ? '_blank' : '_self'}
        >
            {text}
        </L>
    );
}
