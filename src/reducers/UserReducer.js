const initialState = {
    name: 'Fulaninho',
    email: 'visitante@hotmail.com'
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case 'setName':
            return { ...state, name: action.name };
        break;
        case 'setEmail':
            return { ...state, email: action.email };
        break;
    }

    return state;
}