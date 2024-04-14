import React from 'react'
import {Fab, Zoom} from '@mui/material';
import {KeyboardArrowUp} from '@mui/icons-material'
import useScrollTrigger from '@mui/material/useScrollTrigger';


export default function ScrollToTop() {
    return (
        <Zoom in={useScrollTrigger({threshold: 100})}>
            <Fab
            onClick={() => {
                window.scrollTo(0, 0)
            }}
            variant="extended" size="small" sx={{
                position: "fixed",
                bottom: 40,
                right: 40,
            }} color="primary" aria-label="add">
                <KeyboardArrowUp fontSize="medium" />
            </Fab>
        </Zoom>
    )
}
