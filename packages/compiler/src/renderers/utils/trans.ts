/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: utils/trans.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import { attributeReg, tagReg, openTagReg, closeTagReg, selfClosingTagReg } from './regexps';

const r = ( input: string, reg: RegExp, replacement = '' ): string => input.replace( reg, replacement );

export const removeAttr = ( x: string, attr: string ): string => r( x, attributeReg( attr ) );
export const removeTags = ( x: string, tag: string ): string => r( x, tagReg( tag ) );
export const removeSelfClosingTag = ( x: string, tag: string ): string => r( x, selfClosingTagReg( tag ) );

export const transTags = ( x: string, tag: string, replacer: string ): string => {
    return x.replace( openTagReg( tag ), ( m, n ) => n ? `<${replacer}${n}>` : `<${replacer}>` ).replace( closeTagReg( tag ), `</${replacer}>` );
};

export const peelTags = ( x: string, tag: string ): string => {
    return x.replace( openTagReg( tag ), '' ).replace( closeTagReg( tag ), '' );
};
