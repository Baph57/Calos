export const NEW_TABLE_ROW = "NEW_TABLE_ROW"

export default function newTableRow(tableObj){
    return{
        type: NEW_TABLE_ROW,
        tableObj
    }
}