import React from 'react';
import { Icon } from '@rsuite/icons';
import { VscTable, VscCalendar } from 'react-icons/vsc';
import { MdFingerprint, MdDashboard, MdModeEditOutline } from 'react-icons/md';
import CubesIcon from '@rsuite/icons/legacy/Cubes';

const appNavs = [
    {
        eventKey: 'dashboard',
        icon: <Icon as={MdDashboard} />,
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        eventKey: 'calendar',
        icon: <Icon as={VscCalendar} />,
        title: 'Calendar',
        href: '/calendar',
    },
    {
        eventKey: 'tables',
        icon: <Icon as={VscTable} />,
        title: 'Tables',
        href: '/table-members',
        children: [
            {
                eventKey: 'members',
                title: 'Members',
                href: '/table-members',
            },
            {
                eventKey: 'virtualized',
                title: 'Virtualized Table',
                href: '/table-virtualized',
            },
        ],
    },
    {
        eventKey: 'forms',
        icon: <Icon as={MdModeEditOutline} />,
        title: 'Forms',
        href: '/form-basic',
        children: [
            {
                eventKey: 'form-basic',
                title: 'Basic',
                href: '/form-basic',
            },
            {
                eventKey: 'form-wizard',
                title: 'Wizard',
                href: '/form-wizard',
            },
        ],
    },
    {
        eventKey: 'authentication',
        title: 'Authentication',
        icon: <Icon as={MdFingerprint} />,
        children: [
            {
                eventKey: 'sign-in',
                title: 'Sign In',
                href: '/sign-in',
            },

            {
                eventKey: 'sign-up',
                title: 'Sign Up',
                href: '/sign-up',
            },

            {
                eventKey: 'error400',
                title: 'Error 404',
                href: '/error-404',
            },
            {
                eventKey: 'error500',
                title: 'Error 500',
                href: '/error-500',
            },
        ],
    },

    {
        eventKey: 'components',
        title: 'Components',
        icon: <CubesIcon />,
        href: 'https://rsuitejs.com/components/overview/',
        target: '_blank',
    },
];

export default appNavs;
