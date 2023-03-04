import { Box } from "@mui/material";
import { server } from "server";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        src={`${server}/assets/${image}`}
        alt="user"
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
      />
    </Box>
  );
};

export default UserImage;
