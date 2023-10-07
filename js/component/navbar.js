class NavbarComponent {
    constructor() {
      this.container = document.createElement('div');
      this.container.classList.add('navbar-container');
      this.render();
    }
  
    render() {
      // Memuat konten HTML dari navbar.html
      fetch('./component/navbar.html')
        .then(response => response.text())
        .then(data => {
          this.container.innerHTML = data;
        });
    }
  
    mount(parent) {
      parent.appendChild(this.container);
    }
  
    unmount() {
      this.container.remove();
    }
  }
  
  export default NavbarComponent;
  