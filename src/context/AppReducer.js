export default(state,action) =>{
    switch(action.type){
        case "DELETE_TRANSACTION":
            return{
                ...state,
                transactions: state.transactions.filter(trans=> trans.id !== action.payload)
            }

        case "ADD_TRANSACTION":
            return{
                ...state,
                transactions:[action.payload, ...state.transactions]  //adds new transaction to beginning of array
            }
        default:
            return state
    }
}