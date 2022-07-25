let submitPost = document.getElementById('submitPost');
let mdps = document.getElementById('mdps').value;
let rdps = document.getElementById('rdps').value;
let sfrz = document.getElementById('sfrz').value;
let duo = document.getElementById('duo').value;
let trio = document.getElementById('trio').value;
let _4man = document.getElementById('_4man').value;
let clr = document.getElementById('reset');
let scyReq = document.getElementById('sct');

submitPost.addEventListener('click', function getValue() {
    var checkboxes = document.getElementsByName('role');
    var result = "";
    var world = document.querySelector('#world').value;
    var yr = new Date().getFullYear();
    var mnth = new Date().getMonth();
    var day = new Date().getDay();
    var hrs = new Date().getHours();
    var mins = new Date().getMinutes();
    var scnds = new Date().getSeconds();
    var time = hrs + ':' + mins + ':' + scnds;
    var date = yr + "/" + mnth + "/" + day;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value +
                " ";
        }
    }
    if (document.getElementById('duo').checked) {
        let pOne = document.createElement('span');
        pOne.innerText = "1";
        let mssgContainer = document.createElement('div');
        mssgContainer.setAttribute("data-aos", "zoom-in")
        mssgContainer.className = 'genedMsg col-3'
        mssgContainer.classList.add('m-2');
        mssgContainer.innerHTML = `
                            <div class="msgContent d-flex order-last flex-column justify-content-between align-content-between">
                                <div class="top-trick d-flex justify-content-between mb-1">
                                    <span class="clock">${time}</span>
                                    <span class="clock">${date}</span>
                                </div>
                                <h3 id="msg">
                                    <span>+</span>
                                    <span>1 Duo</span>
                                    ${result}
                                    <span id="world">World ${world}</span>
                                    <span id="scyRequired" class="dNone">Scy Required</span>
                                </h3>
                             </div>
                        `;
        document.getElementById('msgs').appendChild(mssgContainer);
    } else if (document.getElementById('trio').checked) {
        let pTwo = document.createElement('span');
        pTwo.innerText = "1";
        let mssgContainer = document.createElement('div');
        mssgContainer.setAttribute("data-aos", "zoom-in")
        mssgContainer.className = 'genedMsg col-3'
        mssgContainer.classList.add('m-2');
        mssgContainer.innerHTML = `
                            <div class="msgContent d-flex flex-column justify-content-between align-content-between">
                                <div class="top-trick d-flex justify-content-between mb-1">
                                    <span class="clock">${time}</span>
                                    <span class="clock">${date}</span>
                                </div>
                                <h3 id="msg">
                                <span>+2</span>
                                <span>Trio</span>
                                ${result}
                                <span id="world">World ${world}</span>
                                <span id="scyRequired" class="dNone">Scy Required</span>
                            </h3>
                            </div>
                        `;
        document.getElementById('msgs').appendChild(mssgContainer);

    } else if (document.getElementById('_4man').checked) {
        let pThree = document.createElement('span');
        pThree.innerText = "1";
        let mssgContainer = document.createElement('div');
        mssgContainer.setAttribute("data-aos", "zoom-in")
        mssgContainer.className = 'genedMsg col-3'
        mssgContainer.classList.add('m-2');
        mssgContainer.innerHTML = `
                            <div class="msgContent d-flex flex-column justify-content-between align-content-between">
                                <div class="top-trick d-flex justify-content-between mb-1">
                                    <span class="clock">${time}</span>
                                    <span class="clock">${date}</span>
                                </div>
                                <h3 id="msg">
                                <span>+3</span>
                                <span>4 Man</span>
                                ${result}
                                <span id="world">World ${world}</span>
                                <span id="scyRequired" class="dNone">Scy Required</span>
                            </h3>
                            </div>
                        `;
        document.getElementById('msgs').appendChild(mssgContainer);
    }
})
document.getElementById('scy').addEventListener('click', function handleClick() {
    if (document.getElementById('scy').checked) {
        document.getElementById('scyRequired').style.display = 'inline';
    } else {
        document.getElementById('scyRequired').style.display = 'none';
    }
})
clr.addEventListener('click', function () {
    document.getElementById('msgs').innerHTML = '';
})
