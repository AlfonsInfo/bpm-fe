import { Image } from "primereact/image";
import { Card } from "primereact/card";


export default function Home() {
  return (
    <main>
      <section className="py-20">
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
            <p className="text-gray-700 text-justify leading-relaxed mb-4">
              Badan Pelayanan Mahasiswa Katolik Yogyakarta is an inter-campus
              organization that unites Catholic student communities from various
              universities across Yogyakarta. Founded on the values of faith,
              unity, and service, BPM serves as a spiritual and social platform
              for Catholic students to grow together in Christ, actively engage
              in pastoral activities, and respond to the needs of the Church and
              society. Through liturgical services, formation programs,
              community outreach, and interfaith dialogue, BPM fosters
              leadership, solidarity, and compassion among its members while
              upholding Catholic identity in the academic world.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Faith & Fellowship</li>
              <li>Leadership & Formation</li>
              <li>Service & Social Engagement</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-10">
            Gallery
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
              className="rounded-lg shadow-md *:w-full"
              src="https://picsum.photos/800/600?random=4"
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

      <section></section>

      <section className="py-20 bg-blue-50">
        <div className="container flex flex-col gap-2 items-center mx-auto px-4">
          <span className="rounded-md bg-blue-100 w-min text-nowrap p-2 text-sm font-semibold text-blue-900">
            Get Involved
          </span>
          <span className="text-4xl font-semibold text-blue-700">
            Ways to Support
          </span>
          <span className="text-justify">
            Your support is crucial for our work. Here are a few ways you can
            contribute to our cause and help us build a better future.
          </span>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
            <Card
              className="pt-6 flex flex-col items-center text-center"
              title="Praying"
              header={<i className="bi bi-heart text-8xl"></i>}
            ></Card>
            <Card
              className="pt-6 flex flex-col items-center text-center"
              title="Volunteering"
              header={<i className="bi bi-emoji-smile text-8xl"></i>}
            ></Card>
            <Card
              className="pt-6 flex flex-col items-center text-center"
              title="Donation"
              header={<i className="bi bi-cash-coin text-8xl"></i>}
            ></Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-700 text-white text-center">
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
