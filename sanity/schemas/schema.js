// First, we must import the schema creator
//<reference types="@sanity/types/parts" />
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import normalweight from './normalweight'
import overweight from './overweight'
import underweight from './underweight'
import obese from './obese'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    overweight,
    normalweight,
    underweight,
    obese,
  ]),
})
