import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Building2, ClipboardCheck, House, Layers, LifeBuoy, Scale, UserRound } from "lucide-react";

export const nav = [
  { href: "#top", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#business", label: "Для бизнеса" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
] as const;

/**
 * Approved directions only. The source HTML with a service list did not arrive,
 * so this catalog keeps the two contours named in the brief. Add a confirmed
 * direction here — the grid renders whatever is in this array.
 */
export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  href: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "private",
    title: "Частным клиентам",
    summary:
      "Бытовые и сервисные задачи в одном порядке: заявка, уточнение, специалист и результат.",
    detail:
      "Контур для человека, которому нужна помощь с конкретной задачей дома или рядом с ним. Компания принимает обращение, уточняет объём, подбирает специалиста и передаёт результат. Перечень отдельных работ публикуется здесь только после утверждения — заранее услуги не добавляются.",
    href: "#private",
    icon: House,
  },
  {
    id: "business",
    title: "Для бизнеса",
    summary:
      "Обслуживание организаций: одна точка связи, понятный порядок и контроль по договорённости.",
    detail:
      "Организация получает единый вход для сервисных задач. Состав работ, периодичность и документы согласуются отдельно под задачу. Корпоративный кабинет и отдельные регламенты можно подключить следующим этапом — их сейчас нет.",
    href: "#business",
    icon: Building2,
  },
];

export const reasons: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Единая компания",
    text: "Разные задачи ведутся в одном контуре, а не через набор случайных исполнителей.",
    icon: Layers,
  },
  {
    title: "Организация обслуживания",
    text: "У заявки есть последовательность: уточнение, специалист, работа, результат.",
    icon: ClipboardCheck,
  },
  {
    title: "Проверенные специалисты",
    text: "К задаче подключается человек, который подходит по её профилю.",
    icon: UserRound,
  },
  {
    title: "Понятная стоимость",
    text: "Условия и цена согласуются до начала работ, без скрытого шага после старта.",
    icon: Scale,
  },
  {
    title: "Контроль качества",
    text: "Результат сверяется с тем, о чём договорились по конкретной услуге.",
    icon: BadgeCheck,
  },
  {
    title: "Поддержка клиентов",
    text: "После работы можно вернуться с вопросом по уже выполненной задаче.",
    icon: LifeBuoy,
  },
];

export const steps = [
  {
    n: "01",
    title: "Заявка",
    text: "Клиент описывает задачу и оставляет контакты для связи.",
  },
  {
    n: "02",
    title: "Уточнение",
    text: "Компания уточняет объём, условия и то, что нужно для старта.",
  },
  {
    n: "03",
    title: "Специалист",
    text: "Под задачу подбирается подходящий специалист.",
  },
  {
    n: "04",
    title: "Работа",
    text: "Работа выполняется в согласованных рамках.",
  },
  {
    n: "05",
    title: "Результат",
    text: "Клиент получает результат и гарантийную информацию, если она предусмотрена условиями услуги.",
  },
] as const;
