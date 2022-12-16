export enum ExtraFeature {
  Nej,
  Handtag,
  Text,
}

export const ExtraFeatures = [
  ...(Object.values(ExtraFeature) as string[]),
].splice(0, [...(Object.values(ExtraFeature) as string[])].length / 2);
