# axios

This is a mirror of [axios](https://www.npmjs.com/package/axios), bundled and exposed as ES module.

## Install

```
npm install @bundled-es-modules/axios
bower install bundled-es-modules/axios
```

## Use

```html
<script type="module">
  // from main file
  import { axios } from 'axios';
  // or directly
  import axios from 'axios/axios.js';
  console.log(axios);
</script>
```

Make sure you added `@bundled-es-modules` scope to the path if used via npm.
