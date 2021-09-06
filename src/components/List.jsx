const List = (props) => {
    const todoClasses =["bold"];

    if(props.todo.complete){
        todoClasses.push("line-through");
    }

    return (
    <div>
        <input onChange = {(e) =>{
            props.handleCheckComplete(props.i);
        }} checked = {props.todo.complete} 
        type = "checkbox" />
        <span className ={todoClasses.join(" ")}>{props.todo.text}</span>
        <button onClick = {(e) =>{
            props.handleTodoDelete(props.i);
        }} style ={{marginLeft:"60px", margin:"10px", backgroundColor: "pink"}}
        >Delete</button>
        </div>
    );

}

export default List;