import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/popups.scss';

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

export default {
  confirm : confirm,
}
