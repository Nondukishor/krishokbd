import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode } from 'react';

interface IProps {
    href: string;
    exact: boolean;
    children: ReactNode;
    className?: string;
}
function NavLink({ href, exact, children, className, ...props }: IProps) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        // eslint-disable-next-line no-param-reassign
        className += ' active';
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
}

NavLink.defaultProps = {
    exact: false,
};

export default NavLink;
