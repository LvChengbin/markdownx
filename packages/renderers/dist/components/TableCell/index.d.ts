/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: TableCell/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/
import * as React from 'react';
export interface TableCellProps {
    children: React.ReactNode;
    align?: 'left' | 'right' | 'center';
}
export default function TableCell(props: TableCellProps): React.ReactNode;
