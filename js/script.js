var items = document.getElementsByClassName("buy");
var popupCart = document.querySelector(".modal-cart");
var closeCart = popupCart.querySelector(".modal-close");

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", function(evt) {
		evt.preventDefault();
        popupCart.classList.add("modal-show");
	});
}

closeCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupCart.classList.contains("modal-show")) {
      evt.preventDefault();
      popupCart.classList.remove("modal-show");
    }
  }
});

var write = document.querySelector(".button-write-us");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var name = popup.querySelector(".write-us-name");
var form = popup.querySelector(".write-us-form");
var mail = popup.querySelector(".write-us-mail");
var letter = popup.querySelector(".write-us-letter");



var isStorageSupport = true;
var storage = "";


try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    name.value = storage;
    mail.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  popupCart.classList.remove("modal-show");
  popupCart.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !mail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});


var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});




