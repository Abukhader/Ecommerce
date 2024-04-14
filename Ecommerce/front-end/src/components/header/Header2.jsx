import React from 'react';
import { Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputBase from '@mui/material/InputBase';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Expand, ExpandMore } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    flexGrow: .7,
    border: "1px solid #777",
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        border: "1px solid #333",
    },
    marginLeft: 0,
    width: '230px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '50%',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#777"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const options = [
    'All Categories',
    'CAR',
    'Clothes',
    'Electronics',
];

export default function Header2() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme()
    return (
        <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
            <Stack alignItems={"center"}>
                <LocalGroceryStoreIcon />
                <Typography variant='body2'>E-commerce</Typography>
            </Stack>
            <Search sx={{ border: "solid primary", borderRadius: "50px", display: "flex", justifyContent: "space-between" }}>
                <SearchIconWrapper >
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ bgcolor: theme.palette.myColor.main, borderBottomRightRadius: "50px", borderTopRightRadius: "50px", p: "1px" }}
                    >
                        <ListItem
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                sx={{ width: "100px", textAlign: "center", "&:hover": { cursor: "pointer" } }}
                                secondary={options[selectedIndex]}
                            />
                            <ExpandMore />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem sx={{ fontSize: "13px" }}
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Search>

            <Stack direction={"row"} alignItems={"center"}>

                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="primary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>

                <IconButton>
                    <PersonIcon sx={{}} />
                </IconButton>

            </Stack>

        </Container>
    )
}
