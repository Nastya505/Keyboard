const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];
let input = document.querySelector('#input');
function func() {
    let our = '';
    for (let i = 0; i < keyboard.length; i++) {

        if (i == 13 || i == 25 || i == 37 || i == 47) {
            our += '<div class="clearfix"></div>'
        }
        our += '<div class="key" data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = our;
}
func();

document.onkeypress = function (event) {
    console.log(event.code);
    console.log(event.keyCode);


    document.querySelectorAll('#keyboard .key').forEach(function (element) {
        element.classList.remove('active');
    });
    document.querySelector('#keyboard .key[data="' + event.keyCode + '"]').classList.add('active');
}

document.querySelectorAll('#keyboard .key').forEach(function (element) {
    element.onclick = function (event) {
        element.value = input.innerHTML;
        document.querySelectorAll('#keyboard .key').forEach(function (element) {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
    }
})

