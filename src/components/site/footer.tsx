import { nav } from "@/data/site";
import { Logo } from "./logo";

export function Contacts() {
  return (
    <section id="contacts" className="scroll-mt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-3 text-sm font-medium text-muted">
            <span className="h-px w-8 bg-green" aria-hidden="true" />
            Контакты
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-graphite sm:text-4xl">
            Связаться с «Ладом»
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted">
            Телефон, адрес и график работы появятся здесь, когда компания их утвердит. Выдуманные реквизиты на
            сайт не ставим. Сейчас единственная подготовленная точка — форма заявки, и она ещё не принимает
            обращения.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3">
          <a
            href="#request"
            className="inline-flex h-12 items-center justify-center rounded-full bg-green px-6 text-sm font-semibold text-graphite hover:bg-green-deep sm:self-start"
          >
            Перейти к форме
          </a>
          <p className="text-sm text-muted">Публичный телефон и адрес не опубликованы.</p>
        </div>
      </div>
    </section>
  );
}

export function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-20 border-t border-line bg-mist">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <h2 className="text-xl font-semibold text-graphite">Обработка персональных данных</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          Для реальной заявки нужны имя и телефон, чтобы связаться по задаче. Сейчас форма эти сведения не
          передаёт в CRM и не сохраняет. Перед запуском приёма нужно утвердить политику обработки персональных
          данных и подключить канал, который её соблюдает: почту, CRM или защищённый API. До этого момента
          отправка не означает регистрацию обращения.
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Разные задачи. Один надёжный партнёр.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Подвал">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-ink hover:text-green-text">
              {item.label}
            </a>
          ))}
          <a href="#privacy" className="text-sm text-ink hover:text-green-text">
            Персональные данные
          </a>
        </nav>
      </div>
      <div className="mx-auto w-full max-w-6xl px-5 pb-8 sm:px-8">
        <p className="text-xs text-muted">© {new Date().getFullYear()} ЛАДОМ</p>
      </div>
    </footer>
  );
}
