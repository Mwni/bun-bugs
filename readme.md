# Bun Bugs

A collection of minimal reproducible examples for bugs found in the [Bun Runtime](https://bun.sh/).

## WebSocket

#### Message Fragmentation

On some WebSocket server implementations, messages larger than 4096 bytes are split into separate messages causing the JSON parse to fail.
This appears to have something to do with continuation frames. It also occurs when using the [ws](https://github.com/websockets/ws) package in Bun.

```bash
bun run websocket-fragmentation.js
```


#### Unexpected Code 1001 Close

On some WebSocket server implementations, an established connection gets closed with code 1001 after a few seconds.

```bash
bun run websocket-close-1001.js
```

---

✅ These issues have been fixed by [this PR](https://github.com/oven-sh/bun/pull/7371) which has been shipped in Bun v1.0.15.
