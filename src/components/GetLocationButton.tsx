export default function GetLocationButton  () {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  } else {
    /* geolocation IS NOT available */
  }
return <div>loc</div>

}
