import { Menu } from "antd"
import MenuItem from "antd/es/menu/MenuItem";
import { useNavigate } from "react-router-dom"
const SideMenu = () => {
    const navigate = useNavigate();
    const MenuItems = [
        {
            key: "/",
            label: "Orders",
        },
        {
            key: "menu",
            label: "Menu",
        },
        {
            key: "order-history",
            label: "Order History",
        },
        {
            key: "settings",
            label: "Order Settings",
        },

    ]
    const OnMenuItemClicked = (menuItem) => {
        navigate(menuItem.key)
    }
    return (
        <Menu items={MenuItems} onClick={OnMenuItemClicked} />
    )
}
export default SideMenu;