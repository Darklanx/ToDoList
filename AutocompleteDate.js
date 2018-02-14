var fs = require("fs");

loadToDos();
$("#create").click(function() {
    let input_job = $("#input-ToDos").val();

    let findingPos = 0; // use to handle case of multi-slashes
    let slashIndex = input_job.indexOf("/", findingPos);
    let date = "";
    if (slashIndex != -1) {
        let prevSliceIndex = input_job.lastIndexOf(" ", slashIndex) + 1;
        let endSliceIndex = input_job.indexOf(" ", slashIndex);
        if (endSliceIndex == -1) {
            endSliceIndex = input_job.length;
        }
        date += input_job.slice(prevSliceIndex, endSliceIndex);
        let hyperDate = '<a href="#">' + date + '</a>';
        input_job = input_job.replace(date, hyperDate);
    }

    //constructing hyperdate in append


    // $("#table-ToDos").find("tbody").prepend(
    //     $('<tr>').append($('<td>').append(input_job))
    // );
    append_ToDo_toTable(input_job);
    //adding to our log
    fs.appendFile("ToDos.txt", input_job + '\n', function(err) {
        if (err)
            console.log(err);
    });
});

function append_ToDo_toTable(text) {
    $("#table-ToDos").find("tbody").prepend(
        $('<tr>').append($('<td>').append(text))
    );

}

function loadToDos() {
    let filename = "ToDos.txt"
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