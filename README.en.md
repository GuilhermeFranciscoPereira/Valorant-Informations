<p align="left">
  <a href="./README.md">
    <img src="https://img.shields.io/badge/🌍%20Ler%20em%20Português-blue?style=for-the-badge" alt="Ler em português"/>
  </a>
</p>

# 🎮 Valorant Informations Project 🎮

## 📌 About the project:

### The Valorant Informations Project aims to provide information about the Valorant game from Riot Games.  
### Information includes: Agents, Weapons, Maps, Bundles, and game ranks.

##

> 🔗 Website link: <a href="https://guilhermefranciscopereira.github.io/Valorant-Informations/" target="_blank">https://guilhermefranciscopereira.github.io/Valorant-Informations/</a>

#

## 🖥 Technologies Used
<div align='center'>

!['TypescriptLogo'](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
!['ReactLogo'](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
!['CssLogo'](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

    - Typescript  
    - Zod  
    - React  
    - React-query  
    - Axios  
    - React-hook-form  
    - React-router-dom  
    - Vite  
    - gh-pages  
    - Css Modules

## Versions used:
    - typescript: 5.2.2  
    - zod: 3.23.8  
    - react: 18.3.1  
    - react-query: 3.39.3  
    - axios: 1.7.2  
    - react-hook-form: 7.52.1  
    - react-router-dom: 6.25.1  
    - vite: 5.3.4  
    - gh-pages: 6.1.1  

## 🙋🏻‍♂ How to find your way around the project?

### All source code files are in: `./src`

## 🛈 How the project is structured

- `./src/@types:` Prevents errors when importing module.css files. The `module.d.ts` file contains a one-line setup that allows importing files ending with `module.css`.

- `./src/assets:` Contains all images used in the project.

- `./src/components:` Components that are reused throughout the project. In this first version: Header and Form.

- `./src/contexts:` Contexts are where data shared across the app is managed. In this project, this includes agent names, weapons, and maps received via form or card clicks, and passed to files responsible for rendering user choices.

- `./src/hooks:` Custom hooks used in the application.

- `./src/pages:` Contains full-page components for each app section. Each folder represents the root of a section in the app.

- `./src/routes:` A single file, `Router.tsx`, manages all routes. Using `Outlet` in (pages > RootLayout), we create a Single Page Application (SPA).

- `./src/services:` Contains `queryClient.ts`, which sets up a query client for our context provider.

- `./src/styles:` Contains a single file, `globalStyles.css`, with global styles for the project.

## ❔ How to run the project on my machine?

- First, you need to have Git installed on your computer. Git allows you to clone and manage code repositories.  
  - Windows: Download Git <a href="https://git-scm.com/download/win" target="_blank">here</a> and follow the installation instructions.  
  - macOS: You can install Git <a href="https://git-scm.com/download/mac" target="_blank">here</a> or via Homebrew:
    ```bash
    brew install git
    ```
  - Linux: Use your distribution’s package manager. For Debian/Ubuntu:
    ```bash
    sudo apt install git
    ```

- Open the terminal (on Windows, you can use Git Bash, installed along with Git).

- Navigate to the folder where you want to store the project.

- Run the following command to clone the repository:
  ```bash
  git clone https://github.com/GuilhermeFranciscoPereira/Valorant-Informations.git
  ```

- After cloning the repository, navigate to the project folder:
  ```bash
  cd Valorant-Informations
  ```

- Now you can open the project files with your favorite editor. For example, in VS Code:
  ```bash
  code .
  ```

- 🚨 Don’t forget: to avoid errors in the code, run the following command 🚨
  ```bash
  npm i
  ```

- To run the project in your browser (LocalHost), type in the terminal after `npm i`:
  ```bash
  npm run dev
  ```

## ⚠ Important project information ⚠

### All commits in this project include a detailed README about what was done. The ones related to section creation also include screenshots from the first version of the site. If you want to see the creation process, check the commits and their information!

### How to do that?

To see the creation process and what was done in each commit, follow these steps:

- First: On this page, scroll up until you see something like the image below under the green button. Then click it:  
!['Step 1 - How to view the project creation process'](./src/assets/commits-1step.png)

- Second: On the right side of the commit list, click the `<>` icon as shown in the image to view the code and README at that point:  
!['Step 2 - How to view the project creation process'](./src/assets/commits-2step.png)

- Third: After finding what you’re looking for, to return here, click where the image below shows:  
!['Step 3 - How to view the project creation process'](./src/assets//commits-3step.png)  
Then click on “main” to return to the latest version!

##

## 🎉 That’s it! This was our project. If you have any questions or want to add something, feel free to reach out to me via LinkedIn:

> My LinkedIn: <a href="https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283" target="_blank">https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283</a>

### 🚀 Thanks for your attention and I hope you enjoyed what you saw here. How about checking out my other repositories? 👋🏻

#

### ❤️ Credits:

#### Credits Emoji: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

- #### Credits badges: 
> <a href="https://shields.io" target="_blank">https://shields.io</a>