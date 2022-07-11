import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Board } from "../types"

interface boardsState {
    value: Board[]
}

const initialState: boardsState = {
    value: []
}

export const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        getExistingBoards: (state, action: PayloadAction<Board[]>) => {
            state.value = action.payload
        },
        addBoard: (state, action: PayloadAction<Board>) => {
            state.value.push(action.payload)
        },
        editBoard: (state, action: PayloadAction<Board>) => {
            state.value = state.value.map(board => {
                return board.name !== action.payload.name ? board
                    : action.payload
            })
        },
        deleteBoard: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(board => board.name !== action.payload)
        },
        deleteTask: (state, action: PayloadAction<{ taskTitle: string; boardName: string; columnName: string }>) => {
            console.log(action.payload)
            const board = state.value.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => column.name === action.payload.columnName)
            const task = column?.tasks.find(task => task.title === action.payload.taskTitle)
            // const subtask = task.subtasks.find(sub => sub.title === "")
            const taskIndex = column?.tasks.map(task => task.title).indexOf(action.payload.taskTitle)
            console.log(taskIndex)
            if(typeof taskIndex === "number"){
                column?.tasks.splice(taskIndex, 1)
            }

            // b = state.value.find(b => b.name === board)
            //col = b.columns.find(c => c.name === column)
            //remainingTasks = col.tasks.filter(t => t.title !== task)
            // col.tasks = remainingTasks
            // b.columns = b.columns.filter(c => c.name !== col.name ? c : col)
            //state.value = state.value.map(brd => {
            // return brd !== board ? brd : b
           // })
        }
    }
})

export const { getExistingBoards, addBoard, editBoard, deleteBoard, deleteTask } = boardsSlice.actions

export default boardsSlice.reducer