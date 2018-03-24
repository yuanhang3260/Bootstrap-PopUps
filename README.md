## Bootstrap Popups

This is a simple popup library based on Bootstrap Modal component, which can be used to replace the default window confirm and alert dialog boxes.

<img src="https://raw.githubusercontent.com/yuanhang3260/Bootstrap-PopUps/master/examples/pics.png" alt="example1"/>

### Install
```nohighlight
npm install bootstrap-popups --save
```

### Usage
This library is dependent on JQuery and Bootstrap JS, which are defined as external dependencies. You don't need to bother import them explicitly.
Just run `npm install` and they will be ready for use.

However you need to include bootstrap CSS in your app to make sure styles are correctly applied.

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
import popups from "bootstrap-popups";
```
#### Confirm Box
```javascript
import $ from "jquery";

// Click "Yes" button to confirm. The box will close immediately.
$("#btn-confirm").click(() => {
  popups.confirm({
    message: "Are you sure to do this?",
    task: doSomething,
  });
});

function doSomething() {
  console.log("Done");
}
```
<img src="https://raw.githubusercontent.com/yuanhang3260/Bootstrap-PopUps/master/examples/confirm.png" alt="example1"/>

The dialog box will close immediately after "Yes" button is clicked, and the task will be executed asynchronously.

##### Config Arguments
The `confirm` function accepts a config which has the following attributes.

|   Attribute   |                Description                    |    Type    |
| :-----------: | --------------------------------------------- | :--------: |
| message       | Confirm message to show in the box.           |  string    |
| task          | Task to execute when "Yes" button is clicked. |  function  |
| syncWait      | If set true, the confirm box will wait for the task to finish,<br>and show an animated progress bar. |  bool |

##### Sync Wait Mode
Sometimes you may want the dialog box to wait for the task to finish, e.g. waiting for an AJAX response. To enable this feature, you can use the `syncWait` mode. In this mode, the task must be a promisable which takes arguments (resolve, reject), and call resolve/reject respectively inside the task.

```javascript
// Confirm and sync wait the task to be done.
$("#btn-confirm2").click(() => {
  popups.confirm({
    message: "Are you sure to do this?",
    task: doSomethingWait,
    syncWait: true,
  });
});

function doSomethingWait(resolve, reject) {
  setTimeout(() => {
    console.log("Done");
    resolve();
    // reject("Failed: remote server error.");
  }, 1000);
}
```
After "Yes" button is clicked, the box will show a fake prgoress bar, and disappears after task is done:

<img src="https://raw.githubusercontent.com/yuanhang3260/Bootstrap-PopUps/master/examples/waiting.png" alt="example4"/>

Note your task must call resolve/reject, otherwise the dialog box and progress bar will never close. If reject is called with some error message, the dialog box will finally display this message.

#### Alert Box
`Alert` is simple. It just takes a warning message to show in the box.
```javascript
$("#btn-alert").click(() => {
  popups.alert("You can NOT do this! It is very dangerous operation.");
});
```
<img src="https://raw.githubusercontent.com/yuanhang3260/Bootstrap-PopUps/master/examples/alert.png" alt="example4"/>

#### Use in browser
This library is built as UMD compliant. So it can also be loaded directly in browser either by \<script\> or AMD, with module  
name "popups". Note when used in this way, you need to load JQuery and Bootstrap JS/CSS before this module.
### License
[MIT License](https://raw.githubusercontent.com/yuanhang3260/Bootstrap-PopUps/blob/master/LICENSE)
