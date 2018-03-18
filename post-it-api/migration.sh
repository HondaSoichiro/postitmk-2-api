#!/bin/sh

node `dirname $0`/common/models/migration/create-member-table.js  &
node `dirname $0`/common/models/migration/create-postits-table.js  & 
node `dirname $0`
