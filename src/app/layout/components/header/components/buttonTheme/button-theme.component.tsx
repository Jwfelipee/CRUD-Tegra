
import useAppData from '../../../../../store/hook/useAppData';
import { IconSun } from '../../../sideBar/icons';
import { IconMoon } from '../../../sideBar/icons/index';
import './button-theme.component.scss'

function ButtonTheme() {
    const { isDark, isDarkTheme } = useAppData()

    return (
        isDark ? (
            <div className="buttonContainer light" onClick={isDarkTheme}>
                <div className="button">
                    {IconSun}
                </div>
            </div>
        ) : (
            <div className="buttonContainer dark" onClick={isDarkTheme}>
                <div className="button">
                    {IconMoon}
                </div>
            </div>
        )
    );
}

export default ButtonTheme;