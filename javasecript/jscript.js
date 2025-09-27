function changeRandomColor() {
    document.body.style.background = `hsl(${Math.random() * 360}, 70%, 80%)`;
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username === '' || password === '') {
        document.getElementById('errorMsg').textContent = 'الرجاء ملء جميع الحقول';
    } else {
        document.getElementById('errorMsg').textContent = '';
        alert('تم تسجيل الدخول بنجاح');
    }
});
// login button
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (event) {
    
    loginBtn.style.transform = "scale(1.1)";
    loginBtn.style.transition = "transform 0.2s";

    setTimeout(() => {
        loginBtn.style.transform = "scale(1)";
    }, 200);
});

