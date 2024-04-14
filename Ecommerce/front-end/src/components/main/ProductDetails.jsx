import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function ProductDetails({ clickedProduct }) {
    
    const [selectedImg, setselectedImg] = useState(0);


    return (
        <Box display={"flex"} alignItems={"center"} gap={1.5} flexDirection={{ xs: "column", sm: "row" }}>
            <Box display={"flex"}>
                <img width={400} height={334} src={`${import.meta.env.VITE_BASE_URL}${clickedProduct.attributes.productImg.data[selectedImg].attributes.url}`} />
            </Box>
            <Box sx={{
                textAlign: { xs: "center", sm: "left"}, py: 2
            }}>
                <Typography variant='h5'>{clickedProduct.attributes.productTitle}</Typography>
                <Typography my={.4} fontSize={"20px"} color={"crimson"} variant='body1'>{clickedProduct.attributes.productPrice}</Typography>
                <Typography variant='body1'>{clickedProduct.attributes.productDescription}</Typography>
                <Stack sx={{
                    justifyContent: { xs: "center", sm: "left" }
                }} direction={"row"} gap={1} my={2}>


                    <ToggleButtonGroup
                        value={selectedImg}
                        exclusive
                        sx={{
                            ".Mui-selected": {
                                opacity: 1,
                                bgcolor: "initial"
                            }
                        }}
                    >

                        {clickedProduct.attributes.productImg.data.map((item, index) => {
                            return (

                                <ToggleButton key={item.id} value={index} sx={{
                                    width:"110px",
                                    height:"110px",
                                    mx: 1,
                                    p:0,
                                    opacity:".5"
                                }}>
                                    <img onClick={(() => { setselectedImg(index) })} style={{ borderRadius: 3 }} width={"100%"} height={"100%"} src={`${import.meta.env.VITE_BASE_URL}${item.attributes.url}`} />
                                </ToggleButton>



                            )
                        })}


                    </ToggleButtonGroup>
                </Stack>
                <Button variant='contained' sx={{
                    textTransform: "capitalize",
                    mb: { xs: 1, sm: 0 }

                }}>
                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize='small' />
                    Buy Now
                </Button>
            </Box>
        </Box>
    )
}

