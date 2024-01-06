const initialState = {
    arr: [
        { id: 1, nameDoner: "hadas", sum: 100, dedication: "aaa" },
        { id: 2, nameDoner: "maayan", sum: 55, dedication: "bbb"},
        { id: 3, nameDoner: "yael", sum: 20, dedication: "ffff"},
    ],
    selectedDontion: null,
    selectedDontionForEdit: null
}


export const documentReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_DONTION":
         
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        case "SELECT_DONTION_TO_SEE":
            return {
                selectedDontion: action.dontion,
                selectedDontionForEdit: state.selectedDontionForEdit,
                arr: state.arr
            }
        case "DELETE_DONTION":
            return {
                selectedDontion: state.selectedDontion,
                selectedDontionForEdit: state.selectedDontionForEdit,
                arr: state.arr.filter(item => item.id !== action.dontionId)
            }
        case "SELECT_DONTION_FOR_EDIT": return {
            selectedDontion: state.selectedDontion,
            selectedDontionForEdit: action.payload,
            arr: state.arr
        }
        case "SAVE_EDITED_DONTION":
           

            let b = state.arr.map(item => {
                if (item.id == action.payload.id)
                    return action.payload;
                return item;
            })
            return {
                selectedDontion: state.selectedDontion,
                selectedDontionForEdit: null,
                arr: b
            }
        default: return state;
    }



}