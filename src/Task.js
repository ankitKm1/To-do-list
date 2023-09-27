import { FaTrashAlt } from 'react-icons/fa';

const Task = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className='item'>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
        
      />
      <label>
        {item.item} 
      </label> 
      <FaTrashAlt 
        onClick={() => handleDelete(item.id)}
        role="button" 
        tabIndex="0"
        area-aria-labelledby={`Delete ${item.item}`}
    
      /> 

    </li>
  )
}

export default Task
