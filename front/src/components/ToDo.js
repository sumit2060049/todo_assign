import {React,useState} from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({text,updateMode,deleteToDo}) => {
  const [completed, setCompleted] = useState(false);
  function handleClick(){
    setCompleted((prevCompleted) => !prevCompleted);
  }
  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
        <div className="text" style={{ flex: 1 }}>
        
        <input className='che'
        type="checkbox"
        onClick={handleClick}
        //checked={completed}
        //onChange={() => toggleComplete(_id)}

      />{text}</div>
        
        <div className='icons'>
            <BiEdit className='icon' onClick={updateMode} />
            <AiFillDelete  className='icon' onClick={deleteToDo} />
        </div>
    </div>
  )
}

export default ToDo