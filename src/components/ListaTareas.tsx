import React from 'react'
import Tarea from './Tarea'

type Props = {
    listaTareas: string[]
    borrarTareas: (index:number) => void 
}

const ListaTareas = ({listaTareas, borrarTareas}: Props) => {
  return (
    <div className='taskList'>
        {listaTareas.map((task, index) => (
            <Tarea key={index} tarea={task} borrarTarea={() => borrarTareas(index)}></Tarea>
        ))}
    </div>
  )
}

export default ListaTareas