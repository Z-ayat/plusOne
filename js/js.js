let submitPost = document.getElementById('submitPost');
let mdps = document.getElementById('mdps').value;
let rdps = document.getElementById('rdps').value;
let sfrz = document.getElementById('sfrz').value;
let duo = document.getElementById('duo').value;
let trio = document.getElementById('trio').value;
let _4man = document.getElementById('_4man').value;
let clr = document.getElementById('reset');

// Reset Button Function
clr.addEventListener('click', function () {
    document.getElementById('msg').innerHTML = '<span id="dNone" class="dNone">+</span>';
})

function scaleCounters() {

}
submitPost.addEventListener('click', function () {
    // let genedMsg = document.getElementsByName('role');
    // if (document.getElementById('duo').checked) {
    //     var scale = 1;
    // } else if (document.getElementById('trio').checked) {
    //     var scale = 2;
    //     let scaleCounter = document.getElementById('scale');
    //     scaleCounter.innerHTML = "";
    //     document.getElementById('scale').innerText = scale;
    // } else if (document.getElementById('_4man').checked) {
    //     var scale = 3;
    // }
    // for (var checkbox of genedMsg) {
    //     if (checkbox.checked)
    //         document.getElementById('msg').append(scaleCounter + ' ' + checkbox.value + ' ');
    // }

    // document.getElementById("dNone").className = "MyClass";
    // document.getElementById('msg').appendChild(newLine);

})
