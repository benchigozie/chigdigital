"use client"

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

type Props = {
  text: string,
  scrollTo?: string // optional for now
}

const PrimaryButton = ({ text, scrollTo }: Props) => {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"discovery"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"light":{"cal-brand":"#1c719e"},"dark":{"cal-brand":"#1c719e"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return (
    <button className="cursor-pointer px-6 py-2 bg-my-blue rounded-full font-medium hover:bg-my-light-black transition-colors duration-300"
    data-cal-namespace="discovery"
    data-cal-link="ben-chigozie/discovery"
    
    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'>
      {text}
    </button>
  )
}

export default PrimaryButton