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

## Payments (WayForPay)

- Book seat (shared): `https://secure.wayforpay.com/button/b21521eb17c43`
- Group full: `https://secure.wayforpay.com/payment/sd6177c4a65a1`
- Personal full: `https://secure.wayforpay.com/payment/s8117ee151c74`
