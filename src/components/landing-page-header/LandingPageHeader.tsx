import { InView } from "react-intersection-observer";
import { useState } from "react";
import { classes } from "@/lib/formatter/classes";

export default function LandingPageHeader() {
  var [isHeaderVisible, setHeaderVisible] = useState<boolean>(false);
  return (
    <>
      <InView
        threshold={0}
        onChange={() => {
          setHeaderVisible(!isHeaderVisible);
        }}
      >
        <section className="h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
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
        <div className="max-w-7xl mx-auto px-4 py-3 transition-all duration-300">
          <h2 className="text-lg font-semibold">Badan Pelayanan Mahasiswa</h2>
        </div>
      </header>
    </>
  );
}
