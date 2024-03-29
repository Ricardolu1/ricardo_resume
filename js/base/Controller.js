/*
Controller({
  init:(view,model){
    this.xxx
    this.yyy
  },
  xxx(){}
  yyy(){}
})
*/
window.Controller=function(options) {
  var initOp=options.init
  let object={
    view:null,
    model:null,
    init:function(view,model) {
      this.view=view
      this.model=model
      this.model.init() 
      initOp.call(this,view,model)
      this.bindEvents.call(this)
    },
  }
  for(let key in options){
    if (key!=='init') {
      object[key]=options[key]
    }
  }
  return object   //controller===object
}