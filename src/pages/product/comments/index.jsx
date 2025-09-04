import { Input, Button, Form } from "antd"
import './index.scss'
import { useEffect } from "react"
import { createComment, loadComments } from "../slices"
import { useDispatch } from "react-redux"

export const ProductComments = ( {productId} ) => {
  
  const dispatch = useDispatch();
  
  const handleFinish = (values) => {
    // console.log(values)
    const date = new Date().toLocaleString();
    const newComment = {...values, productId, date};
    dispatch(createComment(newComment));
  }

  useEffect(() => {
    dispatch(loadComments())
  }, []);

  return (
    <>
      <div className="productPageComments">
        <h2>Leave your comment</h2>
        <Form onFinish={handleFinish}>
          <Form.Item name="userName">
            <Input placeholder="Your nickname" />
          </Form.Item>
          <Form.Item name="text">
            <Input.TextArea placeholder="Comment" />
          </Form.Item>
          <Button type="primary" htmlType="submit">Add comment</Button>
        </Form>
      </div>
    </>
  );
}