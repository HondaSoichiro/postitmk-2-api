#!/bin/sh

node `dirname $0`/models/migration/create-member-table.js  &
node `dirname $0`/models/migration/create-postits-table.js  &
node `dirname $0`/post-it-api/
