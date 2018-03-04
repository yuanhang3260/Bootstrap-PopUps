import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

import popups from "./popups.js"

function doSomethingWait(resolve, reject) {
  setTimeout(() => {
    console.log("Done");
    resolve();
    // reject("Failed: remote server error.");
  }, 1000);
}

$("#btn-confirm").click(() => {
  popups.confirm({
    message: "Are you sure to do this?",
    task: doSomethingWait,
    syncWait: true,
  });
});

$("#btn-alert").click(() => {
  popups.alert("You can NOT do this! It is very dangerous operation.");
});
