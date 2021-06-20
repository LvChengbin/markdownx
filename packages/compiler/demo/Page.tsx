/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: Documentation/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 03/20/2021
 * Description:
 ******************************************************************/

import React from 'react';
import { Route, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import StarRateIcon from '@material-ui/icons/StarRate';
import Image from './Image';

const components = {
    Image
};

const useStyles = makeStyles( ( { palette, spacing }: Theme ) => {

    const navWidth = '260px';
    const border = `solid 1px ${palette.grey[ 300 ]}`;

    return createStyles( {
        root : {
            paddingLeft : navWidth
        },
        aside : {
            background : palette.grey[ 100 ],
            borderRight : border,
            position : 'fixed',
            left : 0,
            top : 0,
            bottom : 0,
            width : navWidth,
            height : '100vh',
            overflow : 'auto'
        },
        hr : {
            border,
            borderBottom : 0
        },
        nav : {},
        title : {
            padding : spacing( 2 ),
            borderBottom : border
        },
        logo : {
            fontSize : '24px',
            padding : spacing( 1 )
        },
        tm : {},
        version : {
            color : palette.grey[ 600 ],
            marginLeft : spacing( 1 )
        },
        main : {
            padding : `${spacing( 3 )} ${spacing( 4 )}`
        }
    } );
} );

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
    { text : 'Image' }
];

const to = ( item: NavItem ): string => {
    return item.to ? `/${item.to ?? ''}` : `/${item.text?.replace( /\s/g, '-' ) ?? ''}`;
};

export default function Documentation(): JSX.Element {
    const styles = useStyles();

    return (
        <Router>
            <Box className={styles.root}>
                <Box className={styles.aside}>
                    <Box className={styles.logo}><span className={styles.tm}>Markdownx</span> React Components</Box>
                    <Box className={styles.version}>version1.0.0</Box>
                    <hr className={styles.hr} />
                    <List className={styles.nav} component="nav">
                        { list.map( ( item: NavItem ): JSX.Element => {
                            return (
                                <ListItem button component={NavLink} to={to( item )} key={to( item )} activeClassName="Mui-selected">
                                    { item.component ? <ListItem>{ item.component }</ListItem> : <ListItem>{item.text}</ListItem> }
                                </ListItem>
                            );
                        } ) }
                    </List>
                </Box>
                <Box className={styles.main}>
                    <Switch>
                        { list.map( ( item: NavItem ): JSX.Element => {
                            const Component = components[ ( item.content ?? item.text ) as keyof typeof components ];
                            return (
                                <Route path={to( item )} key={to( item )}>
                                    <Component />
                                </Route>
                            );
                        } ) }
                    </Switch>
                </Box>
            </Box>
        </Router>
    );
}
