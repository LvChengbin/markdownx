/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: List/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 12/21/2021
 * Description:
 ******************************************************************/

import React from 'react';
import Box from '@mui/material/Box';
import List from '../../src/renderers/components/List';
import ListItem from '../../src/renderers/components/ListItem';

export default function ListDemo(): JSX.Element {
    return (
        <Box component="div">
            <List>
                <ListItem>Unordered List Item 1</ListItem>
                <ListItem>Unordered List Item 2</ListItem>
                <ListItem>Unordered List Item 3</ListItem>
                <ListItem>Unordered List Item 4</ListItem>
                <ListItem>Unordered List Item 5</ListItem>
                <ListItem>Unordered List Item 6</ListItem>
                <ListItem>Unordered List Item 7</ListItem>
                <ListItem>Unordered List Item 8</ListItem>
                <ListItem>Unordered List Item 9</ListItem>
                <ListItem>Unordered List Item 10</ListItem>
            </List>

            <List ordered>
                <ListItem>Ordered List Item 1</ListItem>
                <ListItem>Ordered List Item 2</ListItem>
                <ListItem>Ordered List Item 3</ListItem>
                <ListItem>Ordered List Item 4</ListItem>
                <ListItem>Ordered List Item 5</ListItem>
                <ListItem>Ordered List Item 6</ListItem>
                <ListItem>Ordered List Item 7</ListItem>
                <ListItem>Ordered List Item 8</ListItem>
                <ListItem>Ordered List Item 9</ListItem>
                <ListItem>Ordered List Item 10</ListItem>
            </List>

            <List ordered>
                <ListItem task>Ordered List Item 1</ListItem>
            </List>
        </Box>
    );
}
