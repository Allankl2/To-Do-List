
import { useState } from 'react'
import React from 'react';
import './App.css'

interface TypeNewtaskandcount {
	novaTarefa: string;
  index: number
}

interface TypeList {
  index:number;
  task:string;
  date:string;
  priorit:string;
}


let nextId = 0;

export default function App() {

  // const [newtaskandcount,setNewtaskandcount] = useState<TypeNewtaskandcount>({
  //   novaTarefa:'',
  //   index:0
  // })
  const [list,setList] = useState<TypeList[]>([])

  //lista
  function otherComponentFunction(e:React.MouseEvent<HTMLButtonElement>){
    e.preventDefault();
    setList([...list,{index:nextId++,task:formData.task,date:formData.date,priorit:formData.priorit}])
}
const [formData, setFormData] = useState({
  task: "",
  priorit: "Medio",
  date:"",
  e:""
});
const [hora, setHora] = useState('');
const handleChange = (e:React.ChangeEvent<any>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

};
const handleChangeDate = (e:React.ChangeEvent<any>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
  let valor = e.target.value;
  valor = valor.replace(/\D/g, '');
  // Limitar para no máximo 4 caracteres (para horas e minutos)
  if (valor.length > 1) {
    valor = valor.slice(0, 1);
  }
  setHora(valor);
};
  return (
    <>
    <section className='all-aplication'>
    <header className='header-banner'>
      <h1 className='title-header'>Lista de tarefas</h1>
    </header>
    <section>
    <div>
      <form className="form">
          <div className="container-father-input">
          <span className="container-child-input date">
              <div className="separator">|</div>
              <input
                    type="text"
                    value={hora}
                    placeholder="1 hora" name="date" id="date"
                    onChange={handleChangeDate}
              />
          </span>
          <span className="container-child-input task">
              <div className="separator">|</div>
              <input type="text" placeholder="Nome da task" id="task" name="task" className=""  
              onChange={handleChange}
              />
            </span>
          <span className="container-child-input priorit">
              <div className="separator">|</div>

              <select id="priorit" name="priorit" onChange={handleChange} >
              <option value="Alto">Alto</option>
              <option value="Medio" selected>Medio</option>
              <option value="Baixo">Baixo</option>
              </select>

            </span>
            </div>
            <button className='form-Buttom' onClick={otherComponentFunction}>+</button>
            </form>
            <span className="container-child-input bottom">
            </span>
            </div>
    <div>
  
      <div className="container-List-Task" >
        <header className='header-colum'><p className='header-colum-colum-timer'>Tempo</p> <p className='header-colum-colum-task'>Tarefas</p>   <p className='header-colum-colum-priorit'>Prioridade</p></header>
         
        {list.map(artist => (
          <li className="listTask" key={artist.index}><input 3type="checkbox" className='listTask-checkbox'/><div className="separator listtask">|</div><div className="listTask-date">{artist.date} Hora(s)</div><div className="separator listtask">|</div><div className="listTask-task" >{artist.task}</div><div className="separator listtask">|</div><div className="listTask-priorit">{artist.priorit}</div><button className="listtask-delete" onClick={()=>{setList(list.filter(a=>a.index !== artist.index))}}>X</button></li>
        ))}           
      </div>
    </div>
    </section>



    </section>
    </>
  )
}

