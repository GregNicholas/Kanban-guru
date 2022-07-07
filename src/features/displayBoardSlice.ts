import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Board } from "../types"

interface displayBoardState {
    value: Board
}

const initialState: displayBoardState = {
    value: {name: "", columns: []}
}

export const displayBoardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setDisplayBoard: (state, action: PayloadAction<Board>) => {
            state.value = action.payload
        }
    }
})

export const { setDisplayBoard } = displayBoardSlice.actions

export default displayBoardSlice.reducer