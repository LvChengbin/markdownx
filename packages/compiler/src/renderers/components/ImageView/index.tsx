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

const useStyles = makeStyles( () => {
    return createStyles( {
        viewWrapper : {
            border: 'none',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            overflow: 'auto'
        },
        img : {
            transition: 'all 0.6s ease-in-out',
            cursor: 'zoom-out'
        }
    } );
} );

export default function Root( props: PreviewProps ): JSX.Element {
    const { children } = props;
    const styles = useStyles( props );
    const [ open, setOpen ] = React.useState( false );

    const handleShow = () => {
        setOpen( true )
    }

    const handleClose = () => {
        setOpen( false )
    }
    
    const wraperChildren = () => {
        const newProps = {
            ref: React.createRef<HTMLImageElement>(),
            style: {
                'cursor': 'zoom-in'
            }
        };
        const [ style, setStyle ] = React.useState<React.CSSProperties>();

        const onInit = () => {
            const element = newProps.ref.current
            if( !element ) return;

            const { left, top } = element.getBoundingClientRect();
            const { width } = element;
            
            setStyle( {
                width,
                transform: `translate( ${left}px, ${top}px )`,
            } )
        }

        const onEntered = () => {
            const element = newProps.ref.current
            if( !element ) return;

            const { naturalWidth, naturalHeight } = element;
            setStyle( {
                width: naturalWidth,
                transform: `translate( ${ ( window.innerWidth - naturalWidth ) / 2 }px, ${ ( window.innerHeight - naturalHeight ) / 2 }px )`,
            } )
        }

        const newChildren = () => {
            if( !React.isValidElement( children ) || !React.Children.only( children ) ) return children;
            
            newProps[ 'onClick' ] = function() { 
                handleShow()
                onInit()
            }
            
            return React.cloneElement( children as any, newProps )
        };

        return (
            <>
                <Modal
                    open={open}
                    onClose={handleClose}
                    BackdropProps={{
                        timeout: 1800,
                    }}   
                >
                    <Fade timeout={{
                        exit: 1200,
                        enter: 400
                    }} in={open} 
                    onEntered={onEntered} onExiting={onInit}>
                        <div className={styles.viewWrapper} onClick={handleClose}> 
                            <img style={style} className={styles.img} src={children?.props.src}/>
                        </div>
                    </Fade>
                </Modal>
                <>{ newChildren() }</> 
            </>
        )
    }

    return ( wraperChildren() );
}
