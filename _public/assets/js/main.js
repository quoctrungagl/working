if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback.apply(this, [this[i], i, this]);
        }
    };
}

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
function changeCate() {
    var cates = document.querySelectorAll('.c-product__category');
    cates.forEach(function (cate, i) {
        cate.onclick = function () {
            $('.c-product__category').removeClass('active');
            this.classList.add('active');
        }
    })
}
changeCate();

function mobileMenu() {
    var nav = document.querySelector('.c-mobile');
    var menu = document.querySelector('.mobile__menu');
    var close = document.querySelector('.close');
    nav.onclick = function () {
        menu.classList.add('mobile__menu--close');
    }
    close.onclick = function () {
        menu.classList.remove('mobile__menu--close');
    }
}
mobileMenu();