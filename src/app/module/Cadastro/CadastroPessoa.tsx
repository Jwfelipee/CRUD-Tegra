import React from "react";
import { service } from "../../service/service";
import useAppData from "../../store/hook/useAppData";
import '../Get/ListaPessoa.scss'
import './CadastroPessoa.scss'

export default function CadastroPessoas() {
  const { modo, setModo } = useAppData()
  
  return (
    <>
    <form className="DivForm" onSubmit={function handleSubmit(e: any) {
      e.preventDefault();
      const dadosForm = new FormData(e.target)
      if (dadosForm.get('nome') !== ""
        &&
        dadosForm.get('profissao') !== "") {
        const dados = {
          name: dadosForm.get('nome'),
          profession: dadosForm.get('profissao')
        }
        service.addPessoa(dados)
        setModo(!modo)
        alert(`${dados.name} foi Adicionado no banco de Dados`)
        e.target[0].value = '' // LIMPA O INPUT "NOME"
        e.target[1].value = '' // LIMPA O INPUT "PROFISSAO"
        return;
      }
      if (dadosForm.get('nome') === ""
        ||
        dadosForm.get('profissao') === "") {
        return alert('Voce nao inseriu nada')
      }
    }}>
      <p className="Line"><label>Adicione uma pessoa - </label>
        <input
          className="InputCss"
          placeholder="adicione um nome"
          name="nome"
          type="text"
        /></p>
      <p className="Line"><label>Adicione sua Profissão - </label>
        <input
          className="InputCss"
          placeholder="adicione uma profissão"
          name="profissao"
          type="text"
        /></p>
      <div className="DivBtn">
        <button className="ButtonPost">Adicionar</button>
      </div> 
    </form>
  </>
  )
}