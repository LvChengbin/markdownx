/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: TableBody/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import * as React from 'react';
import { default as T } from '@material-ui/core/TableBody';

export interface TableBodyProps {
    children: React.ReactNode;
}

export default function TableBody( props: TableBodyProps ): JSX.Element {
    return (
        <T>
            {props.children}
        </T>
    );
}
