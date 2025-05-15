// dealSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define datatypes for TS
interface Deal {
    _id: string;
    heading: string;
    subtitle: string;
    src: string;
    overlaycolor: string;
}

interface DealState {
    deals: Deal[];
    loading: boolean;
    error: string | null;
}

const initialState: DealState = {
    deals: [],
    loading: false,
    error: null,
};

// Async thunk for fetching deals
// Async thunk for fetching deals
export const fetchDeals = createAsyncThunk<Deal[], string>(
    'deals/fetchDeals',
    async (url) => {
        console.log(" URL ", url);
        const response = await axios.get(url);
        console.log('deals API response', response.data);

        // Correct the image paths before returning the data
        const correctedDeals = response.data.map((deal: Deal) => {
            if (deal.src && deal.src.startsWith('uploads\\')) {
                // Replace backslashes with forward slashes and ensure it is relative to the server
                deal.src = `http://localhost:3001/${deal.src.replace(/\\/g, '/')}`;
            }
            return deal;
        });

        return correctedDeals;
    }
);


const dealSlice = createSlice({
    name: 'deals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDeals.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDeals.fulfilled, (state, action: PayloadAction<Deal[]>) => {
                state.loading = false;
                state.deals = action.payload;
            })
            .addCase(fetchDeals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch deals';
            });
    },
});

export default dealSlice.reducer;
