import LayoutComponent from '../layout/layout.component';
import CadastroPessoa from '../module/Cadastro/CadastroPessoa';
import { AppProvider } from '../store/context/AppContext';
import './Page.scss'

export const AdicionarPessoa = () => {
  return (
    <AppProvider>
      <div className="App">
        <LayoutComponent title="Ola mundo">
          <div className="PageContainer">
            <CadastroPessoa />
          </div>

        </LayoutComponent>
      </div>
    </AppProvider>
  );
}
