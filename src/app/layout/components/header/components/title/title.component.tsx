import './title.component.scss'

interface TitleProps {
    title: string;
}

function Title(props: TitleProps) {
    return (
        <div className="titleContainer">
            <h2>{props.title}</h2>
        </div>
    );
}

export default Title;
