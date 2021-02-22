/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Heading/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/
import React from 'react';
export interface HeadingProps {
    text: React.ReactNode;
    level: '1' | '2' | '3' | '4' | '5' | '6';
    anchor: string;
}
export default function Heading(props: HeadingProps): React.ReactNode;
