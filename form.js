function validEmail(email) {
  // var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  // return re.test(email);
  return true;
}

// get all data in form and return object
function getFormData() {
  var form = document.getElementById("gform");
  var elements = form.elements; // all form elements
  var fields = Object.keys(elements).map(function(elem) {
    if(elements[elem].name !== undefined) {
      return elements[elem].name;
    } else if(elements[elem].length > 0){
      return elements[elem].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(elem){
    data[elem] = elements[elem].value;
    var str = "";
    if(elements[elem].type === "checkbox"){
      str = str + elements[elem].checked + ", ";
      data[elem] = str.slice(0, -2);
    } else if(elements[elem].length){
      for(var i = 0; i < elements[elem].length; i++){
        if(elements[elem].item(i).checked){
          str = str + elements[elem].item(i).value + ", ";
          data[elem] = str.slice(0, -2);
        }
      }
    }
  });

  // add form-specific values into the data
  data.formDataNameOrder = JSON.stringify(fields);
  data.formGoogleSheetName = form.dataset.sheet || "Email Response"; // default sheet name
  data.formGoogleSendEmail = form.dataset.email || "veredrec@gmail.com"; // no email by default

  console.log("data ", data);
  return data;
}

function handleFormSubmit(event) {
  event.preventDefault();
  var data = getFormData();

  if(!validEmail(data.email) ) {
    console.log("invalid email");
    return false;
  } else {
    console.log("valid email");
    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      document.getElementById('gform').style.display = 'none';
      document.getElementById('thankyou_message').style.display = 'block';
      console.log("removed elements");
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function(elem) {
        return encodeURIComponent(elem) + '=' + encodeURIComponent(data[elem])
      }).join('&');
      console.log("about to send request");
      xhr.send(encoded);
    }
  }
}
function loaded() {
  console.log('contact form submission handler loaded successfully');
  // bind to the submit event of our form
  var form = document.getElementById('gform');
  form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);
