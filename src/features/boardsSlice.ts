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
        }
    }
})

export const { getExistingBoards, addBoard } = boardsSlice.actions

export default boardsSlice.reducer