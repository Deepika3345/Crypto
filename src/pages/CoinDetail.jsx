
import React, { useEffect } from 'react'
import {
    Button, Card, CardActions, CardContent,
    CardMedia, Grid,
    Typography
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCoin } from '../features/tools/toolslice'
// import { coinGet, getDetail } from '../features/tools/toolslice'


const CoinDetail = () => {
    const { ID } = useParams()
    const { coins } = useSelector((state) => state.coins)

    const dispatch = useDispatch()

    const fetching = () => {
        dispatch(getCoin())
    }

    useEffect(() => {
        fetching()

    }, [])

    // console.log(typeof ID)



    // const dispatch = useDispatch()
    const itemDetail = coins.filter((coin) => coin.item.coin_id === Number(ID))[0]?.item
    console.log(itemDetail)

    return (
        <>
            <Grid item lg={4} md={6} sm={12} xs={12} className='item-grid'>

                <div className='detail-card'>
                    <CardMedia className='image-manage'
                        sx={{ marginTop: "70px" }}
                        image={itemDetail?.large}
                        title="green iguana"
                    />
                    <CardContent>

                        <Typography variant="h6" color="text.secondary"><b>Name</b>:{itemDetail?.name}

                        </Typography>
                        <Typography variant="body2" color='text.secondary'><b>Symbol:</b>
                            {itemDetail?.symbol}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"><b>Price_btc</b>:{itemDetail?.price_btc}

                        </Typography>
                        <Typography variant="body2" color="text.secondary"><b>Market_cap_rank:</b>{itemDetail?.market_cap_rank}

                        </Typography>


                        <Typography variant="body2" color="text.secondary"><b>Slug:</b>{itemDetail?.slug}</Typography>
                    </CardContent>
                    <CardActions>



                    </CardActions>
                </div>




            </Grid>

        </>
    )
}

export default CoinDetail



