<<<<<<< HEAD


const liLink = document.querySelector('.sidebar')
const sideBar = document.querySelector('.sidebar');
liLink.addEventListener('click', () => {
    const showDiv = document.createElement('div');
    showDiv.className = 'show-div'
    showDiv.innerHTML = `
         <ul>
                    <li>
                        <i class="fa-solid fa-blender"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-truck-fast"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-shower"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-cart-shopping"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-bed"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-tty"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                </ul>
        `;

    if (sideBar.children[1]) {
        sideBar.removeChild(sideBar.children[1]);
    } else {
        sideBar.appendChild(showDiv);
    }

})

console.log('hello world');


const showSidebar = () => {
    if (sideBar.style.display === 'block') {
        sideBar.style.display = 'none';
    } else {
        sideBar.style.display = 'block'
    }



    const liLink = document.querySelector('.sidebar')
    const sideBar = document.querySelector('.sidebar');
    liLink.addEventListener('click', () => {
        const showDiv = document.createElement('div');
        showDiv.className = 'show-div'
        showDiv.innerHTML = `
         <ul>
                    <li>
                        <i class="fa-solid fa-blender"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-truck-fast"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-shower"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-cart-shopping"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-bed"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-tty"></i><span>Lorem ipsum dolor sit.</span>
                    </li>
                </ul>
        `;

        if (sideBar.children[1]) {
            sideBar.removeChild(sideBar.children[1]);
        } else {
            sideBar.appendChild(showDiv);
        }

    })

    console.log('hello world');


    const showSidebar = () => {
        if (sideBar.style.display === 'block') {
            sideBar.style.display = 'none';
        } else {
            sideBar.style.display = 'block'
        }
    }
}