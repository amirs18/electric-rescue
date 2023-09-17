import { useState } from "react";

export default function GetLocationButton() {
  const [prmessions, setPrmessions] = useState(false);

  if ("geolocation" in navigator) {
    if (navigator.geolocation) {
      console.log(navigator.geolocation);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (!prmessions) setPrmessions(true);
          console.log(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setPrmessions(false);
          }
        }
      );
    } else {
    }
    if (!prmessions) {
      return (
        <dialog open id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">hi</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      );
    }
  }
}
