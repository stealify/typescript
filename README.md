# vscode-typescript
Version: c1fa9e1
IntelliSense and Type Checking Support for .cjs and .mjs file extensions.

- Fixes: https://github.com/microsoft/TypeScript/issues/27957
- Fixes: https://github.com/microsoft/TypeScript/issues/38784



## Usage with vscode

```js
npm i -g vscode-typescript@https://github.com/stealify/typescript
npm root -g
```

Hit f1 on keyboard open user settings and set 

"typescript.tsdk": "{your_global_npm_path}/@stealify/typescript/lib"


## Build
Use version tag of package.json to identify the need of a rebuild.

```
# dependencies
git clone https://github.com/microsoft/TypeScript --branch master --single-branch
git cd TypeScript
npm install gulp
npm install


# Method 1 Patch Directly before build
wget -q -O - https://patch-diff.githubusercontent.com/raw/microsoft/TypeScript/pull/39840.patch | git apply -v
npm run build:compiler
rm -rf lib node_modules
mv built/local lib

# Method 2 Create a Patch for the released typescript version.

# Generate 
npm run build:compiler
mv built/local lib-diff

wget -q -O - https://patch-diff.githubusercontent.com/raw/microsoft/TypeScript/pull/39840.patch | git apply -v
npm run build:compiler
rm -rf lib node_modules 
mv built/local lib

cd lib-diff
git init
git add .
git commit -am "unpatched"

rsync -avzh ../lib/* .
git add .
git commit -am "patched"
git diff HEAD~1 HEAD > ../typescript.lib.patch
cd ..
rm -rf lib-diff

git add lib *.patch
git commit -am "package.json.version"
```