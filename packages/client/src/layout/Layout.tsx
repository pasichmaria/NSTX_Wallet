import { Box, Grid } from "@mui/material";
import React from "react";

import { User } from "../interfaces";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  user?: User;
  getUser: () => void;
}
export const Layout = ({ children, user, getUser }: LayoutProps) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        {user && <Header user={user} getUser={getUser} />}
      </Grid>
      <Grid item xs={12}>
        <Box p={6}>{children}</Box>
      </Grid>
    </Grid>
  );
};
