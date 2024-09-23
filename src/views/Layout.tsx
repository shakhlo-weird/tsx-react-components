import React, {ReactNode} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";


interface LayoutProps {
    children: ReactNode
}

const Layout = ({children} : LayoutProps) => {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}
