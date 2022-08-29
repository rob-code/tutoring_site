class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
    this.innerHTML = `<div class="container py-5">   



  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

    <p class="float-end lead"><a href="#">Back to top</a></p>    

    <div class="col-md-4 d-flex align-items-center"></div>    

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
    </ul>
  </footer>
</div>`;
    }
};

//note the use of the backtick; this encloses a template literal or a template string and avoids escape characters. Note the backtick is not supported by IE/Edge.


window.customElements.define('common-footer', Footer);