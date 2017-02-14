var personArray = [{name: 'Fred', yearsOfExperience: 2}, {name: 'George', yearsOfExperience: '3'}, {name: 'Betty', yearsOfExperience: 4}];
var combinedExperience = 0;

$(document).ready(function(){
  // this block handles any existing employees (if any)
  personArray.forEach(function(employee){
    var name = employee.name;
    var years = employee.yearsOfExperience;
    $('#employeeTable').append('<tr>' +
    '<td>' + employee.name + '</td>'+
    '<td>'+ employee.yearsOfExperience + '</td>'+
    '</tr>');
    combinedExperience += Number(employee.yearsOfExperience);
    $('#totalYears').text(combinedExperience);
  })
// this block handles any dynamically added employees
  $('form').on('submit', function(event){
    event.preventDefault();
    var submissionArray = $(this).serializeArray();
    var newEmployeeObject = {};

    submissionArray.forEach(function(inputField){
      newEmployeeObject[inputField.name] = inputField.value;
    });
    personArray.push(newEmployeeObject);
    // console.log(newEmployeeObject);
    console.log(personArray);
    $('#employeeTable').append('<tr>' +
    '<td>' + newEmployeeObject.name + '</td>'+
    '<td>'+ newEmployeeObject.yearsOfExperience + '</td>'+
    '</tr>');

    combinedExperience += Number(newEmployeeObject.yearsOfExperience);
    $('#totalYears').text(combinedExperience);

    $('.entryFields').val('');


  });
});
