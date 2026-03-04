id="landmarks"

const landmarks = [
  {
    name: "Собор Фёдора Ушакова",
    year: "2006",
    description: "Главный православный собор республики, возведённый в честь флотоводца и святого Фёдора Ушакова. Высота колокольни — 74 метра.",
    stat: "74 м",
    statLabel: "высота колокольни",
  },
  {
    name: "Стадион «Мордовия Арена»",
    year: "2018",
    description: "Современная арена мирового уровня, построенная к Чемпионату мира по футболу 2018 года. Вместимость — 44 000 зрителей.",
    stat: "44 000",
    statLabel: "мест на трибунах",
  },
  {
    name: "Площадь Тысячелетия",
    year: "2012",
    description: "Главная площадь города, открытая к 1000-летию единства мордовского народа с Россией. Фонтанный комплекс — один из крупнейших в Поволжье.",
    stat: "1000",
    statLabel: "лет единства",
  },
];

export default function Featured() {
  return (
    <section id="landmarks" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="uppercase text-xs tracking-widest text-neutral-500 mb-3">Наследие города</p>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight max-w-xl">
              Достопримечательности Саранска
            </h2>
          </div>
          <p className="text-neutral-600 max-w-sm text-base leading-relaxed">
            Каждый объект — отражение эпохи и символ роста города от регионального центра до современного мегаполиса.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-neutral-200">
          {landmarks.map((lm, i) => (
            <div key={i} className="border-b lg:border-b-0 lg:border-r border-neutral-200 last:border-0 p-8 flex flex-col justify-between gap-8 hover:bg-neutral-50 transition-colors duration-300">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400">{lm.year}</span>
                <h3 className="text-xl font-bold text-neutral-900 mt-2 mb-4">{lm.name}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{lm.description}</p>
              </div>
              <div className="border-t border-neutral-200 pt-6">
                <div className="text-4xl font-bold text-neutral-900">{lm.stat}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide mt-1">{lm.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-stretch gap-0">
          <div className="flex-1 lg:h-[500px]">
            <img
              src="https://cdn.poehali.dev/projects/4757e748-751c-422f-8d39-62b244f45123/files/aaac9721-45f8-4c81-a372-bb952ac0df7e.jpg"
              alt="Достопримечательности Саранска"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 bg-neutral-900 p-10 lg:p-14 flex flex-col justify-center">
            <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Результаты опроса 2024</p>
            <h3 className="text-white text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              Что жители ценят в Саранске больше всего?
            </h3>
            <div className="space-y-5">
              {[
                { label: "Чистота и благоустройство", pct: 78 },
                { label: "Архитектура и памятники", pct: 65 },
                { label: "Парки и зелёные зоны", pct: 59 },
                { label: "Культурные события", pct: 44 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-neutral-300">{item.label}</span>
                    <span className="text-white font-bold">{item.pct}%</span>
                  </div>
                  <div className="h-1 bg-neutral-700 rounded-full">
                    <div
                      className="h-1 bg-white rounded-full transition-all duration-700"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-neutral-500 text-xs mt-6">* Опрос проведён среди 1 200 жителей города</p>
          </div>
        </div>
      </div>
    </section>
  );
}
