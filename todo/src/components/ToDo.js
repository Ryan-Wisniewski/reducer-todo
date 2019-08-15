// import React from 'react'

// const Todo = props => {
//     // console.log('propsCheck', props)
//     return (
//       <div
//         className='item'
//         onClick={() => props.toggleItem(props.item.id)}
//       >
//         <p>{props.item.task}</p>
//       </div>
//     );
//   };

// export default Todo



// const ToDo = () => {
//     const [list, setList] = useState()

//     const [state, dispatch] = useReducer(reducer, initialState)
//     console.log('state', state)

//     const handleChanges = e => {
//         setList(e.target.value)
//     }

//     return(
//         <div>
//             {!state.completed ? (
//             <label>{state.item}
//                 <input type='checkbox' onClick={() => dispatch({ type: 'TOGGLE_EDITING'})}/>
//             </label>
//             ): (
//                 <div>
//                     <input type='text' name='list' value={list} onChange={handleChanges}/>  
//                     <button onClick={() => dispatch({ type: 'UPDATE_ITEM', payload: list})}>Submit</button>
//                 </div> 
//     )}
//         </div>
        
//     )
// }

// export default ToDo