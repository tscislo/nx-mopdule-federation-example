import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'basket',
  exposes: {
    './Routes': 'apps/basket/src/app/remote-entry/entry.routes.ts',
  },
  remotes: ['products']
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
