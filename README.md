### To access the TechScriptorium blog's files and code, check out this link: [github/lexuscreations/techScriptoriumFiles](https://github.com/lexuscreations/techScriptoriumFiles/tree/main)

<hr />

- To run this app locally, create a `.env.local` file in the root directory and refer to `.env.example` for guidance.

- After implementing your preferred customizations, be sure to update the `src\utils\siteMetaData.js` file _metaInfo_.
  - You also need to update all meta details, links, and author information throughout the entire app, including the README.

<hr />

- Before production, locate and set `removeConsole` to true in the `compiler` object within `next.config.js` in the `root` directory.

- To set up your environment, install NVM. Once installed, navigate to the project folder and run the command `nvm use` before launching the project.

  - Additionally, you can download NVM for Windows from this link: [github/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

- If you don't have the VS Code extension [`Code Spell Checker`](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) installed, please run [`npm i cspell`](https://www.npmjs.com/package/cspell).

<hr />

### Optional

- To list your installed VS Code extensions, use the command `code --list-extensions`, and save the list to `.vscode/extensions` using `code --list-extensions > extensions` this command.

- To install "Git Bash", you can download it from [git-scm/downloads](https://git-scm.com/downloads).

<hr />

### Library, framework, Tools and Resources / software usage

- [react.dev](https://react.dev/)
- [supabase](https://supabase.com/)
- [nextjs.org](https://nextjs.org/)
- [contentlayer.dev](https://contentlayer.dev/)
- [legacy.reactjs.org](https://legacy.reactjs.org/)
- [react-hook-form](https://www.react-hook-form.com/)
- [react-svgr/playground](https://react-svgr.com/playground/)
- [react-hook-form/form-builder](https://www.react-hook-form.com/form-builder/)

<!-- also need to update steps and commands of supabase setup as well -->
<!-- need to create figma and then based on that, need to re-create this app and then also need to update that figma link and screenshots in his readme-->
<!-- need to updated DOCUMENTATION.md -->

<!-- copyCodeToClipboardBtn functionality and loading functionality -->

<!-- <hr /> -->

<!-- # Next.js 13 Blog Tutorial: Build SEO Optimized Personal Blog with Next.js, Contentlayer, and Tailwind CSS 🔥

![GitHub stars](https://img.shields.io/github/stars/codebucks27/Nextjs-tailwindcss-blog-template?style=social&logo=ApacheSpark&label=Stars)&nbsp;&nbsp;
![GitHub forks](https://img.shields.io/github/forks/codebucks27/Nextjs-tailwindcss-blog-template?style=social&logo=KashFlow&maxAge=3600)&nbsp;&nbsp;
![Github Followers](https://img.shields.io/github/followers/codebucks27.svg?style=social&label=Follow)&nbsp;&nbsp;<br />

For Demo checkout following links👇: <br />
[Nextjs Personal Blog Website](https://create-blog-with-nextjs.vercel.app/) <br />

Starter Code Files👇: <br />
[Nextjs Personal Blog Website Starter Code](https://github.com/codebucks27/Nextjs-contentlayer-blog) <br />

If you want to learn how to create it please follow below tutorial👇: <br />
https://youtu.be/1QGLHOaRLwM <br />
[![YouTube Video Views](https://img.shields.io/youtube/views/1QGLHOaRLwM?style=social)](https://youtu.be/1QGLHOaRLwM)<br />

### ⭐DO NOT FORGET TO STAR THIS REPO⭐

### Images of The Portfolio Website:

#### Home

![Nextjs Personal Blog Website](https://github.com/codebucks27/Nextjs-contentlayer-blog/blob/main/project%20images/Home-Big.png?raw=true)

#### About

![Nextjs Personal Blog Website About Page](https://github.com/codebucks27/Nextjs-contentlayer-blog/blob/main/project%20images/About-Big.png?raw=true)

#### Contact

![Next.js Personal Blog Website Contact Page](https://github.com/codebucks27/Nextjs-contentlayer-blog/blob/main/project%20images/Cotnact-Big.png?raw=true)

For more Images please check the [project images](https://github.com/codebucks27/Nextjs-contentlayer-blog/tree/main/project%20images) folder from this repo or check the demo link.

### Resources Used in This Project

- Character image in the About page created by using [Bing Search[(https://www.bing.com/).
- Lottie animation in the contact page: [from here](https://lottiefiles.com/animations/sloth-meditate-SzNofNFhYY)
- Fonts from https://fonts.google.com/ <br />
- Icons from https://iconify.design/ and im using react-icons <br />

### All the images used in the blogs:

- Photo by <a href="https://unsplash.com/@kmuza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Carlos Muza</a> on <a href="https://unsplash.com/photos/hpjSkU2UYSU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@marvelous?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marvin Meyer</a> on <a href="https://unsplash.com/photos/SYTO3xs06fU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@pinjasaur?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paul Esch-Laurent</a> on <a href="https://unsplash.com/photos/oZMUrWFHOB4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/photos/-1_RZL8BGBM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@laurenmancke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lauren Mancke</a> on <a href="https://unsplash.com/photos/aOC7TSLb1o8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@lucabravo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luca Bravo</a> on <a href="https://unsplash.com/photos/XJXWbfSo2f0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christina @ wocintechchat.com</a> on <a href="https://unsplash.com/photos/OtHEYbQXLFU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@cdx2?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">C D-X</a> on <a href="https://unsplash.com/photos/PDX_a_82obo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">charlesdeluvio</a> on <a href="https://unsplash.com/photos/cZr2sgaxy3Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@emilep?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emile Perron</a> on <a href="https://unsplash.com/photos/xrVDYZRGdw4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Photo by <a href="https://unsplash.com/@synkevych?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roman Synkevych</a> on <a href="https://unsplash.com/photos/vXInUOv1n84?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
