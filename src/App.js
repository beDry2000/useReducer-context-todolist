import { useStore } from './store'
import { actions } from './store';
import {useRef} from 'react'

function App() {

  const inputRef = useRef();
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  console.log(todoInput);
  function handleAdd() {
    dispatch(actions.addJob(todoInput));
    dispatch(actions.setJob(''));
    inputRef.current.focus();
  }

  function handleDel(index) {
    dispatch(actions.delJob(index))
  }
  console.log(todos);
  return (
    <>
      <h1>Hello Anh Em!</h1>
      <input
        ref={inputRef}
        value={todoInput}
        onChange={e => dispatch(actions.setJob(e.target.value))}
      />
      <button
        onClick={handleAdd}
      >Add</button>
      <ul>
        {
          todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <span style={{fontSize: '23px'}}
                onClick={() => handleDel(index)}
              >
              &times;
              </span>
            </li>
          ))

        }
      </ul>
    </>
  )
}
export default App;