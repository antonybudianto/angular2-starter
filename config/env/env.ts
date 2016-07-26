/**
 * THIS FILE IS GENERATED by `gulp env` command from `env.json`
 * Generated on <%= new Date() %>
 *
 * Make sure the keys in `env.model.ts` exist in `env.json`
 * otherwise it'll throw message like this
 * Property '<missing-key>' is missing in type '{}'
 *
 * Feel free to modify for direct updates in development
 */

import { AppEnv } from './env.model';

export const ENV: AppEnv = {<% _.forEach(env, function(v, k) { %>
    <%= k %>: '<%= v %>',<% }) %>
};
