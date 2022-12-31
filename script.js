// all variable declared which required for this functionlty
let input = document.getElementById("input");
let absent = document.getElementById("absent");
let present = document.getElementById("present");
let dateshow = document.getElementById("date");
let ttp = document.getElementById("totalpresent");
let tta = document.getElementById("totalabsent");
let btn = document.getElementById("btn");
let reset = document.getElementById("btn-reset");

// Show date and time  at navbar 
const date = new Date();
dateshow.innerHTML = date;

// show output on absent and present textarea
function Output(erp,notinClass) {

    // if input textarea empty than no output and absent logic run
    if (input.value != "") {
        // absentNu take absent number from erp logic:
        let absentNu = Array();
        for (let i = 116; i <= 187; i++) {

            // if erp containe particular number mins it is present 
            // and not to be required to add in absentNu
            if(notinClass.includes(i) === true) {
                continue;
            }

            if (erp.includes(i) === false) {
                // this function use for push element in absentNu array
                absentNu.push(i);
            }
        }

        // Show output on textarea with numbers
        absent.value = absentNu.join(' ');
        tta.innerHTML = "Absent Students : " + absentNu.length;
        present.value = erp.join(' ');
        ttp.innerHTML = "Present Student : " + erp.length;
    }

}

// When click on "enter" button than all logic is run and output
// display on website
btn.addEventListener("click", function () {
    let present = input.value.split("\n");
    let notinClass = [133,158,160,172,183];
    // this logic convert array elemnts from string to number
    // and also check if number is 0 than it is removed
    for (var i = 0; i < present.length; i++) {
        present[i] = Number(present[i]);

        // if input have 0 than remove it
        if (present[i] === 0) {
            present.splice(i, 1);

            // when number is removed than must be i decrese
            i--;
        }
    }

    // with sort function sort the present numbers in
    // assening order
    present.sort();

    Output(present,notinClass);
})

// reset button
reset.addEventListener("click", function () {

    // making all values and info empty or reset
    input.value = "";
    absent.value = "";
    present.value = "";
    tta.innerHTML = "Absent Students";
    ttp.innerHTML = "Present Student";
})
