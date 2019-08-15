import React, {useState, useReducer} from 'react'

import {reducer, initialState} from '../reducers/reducer'

export default function ToDoForm(props){
    // console.log(props,'noob')
    const [form, setForm] = useState()
    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log('Form', state )
    const handleChanges = (e) => {
        setForm(e.target.value)
    }
    return(
        <div>
            <div>
                <input type='text' name='form' value={form} onChange={handleChanges}/>
                <button onClick={() => dispatch({type: 'UPDATE_ITEM', payload: form})}>Submit</button>
            </div>
            {state.map((e)=> {
                return (
                    <div>
                        {e.completed === true ? 
                            (<p className='add-line' onClick={() => dispatch({type: 'TOGGLE_ITEM', payload: e})}>{e.item}</p>
                            ) : (<p onClick={() => dispatch({type: 'TOGGLE_ITEM', payload: e})}>{e.item}</p>)} 

                        <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: e})}>Remove</button>
                    </div>
                )
            })}
            {console.log(state)}
        </div>
    )
}