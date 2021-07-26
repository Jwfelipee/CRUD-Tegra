import React from "react";
import { Link } from "react-router-dom";
import './ListaPessoa.scss'
import { service } from '../../service/service';
import useAppData from "../../store/hook/useAppData";
import './ListaPessoa.scss';

export default function GetPessoas() {
  const { modo, setModo } = useAppData()
  const [pessoas, setPessoas] = React.useState([]);
  
  React.useEffect(() => {
    let nomesArr: any = []
    if (pessoas !== nomesArr) {
      service.getPessoa().then((dados) => {
        dados.forEach((element: any) => {
          nomesArr.push(element);
        })
        setPessoas(nomesArr)
      })
    }

  }, [modo])
  
  function DeleteBtn(event: any) {
    service.Delete(event.target.id)
    setModo(!modo)
  }

  return (
    <>
      <div className="DadosSubTitle">
        <p className="InputCss">
          Colaboradores ({pessoas.length})
        </p>
      </div>
      <div className="DadosGet">
        <ul >
          {pessoas.map((dados: any) => {
            return (
              <li key={dados.id} className="DadosLista">
                <p> <span className="Negrito">Nome:</span> {dados.name} /</p>
                <p>  <span className="Negrito">Profissão:</span> {dados.profession} </p>
                <p>  <Link to={`/editarPessoa/${dados.id}`}><button className="ButtonG">Editar</button></Link></p>
                  <label> ou </label>
                <p> <button className="ButtonG" id={dados.id} onClick={DeleteBtn}>Apagar</button> </p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

