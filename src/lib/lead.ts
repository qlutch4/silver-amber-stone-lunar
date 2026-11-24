import { z } from "zod";

const phoneDigits = (value: string) => value.replace(/\D/g, "");

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Укажите имя — хотя бы два символа.")
    .max(80, "Имя слишком длинное.")
    .regex(/^[\p{L}\s'-]+$/u, "Имя может содержать только буквы, пробел и дефис."),
  phone: z
    .string()
    .trim()
    .min(1, "Укажите номер телефона.")
    .refine((value) => phoneDigits(value).length >= 10 && phoneDigits(value).length <= 15, {
      message: "Проверьте номер: нужно от 10 до 15 цифр.",
    }),
  task: z
    .string()
    .trim()
    .min(10, "Опишите задачу чуть подробнее — хотя бы одно предложение.")
    .max(2000, "Описание длиннее 2000 символов."),
  consent: z.literal(true, { message: "Нужно согласие на обработку персональных данных." }),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const INTAKE_NOTICE =
  "Канал приёма заявок ещё не подключён. Форма проверяет поля, но не регистрирует обращение и никуда его не сохраняет.";
