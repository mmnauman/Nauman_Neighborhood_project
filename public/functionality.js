window.onload = function(){
    let navIcon = document.querySelector(".navbar .fa-bars");
    let navbar = document.querySelector("#navContainer");
    let another = document.querySelector(".toggleNav");
    let sidebar = document.querySelector("#optionsContainer");
    let header = document.querySelector("#pageHead");
    let mainPage = document.querySelector("#mainBody");
    let mapWrap = document.querySelector("#mapContainer");
    let navMenuIcon = document.querySelector(".navbar i");

    let MQ = window.matchMedia("(min-width: 620px)")

    if (MQ.matches) { // If media query matches
   
        if(mapWrap){
    mapWrap.style.width = (window.innerWidth - sidebar.offsetWidth) + 'px';
        }

    //console.log(window.innerWidth - sidebar.offsetWidth);
       
        if(mainPage){
       mainPage.style.height = (window.innerHeight - header.offsetHeight) + 'px';
       sidebar.style.height = (window.innerHeight - header.offsetHeight) + 'px';
      navIcon.addEventListener('click', toggleNav);
        navMenuIcon.className = 'far fa-window-close rotate';
        function toggleNav(){
             sidebar.classList.remove('main');
            sidebar.style.width = '0px';
            if(navMenuIcon.classList.contains('rotate')){
                navMenuIcon.className = 'fas fa-bars';
            }else{
                 navMenuIcon.className = 'far fa-window-close rotate';
            }
            
             if(mapWrap.style.width !== '100%'){
                mapWrap.style.width = '100%';
                mapWrap.style.zIndex = '555';
            }else{
                mapWrap.style.width = '80.6%'
                mapWrap.style.zIndex = '0';
            } 
            
            
            
            if(sidebar.classList.contains('toggleNav')){
                sidebar.classList.remove('toggleNav');
                sidebar.style.width = '0px';
                
            }else{
                sidebar.classList.add('toggleNav');
                sidebar.style.width = '25%';
            }
        }
        }
    
    }

    // Normal Function when the viewport width is less than 500

    let MQ2 = window.matchMedia("(max-width: 620px)")
    sidebar.style.height = '50%';
    if (MQ2.matches) { 
        console.log(sidebar.offsetHeight);
        navIcon.addEventListener('click', toggleNav);
        navMenuIcon.className = 'far fa-window-close rotate';
        function toggleNav(){
             sidebar.classList.remove('main');
            sidebar.style.width = '0px';
            if(navMenuIcon.classList.contains('rotate')){
                navMenuIcon.className = 'fas fa-bars';
            }else{
                 navMenuIcon.className = 'far fa-window-close rotate';
            }
            
             if(mapWrap.style.width !== '100%'){
                mapWrap.style.width = '100%';
                mapWrap.style.height = window.innerHeight + 'px';
            }else{
                mapWrap.style.width = '100%';
                mapWrap.style.height = 'auto';
            } 
            
            
            
            if(sidebar.classList.contains('toggleNav')){
                sidebar.classList.remove('toggleNav');
                sidebar.style.width = '0px';
                sidebar.style.height = '0px';
            }else{
                sidebar.classList.add('toggleNav');
                sidebar.style.width = '100%';
                sidebar.style.height = 'auto';
            }
        }
    }

}
