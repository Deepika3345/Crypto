import { Box, Button, Card, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux'
import { getCoin } from '../features/tools/toolslice'
import { Facebook } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {

  return (
    <>
      <section className='contact-section'>
        <Box className="contact-one">
          <div className='contact-one-one'>
            <Typography variant='h3' >GET IN TOUCH</Typography>
            <Typography variant='body3'>Trusted And Secure Bitcoin & Crypto Exchange</Typography>
            <div><a className='call' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"> <EmailIcon />  deepikapatidar484@gmail.com</a></div>

            <div >
              <a className="call "
                href="tel:+919340310746"

              >
                <CallIcon /> +91 9340310746
              </a>
            </div>

            <div className="flex icons">
              <a
                href="https://www.facebook.com/"
                className='icon-one'
              ><Facebook />

              </a>
              <a
                href="https://www.instagram.com/"
                className='icon-one'
              ><InstagramIcon />

              </a>
              <a
                href="https://twitter.com/DeepikaPati3345"
                className='icon-one'
              ><TwitterIcon />

              </a>
              <a
                href="https://www.linkedin.com/in/deepika-patidar-395852280/"
                className='icon-one'
              ><LinkedInIcon />

              </a>
              <a
                href="https://github.com/"
                className='icon-one'
              >
                <GitHubIcon />

              </a>
            </div>
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