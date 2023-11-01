function Info (props) {
    return (
        <section className="page" data-page="info">
        <div className="info_item info_item-2">
          <div className="info_content">
            <ul className="info__abt">
              <li className="btn__li">
                <a
                  className="text-btn"
                  href="#"
                  target="_blank"
                  rel="noopener"
                  >Proyects 1 ↗</a>
              </li>
              <li className="btn__li">
                <a
                  className="text-btn"
                  href="#"
                  target="_blank"
                  rel="noopener"
                  >Projects 2 ↗</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="info_item info_item-3">
          <div className="info_content">
            <ul className="info__extra">
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