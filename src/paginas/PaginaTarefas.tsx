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
        api.get('/todos?limit=10')
        .then( (resposta)=> setTarefas(resposta.data.todos))
        .catch((erro: any) => console.error(erro));
    }, []);
    return(
        <>
        <div className="card">
            <h2>Lista de tarefas</h2>
            {tarefas.map((tarefa)=> (
                <TarefaItem
                key={tarefas.id}
                id={tarefas.id}
                titulo={tarefas.todo}
                feito={tarefas.completed} />
            ))}
        </div>
        </>
    );
}



export default PaginaTarefas;