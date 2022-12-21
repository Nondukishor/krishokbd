import { createContext, useState } from 'react';
import Sidebar from '../components/molecules/Sidebar';
import { ILayoutCtxProvider, layoutContext } from './types/layoutContext';

export const LayoutContext = createContext<layoutContext>({});

const LayoutContextProvider = ({ children }: ILayoutCtxProvider) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    return (
        <LayoutContext.Provider
            value={{
                showSidebar,
                setShowSidebar,
            }}
        >
            <div style={{ display: 'flex' }}>
                <Sidebar />
                {children}
            </div>
        </LayoutContext.Provider>
    );
};

export default LayoutContextProvider;
