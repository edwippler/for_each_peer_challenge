var personArray = [{name: 'Fred', yearsOfExperience: 2}, {name: 'George', yearsOfExperience: 3}, {name: 'Betty', yearsOfExperience: 4}];
var combinedExperience = 0;

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

});
