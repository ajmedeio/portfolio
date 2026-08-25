---
title: Cloning an NFC Fob
tags: personal, nfc, hacking, chameleon-ultra, mifare
timeline_date: 2026-08-25
publish: true
---

My apartment building uses NFC fobs for door access. I had one fob, and I wanted more. The building management wanted $50 per additional fob. I wanted $0 per additional fob.

This is how I cloned a Mifare Ultralight EV1 access fob onto blank magic cards for about $3 each.

## The Fob

I scanned the original fob with [NFC Tools PRO](https://play.google.com/store/apps/details?id=com.wakdev.nfctools.pro) on Android. Here's what I learned:

| Property | Value |
|---|---|
| Tag Type | ISO 14443-3A |
| Chip | NXP Mifare Ultralight EV1 (48 bytes) |
| UID | `04:A2:2D:52:85:11:94` (7-byte) |
| ATQA | `0x0044` |
| SAK | `0x00` |
| Memory | 80 bytes, 20 pages of 4 bytes each |

Mifare Ultralight is the low end of NXP's NFC chip family. No crypto auth, no challenge-response — just a UID and some data pages. It's used in transit cards, event wristbands, and apparently, apartment buildings that charge $50 per fob.

## The Tools

- **[Chameleon Ultra](https://chameleonultra.com/)** — An NFC emulator and reader that fits on a keychain. It can sniff communications between a reader and a tag, read tag memory, emulate tags, and write to magic cards. About $70.
- **[MTools BLE](https://mtoolstec.com/)** — Companion app for the Chameleon Ultra. Connects via Bluetooth. This is what you use to read dumps, configure emulation slots, and write to cards.

## Step 1: Read the Original

Using the Chameleon Ultra with MTools BLE, I read the full memory dump of the original fob. The data that matters lives on pages 04-09:

```
Page 04: D0:2F:82:4D
Page 05: 55:E5:74:49
Page 06: 9C:17:C9:34
Page 07: 97:EE:6C:AA
Page 08: 0C:2E:17:03
Page 09: EB:14:2E:C4
```

Pages 00-02 are UID and lock bytes. Page 03 is the one-time programmable area. Pages 0A-0F were empty.

## Step 2: Emulate and Sniff

Before buying cards, I tested whether the clone concept would even work. I loaded the dump into a Chameleon Ultra emulation slot and walked up to my door.

It didn't work.

To understand why, I used the Chameleon's HF sniff mode to capture the protocol exchange between the reader and my original fob, then did the same with the Chameleon emulating the fob. I wrote [a parser](https://github.com/ajmedeio/portfolio) to decode the Proxmark3-format trace files and compare them side by side.

The differences were revealing:

| | Original Fob | Chameleon Emulation |
|---|---|---|
| ATQA | `04:00` | `44:00` |
| Data pages | Real data | All zeros |
| Reader reads | Pages 04, 08 | Pages 04, 08, 0A, 0E (retries) |
| NAKs | 0 | 3 |

Two problems: the ATQA response byte was wrong, and the data pages were returning zeros instead of the actual fob data. The Chameleon slot hadn't been configured correctly.

After re-reading the dump using the MTools app's "Dump" tab and properly clicking "Simulate" to upload it to the slot, the emulation started matching the original trace exactly. The door opened.

## Step 3: Understand What the Reader Checks

From the sniff traces, the reader's protocol is straightforward:

1. `WUPA` — wake up any nearby tag
2. `ANTICOLL CL1` / `SELECT CL1` — get first half of 7-byte UID
3. `ANTICOLL CL2` / `SELECT CL2` — get second half
4. `READ page 0x04` — reads pages 04-07 (4 pages per READ command)
5. `READ page 0x08` — reads pages 08-0B

That's it. No `PWD_AUTH`, no `GET_VERSION`, no originality signature check. The reader just checks the UID and the data on pages 04-09. This is about as simple as NFC access control gets.

## Step 4: Buy the Right Blank Cards

Not all blank NFC cards will work. You need **magic cards** — cards with rewritable UIDs. A regular NTAG or Ultralight card has its UID burned in at the factory and cannot be changed, so even if you write the correct data, the UID won't match and the reader will reject it.

I evaluated a few options:

| Product | Works? |
|---|---|
| Generic "programmable NFC" cards from Amazon | ❌ Not UID-changeable |
| [LESSBLE Programmable Ultralight (Amazon)](https://www.amazon.com/LESSBLE-Programmable-Ultralight-Rewritable-Playlists/dp/B0GSZWNKFS/) | ⚠️ Standard Ultralight magic card, not EV1. Might work for UID-only readers. |
| [MTools Ultralight EV1 Magic Card](https://shop.mtoolstec.com/product/uid-changeable-ultralight-ev1-ul11-ev1-ul21-ult-c) | ✅ Exact chip family match. UID-changeable. |

I went with the **MTools Ultralight EV1 magic cards**. They're the same chip family as the original fob, which means identical ATQA, SAK, and memory layout. About $3 per card in bulk.

One thing worth noting: the Chameleon identified my purchased cards as **Ultralight EV1 (41)** while the original fob was **EV1 (20)**. The number refers to the storage variant — EV1 (20) is the MF0UL11 with 48 bytes of user memory, and EV1 (41) is the MF0UL21 with 128 bytes. Since the reader only reads pages 04-0B, the extra pages on the larger card are ignored. No impact whatsoever.

## Step 5: Write the Clone

1. Open MTools BLE, connect to the Chameleon Ultra
2. Load the original fob's dump file
3. Place a blank magic card on the Chameleon
4. Write the dump to the card

The magic card's UID gets rewritten to match the original. All data pages are copied over. The card is now a byte-for-byte clone.

I walked up to my apartment door, tapped the card, and heard the lock click open.

## Lessons

**Most access control is UID-only.** The reader in my building doesn't perform any cryptographic challenge. It reads a serial number and some static data bytes, and if they match what's in its database, the door opens. This is the NFC equivalent of checking someone's name against a guest list — no ID photo, no secret handshake.

**Sniffing the protocol is essential.** Without capturing the actual reader-tag communication, I wouldn't have known that the reader only checks pages 04-09, doesn't use password authentication, and doesn't verify the chip's originality signature. This knowledge told me exactly which cards would work and which wouldn't.

**The Chameleon Ultra is a fantastic tool.** Reading, emulating, sniffing, and writing — all from one device the size of a car key. The MTools app makes the workflow straightforward.

**Magic cards are cheap insurance.** For a few dollars each, I now have spare access cards for my apartment. They live in my wallet, my backpack, and my desk drawer. No more worrying about losing the one fob the building gave me.

## Reproduce This

You'll need:
1. A **Chameleon Ultra** ($70) and the **MTools BLE** app (free)
2. **UID-changeable magic cards** matching your fob's chip family. For Mifare Ultralight EV1: [MTools shop](https://shop.mtoolstec.com/product/uid-changeable-ultralight-ev1-ul11-ev1-ul21-ult-c)
3. Physical access to the original fob

Process:
1. Read the original fob with the Chameleon Ultra via MTools
2. (Optional) Sniff the reader-tag exchange to understand what the reader checks
3. Write the dump to a magic card
4. Test at the door

> [!warning] Disclaimer
> Only clone access credentials you own or have explicit permission to duplicate. This write-up documents a personal project on hardware I own, for doors I'm authorized to access.
