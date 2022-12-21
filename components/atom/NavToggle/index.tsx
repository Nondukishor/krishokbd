import React, { useContext } from 'react';
import { Navbar, Nav } from 'rsuite';
import ArrowLeftLineIcon from '@rsuite/icons/ArrowLeftLine';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import { LayoutContext } from '../../../context/LayoutContext';

const NavToggle = () => {
    const layoutCtx = useContext(LayoutContext);
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Nav pullRight>
                <Nav.Item
                    onClick={() => layoutCtx?.setShowSidebar((prev: any) => !prev)}
                    style={{ textAlign: 'center' }}
                    icon={layoutCtx.showSidebar ? <ArrowLeftLineIcon /> : <ArrowRightLineIcon />}
                />
            </Nav>
        </Navbar>
    );
};

export default NavToggle;
