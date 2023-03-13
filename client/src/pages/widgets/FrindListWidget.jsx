import { Typography, useTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../Redux/index.js";
import { server } from "server";
import WidgetWrapper from "components/WidgetWrapper.jsx";
import { Box } from "@mui/system";
import Friend from "components/Friend.jsx";

const FrindListWidget = ({userId}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user?.friends);

  const { palette } = useTheme();

  const getFrinds = () => {
    axios.get(`${server}/users/${userId}/friends`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res)=>dispatch(setFriends({friends :res.data})))
  };

  useEffect(()=>{
    getFrinds();
  },[])

  return (
    <WidgetWrapper>
        <Typography color={palette.neutral.dark} varient="h5" fontWeight="500" sx={{
            mb:"1.5rem"
        }}> Friends List</Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem" >
            {friends && friends.map((friend)=>(
                <Friend 
                key={friend._id}
                friendId={friend._id}
                name={`${friend.firstName} ${friend.lastName}`}
                subtitle={friend.occupation}
                userPicturePath={friend.picturePath}
                />
            ))}
        </Box>
    </WidgetWrapper>
  );
};

export default FrindListWidget;
