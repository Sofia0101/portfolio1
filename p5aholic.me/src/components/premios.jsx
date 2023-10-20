function Info (props) {
    return (
        <section className="page" data-page="info">
        <div className="info_item info_item-2">
          <div className="info_content">
            <ul>
              <li>
                <a
                  className="text-btn"
                  href="#"
                  target="_blank"
                  rel="noopener"
                  >Proyects ↗</a>
              </li>
              <li>
                <a
                  className="text-btn"
                  href="#"
                  target="_blank"
                  rel="noopener"
                  >more projects ↗</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="info_item info_item-3">
          <div className="info_content">
            <ul>
              <li>
                <span className="is-light"
                  >Awwwards Independent of the Year<br /></span>
                   <span>2020 Nominee</span>
              </li>
              <li>
                <span className="is-light"
                  >Awwwards Site of the Day<br /></span>
                  <span>Web Graphic Experiments</span>
              </li>
              <li>
                <span className="is-light"
                  >Awwwards Site of the Day<br /></span>
                  <span>100 DAYS OF POETRY</span>
              </li>
            </ul>
          </div>
        </div>
        </section>
    );
}

export default Info;