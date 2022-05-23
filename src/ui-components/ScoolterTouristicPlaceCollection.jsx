/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { TouristicPlace } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ScoolterTouristicPlace from "./ScoolterTouristicPlace";
import { Collection } from "@aws-amplify/ui-react";
export default function ScoolterTouristicPlaceCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: TouristicPlace,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={4}
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ScoolterTouristicPlaceCollection")}
    >
      {(item, index) => (
        <ScoolterTouristicPlace
          touristicPlace={item}
          margin="20px 10px 20px 10px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ScoolterTouristicPlace>
      )}
    </Collection>
  );
}
