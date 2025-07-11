import { Image } from "primereact/image";

export default function Home() {
  return (
    <main>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="https://picsum.photos/600/400?random=1"
            alt="Kegiatan Sosial"
            className="rounded-2xl shadow-lg *:w-full"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">
              Who we are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to helping people in need through volunteer
              programs, donations, education, and real action on the ground.
              Together we can make a big impact!
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Pengabdian di desa terpencil</li>
              <li>Distribusi bantuan pangan dan pakaian</li>
              <li>Kelas edukasi untuk anak-anak</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-10">
            Galeri Kegiatan 📷
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image
              preview
              src="https://picsum.photos/800/600?random=2"
              className="rounded-lg shadow-md *:w-full"
              alt=""
            />
            <Image
              preview
              src="https://picsum.photos/800/600?random=3"
              className="rounded-lg shadow-md *:w-full"
              alt=""
            />
            <Image
              preview
              src="https://picsum.photos/800/600?random=4"
              className="rounded-lg shadow-md *:w-full"
              alt=""
            />
            <Image
              preview
              src="https://picsum.photos/800/600?random=5"
              className="rounded-lg shadow-md *:w-full"
              alt=""
            />
            <Image
              preview
              src="https://picsum.photos/800/600?random=6"
              className="rounded-lg shadow-md *:w-full"
              alt=""
            />
            <Image
              preview
              src="https://picsum.photos/800/600?random=7"
              className="rounded-lg shadow-md *:w-full"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="daftar" className="py-20 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to be part of the change?
          </h2>
          <p className="mb-6 max-w-xl mx-auto">
            Fill out the registration form now and become an inspiring member!
          </p>
          <a
            href="#"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            JOIN US NOW
          </a>
        </div>
      </section>
    </main>
  );
}
