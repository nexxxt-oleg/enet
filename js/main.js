document.addEventListener("DOMContentLoaded", () => {

    const navs = document.querySelectorAll('#navTop a');
    navs.forEach(el => {
        el.addEventListener('click', () => {
            var myCollapse = document.getElementById('collapseMenu');
            var collapse = bootstrap.Collapse.getInstance(myCollapse);
            collapse.toggle();
            return true;
        });
    });

});