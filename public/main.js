$(document).ready(function() {
  var input = document.querySelector('.add-task input')
  var todos = document.querySelector('.to-do')
  var todosUL = document.querySelector('.to-do ul')
  var inProgress = document.querySelector('.in-progress')
  var inProgressUL = document.querySelector('.in-progress ul')
  var done = document.querySelector('.done')
  var doneUL = document.querySelector('.done ul')
  var undo = document.querySelector('.undo button')
  var dragged, icon = "icon.png"
  var deleted, deletedParent
  

  undo.addEventListener('click', function() {
    $(deletedParent).append(deleted)
    var todoItems = document.querySelectorAll('.to-do ul li')
    var inProgressItems = document.querySelectorAll('.in-progress ul li')
    var doneItems = document.querySelectorAll('.done ul li')
    $('.in-progress .count').html(inProgressItems.length)
    $('.done .count').html(doneItems.length)
    $('.to-do .count').html(todoItems.length)
    $('.total-count span').html(todoItems.length + inProgressItems.length + doneItems.length)
  })  
  
  input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13 && e.target.value.length) {
      var task = e.target.value
      $(todosUL).append('<li draggable="true">' + task + '<span><img src=' + icon + ' /></span>' + '</li>')
      var todoItems = document.querySelectorAll('.to-do ul li')
      var inProgressItems = document.querySelectorAll('.in-progress ul li')
      var doneItems = document.querySelectorAll('.done ul li')
      $('.to-do .count').html(todoItems.length)
      $('.total-count span').html(todoItems.length + inProgressItems.length + doneItems.length)  
      e.target.value = ""
    }
  })
  
  todosUL.addEventListener('click', function(e) {
    if(e.target.nodeName === 'IMG') {
      deleted = e.target.parentNode.parentNode
      deletedParent = e.target.parentNode.parentNode.parentNode
      $(e.target.parentNode.parentNode).remove()
      var todoItems = document.querySelectorAll('.to-do ul li')
      var inProgressItems = document.querySelectorAll('.in-progress ul li')
      var doneItems = document.querySelectorAll('.done ul li')
      $('.to-do .count').html(todoItems.length)
      $('.total-count span').html(todoItems.length + inProgressItems.length + doneItems.length)
    }
  })
  
  inProgressUL.addEventListener('click', function(e) {
    if(e.target.nodeName === 'IMG') {
      deleted = e.target.parentNode.parentNode
      deletedParent = e.target.parentNode.parentNode.parentNode
      $(e.target.parentNode.parentNode).remove()
      var todoItems = document.querySelectorAll('.to-do ul li')
      var inProgressItems = document.querySelectorAll('.in-progress ul li')
      var doneItems = document.querySelectorAll('.done ul li')
      $('.in-progress .count').html(inProgressItems.length)
      $('.total-count span').html(todoItems.length + inProgressItems.length + doneItems.length)
    }
  })
  
  doneUL.addEventListener('click', function(e) {
    if(e.target.nodeName === 'IMG') {
      deleted = e.target.parentNode.parentNode
      deletedParent = e.target.parentNode.parentNode.parentNode
      $(e.target.parentNode.parentNode).remove()
      var todoItems = document.querySelectorAll('.to-do ul li')
      var inProgressItems = document.querySelectorAll('.in-progress ul li')
      var doneItems = document.querySelectorAll('.done ul li')
      $('.done .count').html(doneItems.length)
      $('.total-count span').html(todoItems.length + inProgressItems.length + doneItems.length)
    }
  })
  
  todosUL.addEventListener('dragstart', function(e) {
    dragged = e.target
    var ele = '<li draggable="true">' + e.target.innerHTML + '<span><img src=' + icon + ' /></span>' + '</li>'
    e.target.style.opacity = 0.5
    e.dataTransfer.setData("text/plain", ele)
  })
  
  inProgressUL.addEventListener('dragstart', function(e) {
    dragged = e.target
    var ele = '<li draggable="true">' + e.target.innerHTML + '<span><img src=' + icon + ' /></span>' + '</li>'
    e.target.style.opacity = 0.5
    e.dataTransfer.setData("text/plain", ele)
  })
  
  doneUL.addEventListener('dragstart', function(e) {
    dragged = e.target
    var ele = '<li draggable="true">' + e.target.innerHTML + '<span><img src=' + icon + ' /></span>' + '</li>'
    e.target.style.opacity = 0.5
    e.dataTransfer.setData("text/plain", ele)
  })
  
  todosUL.addEventListener('dragend', function(e) {
    e.target.style.opacity = ""
  })
  
  inProgressUL.addEventListener('dragend', function(e) {
    e.target.style.opacity = ""
  })
  
  doneUL.addEventListener('dragend', function(e) {
    e.target.style.opacity = ""
  })
  
  inProgress.addEventListener('drop', function(e) {
    e.preventDefault()
    var data = e.dataTransfer.getData("text")
    
    $(dragged).remove()
    $('.in-progress ul').append(data)
    
    var todoItems = document.querySelectorAll('.to-do ul li')
    var inProgressItems = document.querySelectorAll('.in-progress ul li')
    var doneItems = document.querySelectorAll('.done ul li')
    $('.to-do .count').html(todoItems.length)
    $('.in-progress .count').html(inProgressItems.length)
    $('.done .count').html(doneItems.length)
    $('.total-count span').html(todoItems.length + inProgressItems.length + doneItems.length)
  })
  
  todos.addEventListener('drop', function(e) {
    e.preventDefault()
    var data = e.dataTransfer.getData("text")
    
    $(dragged).remove()
    $('.to-do ul').append(data)
    
    var todoItems = document.querySelectorAll('.to-do ul li')
    var inProgressItems = document.querySelectorAll('.in-progress ul li')
    var doneItems = document.querySelectorAll('.done ul li')
    $('.to-do .count').html(todoItems.length)
    $('.in-progress .count').html(inProgressItems.length)
    $('.done .count').html(doneItems.length)
    $('.total-count span').html(todoItems.length + inProgressItems.length + doneItems.length)
  })
  
  done.addEventListener('drop', function(e) {
    e.preventDefault()
    var data = e.dataTransfer.getData("text")
    
    $(dragged).remove()
    $('.done ul').append(data)
    
    var todoItems = document.querySelectorAll('.to-do ul li')
    var inProgressItems = document.querySelectorAll('.in-progress ul li')
    var doneItems = document.querySelectorAll('.done ul li')
    $('.to-do .count').html(todoItems.length)
    $('.in-progress .count').html(inProgressItems.length)
    $('.done .count').html(doneItems.length)
    $('.total-count span').html(todoItems.length + inProgressItems.length + doneItems.length)
  })
  
  inProgress.addEventListener('dragover', function(e) {
     if (dragged.nodeName !== 'IMG') {
       e.preventDefault()
     }
  })
  
  todos.addEventListener('dragover', function(e) {
     if (dragged.nodeName !== 'IMG') {
       e.preventDefault()
     }
  })
  
  done.addEventListener('dragover', function(e) {
     if (dragged.nodeName !== 'IMG') {
       e.preventDefault()
     }
  })
  
})