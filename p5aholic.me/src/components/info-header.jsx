function InfoHeader () {
    return (
        <header className="siteHeader" id="SiteHeader">
        <h1 class="siteHeader_title">Keita Yamada</h1>
        <p class="siteHeader_label">Designer & Developer</p>
        <nav class="siteHeader_nav" x-data>
          <ol>
            <li class="{ 'is-selected': $store.app.currentPath === '/' }">
              <div class="_dot">&#x25cf;</div>
              <a class="_text" href="index.html">Home</a>
            </li>
            <li
              class="{ 'is-selected': $store.app.currentPath === '/projects/' }"
            >
              <div class="_dot">&#x25cf;</div>
              <a class="_text" href="projects/index.html">Projects</a>
            </li>
            <li 
            class="{ 'is-selected:' $store.app.currentPath === '/info/' }"
            >
              <div class="_dot">&#x25cf;</div>
              <a class="_text" href="info/index.html">Info</a>
            </li>
            <li
              class="{ 'is-selected': $store.app.currentPath === '/contact/' }"
            >
              <div class="_dot">&#x25cf;</div>
              <a class="_text" href="contact/index.html">Contact</a>
            </li>
          </ol>
        </nav>
      </header>
    )
};

export default InfoHeader;