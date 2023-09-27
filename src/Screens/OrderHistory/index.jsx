import { Card, Table, Tag } from 'antd'
import orderHistory from "../../assets/data/orders-history.json"
export default function OrderHistory() {
    const tableColumns = [
        {
            title: 'OrderID',
            dataIndex: 'orderID',
        },
        {
            title: 'Delivery Address',
            dataIndex: 'deliveryAddress',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (price) => (<span>{price} $</span>)
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status) => (<Tag color={status=="Delivered"?"green":"red"}>{status}</Tag>)
        },
    ]
    return (
        <Card title="Orders History">
            <Table
                rowKey={"orderID"}
                dataSource={orderHistory}
                columns={tableColumns} />
        </Card>
    )
}
