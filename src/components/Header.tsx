import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center gap-8 bg-[#FFF8F2] dark:bg-[#1F1A17] p-8 rounded-3xl shadow-sm border border-[#EBD9C7] dark:border-[#3A2E28] transition-all duration-500">
      <Image
        className="rounded-full shadow-md"
        src="/image.jpg"
        alt="Foto Ayu Wulanadari"
        width={120}
        height={120}
      />
      <div>
        <h1 className="text-3xl font-semibold text-[#4B3B2A] dark:text-[#EAD8C8] mb-1">
          Ayu Wulanadari
        </h1>
        <h2 className="text-lg text-[#6B4F3B] dark:text-[#CDAA7D] font-light leading-relaxed">
          Mahasiswa Informatika yang mencintai desain interaktif dan keindahan dalam kode.
        </h2>
        <p className="mt-4 text-sm text-[#A47551] dark:text-[#CDAA7D]">
          Sekolah Tinggi Teknologi (STITEK) Bontang
        </p>
      </div>
    </header>
  );
}
