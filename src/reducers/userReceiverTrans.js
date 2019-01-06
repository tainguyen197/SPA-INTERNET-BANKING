const initialState = [{
    ID: undefined,
    IDUser: undefined,
    Name: undefined,
    Account: undefined
}]

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_ACCOUNT_RECEIVER':
            return [
                ...state,
                {
                    ...action.payload
                }];
        case 'NEW_USER_ACCOUNT_RECEIVER':
            //Cập nhật lên db
            var numberAccount = action.payload.Account;
            var name = action.payload.Name;
            var id = action.payload.ID;
            console.log(numberAccount);
            var res = 'http://localhost:4000/user/newReicever?name=' + name + '&account=' + numberAccount + '&id='+id;
            fetch(res, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "null"
                },
            })
                .catch(function (err) {
                    console.log(err);
                })
            return [
                ...state,
                {
                    ...action.payload
                }];
        case 'DELETE_USER_ACCOUNT_RECEIVER':
                //Cập nhật tài khoảng bị xóa lên server ở đây
                var numberAccount = action.payload.Account;
                console.log(numberAccount); 
                var res = 'http://localhost:4000/user/deleteReceiver?numberAccount=' + numberAccount;
                fetch(res, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Access-Control-Allow-Origin": "null"
                    },
                })
                    .catch(function (err) {
                        console.log(err);
                    })
                return state.filter(account => account.Account !== action.payload.Account)
        case 'UPDATE_LIST_RECEIVER':
            console.log(action)
            return state.map(receiver => {
                console.log(receiver);
                if (receiver.IDUser !== action.payload.ID)
                    return receiver;
                else {
                    console.log('UPDATE');
                    return {
                        ID: receiver.ID,
                        IDUser: receiver.IDUser,
                        Name: action.payload.Name,
                        Account: receiver.Account
                    }
                }
            })
        default:
            return state;
    }
}