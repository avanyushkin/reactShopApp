import { Input, Button, Form } from "antd"
import './index.scss'

export const ProductComments = () => {
  
  const handleFinish = (values) => {
    // console.log(values)
  }

  return (
    <>
      <div className="productPageComments">
        <h2>Leave your comment</h2>
        <Form onFinish={handleFinish}>
          <Form.Item name="name">
            <Input placeholder="Your nickname" />
          </Form.Item>
          <Form.Item name="comment">
            <Input.TextArea placeholer="Comment" />
          </Form.Item>
          <Button type="primary" htmlType="submit">Add comment</Button>
        </Form>
      </div>
    </>
  );
}