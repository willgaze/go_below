import next from 'eslint-config-next'

// Next 16 ships a native flat config as a plain array — no FlatCompat bridge
// needed (and FlatCompat throws a circular-JSON error against it).
export default [
  ...next,
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
]
