/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/

import compile, { frags } from '@markdownx/compiler';
import qs from 'querystring';
import { FragsCache } from 'loader-utils';

export default function( this: FragsCache, source: string ): string {
    const { resourcePath, resourceQuery } = this;
    const query = qs.parse( this.resourceQuery.slice( 1 ) );

    if( query.pickId ) {
        const { content } = frags.get( query.pickId as string ) as FragsCache;
        // frags.delete( query.pickId as string );
        if( content ) return content;
        this.emitError( new Error( `Cannot pick content from "${query.pick}"` ) );
        return '';
    }

    const options = {
        path : resourcePath,
        query : resourceQuery,
        ...this.getOptions()
    };

    return compile( options )( source );
}
