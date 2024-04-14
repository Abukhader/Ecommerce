import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@emotion/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import { Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';
import { useGetproductByNameQuery } from '../../Redux/product'
import { motion } from "framer-motion"

export default function Main() {


    const handleAlignment = (event, newValue) => {
        setmyData(newValue)
    };

    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const allProductsAPI = "products?populate=*";
    const menProductsAPI = "products?populate=*&filters[productCategory]$eq]=men";
    const womenProductsAPI = "products?populate=*&filters[productCategory]$eq]=women";

    const [myData, setmyData] = useState(allProductsAPI)

    const { data, error, isLoading } = useGetproductByNameQuery(
        myData
    )

    const [clickedProduct, setclickedProduct] = useState({});


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }







    return (
        <Container sx={{ py: 9 }}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
                <Box>
                    <Typography variant='h6'>Selected Products</Typography>
                    <Typography variant='body1' fontWeight={300}>All our new arrivals in a exclusive brand selection</Typography>
                </Box>

                <ToggleButtonGroup

                    color='error'
                    value={myData}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{
                        ".Mui-selected": {
                            border: "1px solid rgba(233, 69, 96, .5) !important",
                            color: "#e94560",
                            bgcolor: "initial"
                        }
                    }}
                >
                    <ToggleButton className='myButton' value={allProductsAPI} aria-label="left aligned" sx={{ color: theme.palette.text.primary }}>
                        All Products
                    </ToggleButton>
                    <ToggleButton sx={{ mx: "16px !important", color: theme.palette.text.primary }} className='myButton' value={menProductsAPI} aria-label="centered">
                        MEN Category
                    </ToggleButton>
                    <ToggleButton className='myButton' value={womenProductsAPI} aria-label="right aligned" sx={{ color: theme.palette.text.primary }}>
                        WOMEN Category
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {data.data.map((item) => {
                    return (
                        <Card
                            component={motion.section}
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{duration: .6}}
                            exit={{ transform: "scale(0)" }}
                            key={item.id} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": { scale: "1.1", transition: ".5s", rotate: "2deg" } }}>
                            <CardMedia
                                sx={{ height: 275 }}
                                image={`${import.meta.env.VITE_BASE_URL}${item.attributes.productImg.data[0].attributes.url}`}
                                title="green iguana"
                            />
                            <CardContent>
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.attributes.productTitle}
                                    </Typography>

                                    <Typography variant="subtitle1">
                                        {item.attributes.productPrice}
                                    </Typography>
                                </Stack>
                                <Typography variant='body2' color={"text.secondary"}>
                                    {item.attributes.productDescription}
                                </Typography>
                                <Dialog sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >

                                    <IconButton sx={{ ":hover": { rotate: "180deg", transition: ".5s", color: "red" }, position: "absolute", top: 10, right: 10 }}
                                        onClick={handleClose}>
                                        <Close />
                                    </IconButton>
                                    <ProductDetails clickedProduct={clickedProduct} />
                                </Dialog>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <Button onClick={((first) => {
                                    handleClickOpen();
                                    setclickedProduct(item)
                                })} sx={{ textTransform: "capitalize" }} size="large">
                                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize='small' />
                                    Add to cart
                                </Button>
                                <Button size="small">
                                    <Rating name="half-rating-read" defaultValue={item.attributes.productRating} precision={0.5} size="small" readOnly /></Button>
                            </CardActions>
                        </Card>

                    )
                })}
            </Stack>




        </Container>
    )

}
