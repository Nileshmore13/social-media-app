import { Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import React from "react";
import { server } from "server";

const AdveriseWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        src={`${server}/assets/info4.jpeg`}
        alt="adv"
        width="100%"
        height="auto"
        style={{borderRadius:"0.75rem", margin:"0.75rem 0"}}
      />
      <FlexBetween>
        <Typography color={main}>
            Cosmetics
        </Typography>
      </FlexBetween>
      <Typography color={medium}>
            Cosmetics.com
        </Typography>
        <Typography color={medium} margin="0.5rem 0">
            Keep your skin healthy with our products.
        </Typography>
    </WidgetWrapper>
  );
};

export default AdveriseWidget;
