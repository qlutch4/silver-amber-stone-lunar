function OrderDiagram() {
  return (
    <figure className="shadow-card rounded-3xl bg-mist p-3 sm:p-4">
      <div className="rounded-2xl bg-paper px-4 py-6 sm:px-7 sm:py-8">
        <svg viewBox="0 0 520 400" className="h-auto w-full" role="img" aria-labelledby="order-diagram-title">
          <title id="order-diagram-title">Разные задачи сходятся в один контур компании</title>
          {[80, 160, 240, 320].map((y) => (
            <line key={y} x1="24" x2="496" y1={y} y2={y} className="stroke-line" strokeWidth="1" />
          ))}
          <path
            d="M214 72 C 300 72, 330 200, 378 200"
            className="fill-none stroke-line"
            strokeWidth="1.5"
          />
          <path d="M214 200 H 378" className="fill-none stroke-green" strokeWidth="1.5" />
          <path
            d="M214 328 C 300 328, 330 200, 378 200"
            className="fill-none stroke-line"
            strokeWidth="1.5"
          />
          {[
            { y: 36, mark: "mist" as const },
            { y: 156, mark: "green" as const },
            { y: 284, mark: "mist" as const },
          ].map((card) => (
            <g key={card.y}>
              <rect x="24" y={card.y} width="190" height="88" rx="16" className="fill-paper stroke-line" />
              <rect x="42" y={card.y + 26} width="36" height="36" rx="10" className="fill-mist" />
              <rect
                x="52"
                y={card.y + 36}
                width="16"
                height="16"
                rx="3"
                className={card.mark === "green" ? "fill-green" : "fill-graphite"}
              />
              <rect x="92" y={card.y + 30} width="98" height="8" rx="4" className="fill-mist" />
              <rect x="92" y={card.y + 48} width="68" height="8" rx="4" className="fill-line" />
            </g>
          ))}
          <circle cx="430" cy="200" r="52" className="fill-green" />
          <circle cx="430" cy="200" r="22" className="fill-paper" />
          <circle cx="430" cy="200" r="6" className="fill-graphite" />
        </svg>
        <figcaption className="mt-1 flex items-center justify-between gap-4 px-1 text-sm text-muted">
          <span>Разные задачи</span>
          <span className="font-medium text-graphite">Один контур</span>
        </figcaption>
      </div>
    </figure>
  );
}

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24">
        <div>
          <p className="flex items-center gap-3 text-sm font-medium text-muted">
            <span className="h-px w-8 bg-green" aria-hidden="true" />
            Сервисная компания
          </p>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-balance text-graphite sm:text-5xl sm:leading-[1.12]">
            Одна компания для решения любых задач
          </h1>
          <p className="mt-5 text-lg font-medium text-ink">Разные задачи. Один надёжный партнёр.</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted">
            «Ладом» помогает частным клиентам и бизнесу решать разные задачи через один понятный порядок:
            заявка, уточнение, специалист, работа и результат по согласованным условиям.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#request"
              className="inline-flex h-12 items-center justify-center rounded-full bg-green px-6 text-sm font-semibold text-graphite transition-colors duration-200 hover:bg-green-deep"
            >
              Оставить заявку
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-graphite shadow-card transition-[box-shadow,background-color] duration-200 hover:bg-mist"
            >
              Наши услуги
            </a>
          </div>
        </div>
        <OrderDiagram />
      </div>
    </section>
  );
}
