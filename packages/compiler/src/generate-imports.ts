/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/generate-imports.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/03/2020
 * Description:
 ******************************************************************/

function split( str: string ): string[] {
    return str.split( ',' ).filter( x => x.trim() ).map( x => x.trim() );
}

function expend( exports: string ): string[] {
    const inbraces: string[] = [];
    const scattered: string[] = [];

    const rest = exports.replace( /{([^}]*)}/g, ( m: string, n: string ) => {
        n && inbraces.push( ...split( n ).map( x => `{${x}}` ) );
        return '';
    } );
    scattered.push( ...split( rest ) );

    return [ ...inbraces, ...scattered ];
}

export default ( imports: Set<[string, string?]> ): string[] => {
    const output: string[] = [];
    const include: Set<string> = new Set();
    const map: { [ key: string ]: Set<string> } = {};

    for( const item of imports ) {
        if( item.length === 1 ) {
            include.add( item[ 0 ] ); break;
        }

        const [ exports, file ] = item as [ string, string ];
        if( !map[ file ] ) map[ file ] = new Set();
        expend( exports ).map( x => map[ file ].add( x ) );
    }

    output.push( ...[ ...include ].map( x => `import '${x}';` ) );

    for( const file of Object.keys( map ) ) {
        output.push( ...[ ...map[ file ] ].map( x => `import ${x} from '${file}';` ) );
    }

    return Array.from( output );
};

