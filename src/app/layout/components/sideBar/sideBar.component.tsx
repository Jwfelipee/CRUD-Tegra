import MenuItem from './component/menuItem.component'
import './sideBar.component.scss'
import { IconAdd, IconHome, IconLogout } from './icons'
import useAppData from '../../../store/hook/useAppData';

function SideBar() {
    const { isDark } = useAppData()

    return (
        <aside className={`sideBarContainer ${isDark && 'darkthemeSidebar'}`}>
            <div className="sideBarContainerLink">
                <ul className="sideBarLinkNav">
                    <MenuItem url="/home" icon={IconHome} text="Home" />
                    <MenuItem url="/adicionar" icon={IconAdd} text="Add" />
                </ul>
                <ul className="sideBarLinkNav">
                    <MenuItem classPersonal="iconExit" onClick={() => alert("sair")} icon={IconLogout} text="Sair" />
                </ul>
            </div>
        </aside>
    )
}

export default SideBar;
