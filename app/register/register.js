document.getElementById("registerForm").addEventListener("submit",function(event){
    console.log("event: ", event);
    event.preventDefault();
    const formData = new FormData(event.target);
    let message = "";
    for (let [key,value] of formData.entries()){
        message = message + `${key}:${value}\n`;
    }
    console.log(message);//显示表单数据
})