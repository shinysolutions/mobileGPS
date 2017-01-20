
var tt;
var pos;

function getLocation() {

  if ($("#jsonRouter") !== undefined) {
    $("#jsonRouter").on("change", function() {
      console.log(pos)
      L.marker([pos.latitude, pos.longitude]).addTo(map)
    });
  } 


  if ($("#record").text() == "Start recording...") {
    $("#record").text("Stop")
    $("#record").css("background-color", "red")
    tt = setInterval(function(){
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
      function onError (err) {
        Shiny.onInputChange("jsonRouter", "Geolocation is not supported by this browser.");
      }
      function onSuccess (position) {
        pos = position.coords
        L.marker([pos.latitude, pos.longitude]).addTo(map).bindPopup("<b>"+ pos.latitude + " : " + pos.longitude + "</b")
        map.panTo(new L.LatLng(pos.latitude, pos.longitude));
        //map.setZoom(16)
        //map.setView(new L.LatLng(pos.latitude, pos.longitude), 18);
        
        //var target = $("#jsonRouter")
        //target.val("");
        //target.val(position.coords.latitude);
        //target.trigger("change");
      }
      console.log("ss")
    }, 1000)
   
  } else if ($("#record").text() == "Stop") {
     $("#record").text("Start recording...")
     $("#record").css("background-color", "green")
    clearInterval(tt)
   
  }
}




