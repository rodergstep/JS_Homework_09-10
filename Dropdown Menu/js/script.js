$(document).ready(function(){
$('.dropdown').hover(
	function(){
	$(this).children('.sub-menu').slideDown(200,stop()); 
	},
	function(){
	$(this).children('.sub-menu').slideUp(200,stop()); 
	});
	function stop(){
	$('.sub-menu').stop(true, true);
	}
});
// <script type="text/javascript">
// jQuery(document).ready(function(){

// jQuery("div").mouseenter(
//   function () {
// 	jQuery(this).animate({
// 		backgroundColor:"#03C",
//     }, 500 );
// });

// jQuery("div").mouseleave(function() {
// 	jQuery(this).animate({
// 		backgroundColor:"#0CF",
//     }, 500 );
// });

// });
// </script>
