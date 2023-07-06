import { useState } from 'react'
import '../App.css'
import axios from 'axios';

const api = axios.create({
  baseURL: "https://dummyjson.com/",
});

const Usuario = (props: any) => {
  return (
    <div className='card'>
      <p>id: {props.usuario.id}</p>
      <p>Nome: {props.usuario.firstName} {props.usuario.lastName}</p>
      <p>email: {props.usuario.email}</p>
      <p>apelido: {props.usuario.username}</p>
      <p>senha: {props.usuario.password}</p>
    </div>
  );
}

const AppUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const carregarUsuarios = () => {
    console.log("carregando");
    api.get("/users?limit=10")
      .then(
        (resposta) => {
          console.log(resposta.data);
          const lista = resposta.data.users;
          console.log(lista);
          setUsuarios(lista);
      });
      // usuarios = api.get("/users")
  }

  // // id, firstName, lastName
  // // email, username, password
  // const usuario = {
  //   id: "1",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   username: "",
  //   password: "",
  // }
  return (
    <>
      <button onClick={carregarUsuarios}>carregar usuários</button>
      {usuarios.map(
        (usuario: any) => 
          <Usuario usuario={usuario} key={usuario.id} />)
      }
    </>
  );
}
/*
    {
      (usuario.id != "") && Usuario
    }
if (usuario.id != "") {
  return <Usuario />;
else {
  return null;
}
}
*/

export default AppUsuarios;
