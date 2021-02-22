/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Code/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/
import React from 'react';
export interface CodeProps {
    code: string;
    lang?: string;
    colorscheme?: string;
    component?: React.ReactNode;
}
export default function Code(props: CodeProps): React.ReactNode;
