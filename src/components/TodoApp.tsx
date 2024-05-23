import React from 'react';
import { useState } from 'react';
import ListaTareas from './ListaTareas';
import '../styles.css';

const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])

    const handleAddTask = () => {
        if(nuevaTarea.trim() === '') return
        setListaTareas(tareasAnteriors => [...tareasAnteriors, nuevaTarea])
        setNuevaTarea('')
    }

    const handleBorrarTareas = (index: number) => {
        setListaTareas(tareasActuales => tareasActuales.filter((_, i) => i !== index))
    }

  return (
    <div>
        <h1>Listado de Tareas</h1>

        <div>
        <input 
            type="text"
            name="" id="" 
            value={nuevaTarea} 
            onChange={(e) => setNuevaTarea(e.target.value)} 
            placeholder='Nueva Tarea'
        />

        <button onClick={handleAddTask} className='btnTask'>Agregar Tarea</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTareas={handleBorrarTareas}></ListaTareas>
    </div>
    
  )
}

export default TodoApp