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
        deleteTask: (state, action: PayloadAction<{ task: string; board: string; column: string }>) => {
            console.log(action.payload.board)
            // console.log(state.value[0].columns.map(col => col.name === column))
            // state.value = state.value.map(board => {
            //     return board.name !== action.payload.board ? board
            //             : board.columns.map
            // })
        }
    }
})

export const { getExistingBoards, addBoard, editBoard, deleteBoard, deleteTask } = boardsSlice.actions

export default boardsSlice.reducer