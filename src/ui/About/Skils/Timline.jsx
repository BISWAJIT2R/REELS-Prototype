import React from 'react'
import TodoList from './Todo/TodoList'

function Timline() {
  return (
    <div className='relative h-[50vw]  w-full border-t-2 px-5 py-10 lg:w-1/2 lg:absolute lg:right-0 '>
       <h1 className='tech-stack relative p-2 text-3xl font-primary font-semibold border-b-2 border-slate-600 lg:inline'><span className='text-5xl'>T</span>imeLine</h1>
       <TodoList/>
    </div>
  )
}

export default Timline