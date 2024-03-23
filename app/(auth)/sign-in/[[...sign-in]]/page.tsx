import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <h1>SIGN IN</h1>
      <SignIn />
    </div>
  );
}
