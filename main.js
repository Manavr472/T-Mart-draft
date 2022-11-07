class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <head>
                <title>Tmart</title>
                <link rel="stylesheet" type="text/css" href="main.css">
                <link rel="stylesheet" type="text/css" href="chat.css">
                <link rel="stylesheet" type="text/css" href="sell.css">
            </head>

            <header>

                <div class="main">
                    <ul>
                      <li>
                        <div class="dropdown">
                        <button class="dropbtn">Sell</button>
                        <div class="dropdown-content">
                        <a href="sell.html">Books</a>
                        <a href="sell.html">Equipments</a>
                        </div>
                        </div></li>
            
                        <li>
                            <div class="dropdown">
                             <button class="dropbtn">Category</button>
                            <div class="dropdown-content">
                            <a href="books.html">Books</a>
                            <a href="equipments.html">Equipments</a>
                            </div>
                        </div></li>
                        <li><a href="home.html">Home</a></li>
                        <li><a href=#>Contact</a></li>
                    </ul>
                </div>
                <div class="logo">
                    <u>
                        <li>
                            <a href="home.html">T-MART</a>
                        </li>
                    </u>
                </div>

            </header>
        `
    }
}

customElements.define('my-header', MyHeader)