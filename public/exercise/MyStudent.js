class Student {
  constructor(name, surname, age, course) {
    this.name = name
    this.surname = surname
    this.age = age
    this.course = course
  }

  GetOlder(years)
  {
    return this.age = Number(this.age) + Number(years);
  }

  MoveToSecondCourse()
  {

     return this.course  = Number(this.course) +  1;

  }
  ChangeSurname(surname)
  {
    return this.surname = surname;
  }

};

const student = new Student();

function createStudent()
{

  student.name = prompt("Будь ласка, введіть ім'я.","Данило");
  student.surname = prompt("Будь ласка, введіть прізвище.","Шморгун");
  student.course = prompt("Будь ласка, введіть курс.","2");
  student.age = prompt("Будь ласка, введіть вік.","19");
  if (student.name) {
        document.getElementById('name').innerHTML =
        "Ім'я: " + student.name;
  }
  if (student.surname) {
        document.getElementById('surname').innerHTML =
        "Прізвище: " + student.surname;
  }
  if (student.course) {
        document.getElementById('course').innerHTML =
        "Курс: " + student.course;
  }
  if (student.age) {
        document.getElementById('age').innerHTML =
        "Вік: " + student.age;
  }

}


function MoveToSecondCourseHandler()
{
  student.MoveToSecondCourse();
  document.getElementById('course').innerHTML =
  "Курс: " + student.course;
}

function ChangeSurnameHandler()
{
  new_surname = document.getElementById("input_surname").value;
  student.ChangeSurname(new_surname);
  document.getElementById('surname').innerHTML =
  "Прізвище: " + student.surname;

}

function ChangeAgeHandler()
{
  new_age_increment = document.getElementById('input_age').value;
  student.GetOlder(new_age_increment);
  document.getElementById('age').innerHTML =
  "Вік: " + student.age;

}

var result;
var created = false;
var massive = [];
function randomMassive()
{

if (!created) {
  for (var i = 0; i < 10; i++) {
    massive.push(Math.round(Math.random() * 100));
    outMas = document.getElementById('massive').innerHTML+= massive[i] + " ";
  }
  result = max(massive);
  outRes = document.getElementById('result').innerHTML += result;
  created = true;

}


}

function max(mas)
{
  var i;
  var max = -Infinity;
  for(i = 0; i < mas.length; i++)
  {
    if (mas[i]>max) {
      max = mas[i];
    }
  }
  return max;

}
