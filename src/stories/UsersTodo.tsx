import React, {useState} from 'react';
import {Button} from "./Button";
import './UsersTodo.css'




type ToDoType =  {
    userId: number
    id: number
    title: string
    completed: boolean
}


type UserToDoListProps = {
    todoList : ToDoType[]
}

const UserToDoList : React.FC<UserToDoListProps>  = (
    {
        todoList
    }
) => {
    return (
        <div className={'todo__wrapper'}>
            {
                todoList.map((element) => {
                    return (
                        <div key={element.id} className={'todo__wrapper-item'} >{element.title}</div>
                    )
                })
            }
        </div>
    )
}

const UsersTodo = () => {

    const [usersToDo, setUsersToDO] = useState<ToDoType[] | null>(null)

    const  GetUserHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
            .then(response => response.json())
            .then(json =>setUsersToDO(json))
    }

    return (
        <div>
            <Button onClick={GetUserHandler} label={'Get User Todo'} primary={true} />


            {usersToDo && <UserToDoList todoList={usersToDo} />}

        </div>
    );
};

export default UsersTodo;
