import { useState } from "react";

const rtl = { direction: "rtl" } as const;
export default function GetLocationButton() {
  const [prmessions, setPrmessions] = useState(true);

  if (!prmessions) {
    return (
      <dialog open id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">הרשאות מיקום</h3>
          <p className="py-4 ">בבקשה אשר הרשאות מיקום לאתר זה</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">הבנתי</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }
  if ("geolocation" in navigator) {
    if (navigator.geolocation) {
      console.log(navigator.geolocation);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (!prmessions) {
            setPrmessions(true);
          }
          console.log(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setPrmessions(false);
          }
        }
      );
    }
  }
}
