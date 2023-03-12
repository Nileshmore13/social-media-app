import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import axios from "axios";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../Redux/index.js";
import { server } from "server";
import FlexBetween from "components/FlexBetween.jsx";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";

const SinglePostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  const [isComments, setIscommets] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();

  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = () => {
    axios
      .patch(
        `${server}/posts/${postId}/like`,
        { userId: loggedInUserId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => dispatch(setPost({ post: res.data })))
      .catch((err) => console.log(err));
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography
        color={main}
        sx={{
          mt: "1rem",
        }}
      >
        {description}
      </Typography>
      {picturePath && (
        <img
          src={`${server}/assets/${picturePath}`}
          alt="post"
          width="100%"
          height="auto"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.4rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
              <Typography ml="0.3rem">{likeCount}</Typography>
            </IconButton>
          </FlexBetween>

          <FlexBetween gap="0.3rem" >
            <IconButton onClick={() => setIscommets(!isComments)}>
              <ChatBubbleOutlineOutlined />
              <Typography ml="0.5rem">{comments.length}</Typography>
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>

      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}

          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default SinglePostWidget;
