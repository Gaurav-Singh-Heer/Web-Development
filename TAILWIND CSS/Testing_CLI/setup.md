# Tailwind CSS Setup Using CLI

Follow these steps to set up Tailwind CSS in your project using the CLI.

## Step 1: Initialize a New Node Project
Run the following command to create a `package.json` file:
```bash
npm init -y
```

## Step 2: Install Tailwind CSS
Next, install Tailwind CSS as a development dependency:
```bash
npm i -D tailwindcss
```

## Step 3: Install Tailwind CSS CLI
Run this command to install Tailwind CSS CLI:
```bash
npm install tailwindcss @tailwindcss/cli
```

## Step 4: Initialize Tailwind CSS
Generate the default Tailwind CSS configuration file by running:
```bash
npx tailwindcss init
```

## Step 5: Create a Source Folder
Create a src folder in the root of your project directory:

```bash
mkdir src
```
## Step 6: Create input.css File
Inside the src folder, create a file named input.css and add the following line to it:
```bash
@import "tailwindcss";
```
## Step 7: Build Tailwind CSS
Run the following command to build the Tailwind CSS file:
```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
This command will scan your input.css file for Tailwind CSS directives and generate the output.css file.
The --watch flag ensures that the build process automatically rebuilds your CSS file whenever you save changes to your files.

Now, you can include output.css in your HTML file to use Tailwind CSS styles. Enjoy building with Tailwind CSS!