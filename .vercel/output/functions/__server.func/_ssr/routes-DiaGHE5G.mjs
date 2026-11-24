import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, c as House, d as BadgeCheck, f as ArrowUpRight, i as Scale, l as ClipboardCheck, n as UserRound, o as LifeBuoy, s as Layers, t as X, u as Building2 } from "../_libs/lucide-react.mjs";
import { i as previewPathPrefix, n as INTAKE_NOTICE, r as leadSchema } from "./router-B5qud9vu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DiaGHE5G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		href: "#top",
		label: "Главная"
	},
	{
		href: "#services",
		label: "Услуги"
	},
	{
		href: "#business",
		label: "Для бизнеса"
	},
	{
		href: "#about",
		label: "О компании"
	},
	{
		href: "#contacts",
		label: "Контакты"
	}
];
var services = [{
	id: "private",
	title: "Частным клиентам",
	summary: "Бытовые и сервисные задачи в одном порядке: заявка, уточнение, специалист и результат.",
	detail: "Контур для человека, которому нужна помощь с конкретной задачей дома или рядом с ним. Компания принимает обращение, уточняет объём, подбирает специалиста и передаёт результат. Перечень отдельных работ публикуется здесь только после утверждения — заранее услуги не добавляются.",
	href: "#private",
	icon: House
}, {
	id: "business",
	title: "Для бизнеса",
	summary: "Обслуживание организаций: одна точка связи, понятный порядок и контроль по договорённости.",
	detail: "Организация получает единый вход для сервисных задач. Состав работ, периодичность и документы согласуются отдельно под задачу. Корпоративный кабинет и отдельные регламенты можно подключить следующим этапом — их сейчас нет.",
	href: "#business",
	icon: Building2
}];
var reasons = [
	{
		title: "Единая компания",
		text: "Разные задачи ведутся в одном контуре, а не через набор случайных исполнителей.",
		icon: Layers
	},
	{
		title: "Организация обслуживания",
		text: "У заявки есть последовательность: уточнение, специалист, работа, результат.",
		icon: ClipboardCheck
	},
	{
		title: "Проверенные специалисты",
		text: "К задаче подключается человек, который подходит по её профилю.",
		icon: UserRound
	},
	{
		title: "Понятная стоимость",
		text: "Условия и цена согласуются до начала работ, без скрытого шага после старта.",
		icon: Scale
	},
	{
		title: "Контроль качества",
		text: "Результат сверяется с тем, о чём договорились по конкретной услуге.",
		icon: BadgeCheck
	},
	{
		title: "Поддержка клиентов",
		text: "После работы можно вернуться с вопросом по уже выполненной задаче.",
		icon: LifeBuoy
	}
];
var steps = [
	{
		n: "01",
		title: "Заявка",
		text: "Клиент описывает задачу и оставляет контакты для связи."
	},
	{
		n: "02",
		title: "Уточнение",
		text: "Компания уточняет объём, условия и то, что нужно для старта."
	},
	{
		n: "03",
		title: "Специалист",
		text: "Под задачу подбирается подходящий специалист."
	},
	{
		n: "04",
		title: "Работа",
		text: "Работа выполняется в согласованных рамках."
	},
	{
		n: "05",
		title: "Результат",
		text: "Клиент получает результат и гарантийную информацию, если она предусмотрена условиями услуги."
	}
];
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-2.5 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 28 28",
			className: "size-7 shrink-0",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "28",
					height: "28",
					rx: "7",
					className: "fill-graphite"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 18.5V9.5h7.2c2.4 0 3.9 1.3 3.9 3.35 0 2.1-1.55 3.4-3.95 3.4H11.2V18.5H8Zm3.2-5.05h3.55c.95 0 1.5-.45 1.5-1.15s-.55-1.1-1.5-1.1H11.2v2.25Z",
					className: "fill-paper"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "18.2",
					y: "16.2",
					width: "3.2",
					height: "3.2",
					rx: "0.6",
					className: "fill-green"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-base font-semibold tracking-widest text-graphite",
			children: "ЛАДОМ"
		})]
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-40 border-b border-transparent bg-paper/90 backdrop-blur-md ${scrolled ? "border-line" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-18 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "rounded-md",
					"aria-label": "ЛАДОМ, на главную",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Основное меню",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm font-medium text-ink transition-colors duration-200 hover:text-green-text",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#request",
					className: "hidden h-11 items-center rounded-full bg-green px-5 text-sm font-semibold text-graphite transition-colors duration-200 hover:bg-green-deep lg:inline-flex",
					children: "Оставить заявку"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-full text-graphite lg:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					onClick: () => setOpen((value) => !value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: open ? "Закрыть меню" : "Открыть меню"
					}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: "border-t border-line bg-paper lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8",
				"aria-label": "Мобильное меню",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "flex h-12 items-center text-base font-medium text-graphite",
					onClick: () => setOpen(false),
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#request",
					className: "mt-2 mb-3 inline-flex h-12 items-center justify-center rounded-full bg-green text-sm font-semibold text-graphite",
					onClick: () => setOpen(false),
					children: "Оставить заявку"
				})]
			})
		}) : null]
	});
}
function OrderDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: "shadow-card rounded-3xl bg-mist p-3 sm:p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-paper px-4 py-6 sm:px-7 sm:py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 520 400",
				className: "h-auto w-full",
				role: "img",
				"aria-labelledby": "order-diagram-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
						id: "order-diagram-title",
						children: "Разные задачи сходятся в один контур компании"
					}),
					[
						80,
						160,
						240,
						320
					].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "24",
						x2: "496",
						y1: y,
						y2: y,
						className: "stroke-line",
						strokeWidth: "1"
					}, y)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M214 72 C 300 72, 330 200, 378 200",
						className: "fill-none stroke-line",
						strokeWidth: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M214 200 H 378",
						className: "fill-none stroke-green",
						strokeWidth: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M214 328 C 300 328, 330 200, 378 200",
						className: "fill-none stroke-line",
						strokeWidth: "1.5"
					}),
					[
						{
							y: 36,
							mark: "mist"
						},
						{
							y: 156,
							mark: "green"
						},
						{
							y: 284,
							mark: "mist"
						}
					].map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "24",
							y: card.y,
							width: "190",
							height: "88",
							rx: "16",
							className: "fill-paper stroke-line"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "42",
							y: card.y + 26,
							width: "36",
							height: "36",
							rx: "10",
							className: "fill-mist"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "52",
							y: card.y + 36,
							width: "16",
							height: "16",
							rx: "3",
							className: card.mark === "green" ? "fill-green" : "fill-graphite"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "92",
							y: card.y + 30,
							width: "98",
							height: "8",
							rx: "4",
							className: "fill-mist"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "92",
							y: card.y + 48,
							width: "68",
							height: "8",
							rx: "4",
							className: "fill-line"
						})
					] }, card.y)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "430",
						cy: "200",
						r: "52",
						className: "fill-green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "430",
						cy: "200",
						r: "22",
						className: "fill-paper"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "430",
						cy: "200",
						r: "6",
						className: "fill-graphite"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-1 flex items-center justify-between gap-4 px-1 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Разные задачи" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-graphite",
					children: "Один контур"
				})]
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-3 text-sm font-medium text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-8 bg-green",
						"aria-hidden": "true"
					}), "Сервисная компания"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 max-w-xl text-4xl font-semibold tracking-tight text-balance text-graphite sm:text-5xl sm:leading-[1.12]",
					children: "Одна компания для решения любых задач"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg font-medium text-ink",
					children: "Разные задачи. Один надёжный партнёр."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted",
					children: "«Ладом» помогает частным клиентам и бизнесу решать разные задачи через один понятный порядок: заявка, уточнение, специалист, работа и результат по согласованным условиям."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#request",
						className: "inline-flex h-12 items-center justify-center rounded-full bg-green px-6 text-sm font-semibold text-graphite transition-colors duration-200 hover:bg-green-deep",
						children: "Оставить заявку"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#services",
						className: "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-graphite shadow-card transition-[box-shadow,background-color] duration-200 hover:bg-mist",
						children: "Наши услуги"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderDiagram, {})]
		})
	});
}
function Eyebrow({ children, onDark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: `flex items-center gap-3 text-sm font-medium ${onDark ? "text-paper/75" : "text-muted"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-px w-8 bg-green",
			"aria-hidden": "true"
		}), children]
	});
}
function Services() {
	const [openId, setOpenId] = (0, import_react.useState)(services[0]?.id ?? null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "scroll-mt-20 bg-mist",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Услуги" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold tracking-tight text-balance text-graphite sm:text-4xl",
						children: "Основные направления"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-pretty text-muted",
						children: "Каталог пополняется только утверждёнными направлениями. Сейчас зафиксированы два контура работы — частные клиенты и организации. Новая услуга добавляется в список и сразу появляется в этой сетке."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-5 md:grid-cols-2",
				children: services.map((service) => {
					const Icon = service.icon;
					const open = openId === service.id;
					const panelId = `${service.id}-detail`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						id: service.id,
						className: "scroll-mt-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex h-full flex-col rounded-2xl bg-paper p-6 shadow-card sm:p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-xl bg-mist text-green-text",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-xl font-semibold text-graphite",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
									children: service.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "mt-6 inline-flex h-11 items-center gap-1.5 self-start text-sm font-semibold text-green-text",
									"aria-expanded": open,
									"aria-controls": panelId,
									onClick: () => setOpenId(open ? null : service.id),
									children: [open ? "Свернуть" : "Подробнее", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: `size-4 transition-transform duration-200 ${open ? "rotate-90" : ""}` })]
								}),
								open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: panelId,
									className: "mt-3 border-t border-line pt-4 text-sm leading-relaxed text-ink",
									children: service.detail
								}) : null
							]
						})
					}, service.id);
				})
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "О компании" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold tracking-tight text-balance text-graphite sm:text-4xl",
						children: "Почему выбирают «Ладом»"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-pretty text-muted",
						children: "«Ладом» — единая сервисная компания. Мы не изображаем инфраструктуру, которой ещё нет: растём от понятного порядка работы и добавляем направления по мере их утверждения."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-4 sm:grid-cols-2",
					children: reasons.map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl bg-mist p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5 text-green-text",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-base font-semibold text-graphite",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: item.text
								})
							]
						}, item.title);
					})
				})]
			})
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "scroll-mt-20 bg-graphite text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					onDark: true,
					children: "Как это работает"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-xl text-3xl font-semibold tracking-tight text-balance text-paper sm:text-4xl",
					children: "Пять шагов от заявки до результата"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6",
					children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-paper/15 pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-green",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-semibold text-paper",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-paper/70",
								children: step.text
							})
						]
					}, step.n))
				})
			]
		})
	});
}
function Audiences() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-5 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				id: "private",
				className: "scroll-mt-24 rounded-2xl bg-mist p-7 sm:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-green-text",
						children: "Частные клиенты"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-semibold tracking-tight text-balance text-graphite sm:text-3xl",
						children: "Один контакт вместо поиска исполнителя под каждую задачу"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "Опишите, что нужно сделать. Мы уточним задачу и скажем, можем ли взять её в работу и на каких условиях. Если направление ещё не утверждено, мы так и скажем — без обещания «сделаем всё»."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#request",
						className: "mt-6 inline-flex h-11 items-center text-sm font-semibold text-graphite",
						children: "Описать задачу"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				id: "business",
				className: "scroll-mt-24 rounded-2xl bg-paper p-7 shadow-card sm:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-green-text",
						children: "Для бизнеса"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-semibold tracking-tight text-balance text-graphite sm:text-3xl",
						children: "Обслуживание организаций без лишней витрины"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "Компании нужен понятный порядок, а не набор разрозненных выездов. Состав работ, сроки и документы фиксируются под задачу. Личный кабинет и отдельные корпоративные регламенты — следующий этап, их пока нет."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#request",
						className: "mt-6 inline-flex h-11 items-center text-sm font-semibold text-green-text",
						children: "Обсудить задачу компании"
					})
				]
			})]
		})
	});
}
function Guarantees() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "guarantees",
		className: "scroll-mt-20 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Условия" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl font-semibold tracking-tight text-balance text-graphite sm:text-4xl",
				children: "Что мы обещаем, а что нет"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-base leading-relaxed text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Срок, стоимость и гарантия относятся к конкретной услуге и фиксируются до начала работ. Клиент получает гарантийную информацию только если она предусмотрена условиями этой услуги." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Мы не заявляем круглосуточную работу, моментальный выезд и гарантии, которые ещё не закреплены в работе компании. Если условие не подтверждено — его нет на сайте."
				})]
			})]
		})
	});
}
function leadsUrl() {
	return `${typeof window === "undefined" ? "" : previewPathPrefix(window.location.hostname, window.location.pathname) ?? ""}/api/leads`;
}
function RequestForm() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)({ kind: "idle" });
	async function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const payload = {
			name: String(data.get("name") ?? ""),
			phone: String(data.get("phone") ?? ""),
			task: String(data.get("task") ?? ""),
			consent: data.get("consent") === "on"
		};
		const parsed = leadSchema.safeParse(payload);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (typeof key === "string" && !next[key]) next[key] = issue.message;
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
				body: JSON.stringify(parsed.data)
			});
			const body = await response.json().catch(() => null);
			if (response.status === 503 || body?.code === "not_configured") {
				setStatus({
					kind: "not_configured",
					message: body?.message ?? "Заявка не зарегистрирована: канал приёма ещё не подключён. Данные не сохранены."
				});
				return;
			}
			if (!response.ok) {
				setStatus({
					kind: "error",
					message: "Сервер не принял форму. Проверьте поля и попробуйте ещё раз. Обращение не сохранено."
				});
				return;
			}
			setStatus({
				kind: "error",
				message: "Сервер ответил неожиданно. Обращение не считаем зарегистрированным."
			});
		} catch {
			setStatus({
				kind: "error",
				message: "Не удалось связаться с сервером. Заявка не отправлена и не сохранена."
			});
		}
	}
	const busy = status.kind === "submitting";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "request",
		className: "scroll-mt-20 bg-mist",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-3 text-sm font-medium text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-8 bg-green",
						"aria-hidden": "true"
					}), "Заявка"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-semibold tracking-tight text-balance text-graphite sm:text-4xl",
					children: "Опишите задачу"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-pretty text-muted",
					children: "Имя, телефон и короткое описание — чтобы можно было уточнить детали. Пока это только интерфейс: реальная регистрация обращения запустится, когда появится почта, CRM или другой приём заявок."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 rounded-2xl bg-paper p-4 text-sm leading-relaxed text-ink shadow-card",
					children: INTAKE_NOTICE
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				className: "rounded-2xl bg-paper p-6 shadow-card sm:p-8",
				"aria-describedby": "form-status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "name",
								label: "Имя",
								autoComplete: "name",
								error: errors.name,
								placeholder: "Как к вам обращаться"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "phone",
								label: "Телефон",
								autoComplete: "tel",
								inputMode: "tel",
								error: errors.phone,
								placeholder: "+7 900 000-00-00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "task",
									className: "text-sm font-medium text-graphite",
									children: "Описание задачи"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "task",
									name: "task",
									rows: 5,
									required: true,
									placeholder: "Что нужно сделать и в каком объёме",
									"aria-invalid": Boolean(errors.task),
									"aria-describedby": errors.task ? "task-error" : void 0,
									suppressHydrationWarning: true,
									className: "mt-2 w-full resize-y rounded-xl bg-mist px-4 py-3 text-base text-ink outline-none ring-1 ring-transparent transition focus:bg-paper focus:ring-green-text"
								}),
								errors.task ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "task-error",
									className: "mt-2 text-sm font-medium text-graphite",
									children: errors.task
								}) : null
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-start gap-3 text-sm leading-relaxed text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "consent",
									className: "mt-0.5 size-5 shrink-0 accent-green-text",
									"aria-invalid": Boolean(errors.consent),
									"aria-describedby": errors.consent ? "consent-error" : "consent-note",
									suppressHydrationWarning: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									id: "consent-note",
									children: [
										"Согласен на обработку персональных данных, чтобы со мной связались по этой заявке.",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#privacy",
											className: "font-medium text-green-text underline decoration-green/40 underline-offset-4",
											children: "Как это устроено"
										})
									]
								})]
							}), errors.consent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: "consent-error",
								className: "mt-2 text-sm font-medium text-graphite",
								children: errors.consent
							}) : null] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy,
						className: "mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-green text-sm font-semibold text-graphite transition-colors duration-200 hover:bg-green-deep disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:px-8",
						children: busy ? "Проверяем отправку…" : "Отправить заявку"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "form-status",
						role: "status",
						"aria-live": "polite",
						className: "mt-4 min-h-6 text-sm leading-relaxed",
						children: [
							status.kind === "invalid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink",
								children: "Исправьте поля, отмеченные сообщением. Заявка не отправлялась."
							}) : null,
							status.kind === "not_configured" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink",
								children: status.message
							}) : null,
							status.kind === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink",
								children: status.message
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sr-only",
						children: "Поля: имя, телефон, описание задачи, согласие на обработку данных."
					})
				]
			})]
		})
	});
}
function Field({ name, label, error, placeholder, autoComplete, inputMode }) {
	const errorId = `${name}-error`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: name,
			className: "text-sm font-medium text-graphite",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			type: name === "phone" ? "tel" : "text",
			autoComplete,
			inputMode,
			required: true,
			placeholder,
			"aria-invalid": Boolean(error),
			"aria-describedby": error ? errorId : void 0,
			suppressHydrationWarning: true,
			className: "mt-2 h-12 w-full rounded-xl bg-mist px-4 text-base text-ink outline-none ring-1 ring-transparent transition focus:bg-paper focus:ring-green-text"
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: errorId,
			className: "mt-2 text-sm font-medium text-graphite",
			children: error
		}) : null
	] });
}
function Contacts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacts",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-3 text-sm font-medium text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-8 bg-green",
						"aria-hidden": "true"
					}), "Контакты"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-semibold tracking-tight text-balance text-graphite sm:text-4xl",
					children: "Связаться с «Ладом»"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted",
					children: "Телефон, адрес и график работы появятся здесь, когда компания их утвердит. Выдуманные реквизиты на сайт не ставим. Сейчас единственная подготовленная точка — форма заявки, и она ещё не принимает обращения."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#request",
					className: "inline-flex h-12 items-center justify-center rounded-full bg-green px-6 text-sm font-semibold text-graphite hover:bg-green-deep sm:self-start",
					children: "Перейти к форме"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Публичный телефон и адрес не опубликованы."
				})]
			})]
		})
	});
}
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "privacy",
		className: "scroll-mt-20 border-t border-line bg-mist",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-5 py-12 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold text-graphite",
				children: "Обработка персональных данных"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
				children: "Для реальной заявки нужны имя и телефон, чтобы связаться по задаче. Сейчас форма эти сведения не передаёт в CRM и не сохраняет. Перед запуском приёма нужно утвердить политику обработки персональных данных и подключить канал, который её соблюдает: почту, CRM или защищённый API. До этого момента отправка не означает регистрацию обращения."
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xs text-sm leading-relaxed text-muted",
				children: "Разные задачи. Один надёжный партнёр."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap gap-x-6 gap-y-3",
				"aria-label": "Подвал",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "text-sm text-ink hover:text-green-text",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#privacy",
					className: "text-sm text-ink hover:text-green-text",
					children: "Персональные данные"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl px-5 pb-8 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ЛАДОМ"
				]
			})
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:shadow-card",
			children: "К содержанию"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Audiences, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guarantees, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequestForm, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contacts, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Privacy, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };
