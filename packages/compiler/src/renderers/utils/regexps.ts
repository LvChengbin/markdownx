/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: utils/regexps.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 04/14/2020
 * Description:
 ******************************************************************/

import escape from 'escape-string-regexp';

const j = ( src: string | string[] ): string => {
    if( !Array.isArray( src ) ) return escape( src as string );
    return ( src as string[] ).map( x => escape( x ) ).join( '|' );
};

export const attributeReg = ( x: string ): RegExp => new RegExp( `(?<=<[^>]+?)(\\s+(${j( x )})(=("|').*?\\4)?)`, 'ig' );
export const tagReg = ( x: string ): RegExp => new RegExp( `<(${j( x )})([\\s]+[^>]*)?>[\\s\\S]*?(<\\/\\1>|$)`, 'ig' );
export const openTagReg = ( x: string ): RegExp => new RegExp( `<(?:${j( x )})([\\s][^>]*)?>`, 'ig' );
export const closeTagReg = ( x: string ): RegExp => new RegExp( `<\\/(${j( x )})>`, 'ig' );
export const selfClosingTagReg = ( x: string ): RegExp => new RegExp( `<${j( x )}[\\s]+[^>]*>`, 'ig' );
