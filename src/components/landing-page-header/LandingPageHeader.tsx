import { InView } from "react-intersection-observer";
import { useState } from "react";
import { classes } from "@/lib/formatter/classes";

export default function LandingPageHeader() {
  var [isHeaderVisible, setHeaderVisible] = useState<boolean>(false);
  var menus: { name: string; path: string }[] = [
    { name: "This Year", path: "2025" },
    { name: "Articles", path: "articles" },
  ];
  return (
    <>
      <InView
        threshold={0}
        onChange={(isVisible) => {
          setHeaderVisible(isVisible);
        }}
      >
        <section className="h-screen bg-[url('https://picsum.photos/1920/1920?random')] bg-cover *:drop-shadow flex items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Empower Young Catholics
            </h1>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
              Let no man despite thy youth: but be thou an example of the
              faithful in word, in conversation, in charity, in faith, in
              chastity. - 1 Tim 4:12
            </p>
          </div>
        </section>
      </InView>

      <header
        className={classes(
          "sticky top-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/30 opacity-0 transition-all duration-300",
          [!isHeaderVisible && "!opacity-100"]
        )}
      >
        <div className="flex gap-8 items-center max-w-7xl mx-auto px-4 py-3 transition-all duration-300">
          <span className="text-lg font-semibold">
            Badan Pelayanan Mahasiswa
          </span>
          <div className="flex-grow" />
          {menus.map((menu, index) => (
            <a
              className="hover:font-extrabold transition-all md:inline hidden"
              key={index}
              href={menu.path}
            >
              {menu.name}
            </a>
          ))}
          <button className="md:hidden inline">
            <i className="bi bi-list"></i>
          </button>
        </div>
      </header>
    </>
  );
}
