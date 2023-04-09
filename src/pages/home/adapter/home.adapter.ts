/* eslint-disable import/prefer-default-export */
import { ApiUser, User } from '../../../models/user.model';

export const HomeAdapter = (user: ApiUser): User => {
  return {
    id: user.id,
    name: user.name,
    status: user.status,
    species: user.species,
  };
};
