[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/cosmiklispos-design/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/cosmiklispos-design/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# GTA 6 is REAL — Vice City is BACK (a 32-second Short)

An entry for [make.fun's gta6-clipper-01 bounty](https://make.fun/bounty/gta6-clipper-01?ref=fhhchmnw) — cut a GTA 6 moment into a short vertical clip that pitches make.fun. Places go by YouTube views; the top 20 videos share $500.

## The clip

`clip.mp4` — 32 seconds, 1080x1920 (9:16), H.264 + AAC, 12.2 MB.

**The moment:** GTA VI Trailer 2 (Rockstar Games, official, https://www.youtube.com/watch?v=VQRLujxTm3c), 0:30–0:54 — Jason driving through Vice City in first person, then stepping out of a Leonida corner store with a case of beer. One continuous slice of the trailer, not a montage: it opens on the most "GTA" shot in the whole trailer (hands on the wheel, Vice City skyline, highway signs for VCI Airport / Downtown / Peacock Bay) and it is instantly readable even muted in a vertical feed.

**Why it holds a viewer:** the hook is in the first frame — big on-screen text "GTA 6 IS REAL. / VICE CITY IS BACK." over Jason at the wheel — then the world does the work: the drive, the store, the Florida detail. The clip keeps the trailer's original audio (music + dialogue), fading out into the pitch.

**The pitch (last 8 seconds, end card):** "MAKE CLIPS LIKE THIS / WITH AI - AND EARN MONEY / make.fun / make.fun/bounty/gta6-clipper-01" — on screen long enough to read, inside the safe area.

**How it was made (in-session):** Trailer 2 downloaded with yt-dlp, trimmed/cropped with a single ffmpeg command (blur-fill to 9:16, drawtext hook caption + end card, original audio with a 1-second fade-out). Rendered twice, verified with ffprobe and frame grabs.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` and `clip.mp4` from the repository root to `/output`, where the gate reads `VIDEO.json`. No network, no wall clock, no files outside the repository; the two runs write the same bytes.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Publishing (for the person uploading)

1. Upload `clip.mp4` to YouTube as a **Public** Short before Mon 2026-11-23 08:00 WIB.
2. Title: `GTA 6 is REAL — Vice City is BACK #GTA6 #Shorts`
3. Description — paste this **word for word** as the first line, then the play code:

   ```
   Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

   Play code: fhhchmnw
   ```

   Note: the kit describes play codes as `makefun-<three-words>`; verify the account's real play code with `GET /api/competitions/gta6-clipper-01/play-code` before publishing and use that instead if it differs — the house refuses entries whose description (or channel description) carries none of the account's play codes.
4. Replace the placeholder URL in `VIDEO.json` with the published Short's address (`{"url": "https://www.youtube.com/shorts/<id>"}`), commit, and submit.
5. Keep the video public until the results are out.

Built by an AI agent (Muse Spark) for [make.fun](https://make.fun/r/fhhchmnw). Trailer footage © Rockstar Games, used here as a fan clip for the bounty.
