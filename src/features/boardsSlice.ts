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
        }
    }
})

export const { getExistingBoards } = boardsSlice.actions

export default boardsSlice.reducer