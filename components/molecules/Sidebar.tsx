import React, { useState } from 'react';
import Sidebar from 'rsuite/Sidebar';
import Sidenav from 'rsuite/Sidenav';
import Content from 'rsuite/Content';
import Nav from 'rsuite/Nav';
import Container from 'rsuite/Container';
import classNames from 'classnames';
import NavToggle from '../atom/NavToggle';
import Header from '../atom/Header';
import Brand from '../atom/Brand';
import useWindowSize from '../../hooks/useWindowSize';

// const { getHeight, on } = DOMHelper;

const NavItem = (props: any) => {
    const { title, eventKey, ...rest } = props;
    return (
        <Nav.Item eventKey={eventKey} {...rest} onClick={(event) => event.stopPropagation()}>
            {title}
        </Nav.Item>
    );
};

export interface NavItemData {
    eventKey: string;
    title: string;
    icon?: any;
    to?: string;
    target?: string;
    children?: NavItemData[];
}

export interface FrameProps {
    navs: NavItemData[];
    children?: React.ReactNode;
}

const Frame = (props: FrameProps) => {
    const { navs, children } = props;
    const windowSize = useWindowSize();
    const [expand, setExpand] = useState(true);
    const containerClasses = classNames('page-container', {
        'container-full': !expand,
    });

    const navBodyStyle: React.CSSProperties = expand
        ? { height: windowSize.height - 112, overflow: 'auto' }
        : {};

    return (
        <Container className="frame">
            <Sidebar
                style={{ display: 'flex', flexDirection: 'column' }}
                width={expand ? 260 : 56}
                collapsible
            >
                <Sidenav.Header>
                    <Brand />
                </Sidenav.Header>
                <Sidenav expanded={expand} appearance="subtle" defaultOpenKeys={['2', '3']}>
                    <Sidenav.Body style={navBodyStyle}>
                        <Nav>
                            {navs.map((item) => {
                                const { ...rest } = item;
                                if (item.children) {
                                    return (
                                        <Nav.Menu
                                            key={item.eventKey}
                                            placement="rightStart"
                                            trigger="hover"
                                            {...rest}
                                        >
                                            {item.children.map((child) => (
                                                <NavItem key={child.eventKey} {...child} />
                                            ))}
                                        </Nav.Menu>
                                    );
                                }

                                if (rest.target === '_blank') {
                                    return (
                                        <Nav.Item key={item.eventKey} {...rest}>
                                            {item.title}
                                        </Nav.Item>
                                    );
                                }

                                return <NavItem key={rest.eventKey} {...rest} />;
                            })}
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
                <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
            </Sidebar>

            <Container className={containerClasses}>
                <Header />
                <Content>{children}</Content>
            </Container>
        </Container>
    );
};

export default Frame;
