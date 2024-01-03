import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux'
import { getCoin } from '../features/tools/toolslice'

const Contact = () => {

  return (
    <>
      <section className='contact-section'>
        <Box className="contact-one">
          <div className='contact-one-one'>
            <Typography variant='h3' >GET IN TOUCH</Typography>
            <Typography variant='body3'>Trusted And Secure Bitcoin & Crypto Exchange</Typography>
            <Typography variant='body3'><LocationOnIcon /> Address:MIG Colony ,452003, Indore</Typography>
            <Typography variant='body3'><CallIcon />+91 9340310746</Typography>
            <Typography variant='body3'><MailOutlineIcon /> deepikapatidar484@gmail.com</Typography>
          </div>
        </Box>
        <Box className="contact-two">
          <Card className='contact-two-two'>
            <Typography variant='h2' sx={{ marginBottom: "30px" }}>Contact</Typography>
            <TextField id="outlined-basic" label="Your Name" variant="outlined" required />

            <TextField id="outlined-basic" label="Email Address" variant="outlined" sx={{ marginTop: "10px" }} required />

            <TextField label="Enter message..." multiline rows={4} sx={{ marginTop: "10px" }} required />
        
              <Button variant='outlined' sx={{ marginTop: "10px" }}>Send Message</Button>
          </Card>

        </Box>
      </section>


    </>
  )
}

export default Contact