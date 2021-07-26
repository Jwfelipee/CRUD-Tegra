import React from "react";
import { Link, useParams } from "react-router-dom";

import { service } from '../../service/service'
//const { id } = props.params 

export default function PutPessoas() {
    const [nome, setNome] = React.useState([]);
    const [profissao, setProfissao] = React.useState([]);

    const { idParametro }: any = useParams();

    console.log(idParametro)
    React.useEffect(() => {
        service.getPessoa().then((dados) => {
            dados.forEach((element: any) => {
                if (element.id == idParametro) {
                    console.log(element)
                    setNome(element.name)
                    setProfissao(element.profession)
                }
            })
        })
    }, [])

    const handleNome = (event: any) => {
        setNome(event.target.value)
    }

    const handleProfissao = (event: any) => {
        setProfissao(event.target.value)
    }
    const dados = {
        name: nome,
        profession: profissao
    }
    function editarPessoa(event: any) {
        service.putPessoa(event.target.id, dados)
    }

    return (
        <div className="DivForm">
            <h2>Nome:</h2>
            <input
                className="InputCss"
                onChange={handleNome}
                value={nome}
            /><br /><br />
            <h2>Profissão:</h2>
            <input
                className="InputCss"
                onChange={handleProfissao}
                value={profissao}
            /><br /><br />
            <div className="DivBtn">
                <Link to="/home"><button id={idParametro} onClick={editarPessoa} className="ButtonG"> Salvar </button></Link>
                <label> ou </label>
                <Link to="/home"><button className="ButtonG"> Cancelar </button></Link>
            </div>
        </div>
    )
}


