/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: TableBody/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import React from 'react';
import { default as T } from '@material-ui/core/TableBody';

export interface TableBodyProps {
    children?: React.ReactNode;
}

export default function TableBody( { children }: TableBodyProps ): JSX.Element {
    return <T>{children}</T>;
}
