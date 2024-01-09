import { AppBar, Button, List, ListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../features/tools/toolslice';



const Navbar = () => {
  const { user } = useSelector(state => state.coins)

  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logOutUser())
  }


  return (
    <AppBar>
      <Toolbar sx={{ bgcolor: "#000", borderBottom: "0.5px solid gray" }}>
        <Typography variant='h6' sx={{ flexGrow: "1" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "22px" }}><CurrencyExchangeIcon />Coinbase
          </Link>
        </Typography>



        {
          !user ? (

            <>


              <Link to={'/signup'}>
                <Button variant='outlined' sx={{ marginRight: '5px', color: "white", border: "1px solid gray" }}>Sign up</Button>
              </Link>

              <Link to={'/login'}>
                <Button variant='outlined' sx={{ bgcolor: "#20182B", color: "white", flexGrow: '1' }}>Log in</Button>
              </Link>
            </>
          ) : (
            <>

              <List className='list-items'>

                <Link to='/coincontainer' style={{ textDecoration: "none", color: "gray", marginRight: "15px" }} className='trade-main'>
                  <ListItem className='trade'>Trending Coins </ListItem>
                </Link>


                {/* <Link to='/promotion' style={{ textDecoration: "none", color: "gray" }}>
                  <ListItem> Promotion  </ListItem>
                </Link>


                <Link to='/refrences' style={{ textDecoration: "none", color: "gray" }}>
                  <ListItem> Refrences

                  </ListItem>
                </Link> */}


                {/* <Link to='/guide' style={{ textDecoration: "none", color: "gray" }}>
                  <ListItem> Guide </ListItem>
                </Link> */}
                <Link to='/contact' style={{ textDecoration: "none", color: "gray", marginRight: "15px" }}>
                  <ListItem variant="outlined" className='trade'> Contact Us</ListItem>

                </Link>
              </List>
              <Button variant='outlined' sx={{ bgcolor: "red", marginLeft: "5px", color: "white" }} onClick={handleLogOut}>LogOut</Button>
            </>


          )
        }
      </Toolbar>
    </AppBar>
  )
}

export default Navbar