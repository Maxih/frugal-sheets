$(() => {
  $(".grid-wrapper").on( 'mousewheel DOMMouseScroll', function (e) {

    const e0 = e.originalEvent;

    let deltaY = e0.wheelDeltaY;
    let scrollDistanceY = (deltaY < 0 ? 1 : -1 ) * 30;

    let deltaX = e0.wheelDeltaX;
    let scrollDistanceX = (deltaX < 0 ? 1 : -1 ) * 30;

    this.scrollTop += scrollDistanceY;
    this.scrollLeft += scrollDistanceX;

    e.preventDefault();
  });

  $(".grid-wrapper").scroll(function(e){
    $(".grid-column-labels").css("top", this.scrollTop);
    $(".grid-row-labels").css("left", this.scrollLeft);
    $(".grid-blank-label").css("top", this.scrollTop);
    $(".grid-blank-label").css("left", this.scrollLeft);

  });
});
