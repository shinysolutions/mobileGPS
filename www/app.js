var tt;
function getLocation() {
  if ($("#record").text() == "Start recording...") {
    $("#record").text("Stop")
    $("#record").css("background-color", "red")
    tt = setInterval(function(){
      navigator.geolocation.getCurrentPosition(onSuccess);
      function onSuccess (position) {
        pos = position.coords
        L.marker([pos.latitude, pos.longitude]).addTo(map).bindPopup("<b>"+ pos.latitude + " : " + pos.longitude + "</b")
        map.panTo(new L.LatLng(pos.latitude, pos.longitude));
        //var target = $("#jsonRouter")
        //target.val("");
        //target.val(position.coords.latitude);
        //target.trigger("change");
      }
    }, 1000)
  } else if ($("#record").text() == "Stop") {
     $("#record").text("Start recording...")
     $("#record").css("background-color", "green")
    clearInterval(tt)
  }
}




