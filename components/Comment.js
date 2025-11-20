import styled from "styled-components";
import CommentList from "./CommentList";
import useLocalStorageState from "use-local-storage-state";

export default function CommentInput() {
    const [comments, setComments] = useLocalStorageState("comments", {defaultValue: []})

  function handleOnSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    setComments({...comments, ...data})
  }
  return (
    <>
    <section>
      <h3>Your Comments:</h3> 
      <CommentList comments={comments}/>

      <h3>Write a Comment</h3>
      <Form onSubmit={handleOnSubmit}>
        <label>Type your comment here:</label>
        <input type="text" name="comment"></input>
        <Button type="submit">Send</Button>
      </Form>
      </section>
    </>
  );
}

const Form = styled.form `
display: flex;
flex-direction: column; 
max-width: 300px;
gap: 1rem;
`
const Button = styled.button`
border-radius: 0.3rem;
background-color: #b1b1b1ff;
`
