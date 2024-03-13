import {lazy} from 'react';
const Main = lazy(() => import("../pages/Main.jsx"));
const Emails = lazy(() => import("../components/Emails.jsx"));
const ViewEmails = lazy(() => import("../components/ViewEmails.jsx"));


const routes = {
    main: {
        path: '/',
        element: Main
    },
    emails: {
        path: '/emails',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmails
    },
    invalid: {
        path: '/*',
        element: Emails
    }
}

export {routes};