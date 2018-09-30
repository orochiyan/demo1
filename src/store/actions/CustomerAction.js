export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const ADD_CUSTOMER_FAIL = "ADD_CUSTOMER_FAIL";


export const addCustomer = customer => async dispatch => {
    try{
        dispatch({
            type: ADD_CUSTOMER,
            customer: customer
        })
    }catch(err){
        dispatch({
            type: ADD_CUSTOMER_FAIL
        })
    }
}