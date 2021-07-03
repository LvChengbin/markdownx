/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: utils/joint-attrs.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 07/04/2021
 * Description:
 ******************************************************************/

export default ( attrs: Record<string, string | null | undefined | number> ): string => {
    const output: string[] = [];

    Object.keys( attrs ).forEach( ( name: string ): void => {
        const value = attrs[ name ];
        if( value !== null && value !== undefined ) {
            output.push( `${name}="${value}"` );
        }
    } );

    return output.join( ' ' );
};
