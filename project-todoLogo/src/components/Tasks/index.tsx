import { useState } from 'react';
import { Task } from '../Task';
import styles from './tasks.module.css';
import Logo from "../../assets/Logo.svg";
import layer from '../Tasks/layer.svg';


    

// const list = [


//     {
//         id: 1,
//         title: 'Estudar',
//         isComplete: false
//     },
   
//     {
//         id: 2,
//         title: 'Correr',
//         isComplete: true
//     }, 
//     {
//         id: 3,
//         title: 'Dormir',
//         isComplete: true
//     },
                                                


// ]


export function Tasks() {
    const [values,setValues] = useState(
        [
            {
                id: 1,
                title: 'Estudar',
                isComplete: false
            },
           
            {
                id: 2,
                title: 'Correr',
                isComplete: true
            }, 
            {
                id: 3,
                title: 'Dormir',
                isComplete: true
            },
        ]
    ); //o list vai iniciar com os valores que já estão nela por padrão

    const listsFilterIsComplete = values.filter((value) => value.isComplete);  //busca todas as tarefas que estão com isComplete true



    const newsfunctions = () => {

        function onChange(ev:any) {// faz o update sempre que os valores do formulário mudar
        const {name,value} = ev.target; // captura o valor atual do input
        }}

function loadContent () {
   alert("teste") 
}

    return(
        <>
        <header className={styles.header}> 
    <img src={Logo} />

    <form className={styles.newOrderClass}>  


    //<input 
    name='for12'
    type='text'
    placeholder="Adicione uma nova tarefa" 
    />

    <button onClick={loadContent}> Criar

    <img src={layer} /> </button> {/*imagem de + */}

    <span id="content"></span>

    </form>
    </header>

    <section className={styles.tasks}>

    <section className={styles.menu}>
    
        <div>
            <p>Tarefas Criadas </p>
            <span> {values.length}
            </span>
        </div>
        <div>
            <p className={styles.colorPurple}>Concluídas</p>
            <span> {listsFilterIsComplete.length} de {values.length}</span>  {/*lists é a const que filtra valores true */}
        </div>
    </section>

            <div className={styles.imput} 
            >


        
        {values.map( task =>  { 
            return <Task 
        
            id={task.id} 
            title={task.title}
            isComplete={task.isComplete} />
           
        })}
        

       
    </div>


    </section>
    </>
    )
    }