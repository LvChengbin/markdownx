/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: ListItem/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/

import { styled } from '@mui/material/styles';
import { default as MuiListItem, ListItemProps as MuiListItemProps } from '@mui/material/ListItem';

export interface ListItemProps extends MuiListItemProps {
    task?: boolean;
}

export default styled( MuiListItem, {
    shouldForwardProp : prop => prop !== 'task'
} )<ListItemProps>( ( { task, theme } ) => ( {
    display : 'list-item',
    paddingLeft : 0,
    ...( task && ( {
        listStyle : 'none',
        padding : theme.spacing( .5 )
    } ) )
} ) );
