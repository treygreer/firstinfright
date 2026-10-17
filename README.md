# First in Fright

Team website: https://www.firstinfright.org/

The homepage is maintained in this repository. The simulation viewer is
maintained and hosted separately by https://github.com/treygreer/treb at
https://treygreer.github.io/treb/.

## Publishing

GitHub Pages publishes this repository's website files. Keep `CNAME` set to
`www.firstinfright.org`. DNS is managed through Domainmonger; publishing a new
homepage does not require changing DNS or the custom domain.

`index.html`, `machine.png` and `favicon.ico` supply the homepage. The illustration
is rendered from the simulator's SketchUp geometry. `service-worker.js` retires
the former viewer's root-scoped offline cache so existing visitors receive the
new homepage. It does not cache the homepage or interfere with the viewer's
separate origin.

The old `treb-2026-offline.html` URL redirects to the current viewer download.
The installed viewer should be installed again from its new simulator URL.

The homepage links to the current 2026 model: 8 lb pumpkin, 11 oz sling, 9 oz
added hardware at the arm tip, maximum-range optimization at 30°.
