export default function rootReducer 
(
    state = 
    {
        count : 0
    }
    , 
    action
) 
{
    if (action.type=="COUNT_UP"){
        return {...state, count: state.count +1};
    }
    return state;  
}
  