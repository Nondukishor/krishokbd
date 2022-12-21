import React, { createContext, useState } from 'react';
import Container from 'rsuite/Container';
import Sidebar from 'rsuite/Sidebar';
import Sidenav from 'rsuite/Sidenav';
import Nav from 'rsuite/Nav';
import Link from 'next/link';
import { Content } from 'rsuite';
import classNames from 'classnames';
import Brand from '../../components/atom/Brand';
import appNavs from '../../components/atom/Navlist';
import useWindowSize from '../../hooks/useWindowSize';
import { ILayoutCtxProvider, layoutContext } from './types';
import NavToggle from '../../components/atom/NavToggle';
import Header from '../../components/atom/Header';

const NavItem = (props: any) => {
    const { title, eventKey, ...rest } = props;
    return (
        <Nav.Item eventKey={eventKey} as={Link} {...rest}>
            {title}
        </Nav.Item>
    );
};

export const LayoutContext = createContext<layoutContext>({});

const LayoutContextProvider = ({ children }: ILayoutCtxProvider) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const windowSize = useWindowSize();
    const navBodyStyle: React.CSSProperties = showSidebar
        ? { height: windowSize.height - 112, overflow: 'auto' }
        : {};
    const containerClasses = classNames('page-container', {
        'container-full': !showSidebar,
    });

    return (
        <LayoutContext.Provider
            value={{
                showSidebar,
                setShowSidebar,
            }}
        >
            <Container className="frame">
                <Sidebar
                    style={{ display: 'flex', flexDirection: 'column' }}
                    width={showSidebar ? 260 : 56}
                    collapsible
                >
                    <Sidenav.Header>
                        <Brand />
                    </Sidenav.Header>
                    <Sidenav
                        expanded={showSidebar}
                        appearance="subtle"
                        defaultOpenKeys={['2', '3']}
                    >
                        <Sidenav.Body style={navBodyStyle}>
                            <Nav>
                                {appNavs.map((item) => {
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
                                })}
                            </Nav>
                        </Sidenav.Body>
                        <NavToggle
                            expand={showSidebar}
                            onChange={() => setShowSidebar(!showSidebar)}
                        />
                    </Sidenav>
                </Sidebar>
                <Container className={containerClasses}>
                    <Header />
                    <Content>{children}</Content>
                </Container>
            </Container>
        </LayoutContext.Provider>
    );
};

export default LayoutContextProvider;
