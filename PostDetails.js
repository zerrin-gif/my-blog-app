import React from 'react';

class PostDetails extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  componentDidMount() {
    var pageURL = window.location.href;
    var id = pageURL.substr(pageURL.lastIndexOf('/') + 1);

    fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    .then((response) => response.json())
    .then((json) => this.setState({title: json.title, body: json.body}));
  }
  
  render() {
    return (
      <article>
        <h2>{this.state.title}</h2>
        <p>{this.state.body}</p>
      </article>
    )
  }
}

export default PostDetails; 