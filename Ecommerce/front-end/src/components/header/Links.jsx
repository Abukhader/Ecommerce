import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import {Paper, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Link({title}) {
  return (
    <Box sx={{display: "flex", alignItems: "center", position: "relative", ":hover .show-when-hover": {display: "block"},
    ":hover": {cursor: "pointer"}}}>
      <Typography variant='body1'>{title}</Typography>
      <ExpandMoreIcon sx={{fontSize: "16px", ml: 1}}/>

      <Box className='show-when-hover' sx={{position: "absolute", zIndex: 2, minWidth: "150px", top: "100%", left: "50%", transform: "translate(-50%)", display: "none"}}>
        <Paper sx={{mt: 2, }} >
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{
                    ".MuiTypography-root":{ fontSize: "15px"}
                  }}
                    primary="Dashboard" />
                </ListItemButton>
              </ListItem>

              <ListItem sx={{position: "relative", ":hover": {".sub-link": {display: "block"}}}} disablePadding>
                <ListItemButton>
                  <ListItemText sx={{
                    ".MuiTypography-root":{ fontSize: "15px"}
                  }}
                    primary="products" />
                    <KeyboardArrowRightIcon fontSize='small'/>
                </ListItemButton>
                <Box className="sub-link" sx={{position: "absolute", top: 0, left: "100%", display: "none"}}>
                <Paper sx={{ml: 1, minWidth: "120px"}}>
                <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{display: "flex", p: 0, px: 1.5}}>
              <ListItemText primary="Add Product" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display: "flex", p: 0, px: 1.5}}>
              <ListItemText primary="Edit Product" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
                </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{
                    ".MuiTypography-root":{ fontSize: "15px"}
                  }}
                    primary="orders" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{
                    ".MuiTypography-root":{ fontSize: "15px"}
                  }}
                    primary="Profile" />
                </ListItemButton>
              </ListItem>

            </List>
          </nav>
        </Paper>
      </Box>

      </Box>
  )
}
