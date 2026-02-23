import { toggleItem } from "@ah/store/ui/sidebarSlice";
import { RootState } from "@ah/store/store";
import { useDispatch, useSelector } from "react-redux";

export const useSidebar = () => {
  const dispatch = useDispatch();
  const collapsed = useSelector((state: RootState) => state.Sidebar.collapsed);
  const toggleSidebar = (id: string) => {
    dispatch(toggleItem(id));
  };
  const openItems = useSelector((state: RootState) => state.Sidebar.openItems);
  const toggleNavItem = (id: string) => {
    dispatch(toggleItem(id));
  };

  return {
    collapsed,
    toggleSidebar,
    openItems,
    toggleNavItem,
  };
};
