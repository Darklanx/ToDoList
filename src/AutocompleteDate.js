var fs = require("fs");
$("#input-ToDos").focus();
loadToDos();

function catchDate(text) {
    var regdat = /\b(([1][0-2])|([0]?[1-9]))[\/](([0-2][1-9])|([1-9])|([3][0-1]))\b/i;
    if(text.match(regdat) != null)
        return text.match(regdat)[0];
    else 
        return null
}
$("#create").click(function() {
    if( $("#input-ToDos").val() == "")
        return; // check if has value
    let input_job = $("#input-ToDos").val();
    if (catchDate(input_job) != null) {
        let hyperDate = '<a href="#">' + catchDate(input_job) + '</a>';
        input_job = input_job.replace(catchDate(input_job), hyperDate);
    }
    append_ToDo_toTable(input_job);
    //adding to our log
    fs.appendFile("ToDos.txt", input_job + '\n', function(err) {
        if (err)
            console.log(err);
    });
    $("#input-ToDos").val("");
});

//keyboard 'Enter' 
$("#input-ToDos").on("keydown",function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $("#create").click();
    return false;  
  }
}); 

function append_ToDo_toTable(text) {
    $("#table-ToDos").find("tbody").prepend(
        $('<tr>').append($('<td>').append(text))
    );
}

function loadToDos() {
    let filename =  __dirname + "/ToDos.txt"
    if (fs.existsSync(filename)) {
        let data = fs.readFileSync(filename, 'utf8').split('\n');
        data.forEach((element, index) => {
            if (element.length > 0)
                append_ToDo_toTable(element);
        });
    } else {
        console.log("File not exists");
        fs.writeFile(filename, '', (err) => {
            if (err)
                console.log(err);
        })
    }
}