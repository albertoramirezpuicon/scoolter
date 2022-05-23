import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TouristicPlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TouristicPlace {
  readonly id: string;
  readonly nombre?: string | null;
  readonly imageurl?: string | null;
  readonly locationurl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TouristicPlace, TouristicPlaceMetaData>);
  static copyOf(source: TouristicPlace, mutator: (draft: MutableModel<TouristicPlace, TouristicPlaceMetaData>) => MutableModel<TouristicPlace, TouristicPlaceMetaData> | void): TouristicPlace;
}