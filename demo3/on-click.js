"use strict";

class OnClickElements extends React.Component {
  constructor() {
    super();
  }

  // add handler
  // ADDED ↓↓↓
  handleClick(event) {
    alert(`hey! you clicked: ${event.target.id}`);
  }
  // ADDED ↑↑↑

  render() {
    // TODO: Your task is to add onClick listeners to each of the elements within the container-div <div>
    return (
      <div className="container-div">
        <div id="div-element" 
             /* ADDED ↓ */ onClick={(e) => this.handleClick(e)} /* ADDED ↑ */>
          I am DIV
        </div>

        <span id="span-element" 
              /* ADDED ↓ */ onClick={(e) => this.handleClick(e)} /* ADDED ↑ */>
          I am SPAN
        </span>
        <br></br>

        <button id="button-element" 
                /* ADDED ↓ */ onClick={(e) => this.handleClick(e)} /* ADDED ↑ */>
          I am Button
        </button>
        <br></br>

        <a id="link-element" href=""
           /* ADDED ↓ */ onClick={(e) => this.handleClick(e)} /* ADDED ↑ */>
          I am LINK
        </a>

        <div
          id="div-element-2"
          className="button"
          /* ADDED ↓ */ onClick={(e) => this.handleClick(e)} /* ADDED ↑ */
        >
          I am DIV
        </div>

        <span
          id="span-element-2"
          className="button"
          /* ADDED ↓ */ onClick={(e) => this.handleClick(e)} /* ADDED ↑ */
        >
          I am SPAN
        </span>
        <br></br>

        <button
          id="button-element-2"
          className="button"
          /* ADDED ↓ */ onClick={(e) => this.handleClick(e)} /* ADDED ↑ */
        >
          I am Button
        </button>
        <br></br>

        <a
          id="link-element-2"
          className="button"
          href=""
          /* ADDED ↓ */ onClick={(e) => this.handleClick(e)} /* ADDED ↑ */
        >
          I am LINK
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(OnClickElements),
  document.getElementById("root")
);
