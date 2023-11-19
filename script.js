var scrollspyfeaturesOffset = document.getElementById('scrollspyfeatures').offsetTop;

    function handleNavbarScroll() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        var navbar = document.getElementById('navbar1');

        if (scrollPosition >= scrollspyfeaturesOffset) {
            navbar.classList.add('fixed-top');
            navbar.style.backgroundColor = 'rgb(255, 255, 255)';
        } else {
            navbar.classList.remove('fixed-top');
            navbar.style.backgroundColor = 'transparent';
        }
    }

    function handleSectionScroll() {
        var sections = document.querySelectorAll('.fade-in');

        sections.forEach(function(section) {
            var bounding = section.getBoundingClientRect();

           
            if (bounding.top >= 0 && bounding.top <= window.innerHeight / 2) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleNavbarScroll);
    window.addEventListener('resize', handleSectionScroll);
    window.addEventListener('scroll', handleSectionScroll);

    handleNavbarScroll();
    handleSectionScroll();