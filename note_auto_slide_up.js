!function() {
  // setTimeout(function() {
  //   siteWelcome.classList.remove("active")
  // }, 500)  国内网速快，可以不要loading动画
  //添加offSet类
  var specialTags = document.querySelectorAll("[data-x]")
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add("offSet")
  }
  window.addEventListener("scroll", function() {
    findClosestAndRemoveOffset()
  })

  /* helper */
  function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll("[data-x]")
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
      if (
        Math.abs(specialTags[i].offsetTop - 115 - window.scrollY) <
        Math.abs(specialTags[minIndex].offsetTop - 115 - window.scrollY)
      ) {
        minIndex = i
      }
    } //这个循环是找到距离scrollY最近的那个元素，也是离视口顶部最近的元素，那我就给它加个class让它动一下
    specialTags[minIndex].classList.remove("offSet")
    // for (let i = 0; i < specialTags.length; i++) {
    //   specialTags[i].classList.remove("active") //一开始把所有的红框都消掉
    // } //这个循环是把所有的active消掉，在我给距离最小的加active之前
    // specialTags[minIndex].classList.add("active") //只在最小的地方加active
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]') //这一步很关键，又能让id是变量，又要保证括号里面填的是字符串
    let li = a.parentNode
    let brotherAndme = li.parentNode.children
    for (let i = 0; i < brotherAndme.length; i++) {
      brotherAndme[i].classList.remove("highLight")
    }
    li.classList.add("highLight")
  }
  let liTags = document.getElementsByClassName("menuTrigger")
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function(x) {
      let li = x.currentTarget
      li.classList.add("active")
    }
    liTags[i].onmouseleave = function(x) {
      let li = x.currentTarget
      li.classList.remove("active")
    }
  }
}.call()
