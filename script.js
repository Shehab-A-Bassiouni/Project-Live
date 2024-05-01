var scrollPositionX = 0;
var scrollPositionY = 0;

function smoothScrollbarInit() {
  
  var bodyScroll = document.getElementById("main-scrollbar");

  bodyScrollBar = Scrollbar.init(bodyScroll, {
      damping: 0.1,
      // renderByPixels: !('ontouchstart' in document),
      delegateTo: document,
  });
  
  	bodyScrollBar.addListener(({ offset }) => {  

      scrollPositionX = offset.x;
      scrollPositionY = offset.y;

	});
  
}

smoothScrollbarInit();
bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();







bodyScrollBar.addListener(() => {
	ScrollTrigger.refresh();
});