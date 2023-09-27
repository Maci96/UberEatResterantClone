import Menu from "../../Screens/ResterantMenu/index"
import CreateMenuItem from '../../Screens/CreateMenuItem'
import OrderHistory from '../../Screens/OrderHistory'
import OrderDetail from '../../Screens/detailOrder'
import Orders from '../../Screens/Orders'
import Settings from "../../Screens/Settings"
import { Routes, Route } from 'react-router-dom'
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="settings" element={<Settings />} />
            <Route path="menu/create" element={<CreateMenuItem />} />
            <Route path="order/:id" element={<OrderDetail />} />
            <Route path="menu" element={<Menu />} />
            <Route path="order-history" element={<OrderHistory />} />
        </Routes>
    )
}
