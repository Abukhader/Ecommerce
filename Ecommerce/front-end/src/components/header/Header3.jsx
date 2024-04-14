import { Container, IconButton, Typography, Stack } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import LaptopIcon from '@mui/icons-material/Laptop';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Drawer from '@mui/material/Drawer';
import { Close } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from './Links'



export default function Header3() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme =  useTheme();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer =
    (anchor, open) =>
    (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' ||
          event.key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <Container sx={{display: "flex", alignItems: "center", justifyContent: "space-between",mt:5}}>
         
      <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{width: "225px", bgcolor: theme.palette.myColor.main, color: theme.palette.text.secondary}}
      >
        <WindowIcon/>
        <Typography 
        sx={{
            padding: "0",
            textTransform: "capitalize",
            mx:1,
        }}>
            categories
        </Typography>
        <Box flexGrow={1}/>
        <ArrowForwardIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
            ".MuiPaper-root": {width: 220},
        }}
      >        

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PedalBikeIcon  fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bikes</ListItemText>
        </MenuItem>


        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LaptopIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Electronics</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Books</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SportsEsportsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Games</ListItemText>
        </MenuItem>


      </Menu>
      </Box>


        {useMediaQuery('(min-width:1200px)') && (
      <Stack direction={"row"} alignItems={"center"} gap={4}> 
        <Links title={"Home"}/>
        <Links title={"Mega menu"}/>
        <Links title={"full Screen menu"}/>
        <Links title={"Pages"}/>
        <Links title={"User Account"}/>
        <Links title={"Vendor Account"}/>
      </Stack>
        )}

      

        {useMediaQuery('(max-width:1200px)') && (<IconButton onClick={toggleDrawer("top", true)}>
      <MenuIcon/>
      </IconButton>)}

       
        
        <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            sx={{".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {height: "100%"}}}
          >

           <Box sx={{width: 444, mx: "auto", mt: "6", position: "relative", pt:10}}>
            <IconButton sx={{ ":hover": {rotate: "180deg", transition: ".5s", color: "red"},  position: "absolute", top: 10, right: 10}} onClick={toggleDrawer("top", false)}>
              <Close />
            </IconButton>

            {[
    { id: 1, mainLink: "Home", subLink: ["Link1", "Link2", "Link3" ]},
    { id: 2, mainLink: "Mega menu", subLink: ["Link1", "Link2", "Link3" ]},
    { id: 3, mainLink: "full screen menu", subLink: ["Link1", "Link2", "Link3" ]},
    { id: 4, mainLink: "Pages", subLink: ["Link1", "Link2", "Link3" ]},
    { id: 5, mainLink: "User Account", subLink: ["Link1", "Link2", "Link3" ]},
    { id: 6, mainLink: "Vendor Account", subLink: ["Link1", "Link2", "Link3" ]},
].map((item) => (
    <Accordion key={item.id} elevation={0} sx={{bgcolor: "initial"}}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
        >
            {item.mainLink}
        </AccordionSummary>
        <List sx={{py: 0, my: 0, zIndex: 2}}>
            {item.subLink.map((link, index) => (
                <ListItem key={index} sx={{py: 0, my: 0}}>
                    <ListItemButton>
                        <ListItemText primary={link} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Accordion>
))}

      

           </Box>
          </Drawer>
      
    </Container>
  )
}
