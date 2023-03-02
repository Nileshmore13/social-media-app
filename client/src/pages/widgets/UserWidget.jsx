
import { useTheme } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { server } from 'server';

const UserWidget = ({userId, picturePath}) => {
    const [user,setUser] = useState(null);
    const {palette} = useTheme();
    const navigate=  useNavigate();
    const token = useSelector((state) =>state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser= async ()=> {
        axios.get(`${server}/users/${userId}`)
    }

  return (
    
  )
}

export default UserWidget
