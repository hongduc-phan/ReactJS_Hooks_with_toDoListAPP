import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import hooksTodoForm from './Hooks/hooksTodoForm';

const TodoForm = ({ addTodo }) => {
  const { value, onChange, reset } = hooksTodoForm('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  }

  return (
    <form
      onSubmit={e => handleSubmit(e)}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  )
};

export default TodoForm;