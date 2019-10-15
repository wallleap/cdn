  function bubbles() {
     $.each($(".particletext.bubbles"), function(){
        var bubblecount = ($(this).width()/50)*10;
        for(var i = 0; i <= bubblecount; i++) {
           var size = ($.rnd(40,80)/10);
          
           $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,180)/10) + 's;"></span>');
        }
     });
  }
  jQuery.rnd = function(m,n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
  }
  bubbles();