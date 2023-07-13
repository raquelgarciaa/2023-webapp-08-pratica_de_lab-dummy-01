import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';

const api = axios.create({
  baseURL: "https://dummyjson.com/",
});
interface propsTarefa{
    id: number;
    titulo: string;
    feito:boolean;
}
interface jsonDeRespostaDoGet {
    todos: [];
}
interface jsonTarefa{
    id: number;
    todo: string;
    completed : boolean;
}
const TarefaItem = (props:propsTarefa) =>{
    return(
        <div className="card">
            <label>
                <input 
                type="checkbox"
                checked={props.feito} />
                {props.titulo}
            </label>
        </div>
    )
}
const PaginaTarefas = () => {
    const [tarefas, setTarefas] = useState([]);
    useEffect(()=>{
        api.get<jsonDeRespostaDoGet>('/todos?limit=10')
        .then( (resposta)=> setTarefas(resposta.data.todos))
        .catch((erro: any) => console.error(erro));
    }, []);
    return(
        <>
        <div className="card">
            <h2>Lista de tarefas</h2>
            {tarefas.map((tarefa : jsonTarefa)=> (
                <TarefaItem
                key={tarefa.id}
                id={tarefa.id}
                titulo={tarefa.todo}
                feito={tarefa.completed} />
            ))}
        </div>
        </>
    );
}



export default PaginaTarefas;