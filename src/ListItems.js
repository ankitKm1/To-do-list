import Task from "./Task"

const ListItems = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
        {items.map((item) => 
          <Task
            key={item.id} 
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
    </ul>
  )
}

export default ListItems
