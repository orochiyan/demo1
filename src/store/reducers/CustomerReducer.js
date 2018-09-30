import {
    ADD_CUSTOMER,
    ADD_CUSTOMER_FAIL
} from "../actions/CustomerAction";
const customers = [];
export default (state = customers, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return [
                ...state.slice(),
                action.customer
            ]
        default:
            return state
    }
}