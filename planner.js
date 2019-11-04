// (Done)render the date and time in the header   moment.js library
// color code red = current, green= future, grey =past
// able to save to the local storage
// clean up the css
// add calendar selector


$("#currentDay").html(currentDate());
renderDayPlanner();

function currentDate(){
    return moment().format('dddd, MMMM Do, YYYY'); 

}

function rednerColorCoding(){

}

function renderDayPlanner(){
    for(var i = 9;i<12;i++){
        rednerInputGroup(i,"a.m");
    }
    rednerInputGroup(12,"p.m");

    for(var i = 1;i<6;i++){
        rednerInputGroup(i,"p.m");
    }

}

function rednerInputGroup(hour,amPM){
    var inputPrepend = $("<div>").addClass("input-group-prepend hour-entry").append($("<span>").addClass("hour col-sm-12").text(hour +" "+ amPM));
    var inputField = $("<textarea>").addClass("form-control").attr("aria-label","Task details").attr("field-id",`${hour}${amPM}`);
    var inputAppend = $("<div>").addClass("input-group-apppend hour-entry").append($("<button>").addClass("btn btn-outline-secondary col-sm-12 saveBtn").html('<i class="far col-sm-12 fa-save"></i>'));
    var newInputGroup = $("<div>").addClass("input-group").append(inputPrepend,inputField,inputAppend);
    $(".container").append(newInputGroup);
}