/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: docs/theme.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/

import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

export default createTheme( {
    palette : {
        common : {
            black : '#000',
            white : '#FFF'
        },
        primary : teal,
        secondary : {
            main : '#FFF'
        },
        text : {
            primary : 'rgba( 51, 51, 51, .87 )',
            secondary : 'rgba( 51, 51, 51, .54 )',
            disabled : 'rgba( 51, 51, 51, .38 )'
        },
        action : {
            hoverOpacity : 0.2,
            selectedOpacity : 0.08,
            disabledOpacity : 0.9,
            disabledBackground : '#CCC',
            focus : '#888',
            focusOpacity : 0.16,
            activatedOpacity : 0.6
        },
        grey : {
            50 : '#fafafa',
            100 : '#f5f5f5',
            200 : '#eeeeee',
            300 : '#e0e0e0',
            400 : '#bdbdbd',
            500 : '#9e9e9e',
            600 : '#757575',
            700 : '#616161',
            800 : '#424242',
            900 : '#212121',
            A100 : '#f5f5f5',
            A200 : '#eeeeee',
            A400 : '#bdbdbd',
            A700 : '#616161'
        }
    },
    typography : {
        htmlFontSize : 16,
        fontSize : 14,
        fontWeightLight : 300,
        fontWeightRegular : 400,
        fontWeightMedium : 500,
        fontWeightBold : 700,
        fontFamily : [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join( ',' ),
        h1 : {
            fontWeight : 700,
            fontSize : '1.75rem',
            lineHeight : 2.167
        },
        h2 : {
            fontSize : '1.4rem',
            fontWeight : 700,
            lineHeight : 2.2
        },
        h3 : {
            fontSize : '1.25rem',
            lineHeight : 2.167
        },
        h4 : {
            fontSize : '1.2rem',
            lineHeight : 2.235
        },
        h5 : {
            fontSize : '1.125rem',
            fontWeight : 500,
            lineHeight : 2.334
        },
        h6 : {
            fontSize : '1rem',
            fontWeight : 400,
            lineHeight : 2.6
        }
    }
    // overrides : {
    //     MuiSelect : {
    //         select : {
    //             cursor : 'pointer',
    //             '&:focus' : {
    //                 backgroundColor : 'none'
    //             }
    //         }
    //     },
    //     MuiButton : {
    //         root : {
    //             textTransform : 'none',
    //             boxShadow : 'none',
    //             '&:hover' : {
    //                 boxShadow : 'none'
    //             }
    //         },
    //         contained : {
    //             boxShadow : 'none',
    //             '&:hover' : {
    //                 boxShadow : 'none'
    //             }
    //         }
    //     }
    // }
} );
