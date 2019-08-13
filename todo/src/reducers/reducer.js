
export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
},
{
    item: 'Learned about reducers in react',
    completed: false,
    id: 3892985589
}
]

export const reducer = (state, action) => {
    // console.log('reducer', state, action)
    switch(action.type){
        case 'UPDATE_ITEM':
            return[
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    // id: new Date()
                }
            ]
        case 'TOGGLE_ITEM':
            return {
                
            }
        case 'CLEAR_ITEM':
            return {
                ...state,
                item: action.payload,
                completed: !state.completed,                 
            }
        default:
            return state
    }
}

