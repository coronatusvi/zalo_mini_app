import React from "react";
import { Avatar, Box, Text } from "zmp-ui";

const UserCard = ({ user }) => {
  // Kiểm tra user có tồn tại trước khi truy cập thuộc tính avatar
  if (!user) {
    return null; // Trả về null nếu user không tồn tại
  }
  return (
    <Box flex>
      <Avatar
        story="default"
        online
        src={user.avatar.startsWith("http") ? user.avatar : undefined}
      >
        {user.avatar}
      </Avatar>
      <Box ml={4}>
        <Text.Title>{user.name}</Text.Title>
        <Text>{user.id}</Text>
      </Box>
    </Box>
  );
};

export default UserCard;
