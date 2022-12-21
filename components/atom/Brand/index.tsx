import React, { useContext } from 'react';
import Stack from 'rsuite/Stack';
import Link from 'next/link';
import Logo from '../Logo';
import { LayoutContext } from '../../../context/LayoutContext';

const Brand = () => {
    const layoutCtx = useContext(LayoutContext);
    return (
        <Stack className="brand">
            {layoutCtx.showSidebar && <Logo height={26} style={{ marginTop: 6 }} />}
            <Link href="/">
                <span
                    style={{
                        marginLeft: layoutCtx.showSidebar ? 10 : 0,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {layoutCtx.showSidebar ? 'KrishokBD' : 'KBD'}
                </span>
            </Link>
        </Stack>
    );
};

export default Brand;
