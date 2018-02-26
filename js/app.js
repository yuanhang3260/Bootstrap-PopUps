import $ from 'jquery'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import popups from "./popups.js"

function doSomething() {
  console.log("Done");
}

$("#btn-confirm").click(() => {
  popups.confirm("Are you sure to do something?", doSomething);
});
