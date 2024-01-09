import {
    Box,
    Container,
    IconButton,
    InputBase,
    Paper,
    Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { searchCoin } from '../features/tools/toolslice';

const Home = () => {


    const { user, searchOne, isSuccess } = useSelector(state => state.coins)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user])


    const [search, setSearch] = useState("")


    const handleSearch = (e) => {
        e.preventDefault();
        if (search !== '') {
            dispatch(searchCoin(search));
        }
        const searchedData = searchOne?.coins?.filter(i => {
            return i.item.name.toLowerCase().includes(search.toLowerCase());
        })
        if (searchedData && searchedData.length > 0) {
            console.log(searchedData)

            navigate(`/learnmore/${searchedData[0].item.coin_id}`);
        }
        else (
            alert("Enter valid data...")
        )
        setSearch("");


    };


    return (
        <>


            <Box className='Home-section' sx={{ padding: "60px 0px", bgcolor: "black" }}>
                <Box className="text-section">
                    <Typography variant='h2'
                        sx={{ marginBottom: "20px", color: "#888a64", fontWeight: "550" }} >
                        A crypto wallet & gateway to blockchain apps
                    </Typography>
                    <Typography variant='body2' sx={{ color: "gray", marginBottom: "15px" }}>Start exploring blockchain application in seconds. <br /> Trusted by over 30 millions users worldwide.

                    </Typography>
                    <Paper component="form"
                        sx={{ width: "90%", bgcolor: "#263238", p: '2px 4px', display: 'flex', alignItems: 'center', borderRadius: "30px", }} >

                        <InputBase
                            sx={{ ml: 1, flex: 1, color: "gray" }}
                            placeholder="Enter your crypto"
                            inputProps={{ 'aria-label': 'search' }}
                            // name="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}

                        />
                        <IconButton type="submit" sx={{ p: '10px', color: "gray" }}
                            onClick={(e) => { handleSearch(e) }}
                            aria-label="search" >
                            <SearchIcon />
                        </IconButton>
                    </Paper>

                </Box>
                <Box className='image-section'>

                    <img className='pic'
                        src="https://static.coinstats.app/onboarding/web/cs-wallet.gif"
                        alt="" />


                </Box>
            </Box>

        </>
    )
}

export default Home