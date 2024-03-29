import React from "react";
import { Button, Input, Box, Page, useSnackbar } from "zmp-ui";
import { useRecoilState } from "recoil";
import { displayNameState } from "../../state";
import { useNavigate } from "react-router";

const FormPage = () => {
  const [{ userName, displayName }, setName] = useRecoilState(displayNameState);
  const snackbar = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = () => {
    snackbar.openSnackbar({
      duration: 3000,
      text: "Display name updated!",
      type: "success",
    });
    navigate(-1);
  };

  const setNameDisplay = (_key, value) => {
    setName((prevState) => ({
      ...prevState,
      [_key]: value,
    }));
  };
  return (
    <Page className="page">
      <div className="section-container">
        <Box>
          <Input
            label="User Name"
            type="text"
            placeholder={userName}
            value={userName}
            onChange={(e) => {
              setNameDisplay("userName", e.target.value);
            }}
          />
          <Input
            label="Display Name"
            type="text"
            placeholder={displayName}
            value={displayName}
            onChange={(e) => {
              setNameDisplay("displayName", e.target.value);
            }}
          />
          <Box mt={4}>
            <Button fullWidth variant="secondary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </Page>
  );
};

export default FormPage;
