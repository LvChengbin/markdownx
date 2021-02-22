/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Toc/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/
import React from 'react';
export declare type TocProps = {
    toc: {
        text: React.ReactNode;
        level: string | number;
        anchor: string;
    }[];
};
export default function Toc(props: TocProps): React.ReactNode;
