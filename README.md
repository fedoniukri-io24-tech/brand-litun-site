# brand-litun-site

Окремий лендинг курсу **«Освітній бренд для викладача»** (Ілля Літун / TURBO EDUCATION).

Standalone Next.js 14 App Router — без звʼязку з основним сайтом `illyalitun.com`.

## Setup

```bash
npm install
cp .env.example .env.local
# заповни TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID
npm run dev
```

## Env

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL |
| `TELEGRAM_BOT_TOKEN` | Bot token |
| `TELEGRAM_CHAT_ID` | Chat for leads / questions |

## Payments (WayForPay) — pre-registration prices

- Book seat (shared): `https://secure.wayforpay.com/button/b21521eb17c43`
- Group (19.990): `https://secure.wayforpay.com/payment/s4a5e0b25984b`
- Personal (60.990): `https://secure.wayforpay.com/payment/s71531bfa4317`
