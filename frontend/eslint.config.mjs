import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  globalIgnores([
    'node_modules/',
    '.next/',
    '.contentlayer/',
    '__test__/',
    'coverage/',
    'public/',
  ]),
  ...nextCoreWebVitals,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-undef': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
]);
