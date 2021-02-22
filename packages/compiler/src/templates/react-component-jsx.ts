/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: templates/react-component-jsx.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/03/2020
 * Description:
 ******************************************************************/

import { ReactComponentTemplateOptions } from './options.interface';

export default ( options: ReactComponentTemplateOptions = {} ): string => `
import React from 'react';
${options.imports?.join( ';\n' )}
export default function ${options.name ?? ''}( props = {} ) {
    return (
        <div {...props}>
            ${options.toc ?? ''}
            ${options.content ?? ''}
        </div>
    );
}
`;

