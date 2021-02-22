/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: parser/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/02/2020
 * Description:
 ******************************************************************/
declare const _default: {
    code: {
        interpolate: (tpl: string, options: import("./code").ParseCodeTokenOptions) => {
            invocation: string;
            imports: string[];
        };
        token: (token: any, options: import("./code").ParseCodeTokenOptions) => {
            imports: string[];
            token: any;
        };
    };
};
export default _default;
