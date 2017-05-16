import { map as _map } from 'lodash';


/**
 * Gets all entites and array of ids of repo. Returns corresponding object for each id.
 * @param entities
 * @param repos
 */
export const resolveRepo = (entities, repos) => {
  return _map(repos, repo => {
    return entities[repo];
  });
};
