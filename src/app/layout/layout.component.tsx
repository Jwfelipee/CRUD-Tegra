import useAppData from '../store/hook/useAppData';

import Content from './components/content/content.component';
import SideBar from './components/sideBar/sideBar.component';
import Header from './components/header/header.component';
import Footer from './components/footer/Footer';
import './layout.component.scss'

interface LayoutProps {
    title: string;
    children?: any;
}


function LayoutComponent(props: LayoutProps) {
    const { isDark } = useAppData()
    return (
        <div className={`layoutContainer`} >
            <Header title={props.title} />
            <div className={`contentContainer ${isDark && 'darkthemeContent'}`}>
                <SideBar />
                <Content>
                    {props.children}
                </Content>
            </div>
            <Footer />
        </div>
    )
}

export default LayoutComponent;