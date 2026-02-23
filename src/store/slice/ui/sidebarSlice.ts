import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SidebarState {
  collapsed: boolean;
  openItems: Record<string, boolean>;
}

const initialState: SidebarState = {
  collapsed: false,
  openItems: {},
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.collapsed = !state.collapsed;
    },
    toggleItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.openItems[itemId] = !state.openItems[itemId];
    },
  },
});

export const { toggleState, toggleItem } = sidebarSlice.actions;
export default sidebarSlice.reducer;
