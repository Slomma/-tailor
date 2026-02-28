function scrollToSection(id){
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function registerUser(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  if(!name || !email || !password){
    alert("يرجى ملء جميع الحقول");
    return;
  }

  // حالياً مؤقت - مستقبلاً نربطه بـ Firebase
  console.log("Registering user:", {name, email, role});
  alert(`تم التسجيل كـ ${role}`);
}
