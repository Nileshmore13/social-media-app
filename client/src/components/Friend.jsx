import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../Redux/index.js";
import { server } from "server";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user?.friends);

  const { palette } = useTheme();

  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = () => {
    axios.patch(`${server}/users/${_id}/${friendId}`,{
      header: { Authorization: `Bearer ${token}` }
    })
      .then((res) => dispatch(setFriends({friends:res.data})))
      .catch((err) => console.log(err));
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="50px"/>
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            varient="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={main} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton onClick={()=>patchFriend()} sx={{
        backgroundColor:primaryLight, p:"0.9rem"
      }}>
        {isFriend ? (
            <PersonRemoveOutlined sx={{color:primaryDark}}/> 
        ): (<PersonAddOutlined sx={{color:primaryDark}}/> )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
