import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constant";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
    const session ={};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo"></Image>
          <ul className="xl:flex hidden text-sm gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.text}>
                {link.text}
              </Link>
            ))}
          </ul>
        </Link>
      </div>
      <div className="flexCenter gap-4" >
        {session ? (
          <>
            UserPhotos
            <Link href="create-project">ShareWork</Link>
          </>
        ) : (
          <AuthProviders></AuthProviders>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
