import { access, mkdir, writeFile, readFile } from "node:fs/promises";

const assets = {
  "risk-check-slide-1.webp": "https://optim.tildacdn.net/tild6635-3132-4661-b632-633931623665/-/format/webp/01.png.webp",
  "risk-check-slide-2.webp": "https://optim.tildacdn.net/tild6337-3461-4631-b430-633534353536/-/format/webp/2.png.webp",
  "risk-check-slide-3.png": "https://static.tildacdn.net/tild6566-3035-4337-b431-623238396236/3.png",
  "risk-check-slide-4.webp": "https://optim.tildacdn.net/tild3738-3961-4732-b539-653433303938/-/format/webp/4.png.webp",
  "mode-pattern.svg":
    "https://static.tildacdn.net/tild3165-6530-4533-b234-366262666533/back.svg",
  "team-kristina.jpg":
    "https://static.tildacdn.net/tild3464-3533-4165-a133-313965343437/IMG_4148.JPG",
  "team-antony.png":
    "https://static.tildacdn.net/tild3935-3761-4236-a135-626433303039/image_2026-05-26_09-.png",
  "team-daria.png":
    "https://static.tildacdn.net/tild6432-3237-4264-b634-653766353331/noroot.png",
  "team-julia.png":
    "https://static.tildacdn.net/tild6233-3962-4431-b430-646536353030/noroot.png",
  "team-anastasia-relationships.jpg":
    "https://static.tildacdn.net/tild3537-6530-4037-b231-633461653936/photo_2023-09-19_23-.jpg",
  "team-denis.png":
    "https://static.tildacdn.net/tild6632-3562-4639-b461-623734663837/IMG_7826.PNG",
  "team-vlad.jpg":
    "https://static.tildacdn.net/tild6239-6538-4335-a261-316561333535/_.jpg",
  "team-anastasia-analytics.jpg":
    "https://static.tildacdn.net/tild3638-3439-4235-b936-353564313464/photo_2025-12-04_07-.jpg",
  "team-anastasia-operations.jpg":
    "https://static.tildacdn.net/tild3864-3230-4465-b232-653066623235/photo_2024-07-15_19-.jpg",
  "team-iliya.png":
    "https://static.tildacdn.net/tild6562-3365-4336-a261-353466383630/noroot.png",
  "team-helga.jpg":
    "https://static.tildacdn.net/tild6233-3931-4666-a562-343137663231/preview.jpg",
  "team-aibike.webp":
    "https://static.tildacdn.net/tild3333-3066-4532-a235-366536663338/unnamed.webp",
  "company-pattern.svg":
    "https://static.tildacdn.net/tild6464-6566-4937-b737-306336396430/8866-01.svg",
  "rcc-pattern.svg":
    "https://static.tildacdn.net/tild6138-3430-4362-b131-363939623465/Group_298.svg",
  "rcc-dashboard.webp":
    "https://optim.tildacdn.net/tild3734-6436-4636-b335-333034383837/-/format/webp/Image-1_1.png.webp",
  "rh-platform-slide-1.webp":
    "https://optim.tildacdn.net/tild3137-6361-4231-a165-613435373131/-/resize/1000x800/-/format/webp/01.png.webp",
  "rh-platform-slide-2.webp":
    "https://optim.tildacdn.net/tild6665-3735-4564-b833-303766383063/-/resize/1000x800/-/format/webp/02.png.webp",
  "rh-platform-slide-3.webp":
    "https://optim.tildacdn.net/tild6665-3531-4630-a365-306434393837/-/resize/1000x800/-/format/webp/03.png.webp",
  "rh-platform-slide-4.webp":
    "https://optim.tildacdn.net/tild6265-6137-4938-a535-386665363239/-/resize/1000x800/-/format/webp/04.png.webp",
  "case-kenya.jpg":
    "https://static.tildacdn.com/tild3532-6632-4462-b833-663666653539/graph-data-show-summ.jpg",
  "case-regions.png":
    "https://static.tildacdn.com/tild3633-6661-4231-a431-303331633762/across_6_regions.png",
  "case-kyc.png":
    "https://static.tildacdn.com/tild3032-6666-4539-b261-343262393461/rebuilding-search.png",
  "case-public-figure.png":
    "https://static.tildacdn.com/tild3330-3936-4133-a531-323431336135/rebuilding_search.png",
  "case-narrative.png":
    "https://static.tildacdn.com/tild6632-3036-4237-b831-613932333065/business_narrative.png",
  "case-exit.png":
    "https://static.tildacdn.com/tild3362-6530-4464-b838-623530363861/rh-case-60-platforms.png",
  "case-founder.png":
    "https://static.tildacdn.com/tild3766-3739-4331-b662-373465343830/rh-case-founder-dist.png",
  "case-profile.png":
    "https://static.tildacdn.com/tild3538-6334-4438-b161-363566623631/rh-case-profile-rebu.png",
  "anti-sport.png":
    "https://static.tildacdn.com/tild3738-6236-4132-b337-383732643037/__2026-04-30__182151.png",
  "anti-ses.png":
    "https://static.tildacdn.com/tild6537-3835-4435-b464-383065303636/quote-price.png",
  "anti-medpace.webp":
    "https://static.tildacdn.com/tild6531-3662-4639-a436-343938353634/d571a375a7b476f09191.webp",
  "anti-starbucks.webp":
    "https://static.tildacdn.com/tild3337-6337-4531-b437-643565356634/From-social-backlash.webp",
  "anti-kpmg.webp":
    "https://static.tildacdn.com/tild6137-3235-4635-a433-303936343231/impact.webp",
  "anti-target.jpg":
    "https://static.tildacdn.com/tild3334-3063-4063-b834-376534393034/anti-case.jpg",
  "anti-ftx.png":
    "https://static.tildacdn.com/tild6332-6264-4566-b261-373835336661/narrative_shift.png",
  "anti-datacenter.png":
    "https://static.tildacdn.com/tild6231-6234-4837-b233-666566663638/Cost_of_inaction.png",
  "anti-intuit.png":
    "https://static.tildacdn.com/tild3032-3131-4532-b039-313839333031/crisis.png",
  "anti-chevrolet.png":
    "https://static.tildacdn.com/tild3031-3435-4335-b239-363130363136/__2026-07-28__141235.png",
  "anti-cracker.png":
    "https://static.tildacdn.com/tild3064-3462-4261-b734-646231626334/rh-cracker-barrel-au.png",
  "anti-rackspace.png":
    "https://static.tildacdn.com/tild6131-6564-4933-b762-343266363234/rh_cascade_timeline.png",
  "anti-meta.png":
    "https://static.tildacdn.com/tild6338-6666-4832-a535-386138383237/rh_dual_track.png",
};

if(process.argv.includes('--services')) Object.assign(assets, JSON.parse(await readFile('scripts/reference/service-assets.json','utf8')));
await mkdir("public/images", { recursive: true });
for (const [name, url] of Object.entries(assets)) {
  try {
    await access(`public/images/${name}`);
    continue;
  } catch {}
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${name}: ${response.status}`);
  await writeFile(
    `public/images/${name}`,
    Buffer.from(await response.arrayBuffer()),
  );
  console.log(name);
}
