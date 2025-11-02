import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="space-y-6 bg-[#FFFDF9] dark:bg-[#2C2420] p-8 rounded-2xl shadow-sm border border-[#EAD8C8] dark:border-[#3A2E28] transition-all duration-500">
      <h3 className="text-sm uppercase font-semibold tracking-wider text-[#A47551] dark:text-[#CDAA7D]">Portofolio</h3>

      {/* Project 1 */}
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          alt="Timecapsule"
          src="/timecapsule.png"
          className="rounded-2xl w-full md:w-1/3 object-cover shadow-md"
          width={800}
          height={500}
        />
        <div>
          <h4 className="font-semibold text-[#4B3B2A] dark:text-[#EAD8C8] mb-2 text-lg">Timecapsule</h4>
          <p className="text-[#6B4F3B] dark:text-[#CDAA7D] leading-relaxed">
            Platform digital untuk menyimpan puisi, ilustrasi, dan kenangan pribadi dengan tampilan lembut dan interaktif.
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          alt="Cacao d’Ayu"
          src="/login.png"
          className="rounded-2xl w-full md:w-1/3 object-cover shadow-md"
          width={800}
          height={500}
        />
        <div>
          <h4 className="font-semibold text-[#4B3B2A] dark:text-[#EAD8C8] mb-2 text-lg">Cacao d’Ayu</h4>
          <p className="text-[#6B4F3B] dark:text-[#CDAA7D] leading-relaxed">
            Website e-commerce produk cokelat artisan dengan fitur filter kategori, keranjang, dan tampilan interaktif.
          </p>
        </div>
      </div>
    </section>
  );
}
