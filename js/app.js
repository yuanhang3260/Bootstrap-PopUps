import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

import popups from "./popups.js"

function doSomething() {
  console.log("Done");
}

$("#btn-confirm").click(() => {
  popups.confirm("Are you sure to do something?", doSomething);
});

$("#btn-alert").click(() => {
  popups.alert("You can NOT do this! It's very dangerous operation.");
});
