'use client'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Defining datatypes for TS
interface Blog {
    _id: string;
    blogTitle: string;
    category: string;
    coverImg: string;
    description: string;
    readTime: number;
    createdAt: string;
    updatedAt: string;
}

interface BlogState {
    blogs: Blog[];
    loading: boolean;
    error: string | null;
}

const initialState: BlogState = {
    blogs: [],
    loading: false,
    error: null,
};

//  async thunk definition
// thunk function for handling fetch blogs
export const fetchBlogs = createAsyncThunk<Blog[], string>(
    'blogs/fetchBlogs',
    async (url) => {
        console.log(" URL ", url);
        const response = await axios.get(url);
        console.log('API response', response.data);

        // Correct the image paths before returning the data
        const correctedBlogs = response.data.data.map((blog: Blog) => {
            if (blog.coverImg && blog.coverImg.startsWith('uploads\\')) {
                // Replace backslashes with forward slashes and add leading slash
                blog.coverImg = '/' + blog.coverImg.replace(/\\/g, '/');
            }
            return blog;
        });

        return correctedBlogs;
    }
);

// thunk function for create blogs
export const createBlog = createAsyncThunk<Blog, Blog>(
    'blogs/createBlog',
    async (newBlog) => {
        const response = await axios.post('/api/blogs', newBlog);
        return response.data; // Returns a single Blog object
    }
);

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<Blog[]>) => {
                state.loading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch blogs';
            })
            .addCase(createBlog.pending, (state) => {
                state.loading = true;
            })
            .addCase(createBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
                state.loading = false;
                state.blogs.push(action.payload);
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to create blog';
            });
    },
});

export default blogSlice.reducer;
