import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          alt="coding-image"
        />

        <div className="main-text">
          <h1>Learning React JS is Fun</h1>
          <p>
            Learning React.js is a valuable endeavor for both aspiring and
            experienced web developers. As an open-source JavaScript library,
            React.js provides a robust and efficient platform for building
            dynamic user interfaces and single-page applications. The Virtual
            DOM allows React to update only the necessary components, leading to
            enhanced performance and responsiveness. With its component-based
            architecture, React promotes modularity and reusability, making code
            maintenance and scalability easier. The declarative nature of React
            simplifies the process of defining UI components based on the
            current application state, which leads to cleaner and more readable
            code.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
