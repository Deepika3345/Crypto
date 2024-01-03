import React, { useEffect } from 'react'
import CoinCard from './CoinCard'
import { Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getCoin } from '../features/tools/toolslice'

const CoinContainer = () => {

    const { coins, isLoading, isSuccess, isError } = useSelector((state) => state.coins)

    const dispatch = useDispatch()

    const fetching = () => {
        dispatch(getCoin())
    }

    useEffect(() => {
        fetching()

    }, [])


    if (isLoading) {
        return (
            <Typography variant='h3' align='center' sx={{ marginTop: "60px", color: "black" }}>Loading...</Typography>
        )
    }
    if (isError) {
        return (
            <Typography variant='h3' align='center' sx={{ marginTop: "60px", color: "black" }}>Try Again</Typography>
        )
    }

    if (coins.length === 0) {
        return (
            <Typography variant='h3' align='center' sx={{ marginTop: "60px", color: "black" }}> NO Coins Yet</Typography>
        )
    }
    return (
        <>
            <Grid className='grid-name' container sx={{ marginTop: "60px" }} spacing={2}>


                {
                    coins.map((coin) => <CoinCard key={coin.item.coin_id} coin={coin} />)
                }

            </Grid>
        </>
    )
}

export default CoinContainer