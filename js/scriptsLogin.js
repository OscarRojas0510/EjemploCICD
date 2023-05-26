"use strict";
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

$(document).ready(function () {
  $("#btnRegistrar").click(function () {
    location.href = "Registro.html";
  });
  $("#verpwd2").click(function () {
    // out
    $("#verpwd2").addClass(
      "animate__animated animate__fadeOut animate__faster"
    );
    $("#validationpwd").attr("type", "text");
    setTimeout(() => {
      $("#verpwd2").removeClass(
        "animate__animated animate__fadeOut animate__faster"
      );
      $("#verpwd2").hide(1);
    }, 500);
  });
  $("#verpwd").click(function () {
    // out
    $("#verpwd2").show(1);
    $("#validationpwd").attr("type", "password");
    $("#verpwd2").addClass("animate__animated animate__fadeIn animate__faster");

    setTimeout(() => {
      $("#verpwd2").removeClass(
        "animate__animated animate__fadeIn animate__faster"
      );
    }, 500);
  });
  $("#swtchChinesse").click(function () {
    $("#h2").html("欢迎!");
    $("#p-1").html("登录");
    $("#lblCorreo").html("电子邮件 :");
    $("#validationmail").attr("placeholder", "邮件@例子.com");
    $("#lblContrasenia").html("密码 :");
    $("#validationpwd").attr("placeholder", "输入您的密码");
    $("#btnLogin").html("登录");
    $("#btnRegistrar").html("注册");
    $("#passOlvidada").html("我忘记了密码");
    $("html").attr("lang", "zh");
    $("#errorCorreo").html("请输入一个有效的电子邮件");
    $("#errorPass").html("请输入一个有效的密码");
    // out
    cambiaIdiomaAnim();
  });
  $("#swtchFrench").click(function () {
    $("#h2").html("Bienvenue!");
    $("#p-1").html("Se connecter");
    $("#lblCorreo").html("Adresse e-mail:");
    $("#validationmail").attr("placeholder", "mail@exemple.com");
    $("#lblContrasenia").html("Mot de passe:");
    $("#validationpwd").attr("placeholder", "Entrez votre mot de passe");
    $("#btnLogin").html("Se connecter");
    $("#btnRegistrar").html("S'inscrire");
    $("#passOlvidada").html("J'ai oublié mon mot de passe");
    $("html").attr("lang", "fr");
    $("#errorCorreo").html("Veuillez entrer une adresse e-mail valide");
    $("#errorPass").html("Veuillez entrer un mot de passe valide");
    // out
    cambiaIdiomaAnim();
  });
  $("#swtchEnglish").click(function () {
    $("#h2").html("Welcome!");
    $("#p-1").html("Log in");
    $("#lblCorreo").html("Email :");
    $("#validationmail").attr("placeholder", "email@example.com");
    $("#lblContrasenia").html("Password :");
    $("#validationpwd").attr("placeholder", "Enter your password");
    $("#btnLogin").html("Log in");
    $("#btnRegistrar").html("Sign up");
    $("#passOlvidada").html("Forgot my password");
    $("#passOlvidada").addClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("html").attr("lang", "en");
    $("#errorCorreo").html("Please enter a valid email address");
    $("#errorPass").html("Please enter a valid password");
    // out
    cambiaIdiomaAnim();
  });
  $("#swtchSpanish").click(function () {
    $("#h2").html("¡Bienvenido!");
    $("#p-1").html("Iniciar sesión");
    $("#lblCorreo").html("Correo electrónico:");
    $("#validationmail").attr("placeholder", "correo@ejemplo.com");
    $("#lblContrasenia").html("Contraseña:");
    $("#validationpwd").attr("placeholder", "Ingrese su contraseña");
    $("#btnLogin").html("Iniciar sesión");
    $("#btnRegistrar").html("Registrarse");
    $("#passOlvidada").html("Olvidé mi contraseña");
    $("html").attr("lang", "es-MX");
    $("#errorCorreo").html("Ingresa un correo válido");
    $("#errorPass").html(" Ingresa una contraseña válida");
    // out
    cambiaIdiomaAnim();
  });
  $("#btnLogin").click(function (event) {
    // Evita que se envíe el formulario automáticamente
    event.preventDefault();
    // Valida el formulario
    let flag = true;
    let value1 = $("#validationmail").val();
    let value2 = $("#validationpwd").val();
    if (value1 && regexEmail.test(value1)) {
      //this.submit();
      $("#validationmail").removeClass("is-invalid");
      flag = flag && true;
    } else {
      $("#validationmail").addClass("is-invalid");
      $("#validationmail").addClass(
        "animate__animated animate__shakeX animate__fast"
      );
      setTimeout(() => {
        $("#validationmail").removeClass(
          "animate__animated animate__shakeX animate__fast"
        );
      }, 800);
      flag = flag && false;
    }
    console.log(value2);
    if (value2.length >= 1) {
      //this.submit();
      $("#validationpwd").removeClass("is-invalid");
      flag = flag && true;
    } else {
      $("#validationpwd").addClass("is-invalid");
      $("#validationpwd").addClass(
        "animate__animated animate__shakeX animate__fast"
      );
      setTimeout(() => {
        $("#validationpwd").removeClass(
          "animate__animated animate__shakeX animate__fast"
        );
      }, 800);
      flag = flag && false;
    }
    if (flag) {
      console.log(flag);
    }
  });
  $("#validationmail").keyup(function (e) {
    if ($(this).hasClass("is-invalid")) {
      $(this).removeClass("is-invalid");
    }
  });
  $("#validationpwd").keyup(function (e) {
    if ($(this).hasClass("is-invalid")) {
      $(this).removeClass("is-invalid");
    }
  });
});

function cambiaIdiomaAnim() {
  $("#h2").addClass("animate__animated animate__fadeIn animate__fast");
  $("#p-1").addClass("animate__animated animate__fadeIn animate__fast");
  $("#lblCorreo").addClass("animate__animated animate__fadeIn animate__fast");
  $("#validationmail").addClass(
    "animate__animated animate__fadeIn animate__fast"
  );
  $("#lblContrasenia").addClass(
    "animate__animated animate__fadeIn animate__fast"
  );
  $("#validationpwd").addClass(
    "animate__animated animate__fadeIn animate__fast"
  );
  $("#btnLogin").addClass("animate__animated animate__fadeIn animate__fast");
  $("#btnRegistrar").addClass(
    "animate__animated animate__fadeIn animate__fast"
  );
  $("#verpwd").addClass("animate__animated animate__fadeIn animate__fast");
  $("#verpwd2").addClass("animate__animated animate__fadeIn animate__fast");
  $("#imgLeon").addClass("animate__animated animate__fadeIn animate__fast");
  $("#passOlvidada").addClass(
    "animate__animated animate__fadeIn animate__fast"
  );
  $("#errorCorreo").addClass("animate__animated animate__fadeIn animate__fast");
  $("#errorPass").addClass("animate__animated animate__fadeIn animate__fast");
  setTimeout(() => {
    $("#h2").removeClass("animate__animated animate__fadeIn animate__fast");
    $("#p-1").removeClass("animate__animated animate__fadeIn animate__fast");
    $("#lblCorreo").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("#validationmail").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("#lblContrasenia").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("#validationpwd").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("#btnLogin").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("#btnRegistrar").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("#passOlvidada").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("#verpwd").removeClass("animate__animated animate__fadeIn animate__fast");
    $("#verpwd2").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("#imgLeon").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("#errorCorreo").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
    $("#errorPass").removeClass(
      "animate__animated animate__fadeIn animate__fast"
    );
  }, 800);
}
