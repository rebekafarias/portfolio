$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

    });


});

// github
function getProjects(){
    const urlGitHub = 'https://api.github.com/users/rebekafarias/repos';
    var loadingElement = document.getElementById('loading');

    fetch(urlGitHub, {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            showProjects(response);
            loadingElement.style.display = 'none';
        })
        .catch((e) => {
            console.log(`Error -> ${e}`);
        });
}

function showProjects(data) {
    var listElement = document.getElementById('my-projects-list');
    
    listElement.innerHTML = '';

    const maxProjects = 10;
    const projectsToShow = data.slice(0, maxProjects); 

    for (let i = 0; i < projectsToShow.length; i++) {
        let box = document.createElement("div");
        box.classList.add('box');  

        let a = document.createElement("a");
        a.href = projectsToShow[i]['html_url']; 
        a.target = '_blank';
        
        let h3 = document.createElement("h3");
        h3.textContent = projectsToShow[i]['name'];

        let p = document.createElement("p");
        p.textContent = projectsToShow[i]['description'] || "See more"; 

        a.appendChild(h3);
        a.appendChild(p);

        box.appendChild(a);

        listElement.appendChild(box);
    }
}

window.onload = function() {
    getProjects();
};
