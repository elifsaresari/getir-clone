import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';



export interface SimpleBackdropProps {
    open: boolean,


}

const SimpleBackdrop: React.FC<SimpleBackdropProps> = (props: SimpleBackdropProps) => {

    const {open}=props
    return (
        <div>

            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={open}

            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
}

export default SimpleBackdrop