!function() {
  var view =View('#topNavBar')
  var controller={
    view:null,
    init:function(view) {
      this.view=view
      this.bindEvents()
    },
    bindEvents:function() {
      var view=this.view
      window.addEventListener('scroll',()=> {
        if (window.scrollY > 0) {
          this.active()
        } else {
          this.deavtive()
        }
      })
      //箭头函数没有this
    },
    active:function() {
      this.view.classList.add('sticky')
    },
    deavtive:function() {
      this.view.classList.remove('sticky')
    }

  }
  controller.init(view)
}.call()