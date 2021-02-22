/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/index-counter.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/02/2020
 * Description:
 ******************************************************************/

let indexCounter = 0;

export default function increment(): string {
    const index = indexCounter++;
    return index + '';
}
