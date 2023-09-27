import { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid"
import { Divider, Button, Card, Descriptions, List, Table, Tag } from "antd"
import { useNavigate } from 'react-router-dom'
const orders = [
    {
        orderID: "F8762",
        price: 33.99,
        deliveryAddress: "7801 Tanglewood Drive Elkton, MD 21921",
        status: true
    },
    {
        orderID: "A9245",
        price: 94.35,
        deliveryAddress: "81 High Point Dr. Greenwood, SC 29646",
        status: null
    },
    {
        orderID: "Y7902",
        price: 53.99,
        deliveryAddress: "8783 Wakehurst Road Champlin, MN 55316",
        status: false
    },
]
export default function Orders() {
    const navigate = useNavigate()
    const tableColumns=[
        {
            title:'OrderID',
            dataIndex:'orderID',
        },
        {
            title:'Delivery Address',
            dataIndex:'deliveryAddress',
        },
        {
            title:'Price',
            dataIndex:'price',
            render:(price)=>(<span>{price} $</span>)
        },
        {
            title:'Status',
            dataIndex:'status',
            render:(status)=>(<span>{status?(<Tag color='green'>Approuved</Tag>):(status==null?(<Tag color='blue'>pending</Tag>):(<Tag color='red'>declined</Tag>))}</span>)
        },
    ]
    return (
        <Card title='Orders' style={{margin:20}}>
                <Table
                rowKey={"orderID"}
                onRow={ (orderItem=>({
                  onClick:()=>{navigate("/order/"+orderItem.orderID)}   
                }))}
                dataSource={orders}
                columns={tableColumns}
                />

              
        </Card>
    )
}
