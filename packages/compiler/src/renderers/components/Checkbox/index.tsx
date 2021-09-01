/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Checkbox/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 09/01/2021
 * Description:
 ******************************************************************/

import React from 'react';
import { default as MUICheckbox } from '@material-ui/core/Checkbox';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';

const styles = createStyles( {
    root : {
        padding : '0 2px',
        '&:hover' : {
            backgroundColor : 'transparent'
        }
    }
} );

const Checkbox = withStyles( styles )( ( props: WithStyles<typeof styles > ) => {
    const { classes, ...x } = props;
    return <MUICheckbox size="small" className={classes.root} disableRipple readOnly {...x} />;
} );

export default Checkbox;
