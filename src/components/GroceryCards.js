import * as React from "react";
// import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const groceryList = [
  {
    id: 1,
    name: "Apples",
    image:
      "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: "1.99",
    description: "A delicious fruit",
    quantity: 1,
  },
  {
    id: 2,
    name: "Bananas",
    image:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80",
    price: "0.99",
    description: "A delicious fruit",
    quantity: 1,
  },
  {
    id: 3,
    name: "Oranges",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "0.99",
    description: "A delicious fruit",
    quantity: 1,
  },
  {
    id: 4,
    name: "Pears",
    image:
      "https://images.unsplash.com/photo-1572929773424-93549dced6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: "0.99",
    description: "A delicious fruit",
    quantity: 1,
  },
  {
    id: 5,
    name: "Strawberries",
    image:
      "https://images.unsplash.com/photo-1543158181-e6f9f6712055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "0.99",
    description: "A delicious fruit",
    quantity: 1,
  },
  {
    id: 6,
    name: "Blueberries",
    image:
      "https://images.unsplash.com/photo-1597474561103-0773c378a1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "0.99",
    description: "A delicious fruit",
    quantity: 1,
  },
];

export default function GroceryCardGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {groceryList.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="black">
                  ${item.price}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button size="small">Add to Cart</Button>
                <Typography>{item.quantity} left</Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
