import { map as _map } from 'lodash';


export const resolveRepo = (entities, repos) => {
  return _map(repos, repo => {
    return entities[repo];
  });
};
