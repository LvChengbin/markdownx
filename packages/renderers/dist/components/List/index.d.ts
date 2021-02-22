/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: List/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/
import * as React from 'react';
export interface ListProps {
    children: React.ReactNode;
    ordered?: boolean;
}
export default function List(props: ListProps): React.ReactNode;
