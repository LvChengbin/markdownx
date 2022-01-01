import compiler from '../src/index';

const str = `## Bubble \
### BubbleBase \
\`\`\`tsx {{{ <$\{MODULE} /> }}} \
interface Props { className?: string; }\
import React from 'react'; \
import BubbleBase from '../component/BubbleBase'; \
export default function SimpleBubble() {\
    return <div class='class-test'> < className='test' BubbleBase>你有什么问题？</BubbleBase> <div>\
}\
\`\`\`
`;

describe( 'compiler', () => {
    describe( 'compiler.', () => {
        it( 'processing "class"', () => {
            const result = compiler( {
                path : '',
                query : {}
            } )( str );
            expect( /className=&#39;class-test&#39;/.test( result ) ).toEqual( true );
        } );

        it( 'processing "className"', () => {
            const result = compiler( {
                path : '',
                query : {}
            } )( str );
            expect( /className\?: string;/.test( result ) ).toEqual( true );
            expect( /classNameName/.test( result ) ).toEqual( false );
        } );
    } );

    describe( 'HTML Tags', () => {
        it( 'Using <iframe /> tag', () => {
            const code = '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FQ0rPf5bXLBnX8uxOhKXId3%2FUntitled%3Fnode-id%3D0%253A1" allowfullscreen></iframe>';
            const result = compiler( { path : '', query : {} } )( code );

            expect( result ).toMatchSnapshot();
        } );
    } );
} );
