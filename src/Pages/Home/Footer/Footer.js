import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="col-md-4 p-3">
                <h2 className="footer-form">Watch Corner</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="col-md-4 p-3">
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <Typography>
                        Subcribe Our NewsLatter
                    </Typography>
                    <TextField fullWidth label="Name" id="fullWidth" />
                    <TextField fullWidth label="Email" id="fullWidth" />
                </Box>
            </div>
            <div className="col-md-4 p-3">
                <h3>Contact</h3>
                <div className="map d-flex">

                    {/* <div className="phone-icon">
                        <LocationOnIcon />
                    </div> */}
                    <div>
                        <p>0099 London gate, Room</p>
                    </div>
                </div>
                <div className="map d-flex ">
                    {/* <div className="phone-icon">
                        <CallIcon />
                    </div> */}
                    <div>
                        <p>+1 522 684 2222</p>
                    </div>
                </div>
                <div className="map d-flex">
                    {/* <div className="phone-icon">
                        <EmailIcon />
                    </div> */}
                    <div>
                        <p>mail@example.com</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;