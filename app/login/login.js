document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // 阻止默认提交行为
  const formData = new FormData(event.target);
  let message = "";
  for (let [key, value] of formData.entries()) {
    message += `${key}: ${value}\n`;
  }

  console.log(message); // 显示表单数据
});
