import LayoutComponent from '../layout/layout.component';
import PutPessoas from '../module/Put/AtualizaPessoa';
import { AppProvider } from '../store/context/AppContext';
import './Page.scss'

export const AtualizaPessoas = () => {

  return (
    <AppProvider>
      <div className="App">
        <LayoutComponent title="TimeSheet" >
          <div className="PageContainer">
            <PutPessoas />
          </div>
        </LayoutComponent>
      </div>
    </AppProvider>
  );
}


