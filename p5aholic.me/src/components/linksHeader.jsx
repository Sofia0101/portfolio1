function LinksHeader (props) {
    return (
        <nav className="header_nav" x-data>
          <ol className="ol__nav">
            <li className="li__header">
              <div className="_dot"></div>
              <a className="first_text" href="index.html">Home</a>
            </li>
            <li
              className="li__header"
            >
              <div className="_dot"></div>
              <a className="_text" href="#">Projects</a>
            </li>
            <li 
            className="li__header"
            >
              <div className="_dot"></div>
              <a className="_text" href="#">Info</a>
            </li>
            <li
              className="li__header"
            >
              <div className="_dot"></div>
              <a className="_text" href="#">Contact</a>
            </li>
          </ol>
        </nav>
      
    );
}

export default LinksHeader;