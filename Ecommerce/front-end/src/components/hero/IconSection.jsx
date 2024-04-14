import { Box, Container, Stack, Typography, Divider } from '@mui/material'
import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function IconSection() {
    const theme = useTheme();
  return (
    <Container sx={{bgcolor: theme.palette.mode == "dark" ? "#000" : "#fff", mt: 3}}>
        <Stack sx={{flexWrap: "wrap", px: .1}} direction={"row"} divider={useMediaQuery('(min-width:600px)') ? <Divider orientation="vertical" flexItem /> : null} alignItems={"center"}>
        <MyBox icon={<ElectricBoltIcon />} title={"Fast Delivery"} subTitle={"Start from 10$"} />
        <MyBox icon={<WorkspacePremiumIcon />} title={"Money Guarantee"} subTitle={"7 Days Back "} />
        <MyBox icon={<AccessAlarmIcon />} title={" 365 Days"} subTitle={"For free return"} />
        <MyBox icon={<CreditScoreIcon />} title={"Payment "} subTitle={"Secure system"}/>
        </Stack>
    </Container>
  )
}



function MyBox({icon, title, subTitle}) {
    const theme = useTheme();
  return (
    <Box sx={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 2,
        justifyContent: useMediaQuery('(min-width:600px)') ? "center" : "left" ,
        py: 1.5,
        
    }}>
        {icon}
        <Box>
           <Typography variant='body1'>{title}</Typography> 
           <Typography sx={{
            fontWeight: 400, color: theme.palette.text.secondary,
           }}>{subTitle}</Typography>
        </Box>
    </Box>
  )
}
