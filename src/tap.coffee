$.fn.tap=(func)->
  func?=->
  @_flag=[]
  @_timer=[]
  @.on 'touchstart',=>
    idx=@.index arguments[0].target
    @_flag[idx]=true
    @_timer[idx]=setTimeout ((idx)=>
      =>
        @_flag[idx]=false
    )(idx),300
  .on 'touchend',=>
    idx=@.index arguments[0].target
    if  @_flag[idx]
      arguments[0].type='tap'
      clearTimeout @_timer[idx]
      func.call @[idx],arguments
  @
