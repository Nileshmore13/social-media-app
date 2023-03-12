import { Box, useMediaQuery } from "@mui/material";
import axios from "axios";
import MyPostWidget from "components/MyPostWidget";
import Navbar from "components/navbar/Navbar";
import FrindListWidget from "pages/widgets/FrindListWidget";
import PostsWidget from "pages/widgets/PostsWidget";
import UserWidget from "pages/widgets/UserWidget";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { server } from "server";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  const getUser = () => {
    axios
      .get(`${server}/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data));
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <Box>
     <Navbar/>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreen ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0"/>
            <FrindListWidget userId={userId}/>
        </Box>
        <Box
          flexBasis={isNonMobileScreen ? "42%" : undefined}
          mt={isNonMobileScreen ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath} /> {/* to post picture */}
          <Box m="2rem 0"/>
          <PostsWidget userId={userId} isProfile/> {/* all Posts */}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
