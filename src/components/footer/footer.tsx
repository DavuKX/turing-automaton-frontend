'use client'
import React from 'react';
import Box from "@mui/material/Box";
import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTranslations} from "use-intl";

const Footer = () => {
    const t = useTranslations()
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                paddingTop: "1rem",
                maeginbottom: "1rem",
                bottom: 0,
                position: "fixed",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center" bgcolor="white" justifyContent="center">
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | Duvan Navarro | Dania Sarmiento | Anuarth Rincon`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
