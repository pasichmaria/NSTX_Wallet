import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CoinMarketCapTable } from "../../components/CoinMarketCapTable";
import { LoginDialog } from "../../components/LoginDialog";
import { useAuth } from "../../hooks";
import { User } from "../../interfaces";
import { ThemeContext } from "../../theme.tsx";
import { useNavigate } from "react-router-dom";

export const LoginPage = ({
         user,
         getUser
       }: {
         user?: User | null;
         getUser: () => void;
       }) => {
         const [showLoginComponent, setShowLoginComponent] = useState(false);
         const navigate = useNavigate();
         const handleOpenForm = () => {
           getUser();
           setShowLoginComponent(true);
         };

         const { login } = useAuth({
           onSuccess: () => {
             toast.success("Login successful");
             getUser();
             setShowLoginComponent(false);
             navigate("/payments");
           },
           onError: () => {
             toast.error("Login failed");
           }
         });

         const validationSchema = Yup.object({
           email: Yup.string()
             .email("Invalid email address")
             .required("Required")
             .min(3)
             .max(320),
           password: Yup.string().required("Required")
         });

         const formik = useFormik({
           initialValues: {
             email: "",
             password: ""
           },
           validationSchema: validationSchema,
           onSubmit: values => {
             login(values);
           }
         });

         const isMobile = useContext(ThemeContext).isMobile;

         return (
           <Grid
             container
             alignItems="center"
             justifyContent="center"
             spacing={4}
           >
             <Grid
               item
               xs={12}
               lg={6}
               container
               justifyContent="center"
               alignItems="center"
             >
               {!user && !isMobile && (
                 <Grid item direction="column" justifyContent="center">
                   <Typography variant="h4" align="center" gutterBottom>
                     NSTX transfer platform
                   </Typography>
                   <Button
                     variant="outlined"
                     fullWidth
                     color="secondary"
                     onClick={handleOpenForm}
                   >
                     Login
                   </Button>
                 </Grid>
               )}
             </Grid>
             <Grid
               item
               xs={12}
               lg={6}
               container
               justifyContent="center"
               alignItems="center"
             >
               {showLoginComponent && <LoginDialog formik={formik} />}
             </Grid>

             <Grid
               item
               xs={12}
               lg={6}
               container
               justifyContent="center"
               alignItems="center"
             >
               {user && <CoinMarketCapTable />}
             </Grid>
           </Grid>
         );
       };