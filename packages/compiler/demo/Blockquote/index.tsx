/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Blockquote/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 07/03/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@material-ui/core/Box';
import Blockquote from '../../src/renderers/components/Blockquote';

export default function BlockquoteDemo(): JSX.Element {
    return (
        <Box component="div">
            <Blockquote>
                <p>Stray birds of summer come to my window to sing and fly away. And yellow leaves of autumn, which have no songs, flutter and fall there with a sigh.</p>
            </Blockquote>
        </Box>
    );
}
