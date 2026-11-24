import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { reasons, services, steps } from "@/data/site";

function Eyebrow({ children, onDark = false }: { children: string; onDark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-sm font-medium ${onDark ? "text-paper/75" : "text-muted"}`}>
      <span className="h-px w-8 bg-green" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Services() {
  const [openId, setOpenId] = useState<string | null>(services[0]?.id ?? null);

  return (
    <section id="services" className="scroll-mt-20 bg-mist">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Услуги</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-graphite sm:text-4xl">
            Основные направления
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted">
            Каталог пополняется только утверждёнными направлениями. Сейчас зафиксированы два контура работы —
            частные клиенты и организации. Новая услуга добавляется в список и сразу появляется в этой сетке.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            const open = openId === service.id;
            const panelId = `${service.id}-detail`;
            return (
              <li key={service.id} id={service.id} className="scroll-mt-24">
                <article className="flex h-full flex-col rounded-2xl bg-paper p-6 shadow-card sm:p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-mist text-green-text">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-graphite">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <button
                    type="button"
                    className="mt-6 inline-flex h-11 items-center gap-1.5 self-start text-sm font-semibold text-green-text"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : service.id)}
                  >
                    {open ? "Свернуть" : "Подробнее"}
                    <ArrowUpRight className={`size-4 transition-transform duration-200 ${open ? "rotate-90" : ""}`} />
                  </button>
                  {open ? (
                    <p id={panelId} className="mt-3 border-t border-line pt-4 text-sm leading-relaxed text-ink">
                      {service.detail}
                    </p>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <Eyebrow>О компании</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-graphite sm:text-4xl">
              Почему выбирают «Ладом»
            </h2>
            <p className="mt-4 text-base leading-relaxed text-pretty text-muted">
              «Ладом» — единая сервисная компания. Мы не изображаем инфраструктуру, которой ещё нет: растём от
              понятного порядка работы и добавляем направления по мере их утверждения.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="rounded-2xl bg-mist p-5">
                  <Icon className="size-5 text-green-text" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold text-graphite">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-graphite text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Eyebrow onDark>Как это работает</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-balance text-paper sm:text-4xl">
          Пять шагов от заявки до результата
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-paper/15 pt-5">
              <span className="text-sm font-semibold text-green">{step.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-paper">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Audiences() {
  return (
    <section className="scroll-mt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <article id="private" className="scroll-mt-24 rounded-2xl bg-mist p-7 sm:p-9">
          <p className="text-sm font-medium text-green-text">Частные клиенты</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance text-graphite sm:text-3xl">
            Один контакт вместо поиска исполнителя под каждую задачу
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Опишите, что нужно сделать. Мы уточним задачу и скажем, можем ли взять её в работу и на каких
            условиях. Если направление ещё не утверждено, мы так и скажем — без обещания «сделаем всё».
          </p>
          <a href="#request" className="mt-6 inline-flex h-11 items-center text-sm font-semibold text-graphite">
            Описать задачу
          </a>
        </article>
        <article id="business" className="scroll-mt-24 rounded-2xl bg-paper p-7 shadow-card sm:p-9">
          <p className="text-sm font-medium text-green-text">Для бизнеса</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance text-graphite sm:text-3xl">
            Обслуживание организаций без лишней витрины
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Компании нужен понятный порядок, а не набор разрозненных выездов. Состав работ, сроки и документы
            фиксируются под задачу. Личный кабинет и отдельные корпоративные регламенты — следующий этап, их
            пока нет.
          </p>
          <a href="#request" className="mt-6 inline-flex h-11 items-center text-sm font-semibold text-green-text">
            Обсудить задачу компании
          </a>
        </article>
      </div>
    </section>
  );
}

export function Guarantees() {
  return (
    <section id="guarantees" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <div>
          <Eyebrow>Условия</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-graphite sm:text-4xl">
            Что мы обещаем, а что нет
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-ink">
          <p>
            Срок, стоимость и гарантия относятся к конкретной услуге и фиксируются до начала работ. Клиент
            получает гарантийную информацию только если она предусмотрена условиями этой услуги.
          </p>
          <p className="text-muted">
            Мы не заявляем круглосуточную работу, моментальный выезд и гарантии, которые ещё не закреплены в
            работе компании. Если условие не подтверждено — его нет на сайте.
          </p>
        </div>
      </div>
    </section>
  );
}
