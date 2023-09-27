import { useState } from 'react'
import { Button,Card, Form, Input } from 'antd'
import GooglePlaces,{geocodeByAddress, getLatLng} from "react-google-places-autocomplete"
const GP_API_KEY = import.meta.env.VITE_GP_API_KEY;
export default function Settings() {
const [address, setAddress] = useState(null)
const [coordinates, setCordinates] = useState(null)
const getAdrLatLang=async(address)=>{
setAddress(address);
const GeocodeByAddress = await geocodeByAddress(address.label);
const latlang = await getLatLng(GeocodeByAddress[0])
setCordinates(latlang)
}

    return (
        <Card title="Resterant Details" style={{ margin: 20 }}>
            <Form layout='vertical' wrapperCol={{ span: 12 }}>
                <Form.Item label='Resterant Name'>
                    <Input placeholder='Enter Resterant Name Here' />
                </Form.Item>
                <Form.Item label='Resterant Address'>
                    <Input placeholder='Enter Resterant Address Here' />
                </Form.Item>
                <GooglePlaces 
                apiKey={GP_API_KEY}
                selectProps={{
                    value:address,
                    onChange:getAdrLatLang
                }}
            
                />
                <Form.Item label='Resterant Address'>
                    <Button type="primary">
                        Submit
                    </Button>
                </Form.Item>
            
            </Form>
            <span>{coordinates?.lat} - {coordinates?.lng}</span>
        </Card>
    )
}
