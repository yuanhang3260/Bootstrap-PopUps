import $ from "jquery";
import "bootstrap";

import "./css/popups.scss";
import "./css/icon.css";

// ------------------------------- Confirm ---------------------------------- //
var $confirm = $(
  '<div class="modal confirm-modal" data-backdrop="static" tabindex="-1" role="dialog" aria-hidden="true"">' +
    '<div class="modal-dialog modal-sm">' +
      '<div class="modal-content">' +
        '<div class="modal-body">' +
          '<p class="modal-title"></p>' +
          '<p class="error-msg"></p>' +
          '<div class="progress fake-progress">' +
            '<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style="width: 100%"></div>' +
          '</div>' +
        '</div>' +
        '<div class="modal-footer">' +
          '<button type="button" class="btn btn-success button-yes">Yes</button>' +
          '<button type="button" class="btn btn-light button-cancel">Cancel</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>');

var title = $confirm.find(".modal-title");
var progressBar = $confirm.find('.fake-progress');
var errorMsg = $confirm.find(".error-msg");
var yesButton = $confirm.find(".button-yes");
var cancelButton = $confirm.find(".button-cancel");

function resetConfirm(config) {
  title.html(null).hide();
  progressBar.hide();
  errorMsg.html(null).hide();
  yesButton.removeAttr("disabled").show();
}

function showProgressBar() {
  progressBar.show().css("display", "flex");
}

function confirm(config) {
  resetConfirm();

  var message = config.message || null;
  var task = config.task || (function(){});

  var box = $confirm;
  title.html(message).show();

  yesButton.unbind().click(function() {
    var promise = new Promise((resolve, reject) => {
      if (config.syncWait) {
        // Sync execute task and show progress bar.
        yesButton.attr("disabled", true);
        title.hide();
        showProgressBar();
        setTimeout(() => {
          task(resolve, reject);
        }, 20);
      } else {
        // Async execute task and close box immediately.
        setTimeout(task, 20);
        resolve();
      }
    })
    .then(() => {
      progressBar.hide();
      box.modal("hide");
    })
    .catch((err) => {
      progressBar.hide();
      errorMsg.html(err || "Failed :(").show();
      yesButton.hide();
    });
  });

  cancelButton.unbind().click(function() {
    box.modal("hide");
  });

  box.modal("show");
}

// -------------------------------- Alert ----------------------------------- //
var $alert = $(
  '<div class="modal alert-modal" data-backdrop="static" tabindex="-1" role="dialog" aria-hidden="true"">' +
    '<div class="modal-dialog modal-sm">' +
      '<div class="modal-content">' +
        '<div class="modal-body">' +
          '<i class="icon-exclamation-circle-hy alert-icon">&nbsp</i>' +
          '<p class="modal-title alert-content"></p>' +
        '</div>' +
        '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary button-ok">OK</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>');

function alert(config) {
  var message = null;
  if (Object.prototype.toString.call(config) === "[object String]") {
    message = config;
  } else {
    message = config.message;
  }

  var box = $alert;
  box.find(".modal-title").html(message);
  box.find(".button-ok").unbind().click(function() {
    box.modal("hide");
  });

  box.modal("show");
}

export default {
  confirm: confirm,
  alert: alert,
}
