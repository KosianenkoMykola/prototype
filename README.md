# Neolith — Next.js прототип (код з Figma)

Повноцінний клікабельний прототип сайту клініки Neolith, зібраний **кодом** (React + Tailwind) за макетом [Figma](https://www.figma.com/design/c3gUbKIxTzaV2HogkFSb6l/Neolith?node-id=82-2).

## Запуск

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

## Маршрути (14 екранів)

| URL | Сторінка |
|-----|----------|
| `/` | Головна (усі секції) |
| `/services` | Каталог послуг |
| `/services/implantation` | Сторінка послуги |
| `/doctors` | Лікарі |
| `/doctors/kamila-novak` | Профіль лікаря |
| `/consultation` | Онлайн-консультація |
| `/cases` | Кейси |
| `/cases/example` | Сторінка кейсу |
| `/prices` | Прайс-лист |
| `/blog` | Блог |
| `/blog/example` | Стаття |
| `/about` | Про клініку |
| `/contacts` | Контакти |
| `/landing/ukrainians-in-poland` | Лендинг |

## Структура

- `src/components/ui/` — кнопки, контейнер, картки, заголовки секцій
- `src/components/layout/` — Header, Footer, оболонка сайту
- `src/components/home/` — секції головної
- `src/components/pages/` — внутрішні сторінки

## Дизайн-токени (з Figma)

- Шрифт: Inter
- Чорний: `#121212`, сірий текст: `#666`, фон секцій: `#f5f5f5`
- Контейнер: max 1440px, padding 80px (desktop)

## Далі для продакшену

1. Замінити `ImagePlaceholder` на реальні фото з CMS або `public/`
2. Підключити форми (consultation) до API / email
3. Додати анімації та точне pixel-perfect звірення з Figma Dev Mode
