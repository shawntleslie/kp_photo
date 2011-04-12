/* Author: Shawn Leslie
	URL: http://shawntleslie.com
*/

$(function() {
    var bar = $('#uberbar');
    var top = bar.css('top');
    $(window).scroll(function() {
        if($(this).scrollTop() > 60) {
            bar.stop().animate({'top' : '0px'}, 300);
        } else {
            bar.stop().animate({'top' : top}, 300);
        }
    });
});















