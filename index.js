function generateMessage() {
  var disclaimer1 = "To be unbanned, please draw (by hand or MS Paint) and send us a picture of a ";

  var disclaimer2 = "Your picture will be judged on effort, not quality. This is not a joke and we are not singling you out as we request a picture from anyone wishing to be unbanned in /r/AskReddit.\n\nWe request a picture because it is a show of good faith that you really do want to be a rule-abiding member of the community.We look forward to your picture.";
  var objs = ['yam', 'bicycle', 'tennis racket', 'basketball hoop', 'bottle of ketchup', 'fan', 'sloth', 'unicycle', 'book', 'car'];
  var actions = ['eating yams', 'buying a car', 'sitting by a campfire', 'eating cheese'];
  var randObj = objs[Math.floor(Math.random() * objs.length)];
  var randAct = actions[Math.floor(Math.random() * actions.length)];
  var formatted = disclaimer1 + randObj + " " + randAct + ". " + disclaimer2;
  return formatted;
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

$(document).ready(function() {
  var formatted = generateMessage();
  $("#text").val(formatted);
  $("#generate").click(function(){
    var formatted = generateMessage();
    $("#text").val(formatted);
  });
});
