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
        editTask: (state, action: PayloadAction<{ prevTaskTitle: string; task: Task; boardName: string; columnName: string }>) =>{
            const board = state.value.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => column.name === action.payload.columnName)
            const taskIndex = column?.tasks.map(task => task.title).indexOf(action.payload.prevTaskTitle)
            if(column && typeof taskIndex === "number" && taskIndex >= 0){
                column.tasks[taskIndex] = action.payload.task
            }
        },
        editSubtasks: (state, action: PayloadAction<{ task: Task; index: number; boardName: string; columnName: string }>) => {
            const board = state.value.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => {
                return column.name === action.payload.columnName
            })
            const task = column?.tasks[action.payload.index]
            if(task){
                task.subtasks = action.payload.task.subtasks
            }
        },
        changeTaskStatus: (state, action: PayloadAction<{ taskStatus: string; index: number; boardName: string; columnName: string }>) => {
            const board = state.value.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => {
                return column.name === action.payload.columnName
            })
            const task = column?.tasks[action.payload.index]
            if(task){
                task.status = action.payload.taskStatus
            }
        },
        deleteTask: (state, action: PayloadAction<{ taskTitle: string; boardName: string; columnName: string }>) => {
            const board = state.value.find(board => board.name === action.payload.boardName)
            const column = board?.columns.find(column => column.name === action.payload.columnName)
            const taskIndex = column?.tasks.map(task => task.title).indexOf(action.payload.taskTitle)
            if(typeof taskIndex === "number"){
                column?.tasks.splice(taskIndex, 1)
            }
        }
    }
})

export const { getExistingBoards, addBoard, editBoard, deleteBoard, addTask, editTask, editSubtasks, changeTaskStatus, deleteTask } = boardsSlice.actions

export default boardsSlice.reducer