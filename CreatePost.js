function CreatePost(props) {

  function handleInput(e) {
    props.setFields(e.target.id, e.target.value)
  }

  return (
    <form>
      <h2>Create a Post</h2>
      <label htmlFor="title">Title</label> <br/>
      <input id="title" type="text" onChange={handleInput} value={props.title}/>
      <br/><br/>
      <label htmlFor="body">Body</label> <br/>
      <textarea id="body" cols="30" rows="10" onChange={handleInput} value={props.body}></textarea>
      <br/><br/>
      <button type="button" onClick={props.storePost}>Create</button>
    </form>
  )
}

export default CreatePost;