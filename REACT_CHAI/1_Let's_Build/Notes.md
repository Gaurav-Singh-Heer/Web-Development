# React Notes

## Types of React
React has two main types:

- **React DOM** → Used for building web applications  
- **React Native** → Used for building mobile applications (Android & iOS)

---

## Testing in React
Testing in React is commonly done using:

- **Jest** → JavaScript testing framework  
- Often used with:
  - React Testing Library
  - Vitest (in Vite projects)

---

## Web Vitals
**Web Vitals** are used to measure and track application performance.

They help monitor:
- Page load speed
- Responsiveness
- Visual stability

Common metrics:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

---

## React Scripts (package.json)

### `npm start`
Runs the app in **development mode**.

- Starts local server
- Auto reload on changes
- Shows errors in console

---

### `npm run build`
Builds the app for **production**.

- Optimized files
- Minified code
- Faster performance

---

### `npm test`
Runs all **test cases** using Jest.

---

### `npm run eject`
Ejects from default React setup.

After eject:
- You get full control over config
- Cannot go back (one-way operation)

Use only if you need custom Webpack/Babel config.

---

## Summary
- React DOM → Web apps  
- React Native → Mobile apps  
- Jest → Testing  
- Web Vitals → Performance tracking  
- Scripts → start, build, test, eject


---

# --> Create React App vs Vite

## Project Creation
### Create React App (CRA)
```bash
npx create-react-app app_name
````

### Vite

```bash
npm create vite@latest app_name
cd app_name
npm install
npm run dev
```

---

## Speed Comparison

| Feature            | Create React App | Vite             |
| ------------------ | ---------------- | ---------------- |
| Startup speed      | Slow             | Very fast        |
| Hot reload         | Slower           | Instant          |
| Build tool         | Webpack          | ESBuild + Rollup |
| Modern support     | Older            | Modern           |
| Recommended (2026) | ❌ No             | ✅ Yes            |

---

## When to Use

### Use CRA if:

* Working on older React projects
* Company still uses CRA
* Need traditional setup

### Use Vite if:

* Starting new React project
* Want fast dev server
* Modern tooling
* Better performance

👉 **Most developers now prefer Vite**

---

## Folder Structure Difference

### CRA

```
src/
  App.js
  index.js
public/
```

### Vite

```
src/
  App.jsx
  main.jsx
index.html
vite.config.js
```

---

## Commands

### CRA

```bash
npm start
npm run build
npm test
```

### Vite

```bash
npm run dev
npm run build
npm run preview
```

---

## Key Differences

* CRA uses **Webpack**
* Vite uses **ESBuild (faster)**
* Vite starts instantly
* CRA takes time to start

---

## Interview Point

> Vite is faster than Create React App because it uses ES modules and ESBuild instead of bundling everything with Webpack during development.

---

## Conclusion

**For new projects → use Vite**
**For legacy projects → CRA**

----
## Cleaning Default Files in React Projects

After creating the projects, we removed unnecessary default files to keep the structure clean and minimal.

---

### 01basicreact (Create React App)

Inside the `src` folder, we deleted all unused files and kept only the required ones:

**Kept:**
- `index.js`
- `App.js`

**Deleted (unnecessary default files):**
- logo.svg  
- App.css  
- index.css  
- reportWebVitals.js  
- setupTests.js  
- other unused assets  

This helps in starting with a simple and clean React setup.

---

### 01vitereact (Vite React Project)

Inside the `src` folder, we removed extra files created by default and kept only the essential ones:

**Kept:**
- `main.jsx`
- `App.jsx`

**Deleted (unnecessary default files):**
- App.css  
- index.css (optional if not used)  
- assets folder (if not needed)  
- react.svg  
- other unused files  

---

### Why we clean files?

- Keeps project structure simple  
- Avoids confusion for beginners  
- Removes unused code  
- Makes learning React fundamentals easier  
- Helps focus only on core components

---

### Final Minimal Structure

#### Create React App
