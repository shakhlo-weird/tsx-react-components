import React, {ReactNode} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";


interface LayoutProps {
    children: ReactNode
}

const Layout = ({children} : LayoutProps) => {
    return (
        <div className="flex-col">
            <Header></Header>
            <main className="flex-grow mx-auto bg-white container mt-2">{children}</main>
            <Footer></Footer>
        </div>
    )
}


export default Layout