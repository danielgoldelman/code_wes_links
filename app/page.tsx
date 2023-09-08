export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center text-2xl text-justify">
      <h1 className="mt-10 mb-6 text-4xl underline underline-offset-8 decoration-2 pb-10">
        Code_Wes Links
      </h1>
      <a
        href="https://forms.gle/ufRMAhbGCF5k6CGs7"
        target="_blank"
        className="flex items-center justify-center border border-white rounded-2xl w-80 h-16 mb-10 text-justify"
      >
        Interest Form
      </a>
      <a
        href="https://discord.gg/abTZpXBM7"
        target="_blank"
        className="flex items-center justify-center border border-white rounded-2xl w-80 h-16 mb-10 text-justify"
      >
        Discord
      </a>
      <a
        href="https://github.com/orgs/Code-Wes/repositories"
        target="_blank"
        className="flex items-center justify-center border border-white rounded-2xl w-80 h-16 mb-10 text-justify"
      >
        GitHub
      </a>
      <a
        href="https://wesleyan.campuslabs.com/engage/organization/code_wes"
        target="_blank"
        className="flex items-center justify-center border border-white rounded-2xl w-80 h-16 mb-10 text-justify"
      >
        WesNest
      </a>
    </main>
  );
}
