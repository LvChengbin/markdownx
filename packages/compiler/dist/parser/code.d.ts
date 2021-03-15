/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/parse.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/02/2020
 * Description:
 ******************************************************************/
import { Tokens } from 'marked';
export declare type ParseCodeTokenOptions = {
    moduleId: string;
};
/**
 * Interpolates expression templates and gather imports from them
 *
 */
declare function interpolate(tpl: string, options: ParseCodeTokenOptions): {
    invocation: string;
    imports: string[];
};
/**
 * Parses the "code" token, translates invocation template code to the real code
 * e.g. if the moduleId is "M1"
 *  <${MODULE} /> --> <M1 /> with import M1
 *  <${MODULE.fn} /> -> <M1.fn /> with import M1
 *  <${MODULE.EXPORTS.fn} /> -> <M1_fn /> with import { fn as M1_fn }
 *  <${MODULE.EXPORTS.fn1} /> <${MODULE.EXPORTS.fn2} /> -> <M1_fn1 /> <M1_fn2 /> with import { fn1 as M1_fn1, fn2 as M1_fn2 }
 *
 *
 * @param {Marked.Token} token
 * @param {ParseCodeTokenOptions} options
 */
declare function token(token: Tokens.Code, options: ParseCodeTokenOptions): {
    imports: string[];
    token: Tokens.code & {
        invocation: string;
    };
};
declare const _default: {
    interpolate: typeof interpolate;
    token: typeof token;
};
export default _default;
