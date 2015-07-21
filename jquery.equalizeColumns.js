
jQuery.fn.equalizeColumns = function(selectors, qualifier){
  var $ = jQuery;
  if(selectors && !$.isArray(selectors)) selectors = [selectors];
  
  qualifier || (qualifier = function($item, $row){
     return $item.position().top == $row.last().position().top;
  });
  
  var I = this;
  
  //Find rows by top
  var rows = [$()];
  this.each(function(i, item){
    var $item = $(item),
        $row = rows[rows.length-1];
    if(!$row.length || qualifier.call(I, $item, $row)){
      rows[rows.length-1] = $row.add(item);
    }else{
      rows.push($item);
    }
  });
  
  for(var r = 0; r < rows.length; r++){
    var $row = rows[r];
    if($.isArray(selectors)){
      for(var s = 0; s < selectors.length; s++){
        $row.find(selectors[s]).equalizeBottoms(); 
      }
    }else{
       $row.equalizeBottoms();
    }
  }
  
  return this;
};