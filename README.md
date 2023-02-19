# Install

`pnpm|yarn|npm install stylelint stylelint-config-ethang`

# Config

In **package.json**:

```json
"stylelint": {
  "extends": ["stylelint-config-ethang"]
},
```

In **.stylelintrc**:

```json
{
  "extends": "stylelint-config-ethang"
}
```

**Scripts**:

```json
"scripts": {
  "stylelint": "npx stylelint \"**/*.css\"",
  "stylelint:fix": "npx stylelint \"**/*.module.css\" --fix",
}
```
