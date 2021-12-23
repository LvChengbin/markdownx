/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Checkbox/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 09/01/2021
 * Description:
 ******************************************************************/

import React from 'react';
import { default as MUICheckbox, CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

export default styled(
    ( props: CheckboxProps ) => <MUICheckbox size="small" {...props} disableRipple readOnly />
)( {
    padding : '0 2px',
    '&:hover' : {
        backgroundColor : 'transparent'
    }
} );
