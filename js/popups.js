import $ from 'jquery';
import 'bootstrap';

import '../css/popups.scss';
import '../css/icon.css';

var $confirm = $(
  '<div class="modal confirm-modal" data-backdrop="static" tabindex="-1" role="dialog" aria-hidden="true"">' +
    '<div class="modal-dialog modal-sm">' +
      '<div class="modal-content">' +
        '<div class="modal-body">' +
          '<p class="modal-title"></p>' +
        '</div>' +
        '<div class="modal-footer">' +
          '<button type="button" class="btn btn-success button-yes">Yes</button>' +
          '<button type="button" class="btn btn-light button-cancel">Cancel</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>');

function confirm(message, task) {
  var box = $confirm;
  box.find(".modal-title").html(message);
  box.find(".button-yes").unbind().click(function() {
    task();
    box.modal('hide');
  });
  box.find(".button-cancel").unbind().click(function() {
    box.modal('hide');
  });

  box.modal('show');
}

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

function alert(message) {
  var box = $alert;
  box.find(".modal-title").html(message);
  box.find(".button-ok").unbind().click(function() {
    box.modal('hide');
  });

  box.modal('show');
}

export default {
  confirm: confirm,
  alert: alert,
}
