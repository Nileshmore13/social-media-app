import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "components/navbar/Navbar";
import React from "react";
import { useSelector } from "react-redux";
import UserWidget from "pages/widgets/UserWidget";
import MyPostWidget from "components/MyPostWidget";
import PostsWidget from "pages/widgets/PostsWidget";
import AdveriseWidget from "pages/widgets/AdveriseWidget";
import FrindListWidget from "pages/widgets/FrindListWidget";

const HomePage = () => {
  const isNonMobileScreen = useMediaQuery("(min-width : 1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreen ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreen ? "42%" : undefined}
          mt={isNonMobileScreen ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} /> {/* to post picture */}
          <PostsWidget userId={_id} /> {/* all Posts */}
        </Box>

        {isNonMobileScreen && (
          <Box flexBasis="26%">
            <AdveriseWidget />
            <Box m="2rem 0">
              <FrindListWidget userId={_id}/>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
