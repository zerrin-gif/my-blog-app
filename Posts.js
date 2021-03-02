import {Link} from "react-router-dom";

function Posts(props) {
    return  <section>
    {
      props.blogPosts.map((globe, index) => {
        return (<article key={index}>
          <Link to={'/posts/'+ globe.id }><h2>{globe.title}</h2></Link>
          {/* <p>{globe.body}</p>  */}
        </article>)
      })
    }
  </section>

    
}




export default Posts;