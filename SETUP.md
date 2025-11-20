# Инструкция по настройке

## Шаг 1: Установка зависимостей

```bash
npm install
```

## Шаг 2: Настройка базы данных

1. Создайте файл `.env` в корне проекта:

```bash
cp .env.example .env
```

2. Отредактируйте `.env` и укажите строку подключения к PostgreSQL:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/luck_superpower"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

3. Убедитесь, что PostgreSQL запущен и база данных создана.

## Шаг 3: Инициализация базы данных

```bash
# Генерация Prisma Client
npm run db:generate

# Применение схемы к базе данных
npm run db:push
```

## Шаг 4: (Опционально) Добавление звуков

Поместите звуковые файлы в `public/sounds/`:
- `heads.mp3` - звук для орла
- `tails.mp3` - звук для решки
- `win.mp3` - звук для нового рекорда
- `toss.mp3` - звук броска монетки

Подробнее см. `public/sounds/README.md`

## Шаг 5: Запуск приложения

```bash
npm run dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Полезные команды

```bash
# Открыть Prisma Studio (GUI для базы данных)
npm run db:studio

# Проверка кода
npm run lint

# Сборка для production
npm run build

# Запуск production сервера
npm run start
```

## Решение проблем

### Ошибка подключения к базе данных

Убедитесь, что:
- PostgreSQL запущен
- Строка подключения в `.env` правильная
- База данных существует

### Ошибка "Prisma Client not generated"

Выполните:
```bash
npm run db:generate
```

### Проблемы с портами

Если порт 3000 занят, Next.js автоматически предложит использовать другой порт.

