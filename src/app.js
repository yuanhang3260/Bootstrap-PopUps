import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

import popups from "./popups.js"

function doSomething() {
  console.log("Done");
}

function doLongTask(resolve) {
  var result = 0;
  for (var i = 0; i < 300; i++) {
    for (var j = 0; j < 1000; j++) {
      for (var k = 0; k < 1000; k++) {
        result = result + i + j + k;
      }
    } 
  }
  console.log("result = " + result);
  resolve();
};

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
