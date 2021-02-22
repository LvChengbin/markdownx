/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: utils/trans.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/
export declare const removeAttr: (x: string, attr: string) => string;
export declare const removeTags: (x: string, tag: string) => string;
export declare const removeSelfClosingTag: (x: string, tag: string) => string;
export declare const transTags: (x: string, tag: string, replacer: string) => string;
export declare const peelTags: (x: string, tag: string) => string;
