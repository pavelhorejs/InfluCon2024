import Button from "/components/buttons/button/Button";
import Link from "next/link";
const Page = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-screen">
      <h2 className="pb-5 lg:pb-10 text-center max-w-[350px] lg:max-w-3xl">
        Registrace proběhla úspěšně, nyní se můžete přihlásit.
      </h2>

      <Link href="/dashboard">
        <Button text="Přihlásit se" />
      </Link>
    </div>
  );
};
export default Page;
