setTimeout(() => {
    var passwordEyeToggle = function($password, e) {
      e.preventDefault();
      const type = $password.getAttribute('type') === 'password' ? 'text' : 'password';
      $password.setAttribute('type', type);
      this.classList.toggle('bi-eye');
      this.classList.toggle('bi-eye-slash');
    };

    var createReveal = function(passwordId, toggleId) {
      var password = document.getElementById(passwordId);
      if ((password) && (password.style) && (password.style.display !== 'none')){
        var icon = document.createElement("i");
        icon.id = toggleId;
        icon.classList.add('password-reveal', 'bi','bi-eye');
        icon.addEventListener('click', passwordEyeToggle.bind(icon, password));
        password.parentNode.insertBefore(icon, password.nextSibling);
      }
    };

    createReveal('password', 'togglePassword');
    createReveal('password-new', 'togglePasswordNew');
    createReveal('password-confirm', 'togglePasswordConfirm');
}, 5);
