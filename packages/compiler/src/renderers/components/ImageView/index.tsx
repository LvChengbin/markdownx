/******************************************************************
 * created by lqy at 06/16/2021
 ******************************************************************/

import React from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles, createStyles } from '@material-ui/styles';

export interface PreviewProps {
    children?: React.ReactElement;
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

export default function ImageView( props: PreviewProps ): JSX.Element {
    const { children } = props;
    const styles = useStyles( props );
    const [ open, setOpen ] = React.useState( false );

    const handleShow = (): void => {
        setOpen( true );
    };

    const handleClose = (): void => {
        setOpen( false );
    };

    const wraperChildren = (): React.ReactElement => {
        const newProps: ChildrenProps = {
            ref : React.createRef<HTMLImageElement>(),
            style : {
                'cursor' : 'zoom-in'
            }
        };
        const [ style, setStyle ] = React.useState<React.CSSProperties>();

        const onInit = (): void => {
            const element = newProps.ref.current;
            if( !element ) return;

            const { left, top } = element.getBoundingClientRect();
            const { width } = element;

            setStyle( {
                width,
                transform : `translate( ${left}px, ${top}px )`
            } );
        };

        const onEntered = (): void => {
            const element = newProps.ref.current;
            if( !element ) return;

            const { naturalWidth, naturalHeight } = element;
            setStyle( {
                width : naturalWidth,
                transform : `translate( ${ ( window.innerWidth - naturalWidth ) / 2 }px, ${ ( window.innerHeight - naturalHeight ) / 2 }px )`
            } );
        };

        const newChildren = (): React.ReactElement => {
            if( !React.isValidElement( children ) || !React.Children.only( children ) ) return children;

            newProps.onClick = function(): void {
                handleShow();
                onInit();
            };

            return React.cloneElement( children, newProps );
        };

        return (
            <>
                <Modal
                    open={open}
                    onClose={handleClose}
                    BackdropProps={{
                        timeout : 1800
                    }}
                >
                    <Fade timeout={{
                        exit : 1200,
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
        );
    };

    return ( wraperChildren() );
}
