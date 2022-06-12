var characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

// html IDs: password-length , password1 , password2 , letters-checkbox , numbers-checkbox , symbols-checkbox

function passwordGenerator() {


    for (x = 0; x < 2; x++) {
        var passLength = document.getElementById("password-length").value
        var password = ''
        var passOne = document.getElementById("password1")
        var passTwo = document.getElementById("password2")
            //alert(passLength)
        for (let i = 0; i < passLength; i++) {
            password += characters[Math.floor(Math.random() * characters.length)];
        }
        if (x === 0) {
            passOne.textContent = password
        }
        if (x === 1) {
            passTwo.textContent = password
        }
    }
}