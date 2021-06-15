/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: utils/parse-json.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/13/2021
 * Description:
 ******************************************************************/

export default function parse( data: string ): ReturnType<JSON[ 'parse' ]> {
    return ( new Function( `return ( ${data} )` ) )();
};
