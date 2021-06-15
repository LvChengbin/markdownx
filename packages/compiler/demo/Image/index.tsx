/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: demo/Image.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/15/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Image from '../../src/renderers/components/Image';
import A from './a.jpg';

export default function ImageDemo(): JSX.Element {

    return (
        <Box>
            <Typography component="div">
                <p>Stray birds of summer come to my window to sing and fly away. And yellow leaves of autumn, which have no songs, flutter and fall there with a sigh.</p>
                <p>O troupe of little vagrants of the world, leave your footprints in my words.</p>
                <Image src={A} title="Default styles" width={200} />
            </Typography>

            <Typography component="div">
                <Image src={A} title="Aligned to center" width={300} align="center" inline={false} />
            </Typography>

            <Typography component="div">
                <Image src={A} title="Float to the left" width={300} floatLeft />
                <p>Stray birds of summer come to my window to sing and fly away. And yellow leaves of autumn, which have no songs, flutter and fall there with a sigh.</p>
                <p>O troupe of little vagrants of the world, leave your footprints in my words.</p>
            </Typography>
        </Box>
    );
}
