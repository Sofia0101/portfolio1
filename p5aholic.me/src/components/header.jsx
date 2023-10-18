function Header () {
    return (
        <div id="EnterView">
      <div class="_t1">Keita Yamada</div>
      <div class="_t2">Portfolio</div>
    <div id="Page"></div>
      <div id="Background"><canvas></canvas></div>
      <div class="mask" id="Mask">
        <div class="mask_top"></div>
        <div class="mask_bottom"></div>
      </div>
      <div class="frame" id="Frame">
        <div class="frame_line frame_line-left"></div>
        <div class="frame_line frame_line-right"></div>
        <div class="frame_line frame_line-top"></div>
        <div class="frame_line frame_line-bottom"></div>
      </div>
      <div class="theme" id="Theme" x-data>
        <div class="theme_colors" click= "$store.app.toggleTheme()">
          <div
            class="theme_btn"
            className="{ 'is-selected': $store.app.theme === 'light' }"
  >
            <div class="_box"></div>
            <div class="_text">Light</div>
          </div>
          <div
            class="theme_btn"
            className="{ 'is-selected': $store.app.theme === 'dark' }" >
            <div class="_box"></div>
            <div class="_text">Dark</div>
          </div>
        </div>
        <div
          class="theme_btn"
          className="{ 'is-selected': $store.app.fontStyle === 'mono' }"
          click= "$store.app.toggleFontStyle()" >
          <div class="_box"></div>
          <div class="_text">Monospaced</div>
        </div>
      </div>
      </div>
        
    );
}

export default Header;