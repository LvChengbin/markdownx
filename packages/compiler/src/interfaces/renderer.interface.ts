/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/renderer.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2020
 * Description:
 ******************************************************************/


export interface Renderer {
    imports: [ string, string ][];
    exec: ( ...args: any[] ) => string; // eslint-disable-line @typescript-eslint/no-explicit-any
};
