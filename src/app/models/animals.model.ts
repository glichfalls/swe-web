export enum ANIMALS { BIRD, REPTILE, MAMMAL }

export interface Animal {
  type: ANIMALS;
  name: string;
}
