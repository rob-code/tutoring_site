class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-expand-md navbar-dark fixed-top">
    <div class="container bg-dark2">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link active" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="index.html#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="index.html#how-it-works">How it works</a>
        </li>
        <!--<li class="nav-item">
          <a class="nav-link active" href="#">Blog</a>
        </li>-->
        <li class="nav-item">
          <a class="nav-link active" href="index.html#equationlab">EquationLab</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="contact.html">Get in touch</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
    }
};   
//note the use of the backtick; this encloses a template literal or a template string and avoids escape characters. Note the backtick is not supported by IE/Edge.

window.customElements.define('common-navigation', Navigation);