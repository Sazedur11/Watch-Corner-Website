import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';
import { Box } from '@mui/system';
import OrderItem from '../OrderItem/OrderItem';

const Order = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('../../../../public/data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2>Order now</h2>
            {
                products.map(product => <OrderItem
                    key={product.name}
                    product={product}
                ></OrderItem>)
            }
        </div>
        // <Box sx={{ flexGrow: 1 }}>
        //     <Container>
        //         <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        //             {
        //                 products.map(product => <OrderItem
        //                     key={product.name}
        //                     product={product}
        //                 ></OrderItem>)
        //             }
        //         </Grid>
        //     </Container>
        // </Box>
    );
};

export default Order;