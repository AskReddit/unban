function generateMessage() {
  var disclaimer1 = "To be unbanned, please draw (by hand or MS Paint) and send us a picture of a ";

  var disclaimer2 = "Your picture will be judged on effort, not quality. This is not a joke and we are not singling you out as we request a picture from anyone wishing to be unbanned in /r/AskReddit.\n\nWe request a picture because it is a show of good faith that you really do want to be a rule-abiding member of the community.\n\nYou can upload the picture to an image host like [imgur.com](https://www.imgur.com)  (imgur doesn't require an account to upload) and send us a link here. We look forward to your picture.";
  var objs = ['yam', 'bicycle', 'tennis racket', 'basketball hoop', 'bottle of ketchup', 'fan', 'sloth', 'unicycle', 'book', 'car', 'tightrope walker', 'dog', 'bowl of soup', 'blanket', 'chair', 'slinky', 'foam finger', 'trophy', 'desk', 'flashlight', 'toothpick', 'washing machine', 'balloon', 'camera', 'needle', 'mop', 'rubber band', 'window', 'fridge', 'shovel', 'flowers', 'wagon', 'teddy bear', 'mouse', 'pair of pants', 'belt buckle', 'dollar bill', 'coat hanger', 'couch', 'pillow', 'seatbelt', 'pencil', 'fork', 'spork', 'spoon', 'bottle of lotion', 'tire swing', 'chocolate bar', 'tomato', 'newspaper', 'CD', 'rubber duck', 'toothbrush', 'steak', 'piano', 'saxaphone', 'tricycle', 'mouse', 'blanket', 'keyboard', 'bar of soap', 'roll of tape', 'car', 'box', 'bottle of shampoo', 'paper bag', 'necktie', 'tube of toothpaste', 'helmet', 'sticky note', 'radio', 'pen', 'ice cube tray', 'flag', 'rusty nail', 'deck of playing cards', 'magnet', 'carrot', 'tire swing', 'credit card', 'toilet', 'cinder block', 'pair of socks', 'dump truck', 'banana', 'stop sign', 'rubber duck', 'sheet of paper', 'plate'];
  var actions = ['buying a car', 'sitting by a campfire', 'eating cheese', 'robbing a bank',' riding a bike', 'going to sleep', 'reading a book', 'building a house', 'watching a movie', 'dressed up as Santa', 'gambling at a casino', 'going to Disney World', 'drinking something', 'acting in a play', 'protesting something', 'running for president', 'bidding on something at an auction', 'running a marathon', 'sliding down a slide', 'exploring Mars', 'paddling a canoe', 'visiting Washington, DC', 'going to a concert', 'baking a cake', 'directing a movie', 'flying an airplane', 'washing the dishes', 'watching the sunrise', 'playing baseball', 'planting a tree', 'exploring the bottom of the ocean', 'escaping from jail', 'starting a forest fire', 'walking on a tightrope', 'driving a car', 'driving a race car', 'playing the cello', 'winning an award', 'wearing a hat', 'working on a farm', 'getting married', 'driving a go-kart', 'playing a videogame', 'competing in a hotdog eating contest', 'watching a fireworks show', 'driving a firetruck', 'sunbathing on the beach', 'backpacking in the wildreness', 'driving a monster truck', 'cutting down a tree', 'swimming in a swamp', 'skydiving', 'eating a banana'];
  var randObj = objs[Math.floor(Math.random() * objs.length)];
  var randAct = actions[Math.floor(Math.random() * actions.length)];
  var formatted = disclaimer1 + randObj + " " + randAct + ". " + disclaimer2;
  return [formatted, randObj, randAct];
}

$(document).ready(function() {
  var formatted = generateMessage();
  $("#text").val(formatted[0]);
  $("#action").text(formatted[1] + " " + formatted[2]);
  $("#generate").click(function() {
    var formatted = generateMessage();
    $("#text").val(formatted[0]);
    $("#action").text(formatted[1] + " " + formatted[2]);
  });
  $("#text").click(function() {
    $("#text").select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
  })
});
