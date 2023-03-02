import { Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import Form from "./Form";

const LoginPage = () => {
  const isNonMobileScreen = useMediaQuery("(min-width : 1000px)");
  const theme = useTheme();

  return (
    <Box>
      <Box
        width={"100%"}
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        mt="2rem"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SocialMedia
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreen ? "50%" : "90%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" varient="h5" mb="1.5rem">
          Welcome To SocialMedia,The Social Media For Developers!
        </Typography>
      <Form/>
      </Box>
    </Box>
  );
};

export default LoginPage;
