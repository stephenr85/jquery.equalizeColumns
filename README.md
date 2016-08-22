# jquery.equalizeColumns
Equalize column heights, or elements within columns.

The equalizeColumns method finds elements with the same top position within a given scope and assumes they are parallel columns, then equalizes their heights.

##Usage
Equalize all of the panels in a set of columns.

`````
var equalizePanels = function(){
  $('.row').equalizeColumns('> .columns > .panel');
};
$(document).ready(equalizePanels);
$(window).on('load resize orientationchange', equalizePanels);
`````
