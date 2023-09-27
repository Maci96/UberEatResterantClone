import { Button, Card, Table } from 'antd'
import Dishes from "../../assets/data/dishes.json"
import { Link } from 'react-router-dom'
export default function ResterantMenu() {
    const TableColumns = [
        {
            title: "Menu Iem",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render:(price)=>`${price}$`
        },
        {
            title: "Action",
            key: "action",
            render: ()=><Button danger>remove</Button>
        },
    ]
    const renderNewItemButton=()=>(<Link to={'create'}><Button type='primary'>New Menu Item</Button></Link>)
    return (
        <Card extra={renderNewItemButton()} title="Resterant Menu" style={{ margin: 20 }}>
            <Table dataSource={Dishes} columns={ TableColumns} />
        </Card>
    )
}
