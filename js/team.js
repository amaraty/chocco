$(function() {
    var btn = $('.team__name');
    var activeclass = "team__item_active";

    btn.click(function(event) {
        event.preventDefault();
        var parent = $(this).parent();

        if (parent.hasClass(activeclass)) {
            // есть класс - удаляем
            parent.removeClass(activeclass);
        } else {
            // нет класса показываем этот элемент
            btn.parent().removeClass(activeclass);
            parent.addClass(activeclass);
        }
    });

});