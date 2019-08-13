import React, {useState, useReducer} from 'react'

import {reducer, initialState} from '../reducers/reducer'

export default function ToDoForm(props){
    // console.log(props,'noob')
    const [form, setForm] = useState()
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log('Form', state )

    const handleChanges = (e) => {
        setForm(e.target.value)
    }

    // const toggleItem = (e)


    return(
        <div>
            <div>
                <input type='text' name='form' value={form} onChange={handleChanges}/>
                <button onClick={() => dispatch({type: 'UPDATE_ITEM', payload: form})}>Submit</button>
            </div>
            {state.map((e)=> {
                console.log(e)
                return (
                    <div>
                        <p>{e.item}</p>
                        <button onClick={() => dispatch({type: 'REMOVE_ITEM'})}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}