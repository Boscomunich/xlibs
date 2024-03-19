import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../types'
import { ReadDirItem } from 'react-native-fs';

    const initialState: RootState = {
        document: [],
    };

    const fileSlice = createSlice({
        name: 'file',
        initialState,
        reducers: {
            updateDocument: (state, action: PayloadAction<ReadDirItem[]>) => {
                state.document.push(action.payload)
            }
    },
});

export const { updateDocument } = fileSlice.actions

export default fileSlice.reducer;