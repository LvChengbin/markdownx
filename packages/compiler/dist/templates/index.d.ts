/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: templates/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/03/2020
 * Description:
 ******************************************************************/
export * from './options.interface';
declare const _default: {
    tsx: (options?: import("./options.interface").ReactComponentTemplateOptions) => string;
    jsx: (options?: import("./options.interface").ReactComponentTemplateOptions) => string;
};
export default _default;
