import Nav from 'rsuite/Nav';
import React from 'react';
import Link from 'next/link';
import Stack from 'rsuite/Stack';
import Logo from '../Logo';

const NavLink = React.forwardRef((props: any, ref: any) => {
    const { as, href, ...rest } = props;
    return <Link href={href} as={as} ref={ref} {...rest}></Link>;
});

NavLink.displayName = 'NavLink';

const Brand = (props: any) => (
    <Stack className="brand" {...props}>
        <Nav>
            <Nav.Item as={NavLink} href="/">
                <Logo />
            </Nav.Item>
        </Nav>
    </Stack>
);

export default Brand;
