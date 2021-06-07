/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: utils/escape-template-literals.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/12/2020
 * Description:
 ******************************************************************/

export default ( x: string ): string => {
    if( !x ) return '';
    return String( x ).replace( /([\\`$])/g, '\\$1' );
};
