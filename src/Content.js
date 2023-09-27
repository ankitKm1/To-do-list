import ListItems from "./ListItems"


const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ?
        (<ListItems 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />) : (
          <p>Add A New Task to Your To-Do List</p>
        )}
    </main>
  )
}

export default Content
