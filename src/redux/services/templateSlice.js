import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTemplate = createAsyncThunk(
  "templateSlice/fetchTemplate",
  async (id) => {
    const res = await fetch(`http://localhost:3000/templates/${id}`);
    const data = await res.json();
    return data;
  }
);

export const addTemplate = createAsyncThunk(
  "templateSlice/addTemplate",
  async (template) => {
    const response = await fetch("http://localhost:3000/templates", {
      method: "POST",
      body: JSON.stringify(template),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
);

export const updateTemplate = createAsyncThunk(
  "templateSlice/updateTemplate",
  async (template) => {
    const response = await fetch(
      `http://localhost:3000/templates/${template.id}`,
      {
        method: "PUT",
        body: JSON.stringify(template),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

export const deleteTemplate = createAsyncThunk(
  "templatesSlice/deleteTemplate",
  async (id) => {
    await fetch(`http://localhost:3000/templates/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    return id;
  }
);

// products Section

const initialState = {
  template: [],
  status: "idle",
  error: null,
  generated: false,
};

const templateSlice = createSlice({
  initialState,
  name: "templateSlice",
  reducers: {
    changeItemDetails: (state, action) => {
      state.template.sections[action.payload.secIndex].items[
        action.payload.itemIndex
      ] = action.payload.itemData;
    },
    addItem: (state, action) => {
      state.template.sections[action.payload.secIndex].items.push(
        action.payload.itemData
      );
    },
    changeGenerated: (state, action) => {
      state.generated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplate.fulfilled, (state, action) => {
        state.template = action.payload;
        state.status = "succeeded";
      })

      .addCase(fetchTemplate.pending, (state, action) => {
        //
        state.status = "loading";
      })
      .addCase(fetchTemplate.rejected, (state, action) => {
        //
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateTemplate.fulfilled, (state, action) => {
        state.template = action.payload;
      });
  },
});

export const { changeItemDetails, addItem , changeGenerated} = templateSlice.actions;
export default templateSlice.reducer;
