
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
    console.log('reducer', state, action)
    switch(action.type){
        case 'UPDATE_ITEM':
            return[
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case 'TOGGLE_ITEM':
            return (
                state.map(item => {
                    if (item.id === action.payload.id){
                        return {
                            item: action.payload.item,
                            completed: !item.completed,
                            id: action.payload.id
                        }
                    }else{
                        return item
                    }
                })
            )
        case 'REMOVE_ITEM':
            return (
                state.filter(item => item.id !== action.payload.id)
            )
        default:
            return state
    }
}

