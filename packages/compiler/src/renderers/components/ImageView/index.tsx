/******************************************************************
 * created by lqy at 06/16/2021
 ******************************************************************/

import React from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles, createStyles } from '@material-ui/styles';

export interface ImageViewProps {
    children: React.ReactElement;
}

type ChildrenProps = React.DOMAttributes<Element> & {
    ref: React.RefObject<HTMLImageElement>;
    style: React.CSSProperties;
} ;

const useStyles = makeStyles( () => {
    return createStyles( {
        viewWrapper : {
            border : 'none',
            position : 'absolute',
            left : 0,
            right : 0,
            top : 0,
            bottom : 0,
            overflow : 'auto'
        },
        img : {
            transition : 'all 0.6s ease-in-out',
            cursor : 'zoom-out'
        }
    } );
} );

export default function ImageView( props: ImageViewProps ): JSX.Element {
    const { children } = props;
    const styles = useStyles( props );
    const [ open, setOpen ] = React.useState( false );
    const ref = React.createRef<HTMLImageElement>();

    const handleShow = (): void => {
        setOpen( true );
    };

    const handleClose = (): void => {
        setOpen( false );
    };
    
    const [ style, setStyle ] = React.useState<React.CSSProperties>();

    const onInit = React.useCallback( (): void => {
        const element = ref.current;
        if( !element ) return;

        const { left, top } = element.getBoundingClientRect();
        const { width } = element;

        setStyle( {
            width,
            transform : `translate( ${left}px, ${top}px )`
        } );
    }, [] );

    const onEntered = React.useCallback( (): void => {
        const element = ref.current;
        if( !element ) return;

        const { naturalWidth, naturalHeight } = element;
        setStyle( {
            width : naturalWidth,
            transform : `translate( ${ ( window.innerWidth - naturalWidth ) / 2 }px, ${ ( window.innerHeight - naturalHeight ) / 2 }px )`
        } );
    }, [] );

    const newChildren = React.useCallback( (): React.ReactNode => {
        if( !React.Children.only( children ) ) return children;

        return React.cloneElement<ChildrenProps>( children, {
            ref,
            style : {
                'cursor' : 'zoom-in'
            },
            onClick(): void {
                handleShow();
                onInit();
            }
        } );
    }, [] )

    return <>
        <Modal
            open={open}
            onClose={handleClose}
            BackdropProps={{
                timeout : 1000
            }}
        >
            <Fade timeout={{
                exit : 1000,
                enter : 400
            }} in={open} onEntered={onEntered} onExiting={onInit}
            >
                <div className={styles.viewWrapper} onClick={handleClose}>
                    <img style={style} className={styles.img} src={children?.props.src} />
                </div>
            </Fade>
        </Modal>
        <>{ newChildren() }</>
    </>
}
