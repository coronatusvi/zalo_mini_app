import React from "react";
import { Spinner, Box, Text } from "zmp-ui";

export default function LoadingPage() {
  return (
    <>
      <Box
        flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="90%"
      >
        <Spinner
          visible
          logo={
            "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          }
        />
        <Text.Title size="small">Loading</Text.Title>
      </Box>
    </>
  );
}
