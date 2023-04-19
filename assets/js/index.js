let valueDisplays = document.querySelectorAll(".animated-numbers");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

var buttons = document.getElementsByClassName('btn');

function setActive(el) {
  for (var i = 0; i < buttons.length; i++) {
      if (buttons[i] == el) {
        el.classList.toggle("active");
      } else {
        buttons[i].classList.remove('active');
      }
    }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    setActive(this);
  });
}

function html_course_btn(){
  document.getElementById('html-hidden-div').style.display = 'block';
  document.getElementById('css-hidden-div').style.display = 'none';
  document.getElementById('javascript-hidden-div').style.display = 'none';
  document.getElementById('c-hidden-div').style.display = 'none';
  document.getElementById('python-hidden-div').style.display = 'none';
  document.getElementById('html-selector').style.marginBottom = '5px'
}

function css_course_btn(){
  document.getElementById('html-hidden-div').style.display = 'none';
  document.getElementById('css-hidden-div').style.display = 'block';
  document.getElementById('javascript-hidden-div').style.display = 'none';
  document.getElementById('c-hidden-div').style.display = 'none';
  document.getElementById('python-hidden-div').style.display = 'none';
}

function javascript_course_btn(){
  document.getElementById('html-hidden-div').style.display = 'none';
  document.getElementById('css-hidden-div').style.display = 'none';
  document.getElementById('javascript-hidden-div').style.display = 'block';
  document.getElementById('c-hidden-div').style.display = 'none';
  document.getElementById('python-hidden-div').style.display = 'none';
}

function c_course_btn(){
  document.getElementById('html-hidden-div').style.display = 'none';
  document.getElementById('css-hidden-div').style.display = 'none';
  document.getElementById('javascript-hidden-div').style.display = 'none';
  document.getElementById('c-hidden-div').style.display = 'block';
  document.getElementById('python-hidden-div').style.display = 'none';
}

function python_course_btn(){
  document.getElementById('html-hidden-div').style.display = 'none';
  document.getElementById('css-hidden-div').style.display = 'none';
  document.getElementById('javascript-hidden-div').style.display = 'none';
  document.getElementById('c-hidden-div').style.display = 'none';
  document.getElementById('python-hidden-div').style.display = 'block';
}

var count1 = 0;
function question_one(){
  document.getElementById('answer-1').style.display = "block";
  document.getElementById('first-chevron').style.transform = "rotateX(180deg)";
  count1++;
  if(count1 == 2){
    document.getElementById('answer-1').style.display = "none";
    count1 = 0;
    document.getElementById('first-chevron').style.transform = "rotateX(0deg)";
  }
}

var count2 = 0;
function question_two(){
  document.getElementById('answer-2').style.display = "block";
  document.getElementById('second-chevron').style.transform = "rotateX(180deg)";
  count2++;
  if(count2==2){
    document.getElementById('answer-2').style.display = "none";
    count2 = 0;
    document.getElementById('second-chevron').style.transform = "rotateX(0deg)";
  }
}

var count3 = 0;
function question_three(){
  document.getElementById('answer-3').style.display = "block";
  document.getElementById('third-chevron').style.transform = "rotateX(180deg)";
  count3++;
  if(count3==2){
    document.getElementById('answer-3').style.display = "none";
    count3 = 0;
    document.getElementById('third-chevron').style.transform = "rotateX(0deg)";
  }
}

var count4 = 0;
function question_four(){
  document.getElementById('answer-4').style.display = "block";
  document.getElementById('fourth-chevron').style.transform = "rotateX(180deg)";
  count3++;
  if(count3==2){
    document.getElementById('answer-4').style.display = "none";
    count3 = 0;
    document.getElementById('fourth-chevron').style.transform = "rotateX(0deg)";
  }
}