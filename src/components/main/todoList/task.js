const Task = ( { label, important = false} ) => {    
    const spanStyle = {
        color: important ? 'red' : 'black'
    };
    
    return (
        <span style={spanStyle}>{label}</span>
    );
};

export default Task;