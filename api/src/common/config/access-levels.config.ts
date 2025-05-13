import { userPvs } from './user-pvs.config';

export const accessLevels = {
  '/users': { GET: [userPvs.admin] },
};
