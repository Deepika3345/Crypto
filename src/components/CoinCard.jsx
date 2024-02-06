import React from 'react'
import {
    Button, Card, CardActions, CardContent,
    CardMedia, Grid,
    Typography
} from '@mui/material'
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CoinCard = ({ coin }) => {
    console.log(coin)

    const { symbol, name, large, coin_id } = coin.item;


    return (
        <>
            <Grid item lg={4} md={6} sm={12} xs={12}>

                <Card >
                    <CardMedia
                        sx={{ height: 140 }}
                        image={large}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {symbol}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">{name}
                        </Typography>
                    </CardContent>


                    <CardActions>
                        <Link to={`/learnmore/${coin_id}`}>
                            <Button size='small'  > learn more </Button>
                        </Link>
                    </CardActions>
                </Card>




            </Grid>
        </>
    )
}

export default CoinCard