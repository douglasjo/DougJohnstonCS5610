

function fillForms(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "form-form.view.html", false);
    ajax.send(null);
    var target=document.getElementById("target1");
    target.innerHTML=ajax.responseText;
}

function fillFields() {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "form-field.view.html", false);
    ajax.send(null);
    var target = document.getElementById("target1");
    target.innerHTML=ajax.responseText;
}




