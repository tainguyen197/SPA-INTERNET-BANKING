
//infoUser
const initialState = [{
    ID: undefined,
    HoTen: undefined,
    Email: undefined,
    Phone: undefined
}]

let id = 0;
export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_USER_INFO':
            return [
                {
                    ...action.payload
                }]; 

        default:
            return state;
    }
}