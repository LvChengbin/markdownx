/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/index.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/11/2020
 * Description:
 ******************************************************************/
import { ReactComponentTemplateOptions } from './templates';
import { Renderer } from './interfaces';
export * from './interfaces';
export * from './frags';
export interface CompileOptions {
    path: string;
    query: {
        [key: string]: string;
    };
    type?: string;
    template?: (options: ReactComponentTemplateOptions) => string;
    prepend?: string;
    renderers?: Record<string, Renderer>;
}
declare const _default: (options: CompileOptions) => (source: string) => string;
export default _default;
