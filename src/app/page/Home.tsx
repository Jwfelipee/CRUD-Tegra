import LayoutComponent from '../layout/layout.component';
import GetPessoas from '../module/Get/ListaPessoa';
import { AppProvider } from '../store/context/AppContext';
import './Page.scss'

export const Home = () => {
  return (
    <AppProvider>
      <div className="App">
        <LayoutComponent title="Ola mundo">
          <div className="PageContainer">
            <GetPessoas />
          </div>
        </LayoutComponent>
      </div>
    </AppProvider>
  );
}


