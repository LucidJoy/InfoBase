import "@/styles/globals.css";

import { CreateMeetProvider } from "@/context/MeetContext";
import { useHuddle01 } from "@huddle01/react";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const { initialize } = useHuddle01();

  useEffect(() => {
    initialize(process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID);
  }, []);

  return (
    <CreateMeetProvider>
      <Component {...pageProps} />
    </CreateMeetProvider>
  );
}
