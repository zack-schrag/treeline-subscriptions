# Subscriptions

A [Treeline](https://github.com/zack-schrag/treeline-money) plugin that detects recurring charges and tracks subscription costs.

## Features

- **Auto-detection**: Analyzes transaction patterns using fuzzy matching to find recurring charges
- **Cost tracking**: See monthly, annual, and year-to-date spending on subscriptions
- **Hide false positives**: Mark non-subscriptions to exclude them from totals
- **Manual tagging**: Tag transactions to force-include subscriptions that aren't auto-detected
- **Stale detection**: Highlights subscriptions that may have been cancelled (no recent charges)
- **Recent charges**: Preview recent transactions for any subscription
- **View SQL**: See the detection query for power users

## Keyboard Shortcuts

- `j` / `k` - Navigate up/down
- `Enter` - View transactions in Query Editor
- `h` - Hide/restore subscription
- `/` - Focus search

## Installation

### From Community Plugins (Recommended)

1. Open Treeline
2. Go to Settings > Plugins > Community Plugins
3. Find "Subscriptions" and click Install
4. Restart Treeline

### Manual Installation

```bash
tl plugin install https://github.com/zack-schrag/treeline-subscriptions
# Restart Treeline
```

## Development

```bash
git clone https://github.com/zack-schrag/treeline-subscriptions
cd treeline-subscriptions
npm install
npm run build
tl plugin install .
```

## License

MIT
