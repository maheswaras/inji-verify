import React from 'react';
import {Box, useMediaQuery} from "@mui/material";
import {Description, Heading} from "./styles";

function StepperContentHeader(props: any) {
    const isTabletOrAbove = useMediaQuery("@media(min-width:768px)");
    return (
        <Box>
            <Heading variant={isTabletOrAbove ? 'h4' : 'h6'}>
                Verify credentials with ease!
            </Heading>
            {
                isTabletOrAbove && (
                    <Description variant='body1'>
                        Effortlessly verify credentials with <b>Inji Verify!</b> Just scan the QR code or upload it for instant validation, following the steps below.
                    </Description>
                )
            }
        </Box>
    );
}

export default StepperContentHeader;