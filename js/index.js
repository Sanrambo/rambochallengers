
// const but = document.querySelector('.button2');
// // const bd = document.getElementsByTagName('body');

// console.log(bd);
// but.addEventListener('click', function () {
//   setTimeout(function () {
//     document.body.classList.add('active');
//   }, 100);

//   document.body.remove('active');
//   document.body.add('final');

// });

function findTotal1(){
  var arr = document.getElementsByName('right');
  var tot=0;
  for(var i=0;i<arr.length;i++){
      if(parseInt(arr[i].value))
          tot += parseInt(arr[i].value);
  }
  document.getElementById('total1').value = tot;
}


function findTotal2(){
  var arr = document.getElementsByName('left');
  var tot=0;
  for(var i=0;i<arr.length;i++){
      if(parseInt(arr[i].value))
          tot += parseInt(arr[i].value);
  }
  document.getElementById('total2').value = tot;
}

function findTotal3(){
  var arr = document.getElementsByName('total');
  var tot=0;
  for(var i=0;i<arr.length;i++){
      if(parseInt(arr[i].value))
          tot += parseInt(arr[i].value);
  }
  document.getElementById('total3').value = tot;
}

function flashRed() {
  document.body.classList.add('red')
  window.setTimeout(function () {
    document.body.classList.remove('red')
  }, 2000)

  var sound = document.getElementById("audio2");
  sound.play()

}

function flashGreen() {
  document.body.classList.add('green')
  window.setTimeout(function () {
    document.body.classList.remove('green')
  }, 1000);

  var sound = document.getElementById("audio");
  sound.play()


}



for (i = 1; i <= 8; i++) {

  const col = document.querySelector('#num-btn' + i);
  const answer = document.querySelector('.hide' + i);

  console.log(answer);
  col.addEventListener('click', function () {

    console.log("hi");
    col.classList.toggle('animate__animated');
    col.classList.toggle('animate__flipOutY');

    col.addEventListener('animationend', () => {
      col.classList.add('op');
      answer.classList.add('show');
      console.log("meeh");
    });


  })

}

// $('button2').on('click', function () {
//   setTimeout(function () {
//     $('body').addClass('active');
//   }, 100);
//   $('body').removeClass('active').addClass('final').trigger('focus').select();
// });




