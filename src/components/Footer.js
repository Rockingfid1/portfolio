import GithubIcon from "./icons/GithubIcon";

export default function Footer() {
  return (
    <section className="flex flex-row items-center justify-center gap-4 bg-opacity-95 bg-black min-h-fit w-screen p-10 sm:p-14 md:p-16 xl:p-20 lp:p-14 ">
      <p className="text-lg sm:text-xl md:text-2xl lp:text-xl text-white text-center">
        © 2024. All Rights Reserved.
      </p>
      <a href="https://github.com/Rockingfid1">
        <GithubIcon />
      </a>
    </section>
  );
}
