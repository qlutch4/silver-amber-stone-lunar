import { createFileRoute } from "@tanstack/react-router";
import { leadSchema } from "@/lib/lead";

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, code: "invalid" }, { status: 400 });
        }

        const parsed = leadSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ ok: false, code: "invalid" }, { status: 400 });
        }

        // Valid shape only. Nothing is stored, forwarded, or logged.
        return Response.json(
          {
            ok: false,
            code: "not_configured",
            message:
              "Заявка не зарегистрирована: канал приёма обращений ещё не подключён. Данные не сохранены.",
          },
          { status: 503 },
        );
      },
    },
  },
});
