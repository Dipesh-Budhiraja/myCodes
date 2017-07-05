

$(function() {//same as window.onload
    // console.log('hello');
    var child1 = $('.child1');
    var child2 = $('.child2');
    child1.parentsUntil('.grandparent');
    child1.parentsUntil('parent');
    child1.parentsUntil('');

    var button = $('#buton');

    button.click(function() {
        console.log(this);
        console.log($(this));//gives an object

    });

    document.querySelectorAll('p');
    document.querySelector('#getText');//this is $('#getText')


    console.log(child1.parent());
});
