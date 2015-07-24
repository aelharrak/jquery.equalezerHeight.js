/* 
 jQuery equalezerHeight
 author: nnelharram
 description: Simple jQuery Equal Heights for div,block ...
 dependencies: jQuery
 usage:
 $(function() {
     $('.classBlock').equalezerHeight();
 });*/
(function ($) {
    $.fn.equalezerHeight = function () {
        $tmpHeight = 0;
        $this = $(this);
        $this.each(function () {
            var thisHeight = $(this).height();
            if (thisHeight > $tmpHeight) {
                $tmpHeight = thisHeight;
            }
        });
        return $this.height($tmpHeight);
  };
})(jQuery);