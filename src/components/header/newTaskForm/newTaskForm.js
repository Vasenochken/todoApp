import './newTaskForm.css';

const NewTaskForm = () => {
    const searchText = "What's needs to be done?";

    return <input className='new-todo' placeholder={ searchText }></input>
}

export default NewTaskForm;