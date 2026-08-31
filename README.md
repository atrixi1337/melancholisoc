# MELANCHOLISOC — a melancholic night at the SOC

The journal of a bored SOC analyst on an endless night shift: the unusuals of
the night, filed in a Kafkaesque Bureau, alongside genuine cybersecurity field
notes. Dark, melancholic, bureaucratic. No one is coming. The alert remains.

## Pages

| File | Contents |
|---|---|
| `index.html` | The night — hero, alert marquee, tonight's unusuals, field notes index |
| `journal.html` | Journal of Unusuals — six case files (03:33 ping, The Occupant, ticket #4471, the blank resignation letter, the 300s beacon, coffee) |
| `notes.html` | Field Notes — real security content: beaconing/interval analysis, 3 AM triage checklist, base-rate math on false positives, phishing triage (SPF/DKIM/DMARC), Sigma + YARA examples, MITRE ATT&CK escalation |
| `bureau.html` | The Bureau — history, org chart, forms 12-B through 0, frequently deferred questions |
| `404.html` | Your request has been assigned a ticket |

## Design

- Kafkaesque bureaucratic noir: soot black, aged-paper ink, sodium-amber
  accent, rubber-stamp red
- Cormorant Garamond (display serif) + IBM Plex Mono (logs, stamps, code)
- Animated film grain, vignette, redacted text that declassifies on hover,
  live clock, typewriter dispatches, alert marquee, giant outlined wordmarks
- Static, no build step, no dependencies, respects `prefers-reduced-motion`

## Run it

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Any static host works (nginx, GitHub Pages, Netlify — point their 404 at `404.html`).

## Colophon

Written by the analyst, provisional. Badge 00331. Basement level 2.
Filed under: loneliness, detection, bureaucracy.
