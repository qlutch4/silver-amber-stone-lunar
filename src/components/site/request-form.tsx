import { useState, type FormEvent } from "react";
import { INTAKE_NOTICE, leadSchema, type LeadInput } from "@/lib/lead";
import { previewPathPrefix } from "@/lib/preview-path-prefix";

type FieldErrors = Partial<Record<keyof LeadInput, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "invalid" }
  | { kind: "not_configured"; message: string }
  | { kind: "error"; message: string };

function leadsUrl() {
  const prefix =
    typeof window === "undefined"
      ? ""
      : (previewPathPrefix(window.location.hostname, window.location.pathname) ?? "");
  return `${prefix}/api/leads`;
}

export function RequestForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      task: String(data.get("task") ?? ""),
      consent: data.get("consent") === "on",
    };
    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof LeadInput]) {
          next[key as keyof LeadInput] = issue.message;
        }
      }
      setErrors(next);
      setStatus({ kind: "invalid" });
      return;
    }

    setErrors({});
    setStatus({ kind: "submitting" });
    try {
      const response = await fetch(leadsUrl(), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = (await response.json().catch(() => null)) as { code?: string; message?: string } | null;
      if (response.status === 503 || body?.code === "not_configured") {
        setStatus({
          kind: "not_configured",
          message:
            body?.message ??
            "Заявка не зарегистрирована: канал приёма ещё не подключён. Данные не сохранены.",
        });
        return;
      }
      if (!response.ok) {
        setStatus({
          kind: "error",
          message: "Сервер не принял форму. Проверьте поля и попробуйте ещё раз. Обращение не сохранено.",
        });
        return;
      }
      setStatus({
        kind: "error",
        message: "Сервер ответил неожиданно. Обращение не считаем зарегистрированным.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "Не удалось связаться с сервером. Заявка не отправлена и не сохранена.",
      });
    }
  }

  const busy = status.kind === "submitting";

  return (
    <section id="request" className="scroll-mt-20 bg-mist">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <div>
          <p className="flex items-center gap-3 text-sm font-medium text-muted">
            <span className="h-px w-8 bg-green" aria-hidden="true" />
            Заявка
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-graphite sm:text-4xl">
            Опишите задачу
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted">
            Имя, телефон и короткое описание — чтобы можно было уточнить детали. Пока это только интерфейс:
            реальная регистрация обращения запустится, когда появится почта, CRM или другой приём заявок.
          </p>
          <p className="mt-5 rounded-2xl bg-paper p-4 text-sm leading-relaxed text-ink shadow-card">{INTAKE_NOTICE}</p>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl bg-paper p-6 shadow-card sm:p-8"
          aria-describedby="form-status"
        >
          <div className="grid gap-5">
            <Field
              name="name"
              label="Имя"
              autoComplete="name"
              error={errors.name}
              placeholder="Как к вам обращаться"
            />
            <Field
              name="phone"
              label="Телефон"
              autoComplete="tel"
              inputMode="tel"
              error={errors.phone}
              placeholder="+7 900 000-00-00"
            />
            <div>
              <label htmlFor="task" className="text-sm font-medium text-graphite">
                Описание задачи
              </label>
              <textarea
                id="task"
                name="task"
                rows={5}
                required
                placeholder="Что нужно сделать и в каком объёме"
                aria-invalid={Boolean(errors.task)}
                aria-describedby={errors.task ? "task-error" : undefined}
                suppressHydrationWarning
                className="mt-2 w-full resize-y rounded-xl bg-mist px-4 py-3 text-base text-ink outline-none ring-1 ring-transparent transition focus:bg-paper focus:ring-green-text"
              />
              {errors.task ? (
                <p id="task-error" className="mt-2 text-sm font-medium text-graphite">
                  {errors.task}
                </p>
              ) : null}
            </div>
            <div>
              <label className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-0.5 size-5 shrink-0 accent-green-text"
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "consent-error" : "consent-note"}
                  suppressHydrationWarning
                />
                <span id="consent-note">
                  Согласен на обработку персональных данных, чтобы со мной связались по этой заявке.{" "}
                  <a href="#privacy" className="font-medium text-green-text underline decoration-green/40 underline-offset-4">
                    Как это устроено
                  </a>
                </span>
              </label>
              {errors.consent ? (
                <p id="consent-error" className="mt-2 text-sm font-medium text-graphite">
                  {errors.consent}
                </p>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            disabled={busy}
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-green text-sm font-semibold text-graphite transition-colors duration-200 hover:bg-green-deep disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:px-8"
          >
            {busy ? "Проверяем отправку…" : "Отправить заявку"}
          </button>

          <div id="form-status" role="status" aria-live="polite" className="mt-4 min-h-6 text-sm leading-relaxed">
            {status.kind === "invalid" ? (
              <p className="text-ink">Исправьте поля, отмеченные сообщением. Заявка не отправлялась.</p>
            ) : null}
            {status.kind === "not_configured" ? <p className="text-ink">{status.message}</p> : null}
            {status.kind === "error" ? <p className="text-ink">{status.message}</p> : null}
          </div>
          <p className="sr-only">Поля: имя, телефон, описание задачи, согласие на обработку данных.</p>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  error,
  placeholder,
  autoComplete,
  inputMode,
}: {
  name: string;
  label: string;
  error?: string;
  placeholder: string;
  autoComplete?: string;
  inputMode?: "tel" | "text";
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-graphite">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={name === "phone" ? "tel" : "text"}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        suppressHydrationWarning
        className="mt-2 h-12 w-full rounded-xl bg-mist px-4 text-base text-ink outline-none ring-1 ring-transparent transition focus:bg-paper focus:ring-green-text"
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-medium text-graphite">
          {error}
        </p>
      ) : null}
    </div>
  );
}
