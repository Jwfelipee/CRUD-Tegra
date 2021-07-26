import React from "react";
import { Link } from "react-router-dom";
import useAppData from "../../../../store/hook/useAppData";


interface MenuItemProps {
    url?: any;
    text: string;
    icon: any;
    classPersonal?: string;
    onClick?: (event: any) => void;
}



function MenuItem(props: MenuItemProps) {
    const { isDark } = useAppData()

    function renderLink() {
        return (
            <a   className="linkContainer">
                {props.icon}
                <span>{props.text}</span>
            </a>
        )
    }
    return (
        <li onClick={props.onClick} className={`iconContainer ${props.classPersonal} ${isDark && 'darkthemeIcon'}`}>
            {props.url ? (
                <Link to={props.url} type="submit">
                    {renderLink()}
                </Link>
            ) : (
                renderLink() 
            )}
        </li>
    )
}

export default MenuItem;

// const { isDarkTheme,isDark } = useAppData()
// .darktheme{
//     background-color: var(--sidebar-dark);
// }
// className={` ${isDark && 'darktheme'}`}