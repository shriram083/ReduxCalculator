import { ADDITION, DECREMENT, DIVISION, INCREMENT, MULTIPLICATION, SUBTRACTION } from "./actions.type";

export const reducer = ( state = {count:0}, action ) => {
    switch(action.type){
        case INCREMENT : {
            state.count++;
            return {...state};
        }
        case DECREMENT : {
            state.count--;
            return {...state};
        }
        case ADDITION : {
            state.count += Number(action.value);
            return {...state}
        }
        case SUBTRACTION : {
            state.count -= Number(action.value);
            return {...state}
        }
        case MULTIPLICATION : {
            state.count *= Number(action.value);
            return {...state}
        }
        case DIVISION : {
            if(Number(action.value)>state.count)
            {
                alert('wrong input')
                return {...state}
            }
            state.count /= Number(action.value);
            return {...state}
        }
        default : {
            return state;
        }
    }
}