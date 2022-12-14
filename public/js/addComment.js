const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log("save comment button has been pressed!!");
    let today = new Date().toLocaleDateString();
    const newComment = {
      content : document.querySelector('#new-comment').value.trim(),
      date : today,
      post_id : document.location.pathname.slice(6,7),
    }
      
    console.log(newComment);
    console.log(document.location.pathname);

    if (newComment) {
      const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        console.log("JS COMMENT RESPONSE OKAYYYYYYYYYYYYYYYY");
        document.location.reload();
      } else {
        alert('Failed to post comment.');
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
  
  