var personArray = [{name: 'Fred', yearsOfExperience: 2}, {name: 'George', yearsOfExperience: 3}, {name: 'Betty', yearsOfExperience: 4}];
var combinedExperience = 0;
function Object(name, years){
  this.name = name;
  this.yearsOfExperience = parseInt(years);
}

$(document).ready(function(){

  // read each item in array - isolates years of experience
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
  // console.log(combinedExperience);
  $('#submit').on('click', function(){
    var newName = $('#newEmployeeName').val();
    var newYearsExperience = $('#newEmployeeYearsOfExperience').val();
    personArray.push(new Object(newName,newYearsExperience));
    // console.log(personArray);
    $('#employeeTable').find('tr').remove();
    combinedExperience = 0;
    $('.entryFields').val(''); 

    personArray.forEach(function(employee){
      var name = employee.name;
      var years = employee.yearsOfExperience;
      $('#employeeTable').append('<tr>' +
      '<td>' + name + '</td>'+
      '<td>'+ years + '</td>'+
      '</tr>');

      combinedExperience += years;
      $('#totalYears').text(combinedExperience);

    });

  });
});
