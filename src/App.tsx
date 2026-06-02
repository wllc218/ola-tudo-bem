import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import './index.css';


function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Estudar programação',
    description: 'Estudar React, TypeScript e outras tecnologias relacionadas.',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Fazer exercícios físicos',
    description: 'Fazer exercícios físicos regularmente.',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Ler um livro',
    description: 'Ler um livro interessante.',
    isCompleted: true,
  }




  ]);

  function onTaskClick(taskId: any) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {

        return {
          ...task,
          isCompleted: !task.isCompleted,
        }

      }
      return task;
    });
    setTasks(newTasks);
  }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTask />
      </div>
    </div>
  );
}
export default App;
