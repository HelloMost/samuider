import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Button,
} from "@mui/material";
import AtvImg from "../components/AtvImg";
import { useShoppingCart } from "../components/ShoppingCart";

type AtvItemProps = {
  id: number;
};

export default function Atv({ id }: AtvItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id) || 0;

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container sx={{ my: "10rem" }}>
          <AtvImg />
        </Container>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'space-around' }}>
          <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "50%", justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h1">ATV</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt cumque minima ipsam iste doloribus eligendi maiores, rem, qui fugiat aspernatur deleniti exercitationem vitae est vero optio doloremque quidem? Praesentium?
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "50%", gap: "10px" }}>
            {quantity === 0 ? (
              <Button onClick={() => increaseCartQuantity(id)}>Buy now</Button>
            ) : (
              <div >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Button variant="contained" onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span >{quantity}</span> in cart
                  </div>
                  <Button variant="contained" onClick={() => increaseCartQuantity(id)}>+</Button>
                  <Button variant="contained" color="error" onClick={() => removeFromCart(id)}>
                    Remove
                  </Button>
                </Box>
              </div>
            )}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}
