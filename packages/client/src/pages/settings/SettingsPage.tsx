import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";

import { User } from "../../interfaces";

export const SettingsPage = ({ user }: { user: User }) => {
  const navigate = useNavigate();

  return (
    user && (
      <Grid
        container
        spacing={2}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={4}>
          <Button
            fullWidth
            onClick={() => {
              navigate("/settings/profile");
            }}
          >
            Profile
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => {
              navigate("/settings/security");
            }}
          >
            Security
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => {
              navigate("/settings/notifications");
            }}
          >
            Notifications
          </Button>
        </Grid>
      </Grid>
    )
  );
};
