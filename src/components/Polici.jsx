import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/AboutMe.css';
import Divider from '@material-ui/core/Divider';
import asset from '../assets/asset.png';

export default function AboutMe() {
    return (
        <div className ="aboutblock">
            <Typography style = {{
                marginLeft: '12px',
                marginRight: 'auto'
            }}
            >
                <img  alt ="Polici Logo" src={asset} style={{
                    width: '147px',
                    height: '60px',
                    borderRadius:15,
                    padding: '10px'
                }} />
                <p> <i>Bringing Data to Your Day In Under Three Minutes.</i></p>
                <Divider />
                <p>
                    We build ML algorithms to translate academic research findings.
                    Our team of 15 is on a mission to bridge the gap between academia and practice. In training
                    our algorithms, we've stumbled upon some really interesting work we think you should
                    know about. </p>
                <br />
                <p> <a href="https://www.polici.org/"> Check Us Out </a> 🚀</p>
                <p> <a href="https://www.polici.org/welcome">Get Our Newsletter</a> 📨</p>
                <p>Polici In The News 👀</p>
            </Typography>
        </div>
    );
}