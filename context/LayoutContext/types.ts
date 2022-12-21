import { ReactNode } from 'react';

export interface layoutContext {
    direction?: string;
    showSidebar?: boolean;
    setShowSidebar?: Function;
}

export interface ILayoutCtxProvider {
    children: ReactNode;
}
