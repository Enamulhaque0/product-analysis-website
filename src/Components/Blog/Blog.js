import React from "react";
import "./Blog.css"

const Blog = () => {
  return (
    <section>
      <h1 className="blog">
        Blog
      </h1>
      <div>
        <div>
          <h2 className="api">What Is Context API?</h2>
          <p className="api-text">
            Context API is a method to pass data to lower level component
            without passing the data to every element. If we need to pass a data
            which is a child component of a child component so we have to pass
            data in every component which is connected with the parent and
            targeted child component, then it will be a great pain. Context has
            made this work too simple. We have to just wrap the parent component
            in context provider then we can use the data in any child component
            we want.
          </p>
        </div>
      </div>
      <div>
        <h2 className="semantic">What Is Semantic Tag?</h2>
        <p className="semantic-text">
          Semantic Tags Are The Tags which describes the purpose of a html tag.
          Before semantic tags were introduced we have to write every element
          inside div. But with semantic we can now specify the element type.
          Like if we need to write article then we can write it inside article
          tag. Same for the header, footer, main, section etc. its now lot more
          easier to understand the markup by semantic tag.{" "}
        </p>
      </div>
      <div>
        <h2 className="api">Difference In Block and Inline-Block?</h2>
        <p className="semantic-text">
          There are 3 type of element in html. Inline, Block and Inline Block.
          There Difference Is:
          <br />
          <br />
          Inline - Inline Element did not start on new line and it takes only
          the width of the element. We can not set width or height in it.
          <br />
          exm: anchor (a) tag
          <br />
          <br />
          Block - Block element start on a new line and it takes whole width of
          the viewport. We can set height or width.
          <br />
          exm: div tag
          <br />
          <br />
          Inline-block - inline-block element did not start on new line and it
          takes only width of the element but we can set width or height to it.
          <br />
          exm: button tag
        </p>
      </div>
    </section>
  );
};

export default Blog;
