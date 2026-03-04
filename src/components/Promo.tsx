import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/4757e748-751c-422f-8d39-62b244f45123/files/a68c0f0a-67a1-4d66-9203-e16ead8e95a9.jpg"
            alt="Статистика развития Саранска"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest opacity-70">
        Цифры развития
      </h3>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20 border border-white/20">
          {[
            { value: "330 000", label: "Жителей города" },
            { value: "х3", label: "Рост ВРП за 20 лет" },
            { value: "12", label: "Новых парков с 2010" },
            { value: "86%", label: "Хотят остаться жить" },
          ].map((item, i) => (
            <div key={i} className="bg-black/40 backdrop-blur-sm px-8 py-10 text-center text-white">
              <div className="text-3xl md:text-5xl font-bold mb-2">{item.value}</div>
              <div className="text-xs uppercase tracking-widest text-neutral-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="absolute bottom-12 left-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-xs sm:max-w-md md:max-w-lg z-10 font-light leading-tight">
        Саранск — один из самых быстро развивающихся городов Поволжья
      </p>
    </div>
  );
}