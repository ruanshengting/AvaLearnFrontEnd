import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react' //?? what is this?
function App() {
  const name = 'Ava'
  const [tasks, setTasks] = useState([
    {
      day: '2022.06.02',
      id: 1,
      text:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      reminder: true,
    },
    {
      day: '2022.03.02',
      id: 2,
      text: 'qui est esse',
      reminder: true,
    },
    {
      day: '2022.02.02',
      id: 3,
      text: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      reminder: true,
    },
    {
      day: '2022.01.22',
      id: 4,
      text: 'eum et est occaecati',
      reminder: false,
    },
    {
      day: '2022.01.02',
      id: 5,
      text: 'nesciunt quas odio',
      reminder: false,
    },
  ])
  return (
    <div className="container">
      <Header title="Ava Test" />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
