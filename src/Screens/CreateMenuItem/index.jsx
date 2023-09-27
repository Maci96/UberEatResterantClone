import { Form, Input, Button, Card, InputNumber } from "antd"
const {TextArea} = Input
export default function CreateMenuItem() {
    return (
        <Card title="New Menu Item" style={{ margin: 20 }}>
            <Form layout="vertical" wrapperCol={{span:12}}>
                <Form.Item required label="Dish Name">
                    <Input placeholder="Enter Dish Name" />
                </Form.Item>
                <Form.Item required label="Dish Description">
                    <TextArea rows={5} placeholder="Enter Dish Description" />
                </Form.Item>
                <Form.Item required label="Price ($)">
                    <InputNumber />
                </Form.Item>
                <Form.Item >
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
