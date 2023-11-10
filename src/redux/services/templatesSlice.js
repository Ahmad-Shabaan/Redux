import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTemplates = createAsyncThunk(
  "templatesSlice/fetchTemplates",
  async () => {
    const res = await fetch("http://localhost:3000/templates");
    const data = await res.json();
    return data;
  }
);


const templatesSlice = createSlice({
  initialState: { templates: [], status: "idle", error: null },
  name: "templatesSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.templates = action.payload;
        state.status = "succeeded";
      })

      .addCase(fetchTemplates.pending, (state, action) => {
        //
        state.status = "loading";
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        //
        state.status = "failed";
        state.error = action.error.message;
      })

  },
});

export const {} = templatesSlice.actions;
export default templatesSlice.reducer;
