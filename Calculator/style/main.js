document.getElementById('add').onclick = addStuff
document.getElementById('sub').onclick = subStuff
document.getElementById('multi').onclick = multiStuff
document.getElementById('divi').onclick = diviStuff
console.log("script loaded")
function addStuff(){console.log("starts")
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = val1 + val2
  document.getElementsByTagName('h2')[0].innerHTML = sum
}
  function subStuff(){
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    var sum = val1 - val2
    document.getElementsByTagName('h2')[0].innerHTML = sum
  }

  function multiStuff(){
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    var prod = val1 * val2
    document.getElementsByTagName('h2')[0].innerHTML = prod
}

  function diviStuff(){
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    var sum = val1 / val2
    document.getElementsByTagName('h2')[0].innerHTML = sum
  }


  // $(document).ready(function(){
  //
  //
  //   $('#add').on('click', function(){console.log()
  //     var val1 = parseInt($('#val1').val())
  //     var val2 = parseInt($('#val2').val())
  //     $('#h2').html(val1 + val2)
  //   })
  //
  //   $('#sub').on('click', function(){console.log()
  //     var val1 = parseInt($('#val1').val())
  //     var val2 = parseInt($('#val2').val())
  //     $('#h2').html(val1 - val2)
  //   })
  //
  //   $('#multi').on('click', function(){console.log()
  //     var val1 = parseInt($('#val1').val())
  //     var val2 = parseInt($('#val2').val())
  //     $('#h2').html(val1 * val2)
  //   })
  //
  //   $('#divi').on('click', function(){console.log()
  //     var val1 = parseInt($('#val1').val())
  //     var val2 = parseInt($('#val2').val())
  //     $('#h2').html(val1 / val2)
  //   })
  //
  // })
