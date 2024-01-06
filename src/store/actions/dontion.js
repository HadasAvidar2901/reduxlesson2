//כל הפונקציות כאן מחזירות אובייקט פשוט של גאוה סקריםט
//action creatorsמקובל לקרוא להן 
//באובייקט יהיה שדה type
// שהערך שלו יבוא באותיות גדולות
//יכולים להיות שדות נוספים
//הרבה פעמים מקובל לקרוא למידע הנוסף 
//payload]
export const selectDontionToSee = (dontion) => {
    return {
        type: "SELECT_DONTION_TO_SEE",
        dontion: dontion
    }
}


export const deleteDontion = (dontionId) => {
    return {
        type: "DELETE_DONTION",
        dontionId: dontionId
    }
}

export const addDontion = (dontion) => {
    return {
        type: "ADD_DONTION",
        payload: dontion
    }
}
export const selectDontionForEdit = (dontion) => {
    return {
        type: "SELECT_DONTION_FOR_EDIT",
        payload: dontion
    }
}

export const saveEditedDontion= (dontion) => {
    return {
        type: "SAVE_EDITED_DONTION",
        payload: dontion
    }
}