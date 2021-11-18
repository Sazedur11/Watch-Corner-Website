import React from 'react'; import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';


const products = [
    {
        id: 1,
        name: "Watch 1",
        price: 610,
        info: "Watches inforamtion here",
        img: "https://i.ibb.co/HB5bvvg/w1.png"
    },
    {
        id: 2,
        name: "Watch 2",
        price: 860,
        info: "Watches inforamtion here",
        img: "https://i.ibb.co/HB5bvvg/w1.png"
    },
    {
        id: 3,
        name: "Watch 3",
        price: 498,
        info: "Watches inforamtion here",
        img: "https://i.ibb.co/HB5bvvg/w1.png"
    },
    {
        id: 4,
        name: "Watch 4",
        price: 740,
        info: "Watches inforamtion here",
        img: "https://i.ibb.co/HB5bvvg/w1.png"
    },
    {
        id: 5,
        name: "Watch 5",
        price: 300,
        info: "Watches inforamtion here",
        img: "https://i.ibb.co/HB5bvvg/w1.png"
    },
    {
        id: 6,
        name: "Watch 6",
        price: 550,
        info: "Watches inforamtion here",
        img: "https://i.ibb.co/HB5bvvg/w1.png"
    }
]


const Products = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product.name}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;