import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your userId here
        </label>
        <input
          type="text"
          ref={userIdElement}
          placeholder="Your user Id"
          className="form-control"
          id="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          placeholder="How are you feeling today"
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">
          Post content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          placeholder="Tell us more about it"
          className="form-control"
          id="body"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No of Reactions
        </label>
        <textarea
          type="text"
          ref={reactionsElement}
          placeholder="How many people reacted"
          className="form-control"
          id="reations"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hastags here
        </label>
        <textarea
          type="text"
          ref={tagsElement}
          placeholder="Please enter hastags using space"
          className="form-control"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
