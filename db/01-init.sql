#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v
  CREATE DATABASE $DB_NAME;
EOSQL