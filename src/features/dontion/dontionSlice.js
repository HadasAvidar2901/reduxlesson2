import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arr: [
        { id: 1, nameDoner: "hadas", sum: 100, dedication: "aaa" },
        { id: 2, nameDoner: "maayan", sum: 55, dedication: "bbb"},
        { id: 3, nameDoner: "yael", sum: 20, dedication: "ffff"},
    ],
   
}

export const donationSlice = createSlice({
    name: 'donation',//השם הזה רלוונטי רק לדב טולס
    initialState,
    reducers: {
        addToArr: (state, action) => {
            state.arr.push(
                {
                    ...action.payload,

                    id: state.arr[state.arr.length - 1].id + 1
                }
            )
        },
        removeFromArr: (state, action) => {
            let index = state.arr.findIndex(item =>
                item.id == action.payload)
            state.arr.splice(index, 1);
        },
        updateArr:(state,action)=>{
            const { data } = action.payload;
            const itemIndex = state.arr.findIndex(item => item.id ==data. id);
            if (itemIndex != -1) {
                state.arr.splice(itemIndex,1,data)
            //   state.arr[itemIndex] = { ...state.arr[itemIndex], ...updatedData }
              //איך לעשות את הפו של העדכון?
              
        
        }
        


    },
}})



export const { addToArr, removeFromArr ,updateArr} =
    donationSlice.actions

export default donationSlice.reducer