export default function Contact() {
  return (
    <section id="contact" className="bg-[#FFFDF9] dark:bg-[#2C2420] border border-[#EAD8C8] dark:border-[#3A2E28] rounded-2xl shadow-sm p-8 space-y-5 transition-all duration-500">
      <h3 className="text-[#A47551] dark:text-[#CDAA7D] uppercase text-sm font-semibold tracking-wider">
        Kontak
      </h3>
      <p className="text-[#4B3B2A] dark:text-[#EAD8C8]">
        Ayo terhubung! Saya terbuka untuk kolaborasi, ide kreatif, atau sekadar berbagi inspirasi seputar desain dan teknologi.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <a href="mailto:ayuwulanandari@gmail.com" className="text-[#A47551] dark:text-[#CDAA7D] hover:opacity-80 transition">
          ✉️ ayuwulanandari@gmail.com
        </a>
        <a href="https://github.com/Ayu60517" className="text-[#A47551] dark:text-[#CDAA7D] hover:opacity-80 transition">
          💻 GitHub
        </a>
        <a href="https://www.linkedin.com/in/ayu-wulanadari-7196202b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-[#A47551] dark:text-[#CDAA7D] hover:opacity-80 transition">
          🔗 LinkedIn
        </a>
        <a href="https://wa.me/+62895422505444" className="text-[#A47551] dark:text-[#CDAA7D] hover:opacity-80 transition">
          ☎️ WhatsApp
        </a>
      </div>
    </section>
  );
}
