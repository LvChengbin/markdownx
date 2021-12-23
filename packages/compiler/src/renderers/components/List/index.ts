/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: List/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/

import { styled } from '@mui/material/styles';
import MuiList, { ListProps as MuiListProps } from '@mui/material/List';

export interface ListProps extends MuiListProps {
    ordered?: boolean;
}

export default styled( MuiList, {
    shouldForwardProp : prop => prop !== 'ordered'
} )<ListProps>( ( { ordered } ) => ( {
    listStyle : 'disc',
    listStylePosition : 'outside',
    paddingLeft : '1em',
    '& ul, & ol' : {
        paddingLeft : '2em'
    },
    listStyleType : ordered ? 'decimal' : 'disc'
} ) );
