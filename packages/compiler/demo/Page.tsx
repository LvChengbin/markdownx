/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: demo/Page.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 12/20/2021
 * Description:
 ******************************************************************/

import React from 'react';
import { Route, BrowserRouter as Router, NavLink, Routes } from 'react-router-dom';
import Box, { BoxProps } from '@mui/material/Box';
import { default as MuiList } from '@mui/material/List';
import { default as MuiListItem } from '@mui/material/ListItem';
import Image from './Image';
import Blockquote from './Blockquote';
import Link from './Link';
import Code from './Code';
import Codespan from './Codespan';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Checkbox from './Checkbox';
import List from './List';
import Strong from './Strong';
import Html from './HTML';

const components = {
    Image,
    Blockquote,
    Link,
    Code,
    Codespan,
    Heading,
    Paragraph,
    List,
    Checkbox,
    Strong,
    Html
};

const navWidth = 256 / 8;

function Aside( props: BoxProps ): JSX.Element {
    return (
        <Box {...props}
            sx={{
                bgcolor : 'grey.100',
                borderRight : 1,
                borderColor : 'grey.300',
                position : 'fixed',
                left : 0,
                top : 0,
                bottom : 0,
                width : navWidth * 8,
                height : '100vh',
                overflow : 'auto'
            }}
        />
    );
}

interface NavItem {
    text?: string;
    component?: React.ReactNode;
    to?: string;
    content?: keyof typeof components;
};

/* interface MarkedNavItemProps {
    text: string;
}

function MarkedNavItem( props: MarkedNavItemProps ): JSX.Element {
    return (
        <>
            { // eslint-disable-next-line react/forbid-component-props
            }<StarRateIcon style={{ transform : 'scale(.75)' }} /> {props.text}
        </>
    );
}*/

const list: NavItem[] = [
    { text : 'Image' },
    { text : 'Blockquote' },
    { text : 'Html' },
    { text : 'Link' },
    { text : 'Code' },
    { text : 'Codespan' },
    { text : 'Heading' },
    { text : 'Paragraph' },
    { text : 'Strong' },
    { text : 'List' },
    { text : 'Checkbox' }
];

const to = ( item: NavItem ): string => {
    return item.to ? `/${item.to ?? ''}` : `/${item.text?.replace( /\s/g, '-' ) ?? ''}`;
};

export default function Page(): JSX.Element {

    return (
        <Router>
            <Box sx={{ pl : navWidth }}>
                <Aside>
                    <Box sx={{ fontSize : 24, p : 1 }}><span>Markdownx</span> React Components</Box>
                    <Box sx={{ color : 'grey.600', ml : 1 }}>version1.0.0</Box>
                    <Box component="hr" sx={{ border : 1, borderColor : 'grey.300', borderBottom : 0 }} />
                    <MuiList component="nav">
                        { list.map( ( item: NavItem ): JSX.Element => {
                            return (
                                <MuiListItem button component={NavLink} to={to( item )} key={to( item )}>
                                    { item.component ? <MuiListItem>{ item.component }</MuiListItem> : <MuiListItem>{item.text}</MuiListItem> }
                                </MuiListItem>
                            );
                        } ) }
                    </MuiList>
                </Aside>
                <Box sx={{ p : [ 3, 4 ] }}>
                    <Routes>
                        { list.map( ( item: NavItem ): JSX.Element => {
                            const Component = components[ ( item.content ?? item.text ) as keyof typeof components ];
                            return <Route path={to( item )} key={to( item )} element={<Component />} />;
                        } ) }
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}
