/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/renderers/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/renderers/14/renderers/2020
 * Description:
 ******************************************************************/
import code from './renderers/code';
import codespan from './renderers/codespan';
import container from './renderers/container';
import heading from './renderers/heading';
import list from './renderers/list';
import listitem from './renderers/listitem';
import paragraph from './renderers/paragraph';
import root from './renderers/root';
import strong from './renderers/strong';
import table from './renderers/table';
import toc from './renderers/toc';
declare const _default: {
    code: typeof code;
    codespan: typeof codespan;
    container: typeof container;
    heading: typeof heading;
    list: typeof list;
    listitem: typeof listitem;
    paragraph: typeof paragraph;
    root: typeof root;
    strong: typeof strong;
    table: typeof table;
    toc: typeof toc;
};
export default _default;
