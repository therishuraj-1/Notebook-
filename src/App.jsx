import { useEffect, useState } from 'react'
import { Notebook, X } from 'lucide-react';

const App = () => {

const [ heading, setHeading]=useState("")
const [ details, setDetails]=useState("")
const [task,setTask]=useState([])

useEffect( ()=>{
  const savedat=JSON.parse(localStorage.getItem("data")) || [];
 setTask(savedat)
},[setTask])

const addNote= (elem)=> {
  elem.preventDefault()
 if(details==="" || heading===""){
  alert("pleas add somting")
  task(false)
 }
    const newNote = { heading, details }
    const uptask=[...task, newNote]
    setTask(uptask)
    setHeading("")
    setDetails("")
    
    const data =localStorage.setItem("data",JSON.stringify(task) );
    
}
 const dltnot=(idx)=>{
   const newNote =[...task]
   newNote.splice(idx,1)
   setTask(newNote);
   localStorage.setItem("data",JSON.stringify(setTask));

 }
 

  return (
    <div className='flex '>
      <form onSubmit={(elem)=>{addNote(elem)}}>
         <div className='p-10 w-1/2'>
       <h1 className='text-2xl m-2 text-white font-bold'> Add Notes</h1>
       <input value={heading} onChange={(elem)=>{setHeading(elem.target.value)}}
        className='h-10  w-130 m-2 borde border-gray-200 border-2 text-gray-400' type="text" placeholder='Enter Notes Heading' />
       <br />
       <textarea  value={details} onChange={(elem)=>{setDetails(elem.target.value)}}
        className='h-25 w-130 m-2 borde border-gray-200 border-2 text-gray-400' type="text" placeholder='Write Details here' />
       <br />
       <button  className='bg-white m-2 font-bold w-130 h-10'>Add Note</button>
       </div>
      </form>
   
     <div className='p-10 w-1/2' >
      <h3  className='text-2xl m-2 text-white font-bold'>Recent Notes</h3>
      <div className='gap-7 flex flex-wrap '>
      {task.map(function(elem, idx){
        return(
           <div key={idx} className='  relative pt-3 pl-3 h-55 w-40 bg-cover bg-center rounded-xl bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5Ix5SXs4qx7u5XMpVEquy5CS1VBZWOgufw&s")]'>
            <button onClick={()=>{dltnot(idx)}} className='bg-red-500 ml-31 '><X /></button>
            <h3 className='font-bold pb-1'>{elem.heading}</h3>
            <p className='text-gray-900 text-[15px] '>{elem.details}</p>
           
           </div>
          
        )
      })}
      </div>
      

       </div>
    </div>
    
  )
}

export default App;
