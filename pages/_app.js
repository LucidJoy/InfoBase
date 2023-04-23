import "@/styles/globals.css";

import { CreateMeetProvider } from "@/context/MeetContext";

export default function App({ Component, pageProps }) {
  return (
    <CreateMeetProvider>
      <Component {...pageProps} />
    </CreateMeetProvider>
  );
}
