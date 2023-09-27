import { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid"
import {useParams} from "react-router-dom"
import { Divider, Button, Card, Descriptions, List } from "antd"
const img1 = "https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=600"
const img2 = "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=600"
const img3 = "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=600"
const Dishes = [
  { id: uuid(), name: "kebab", quantity: 3, img: img1, price: 18, description: " roasted meat that originates from the Middle East but has been popularised by Iranian cuisine & Turkish" },
  { id: uuid(), name: "sea food", quantity: 2, img: img2, price: 21, description: "including fish and shellfish. Shellfish include various species of molluscs" },
  { id: uuid(), name: "meat soup", quantity: 2, img: img3, price: 15, description: "noodle soup made of stewed or braised beef, beef broth, vegetables and noodles. It exists in various forms throughout East" },
]
function OrderDetail() {
const {id} = useParams()
  return (
    <Card title={`Order ${id}`} style={{ margin: 20, width:"95%",overflow:"hidden" }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Customer"> Massinissa Saoudi</Descriptions.Item>
        <Descriptions.Item label="Customer Adress"> Hawajska 10 Ursynow</Descriptions.Item>
      </Descriptions>
      <Divider />
      <List dataSource={Dishes}
        renderItem={(dish) => {
          return <List.Item key={dish.id}>
            <div style={{ fontWeight: "bold" }}>{dish.name} x {dish.quantity}</div>
            <div>${dish.price}</div>
          </List.Item>
        }} />
        <Divider/>
        <div style={styles.totalSumCont}>
          <h2>Total</h2>
          <h2 style={styles.totalPrice}>$ 78</h2>
        </div>
        <Divider/>
        <div style={styles.buttonCont}>
        <Button block type='danger' size='large' style={styles.button}>
          Declined Order
        </Button>
        <Button block type='primary' size='large' style={styles.button}>
          Accept Order
        </Button>
        </div>

    </Card>
  )
}

const styles={totalSumCont:{
  flexDirection:'row',
  display:'flex'
},
totalPrice:{
  marginLeft:'auto'
},
buttonCont:{
  display:'flex',
  paddingBottom:30
},
button:{
  marginRight:20,
  color:"white",
}}
export default OrderDetail
