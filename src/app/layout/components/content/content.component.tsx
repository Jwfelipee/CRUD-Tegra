import useAppData from '../../../store/hook/useAppData';
import './content.component.scss'

interface ContentProps {
    children?: any
}

function Content(props: ContentProps) {
    const { isDark } = useAppData()

    return (
        <div className="ContentContainer">
            {props.children}
        </div>
    )
}

export default Content;

// className={` ${isDark && 'darktheme'}`}