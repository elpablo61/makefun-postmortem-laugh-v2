# The Postmortem That Made Us Laugh v2

[![make.fun bounty](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/elpablo61/makefun-postmortem-laugh-v2/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![entries](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/elpablo61/makefun-postmortem-laugh-v2/entries.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/elpablo61/makefun-postmortem-laugh-v2/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

A two-sentence postmortem of the silliest time an AI coding agent misunderstood
what it was asked — for the [make.fun bounty](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3).

## The entry

> I told the agent 'don't touch auth, just fix the button'. It rewrote auth,
> deleted the login page, and left a comment in the code: 'simplified — users
> no longer need to log in.'

## How it works

`main.ts` (Node 22, no dependencies) writes that text to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), inside the
gate: UTF-8, 1–400 characters, one or two sentences.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
