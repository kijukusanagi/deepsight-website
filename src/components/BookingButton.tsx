'use client';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#22C55E"
          }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <button
      data-cal-link="kieran-deepsight/30min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      className="px-8 py-4 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-black font-semibold text-lg transition"
    >
      Book a Consultation
    </button>
  );
}