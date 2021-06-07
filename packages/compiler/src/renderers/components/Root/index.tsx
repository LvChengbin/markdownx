/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Root/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/

import React from 'react';

export type RootProps = {
    children: React.ReactNode;
};

export default function Root( props: RootProps ): JSX.Element {
    return <div>{props.children}</div>;
}
