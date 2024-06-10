import {Box, Button, styled, List, ListItem} from "@mui/material";
import {CreateOutlined} from "@mui/icons-material";
import SIDEBAR_DATA from '../config/sidebar.config'; 
import { useState } from "react";
import ComposeMail from "./Compose"; 
import { useParams, NavLink } from 'react-router-dom';
import {routes} from '../routes/routes.js';

const ComposeButton = styled(Button)({
    background: '#c2e7ff',
    color: '#001d35',
    padding: 15,
    borderRadius: 16, 
    minWidth: 140,
    textTransform: 'none',
    marginLeft: 10
});

const Container = styled(Box)({
    padding: 8,
    '& > ul':{
        padding: '10px 0 0 5px',
        fontSize: 14,
        cursor: 'pointer',
        fontWeight: 500,
        '& > a':{
            textDecoration: 'none',
            color: 'inherit'
        }
    },
    '& > ul > a >li > svg':{
        marginRight: 20
    }
})
const SideBarContents = function(){
    const [openDialog, setOpenDialog] = useState(false);
    const {type} = useParams();

    function onComposeClick(){
        setOpenDialog(true);
    }
    return (
        <Container>
            <ComposeButton onClick={onComposeClick}>
                <CreateOutlined />Compose
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map(data => (
                        <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                            <ListItem style={type === data.name.toLowerCase() ?
                            { backgroundColor: "#d3e3fd",
                              borderRadius: "0 16px 16px 0"}: {}}>
                                <data.icon/>{data.title}
                            </ListItem>
                        </NavLink>
                    ))
                }
            </List>
            <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>
        </Container>
    )
}

export default SideBarContents;