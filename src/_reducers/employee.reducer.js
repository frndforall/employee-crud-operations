const initialState = { anchor: 'left',
    data: [],
    open: false,
    _id: '',  
    name: '',
    email: '',
    age: '',
    salary: ''
 };


export function employee(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_VENDOR':
            return {
            ...state,
            data: action.data
            };
        case 'VENDOR_DETAIL':
            return {
                ...state,
                id: action._id,  
                name: action.name,
                email: action.email,
                age: action.age,
                salary: action.salary
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }