/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: templates/options.interface.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 02/20/2021
 * Description:
 ******************************************************************/

export interface ReactComponentTemplateOptions {
    name?: string;
    toc?: { text: string; level: number }[];
    content?: string;
    imports?: string[];
}
