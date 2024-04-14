import { Container, Box, Typography, Stack, Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css';
import { useTheme } from '@emotion/react';
import IconSection from './IconSection';


const mySwiper = [
    {text: "MEN", link: "src/images/banner-15.jpg"},
    {text: "WOMEN", link: "src/images/banner-25.jpg"}
]

export default function Hero() {
    const theme = useTheme();
  return (
    <Container sx={{pb: 1}}>
        
       <Box sx={{mt: 3,pt: 2 , display: "flex", alignItems: "center",gap: 2}}>

       <Swiper
        loop= {true}
        pagination={{
        dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
       >
        {mySwiper.map((item) => {
            return(
            <SwiperSlide key={item.text}>
            <img src={item.link}></img>

            <Box 
            sx={{
                [theme.breakpoints.up('sm')]: {
                position: "absolute", left: "8%", textAlign: "left"
            },
            [theme.breakpoints.down('sm')]: {
                pt: 4, pb: 6,
            },
            }}
            >
                <Typography sx={{
                    color: "#222"
                }}
                variant='h6'>
                    LIFESTYLE COLLECTIONS
                </Typography>

                <Typography sx={{
                    color: "#222",
                    fontWeight: 600,
                    my: 1
                }}
                variant='h4'>
                    {item.text}
                </Typography>

                <Stack sx={{
                        justifyContent: {xs: "center", sm: "left"},
                    }}
                    direction={"row"}
                    alignItems={"center"}>
                    <Typography variant='h5' sx={{
                        color: "#333",
                        mr: 1,
                    }}
                    >SALE UP TO
                    </Typography>

                    <Typography variant='h5' sx={{
                        color: "#D23F57",
                    }}
                    >30% OFF
                    </Typography>
                </Stack>
                <Typography sx={{
                    color: "#000",
                    fontWeight: "400",
                    my: 1
                }}>
                    Get Free Shopping on orders over $99.00
                </Typography>
                <Button sx={{
                    px: 5, py: 1, mt: 2, backgroundColor: "#222", boxShadow: "0px 4px 16px rgba(43, 52, 70, .2)",
                    color: "#fff",
                    borderRadius: "2px",
                    "&:hover": {
                        bgcolor: "#151515", boxShadow: "0px 4px 16px rgba(43, 52, 70, .2)"
                    }
                }}>
                    Shop Now
                </Button>
            </Box>
        </SwiperSlide>
            )
        })}

      </Swiper>
        

        <Box sx={{display: {xs: "none", md: "block", minWidth: "27%"}}}>
            <Box position={"relative"}>
                <img width={"100%"} src='src\images\banner-17.jpg' />
                
                <Stack sx={{position: "absolute", top: "50%", left: "30px", transform: "translateY(-50%)"}}>
                <Typography 
                variant='caption'
                sx={{
                    color: "#2B3445",
                    fontSize: "18px",
                }}
                >
                    NEW ARRIVALS
                </Typography>

                <Typography 
                variant='h6'
                sx={{
                    color: "#2B3445",
                    fontSize: "18px",
                }}
                >
                    SUMMER
                </Typography>

                <Typography 
                variant='h6'
                sx={{
                    color: "#2B3445",
                }}
                >
                    SALE 20% OFF
                </Typography>

                <Link sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".5s",
                  "&:hover": {
                    color: "#D23F57",
                  }  
                }}
                href="#"
                underline='none'>
                shop now
                <ArrowForwardIcon sx={{fontSize: "16px"}} />
                </Link>

                </Stack>
            </Box>

            <Box position={"relative"}>
            <img width={"100%"} src='src\images\banner-16.jpg' />
            <Stack sx={{position: "absolute", top: "50%", left: "30px", transform: "translateY(-50%)"}}>
                <Typography 
                variant='caption'
                sx={{
                    color: "#2B3445",
                    fontSize: "18px",
                }}
                >
                    GAMING 4K
                </Typography>

                <Typography 
                variant='h6'
                sx={{
                    color: "#2B3445",
                    fontSize: "18px",
                }}
                >
                    DESKTOPS &
                </Typography>

                <Typography 
                variant='h6'
                sx={{
                    color: "#2B3445",
                }}
                >
                    LAPTOPS
                </Typography>

                <Link sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".5s",
                  "&:hover": {
                    color: "#D23F57",
                  }  
                }}
                href="#"
                underline='none'>
                shop now
                <ArrowForwardIcon sx={{fontSize: "16px"}} />
                </Link>

                </Stack>
            </Box>
        </Box>

       </Box>

        <IconSection />
    </Container>
  )
}
