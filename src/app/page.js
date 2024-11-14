import "./app.css";
import "./globals.css";

export default function Home() {
  return (
    <div>
      {/* <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script> */}
    <div className="app-content">
      <div className="text-content">
        <p className="title-text">nick cirillo&apos;s cool site</p>
        
        <p>if you&apos;re here for professional stuff, my <a href="https://linkedin.com/in/nicholas-cirillo-/" target="_blank" rel="noopener noreferrer">linkedin</a> and <a href="https://github.com/nick-cirillo" target="_blank" rel="noopener noreferrer">github</a></p>

        <p>or, check out my <a href="./music-shelf">interactive album art collage,</a></p>

        <p>a collection of my <a href="./landscapes">landscape photography,</a></p>

        <p>a <a href="./clock">&apos;game&apos; about wasting time,</a></p>

        <p>or my friends&apos; rock-paper-scissors <a href="./tournament">tournament</a></p>

        {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="nicholas-cirillo-" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/nicholas-cirillo-?trk=profile-badge"></a></div> */}

        {/* <br></br> */}
        
        <div id="social-icons">
          <a className="social-icon" href="https://linkedin.com/in/nicholas-cirillo-/" target="_blank" rel="noopener noreferrer"><img id="linkedin" src="./social-icons/linkedin.svg" alt="the Linkedin logo"/></a>
          <a className="social-icon" href="https://github.com/nick-cirillo/" target="_blank" rel="noopener noreferrer"><img id="github" src="./social-icons/github.svg" alt="the GitHub logo"/></a>
          <a className="social-icon" href="https://instagram.com/nick.p.cirillo/" target="_blank" rel="noopener noreferrer"><img id="instagram" src="./social-icons/instagram.svg" alt="the Instagram logo"/></a>
        </div>
      </div>
      <div className="image">
        <img id="timber" src="./homepage/timber.jpg" alt="a photo of Timber, the world's cutest puppy"/>
      </div>
    </div>
    </div>
    




























    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
