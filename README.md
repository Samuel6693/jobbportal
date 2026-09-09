# Jobbportal

Examinationsuppgift i CMS-kursen. Projektet byggs med Next.js och ska kopplas till Storyblok.

## Getting Started

Starta utvecklingsservern:

```bash
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i webbläsaren.

## Projektmål

- Jobblista på `/jobs`.
- Detaljsidor på `/jobs/[slug]`.
- Innehåll hämtas från Storyblok.
- Projektet deployas på Vercel.

## Miljövariabler

Projektet kommer behöva följande miljövariabel:

```bash
STORYBLOK_DELIVERY_API_TOKEN=
```

Token ska ligga lokalt i `.env.local` och senare läggas in i Vercel.

## Inlämning

- GitHub-repo
- Vercel-URL
