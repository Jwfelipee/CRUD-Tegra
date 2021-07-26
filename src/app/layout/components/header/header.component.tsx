import Logo from './components/logo/logo.component';
import ButtonTheme from './components/buttonTheme/button-theme.component';
import Title from './components/title/title.component';

import './header.component.scss';

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {

  return (
    <div className="headerContainer">
      <Logo />
      <div className="headerContainerTitle">
        <Title title={props.title} />
        <ButtonTheme />
      </div>
    </div>
  );
}

export default Header;


