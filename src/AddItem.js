import React from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        id='addItem'
        placeholder='Add A New Task'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
    />
    <button type='submit'>+</button>  
    </form>
  )
}

export default AddItem
