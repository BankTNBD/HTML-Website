var modal = document.getElementById("PicModal");

var img = document.getElementById("profile-picture");
var modalImg = document.getElementById("img-Profile");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

const facebook_alert = () => {
    alert('Open Facebook ?')
}

const instagram_alert = () => {
    alert('Open Instagram ?')
}

const twitter_alert = () => {
    alert('Open Twitter ?')
}

const tiktok_alert = () => {
    alert('Open Tiktok ?')
}

const snapchat_alert = () => {
    alert('Open Snapchat ?')
}

const github_alert = () => {
    alert('Open GitHub ?')
}


