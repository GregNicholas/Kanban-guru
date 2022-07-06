import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Board } from "../types"

interface BoardsState {
    value: Board[]
}

const initialState = {
    value: []
}

export const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        getExistingBoards: (state, action: PayloadAction<BoardsState>) => {
            console.log(state.value)
        }
    }
})

export const { getExistingBoards } = boardsSlice.actions

export default boardsSlice.reducer