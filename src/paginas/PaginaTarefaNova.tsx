import { useState } from 'react'
import '../App.css'
import axios from 'axios';

const api = axios.create({
  baseURL: "https://dummyjson.com/",
});

const PaginaTarefaNova = () => {
    {/* TarefaItem para adicionar na post*/}
    const [tarefa, setTarefa] = useState("");
    const tratarClique = () =>{
        const json = {
			todo: tarefa,
			completed: false,
			userId: 1,
        }
        console.log(json);
        api.post("/todo/add",json)
        .then(()=>setTarefa(""))
        .catch((erro) => console.log(erro));
    }
    return(
        <>
        <h1>Lista de tarefas</h1>
        <h2>Tarefa nova</h2>
        <div>
        <label>
            <p>Tarefa</p>
            <input 
            type="text"
            value={tarefa}
            onChange={(evento) => setTarefa(evento.target.value)}
            />  
        </label>
        <button onClick={tratarClique}>Criar nova tarefa</button>
        </div>
        </>
    )
};

export default PaginaTarefaNova;