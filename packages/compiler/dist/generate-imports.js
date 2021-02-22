"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/generate-imports.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/03/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function split(str) {
    return str.split(',').filter(x => x.trim()).map(x => x.trim());
}
function expend(exports) {
    const inbraces = [];
    const scattered = [];
    const rest = exports.replace(/{([^}]*)}/g, (m, n) => {
        n && inbraces.push(...split(n).map(x => `{${x}}`));
        return '';
    });
    scattered.push(...split(rest));
    return [...inbraces, ...scattered];
}
exports.default = (imports) => {
    const output = [];
    const include = new Set();
    const map = {};
    for (const item of imports) {
        if (item.length === 1) {
            include.add(item[0]);
            break;
        }
        const [exports, file] = item;
        if (!map[file])
            map[file] = new Set();
        expend(exports).map(x => map[file].add(x));
    }
    output.push(...[...include].map(x => `import '${x}';`));
    for (const file of Object.keys(map)) {
        output.push(...[...map[file]].map(x => `import ${x} from '${file}';`));
    }
    return Array.from(output);
};
