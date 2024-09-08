import React, {useContext} from "react";
import {
  Alert,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { MdOutlineRecentActors, MdSettings } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import {User} from "../interfaces";
import { ThemeContext } from "../theme";
import { useBalances } from "../hooks";
import {CardInfoBalance} from "../components";

interface SidebarProps {
    open: boolean;
    user?: User;
    handleDrawerClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
         user,
         open,
         handleDrawerClose
       }) => {
         const isMobile = useContext(ThemeContext).isMobile;
         const handleCloseAndLink = () => {
           if (isMobile) {
             handleDrawerClose();
           }
         };
         return (
           <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
             <Grid
               container
               direction="column"
               alignItems="flex-end"
               sx={{ padding: 2 }}
             >
               <Button
                 variant="contained"
                 startIcon={<MdSettings />}
                 component={RouterLink}
                 to={"/settings"}
               />
             </Grid>
             <CustomListItems
               handleCloseAndLink={handleCloseAndLink}
               user={user}
             />
             {isMobile && <Button onClick={handleDrawerClose}>Close</Button>}
           </Drawer>
         );
       };

interface CustomListItemsProps {
    handleCloseAndLink: () => void;
    user?: User;
}

const CustomListItems: React.FC<CustomListItemsProps> = ({
  user,
  handleCloseAndLink
}) => {
  const { balances, isError, isLoading } = useBalances({
    userId: user?.id || ""
  });
  if (isLoading) {
    return <Alert severity="info">Loading...</Alert>;
  }
  if (isError) {
    return (
      <Alert severity="error">
        Error loading balances. Please try again later.
      </Alert>
    );
  }

  return (
    <List>
      {balances?.map(balance => (
        <ListItem
          key={balance.id}
          component={RouterLink}
          to={`/balance/${balance.id}`}
          onClick={handleCloseAndLink}
        >
          <CardInfoBalance
            id={balance.id}
            currency={balance.currency}
            value={balance.value}
            onClick={() => {}}
          />
        </ListItem>
      ))}
      <ListItem>
        <Button
          fullWidth
          variant="outlined"
          component={RouterLink}
          to="/create/balance"
          onClick={handleCloseAndLink}
        >
          Create a new card
        </Button>
      </ListItem>
      <Divider orientation="horizontal" flexItem sx={{ mt: 2 }} />
      <ListItem
        component={RouterLink}
        to="/payments"
        onClick={handleCloseAndLink}
      >
        <ListItemIcon>
          <MdOutlineRecentActors />
        </ListItemIcon>
        <ListItemText primary="Payments" />
      </ListItem>
      <ListItem
        component={RouterLink}
        to="/profile"
        onClick={handleCloseAndLink}
      >
        <ListItemIcon>
          <MdOutlineRecentActors />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </List>
  );
};
