

renderDayPlanner();

function renderDayPlanner(){
    for(var i = 9;i<12;i++){
        rednerInputGroup(i,"a.m.");
    }
    rednerInputGroup(12,"p.m.");
    
    for(var i = 1;i<16;i++){
        rednerInputGroup(i,"p.m.");
    }

}

function rednerInputGroup(hour,amPM){
    var inputPrepend = $("<div>").addClass("input-group-prepend hour-entry").append($("<span>").addClass("input-group-text").text(hour +" "+ amPM));
    var inputField = $("<input>").addClass("form-control").attr("aria-label","Task details");
    var inputAppend = $("<div>").addClass("input-group-apppend hour-entry").append($("<button>").addClass("btn btn-outline-secondary saveBtn").html('<i class="far fa-save"></i>'));
    var newInputGroup = $("<div>").addClass("input-group").append(inputPrepend,inputField,inputAppend);
    $(".container").append(newInputGroup);
    console.log($(".container"))
}