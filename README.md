# REST API exposing Portland New Business License API

## Why and API over an API?

The goal is to eventually enrich/extend the data provided by
[civicapps API](http://www.civicapps.org/datasets/new-business-licenses-api).

Then build client apps using this API.

This API uses a MongoDb back-end which is an import of the documents exposed
by the [civicapps API](http://www.civicapps.org/datasets/new-business-licenses-api).

This is again done so the data can be enriched (spacial indexing, etc)