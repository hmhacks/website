import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../css/AboutMe.css';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Highlighter from "react-highlight-words";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


export default function AboutMe() {
    return (
        <div className ="aboutblock">
        <Typography style = {{
            marginLeft: '12px',
            marginRight: 'auto'
        }}
        >
            <div className="typewriter">
                <h1>Hi there.</h1>
            </div>

            <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={["Henry", "Cornell University", "the"]}
                autoEscape={true}
                textToHighlight="My name’s Henry and I am a Junior at Cornell University studying
                Policy Analysis and Management. I am interested in data visualization,
                algorithm design, and causal inference."
            />
            <Divider />
            <p className="infoitems">
                <b>Listening to</b> <br />
                Dayglow, Daniel Caeser, Rex Orange County, Bon Iver <br />
                <br /> <b>Hobbies</b> <br />
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
                    <IconButton>
                        <EmailIcon  style = {{
                            padding: "10px 5px"
                        }}/>
                    </IconButton>
                    <IconButton>
                        <GitHubIcon style = {{
                            padding: "10px 5px"
                        }}/>
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon style = {{
                            padding: "10px 5px"
                        }} />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon style = {{
                            padding: "10px 5px"
                        }} />
                    </IconButton>
                </p>
            </p>
        </Typography>
        </div>
    );
}