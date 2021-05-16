import compiler from '../src/index';

const str = "## Bubble \
### BubbleBase \
```tsx {{{ <${MODULE} /> }}} \
interface Props { className?: string; }\
import React from 'react'; \
import BubbleBase from '../component/BubbleBase'; \
export default function SimpleBubble() {\
    return <div class='class-test'> < className='test' BubbleBase>你有什么问题？</BubbleBase> <div>\
}\
```"

describe( 'compiler', () => {
    describe( 'compiler.', () => {
        it( 'processing "class"', () => {
            const result = compiler( {
                path: '',
                query: {}
            } )( str )
            expect( /className=&#39;class-test&#39;/.test( result ) ).toEqual( true )
        } );

        it( 'processing "className"', () => {
            const result = compiler( {
                path: '',
                query: {}
            } )( str )
            expect( /className\?\: string;/.test( result ) ).toEqual( true )
            expect( /classNameName/.test( result ) ).toEqual( false )
        } );
    } );
} );