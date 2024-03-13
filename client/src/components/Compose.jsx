import {Dialog, Box, Typography, InputBase, TextField, Button} from '@mui/material';
import {Close, DeleteOutline} from '@mui/icons-material';
import styled from '@emotion/styled';
import {useState} from 'react';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

const dialogstyle = {
    height: '90%',
    width: '80%',
    maxHeight: '100%',
    maxWidth: '100%',
    borderRadius: '10px 10px 0 0',
    boxShadow: 'none'
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p':{
        fontSize: 14,
        fontWeight: 500
    }
});

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div':{
        fontSize: 14,
        borderBottom: '1px solid #F5F5F5',
        marginTop: 10
    },
});

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 15px'
});

const CustomButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 18,
    width: 100
})


const ComposeMail = function({openDialog, setOpenDialog}){
    const [data, setData] = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmail);
    const saveDraftService = useApi(API_URLS.saveDraftEmails);

    const config = {
        Host : "smtp.elasticemail.com",
        Username : "cloverblack@yopmail.com",
        Password : "95872E8711193A0954E6A92BF982817D4CBD",
        Port: 2525
    }

    const CloseMail = function(e){
        e.preventDefault();
        const payload = {
            to: data.to,
            from: 'justforresearchpuropse1@gmail.com',
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'research',
            starred: false,
            type: 'drafts'
        }
        saveDraftService.call(payload);

        if(!saveDraftService.error){
            setOpenDialog(false);
            setData({});
        } else {
            
        }
    }
    const SendMail = (e) => {
        e.preventDefault();
        if(window.Email){
            window.Email.send({
                ...config,
                To : data.to,
                From : 'justforresearchpurpose1@gmail.com',
                Subject : data.subject,
                Body : data.body
            }).then(
              message => alert(message)
            );
        }

        const payload = {
            to: data.to,
            from: 'justforresearchpuropse1@gmail.com',
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'research',
            starred: false,
            type: 'sent'
        }
        sentEmailService.call(payload);

        if(!sentEmailService.error){
            setOpenDialog(false);
            setData({});
        } else {
            
        }

        setOpenDialog(false);
    }

    const onValueChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    return(
        <Dialog
        open = {openDialog}
        PaperProps={{sx: dialogstyle}}
        >
        <Header>
            <Typography>New Message</Typography>
            <Close fontSize='small' onClick={(e) => CloseMail(e)}/>
        </Header>
        <RecipientsWrapper>
            <InputBase name='to' placeholder='Recipients' onChange={(e) => onValueChange(e)}/>
            <InputBase name='subject' placeholder='Subject' onChange={(e) => onValueChange(e)}/>
        </RecipientsWrapper>
        <TextField 
            multiline
            rows={14}
            sx = {{'& .MuiOutlinedInput-notchedOutline': {border: 'none'}}}
            onChange={(e) => onValueChange(e)}
            name='body'
        />
        <Footer>
            <CustomButton onClick={(e) => SendMail(e)}>Send</CustomButton>
            <DeleteOutline onClick={() => setOpenDialog(false)}/>
        </Footer>
        <Box></Box>
        </Dialog>
    )
}

export default ComposeMail;