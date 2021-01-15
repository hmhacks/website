import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../css/AboutMe.css';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Highlighter from "react-highlight-words";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import Headshot from "./Headshot";

export default function AboutMe() {
    return (
        <div className ="aboutblock">
        <Typography style = {{
            marginLeft: '12px',
            marginRight: 'auto'
        }}
        >
            <h1>Hi there.</h1>
            <p>My name’s Henry and I am a Junior at Cornell University studying
                Policy Analysis and Management. I am interested in data science,
                entrepreneurship, and causal inference.
            </p>

            <Divider />
            <p className="infoitems">
                <b>Hobbies</b> <br />
                Hiking the Adirondacks, Jazz Piano, Road Running <br />
                <br /> <b>Book of 2020</b> <br />
                <i>The Undoing Project</i> by Michael Lewis <br />
                <br /> <b>Skills</b> <br />
                <Chip  label="Python" />
                <Chip label="Pandas" />
                <Chip label="R" />
                <Chip label="Stata" />
                <Chip label="SQL" />
                <Chip label="HTML" />
                <Chip label="CSS" />
                <Chip label="React" />
                <br />
                <p>
                    <IconButton target="_blank" href="mailto:hjm67@cornell.edu">
                        <EmailIcon style = {{
                            padding: "10px 5px",
                            color: 'black'
                        }}/>
                    </IconButton>
                    <IconButton target="_blank" href="https://github.com/hmhacks">
                        <GitHubIcon style = {{
                            padding: "10px 5px",
                            color: 'black'
                        }}/>
                    </IconButton>
                    <IconButton target="_blank" href="https://www.linkedin.com/in/henry-manley-681213173/">
                        <LinkedInIcon style = {{
                            padding: "10px 5px",
                            color: 'black'
                        }} />
                    </IconButton>
                </p>
            </p>
        </Typography>
        </div>
    );
}