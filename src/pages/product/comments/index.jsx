import { Input, Button, Form } from "antd"
import './index.scss'
import { useEffect } from "react"
import { createComment, loadComments } from "../slices"
import { useDispatch, useSelector } from "react-redux"

export const ProductComments = ( {productId} ) => {
  
  const dispatch = useDispatch();
  const { comments } = useSelector(state => state.product);
  const [form] = Form.useForm();
  
  const handleFinish = (values) => {
    // console.log(values)
    const date = new Date().toLocaleString();
    const newComment = {...values, productId, date};
    dispatch(createComment(newComment));
    form.resetFields();
  }

  useEffect(() => {
    dispatch(loadComments(productId))
  }, [productId]);

  return (
    <>
      <div className="productPageComments">
        <h2>Leave your comment</h2>
        <Form form={form} onFinish={handleFinish}>
          <Form.Item name="userName">
            <Input placeholder="Your nickname" />
          </Form.Item>
          <Form.Item name="text">
            <Input.TextArea placeholder="Comment" />
          </Form.Item>
          <Button type="primary" htmlType="submit">Add comment</Button>
        </Form>

        <div>{comments.map((comment) => (

            <div key={comment.id} className="productCommentsBlock">
                <div>{comment.userName}</div>
                <div>{comment.date}</div>
                <div>{comment.text}</div>
            </div>))}</div>
        </div>
    </>
  );
}