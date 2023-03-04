import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost, setPosts } from "../../Redux/index.js";
import { server } from "server";
import SinglePostWidget from "./SinglePostWidget.jsx";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = () => {
    axios
      .get(`${server}/posts`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => dispatch(setPosts({posts:res.data})));
  };

  const getUserPosts = () => {
    axios
      .get(`${server}/posts/${userId}/post`, {
        headers: { Authorization: `Bearer ${token}`},
      })
      .then((res) => dispatch(setPosts({posts:res.data})))
      .catch((err)=>console.log(err))
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []);

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <SinglePostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
          )
      )}
    </>
  );
};

export default PostsWidget;
