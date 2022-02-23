// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import {
  siteSetting,
  generalData,
  landingPage,
  links,
} from "./documents/siteSetting";
import { comic, page } from "./documents/comic";
import { character } from "./documents/character";
import { people, link } from "./documents/people";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "BBB admin",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //documents
    siteSetting,
    comic,
    character,
    people,
    //objects

    generalData,
    landingPage,
    links,
    link,
    page,
  ]),
});
