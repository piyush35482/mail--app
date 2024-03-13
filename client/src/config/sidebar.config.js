import {Inbox, StarOutline, Send, InsertDriveFile, DeleteOutline
        , MailOutline} from '@mui/icons-material';

const SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'Inbox',
        icon: Inbox
    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarOutline
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: Send
    },
    {
        name: 'drafts',
        title: 'Drafts',
        icon: InsertDriveFile
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: DeleteOutline
    },
    {
        name: 'allmail',
        title: 'All Mail',
        icon: MailOutline
    }
];

export default SIDEBAR_DATA;