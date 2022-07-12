import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Board, Task, indexedBoard } from "../types"

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
        editBoard: (state, action: PayloadAction<indexedBoard>) => {
            state.value = state.value.map((board, index) => {
                return index !== action.payload.id ? board
                    : action.payload
            })
        },
        deleteBoard: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(board => board.name !== action.payload)
        },
        addTask: (state, action: PayloadAction<{ task: Task; boardName: string; columnName: string }>) => {
            const board = state.value.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => column.name === action.payload.task.status)
            column?.tasks.unshift(action.payload.task)
        },
        editTask: (state, action: PayloadAction<{ task: Task; boardName: string; columnName: string }>) => {
            const board = state.value.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => column.name === action.payload.task.status)
            // column?.tasks.map(tasks => tasks.title === )
        },
        deleteTask: (state, action: PayloadAction<{ taskTitle: string; boardName: string; columnName: string }>) => {
            const board = state.value.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => column.name === action.payload.columnName)
            // const task = column?.tasks.find(task => task.title === action.payload.taskTitle)
            const taskIndex = column?.tasks.map(task => task.title).indexOf(action.payload.taskTitle)
            if(typeof taskIndex === "number"){
                column?.tasks.splice(taskIndex, 1)
            }
        }
    }
})

export const { getExistingBoards, addBoard, editBoard, deleteBoard, addTask, editTask, deleteTask } = boardsSlice.actions

export default boardsSlice.reducer