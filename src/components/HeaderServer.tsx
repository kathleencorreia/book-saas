import { auth } from "../../auth";

import Header from "./Header";

export default async function HeaderServer({}) {
  const session = await auth(); // Server-side
  return <Header session={session ? { user: session.user } : null} />;
}
