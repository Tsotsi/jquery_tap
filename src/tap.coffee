$.fn.tap=(func)->
  @_flag=false
  @.on 'touchstart',=>
    @_flag=true
    @_timer=setTimeout (=>\
      @_flag=false
    ),300
  .on 'touchend',=>
    if  @_flag then  func()