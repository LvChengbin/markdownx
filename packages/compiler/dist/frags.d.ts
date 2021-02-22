/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/frags.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/02/2020
 * Description:
 ******************************************************************/
export interface FragsCache {
    content: string;
    path: string;
    id: string | number;
    moduleId: string;
    [key: string]: unknown;
}
export declare const frags: Map<string, FragsCache>;
