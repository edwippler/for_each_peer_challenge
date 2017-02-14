var personArray = [{name: 'Fred', yearsOfExperience: 2}, {name: 'George', yearsOfExperience: 3}, {name: 'Betty', yearsOfExperience: 4}];
var combinedExperience = 0;

$(document).ready(function(){
  personArray.forEach(function(employee){
    var name = employee.name;
    var years = employee.yearsOfExperience;
    $('#employeeTable').append('<tr>' +
    '<td>' + name + '</td>'+
    '<td>'+ years + '</td>'+
    '</tr>');
    combinedExperience += years;
    $('#totalYears').text(combinedExperience);
  })

  $('form').on('submit', function(event){
    event.preventDefault();
    var submissionArray = $(this).serializeArray();
    var newEmployeeObject = {};

    submissionArray.forEach(function(inputField){
      newEmployeeObject[inputField.name] = inputField.value;
    });
    personArray.push(newEmployeeObject);
    // console.log(newEmployeeObject);
    // console.log(personArray);
    $('#employeeTable').append('<tr>' +
    '<td>' + newEmployeeObject.newEmployeeName + '</td>'+
    '<td>'+ newEmployeeObject.newEmployeeYearsOfExperience + '</td>'+
    '</tr>');

    combinedExperience += Number(newEmployeeObject.newEmployeeYearsOfExperience);
    $('#totalYears').text(combinedExperience);

    $('.entryFields').val('');


  });
});
