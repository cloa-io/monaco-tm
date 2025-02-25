export default {
      // SQL Prefix
      "#standardSQL": {
        "prefix": "standard",
        "body": "#standardSQL"
      },
      "#legacySQL": {
        "prefix": "legacy",
        "body": "#legacySQL"
      },
      // Data types
      "ARRAY type": {"prefix": "ARRAY type", "body": "ARRAY<${1:T}>"},
      "BOOL type": {"prefix": "BOOL type", "body": "BOOL"},
      "BYTES type": {"prefix": "BYTES type", "body": "BYTES${1:[(L)]}"},
      "DATE type": {"prefix": "DATE type", "body": "DATE"},
      "DATETIME type": {"prefix": "DATETIME type", "body": "DATETIME"},
      "GEOGRAPHY type": {"prefix": "GEOGRAPHY type", "body": "GEOGRAPHY"},
      "INTERVAL type": {"prefix": "INTERVAL type", "body": "INTERVAL"},
      "INT64 type": {"prefix": "INT64 type", "body": "INT64"},
      "NUMERIC type": {"prefix": "NUMERIC type", "body": "NUMERIC${1:[(P[, S])]}"},
      "BIGNUMERIC type": {"prefix": "BIGNUMERIC type", "body": "BIGNUMERIC${1:[(P[, S])]}"},
      "FLOAT64 type": {"prefix": "FLOAT64 type", "body": "FLOAT64"},
      "STRING type": {"prefix": "STRING type", "body": "STRING${1:[(L)]}"},
      "STRUCT type": {"prefix": "STRUCT type", "body": "STRUCT<${1:T}>"},
      "TIME type": {"prefix": "TIME type", "body": "TIME"},
      "TIMESTAMP type": {"prefix": "TIMESTAMP type", "body": "TIMESTAMP"},
      // Query
      "`TABLE-NAME`": {
        "prefix": "table",
        "body": "`${1:project}.${2:dataset}.${3:table}`"
      },
      "[TABLE-NAME]": {
        "prefix": "tablelegacy",
        "body": "[${1:project}:${2:dataset}.${3:table}]"
      },
      "SELECT ... FROM": {
        "prefix": "select",
        "body": [
          "SELECT",
          "\t${1:column}",
          "FROM `${2:project}.${3:dataset}.${4:table}`",
          "WHERE",
          "\t${5:condition}"
        ]
      },
      "INNER JOIN": {
        "prefix": "inner join",
        "body": [
          "INNER JOIN `${1:project}.${2:dataset}.${3:table}`",
          "ON",
          "\t${4:condition}"
        ]
      },
      "LEFT JOIN": {
        "prefix": "left join",
        "body": [
          "LEFT JOIN `${1:project}.${2:dataset}.${3:table}`",
          "ON",
          "\t${4:condition}"
        ]
      },
      "RIGHT JOIN": {
        "prefix": "right join",
        "body": [
          "RIGHT JOIN `${1:project}.${2:dataset}.${3:table}`",
          "ON",
          "\t${4:condition}"
        ]
      },
      "FULL OUTER JOIN": {
        "prefix": "full join",
        "body": [
          "FULL OUTER JOIN `${1:project}.${2:dataset}.${3:table}`",
          "ON",
          "\t${4:condition}"
        ]
      },
      "BETWEEN ... AND": {
        "prefix": "between",
        "body": "BETWEEN ${1} AND ${2}"
      },
      "BETWEEN ... AND as date": {
        "prefix": "between date",
        "body": "BETWEEN \"${1:${CURRENT_YEAR:yyyy}-${CURRENT_MONTH:mm}-${CURRENT_DATE:dd}}\" AND \"${2:${CURRENT_YEAR:yyyy}-${CURRENT_MONTH:mm}-${CURRENT_DATE:dd}}\""
      },
      "IN (value, ...)": {
        "prefix": "in",
        "body": "IN (${1:value, ...})"
      },
      "GROUP BY": {
        "prefix": "group by",
        "body": [
          "GROUP BY",
          "\t${1:expression}"
        ]
      },
      "ORDER BY": {
        "prefix": "order by",
        "body": [
          "ORDER BY",
          "\t${1:expression} ${2:[ASC|DESC]} ${3:[NULLS FIRST|NULLS LAST]}"
        ]
      },
      "WHERE": {
        "prefix": "where",
        "body": [
          "WHERE",
          "\t${1:condition}"
        ]
      },
      "HAVING": {
        "prefix": "having",
        "body": [
          "HAVING",
          "\t${1:condition}"
        ]
      },
      "QUALIFY": {
        "prefix": "qualify",
        "body": [
          "QUALIFY",
          "\t${1:condition}"
        ],
        "description": "Filters the results of analytic functions."
      },
      "PARTITION BY": {
        "prefix": "partitionby",
        "body": [
          "PARTITION BY",
          "\t${1:_PARTITIONDATE}",
          "\t${2:|DATE(_PARTITIONTIME)}",
          "\t${3:|<date_column>}",
          "\t${4:|DATE(<timestamp_column>|<datetime_column>)}",
          "\t${5:|DATETIME_TRUNC(<datetime_column>, {DAY|HOUR|MONTH|YEAR\\})}",
          "\t${6:|TIMESTAMP_TRUNC(<timestamp_column>, {DAY|HOUR|MONTH|YEAR\\})}",
          "\t${7:|TIMESTAMP_TRUNC(_PARTITIONTIME, {DAY|HOUR|MONTH|YEAR\\})}",
          "\t${8:|DATE_TRUNC(<date_column>, {MONTH|YEAR\\})}",
          "\t${9:|RANGE_BUCKET(<int64_column>, GENERATE_ARRAY(<start>, <end>[, <interval>]))}",
          "${10:[CLUSTER BY clustering_column_list]}"
        ]
      },
      "CLUSTER BY": {
        "prefix": "clusterby",
        "body": "CLUSTER BY ${1:clustering_column_list}"
      },
      "WITH ... AS": {
        "prefix": "with",
        "body": [
          "WITH ${1:with_query_name} AS (",
          "\tSELECT",
          "\t\t${2}",
          "\tFROM",
          "\t\t`${3:project}.${4:dataset}.${5:table}`",
          ")",
          ""
        ]
      },
      "_TABLE_SUFFIX BETWEEN ...": {
        "prefix": ["_tablesuffix", "tablesuffix"],
        "body": "_TABLE_SUFFIX BETWEEN \"${1:from}\" AND \"${2:to}\""
      },
      "_PARTITIONTIME BETWEEN ...": {
        "prefix": ["_partitiontime", "partitiontime"],
        "body": "_PARTITIONTIME BETWEEN \"${1:${CURRENT_YEAR:yyyy}-${CURRENT_MONTH:mm}-${CURRENT_DATE:dd}}\" AND \"${2:${CURRENT_YEAR:yyyy}-${CURRENT_MONTH:mm}-${CURRENT_DATE:dd}}\""
      },
      "TABLESAMPLE": {
        "prefix": ["tablesample", "sampling"],
        "body": [
          "SELECT",
          "\t${1:column}",
          "FROM `${2:project}.${3:dataset}.${4:table}`",
          "\tTABLESAMPLE SYSTEM (${5:value} PERCENT)"
        ],
        "description": "Table sampling lets you query random subsets of data from large BigQuery tables."
      },
      "FOR SYSTEM_TIME AS OF": {
        "prefix": ["system_time", "time travel"],
        "body": [
          "SELECT",
          "\t${1:column}",
          "FROM `${2:project}.${3:dataset}.${4:table}`",
          "\tFOR SYSTEM_TIME AS OF TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL ${5:1} HOUR)"
        ],
        "description": "Time travel to access data at any point within the last 7 days."
      },
      "PIVOT": {
        "prefix": "pivot",
        "body": [
          "SELECT",
          "\t*",
          "FROM `${1:project}.${2:dataset}.${3:table}`",
          "\tPIVOT(",
          "\t\t${4:aggregate_function(aggregate_column)}",
          "\t\tFOR ${5:input_column}",
          "\t\tIN (${6:pivot_column, ...})",
          "\t)"
        ]
      },
      "UNPIVOT": {
        "prefix": "unpivot",
        "body": [
          "SELECT",
          "\t*",
          "FROM `${1:project}.${2:dataset}.${3:table}`",
          "\tUNPIVOT${4:[ INCLUDE NULLS|EXCLUDE NULLS ]}(",
          "\t\t${5:value_column_name}",
          "\t\tFOR ${6:dimension_column_name}",
          "\t\tIN (${7:unpivot_column, ...})",
          "\t)"
        ]
      },
      // Keyword
      "DISTINCT": {
        "prefix": "distinct",
        "body": "DISTINCT"
      },
      "NULL": {
        "prefix": "null",
        "body": "NULL"
      },
      "ON": {
        "prefix": "on",
        "body": "ON"
      },
      // DML
      "INSERT INTO": {
        "prefix": "insert",
        "body": [
          "INSERT INTO `${1:project}.${2:dataset}.${3:table}`",
          "\t(${4:column, ...})",
          "VALUES",
          "\t(${6:expr, ...})"
        ]
      },
      "INSERT INTO SELECT": {
        "prefix": "insert select",
        "body": [
          "INSERT INTO `${1:project}.${2:dataset}.${3:table}`",
          "\t(${4:column, ...})",
          "SELECT",
          "\t${5:column}",
          "FROM `${6:project}.${7:dataset}.${8:table}`",
          "WHERE ${9:condition}"
        ]
      },
      "DELETE FROM ...": {
        "prefix": "delete",
        "body": [
          "DELETE FROM `${1:project}.${2:dataset}.${3:table}`",
          "WHERE ${4:condition}"
        ]
      },
      "TRUNCATE TABLE": {
        "prefix": "truncate table",
        "body": "TRUNCATE TABLE `${1:project}.${2:dataset}.${3:table}`"
      },
      "UPDATE ... SET": {
        "prefix": "update",
        "body": [
          "UPDATE `${1:project}.${2:dataset}.${3:table}`",
          "SET ${4:column} = ${5:value}",
          "WHERE ${6:condition}"
        ]
      },
      "UPDATE ... SET FROM": {
        "prefix": "update from",
        "body": [
          "UPDATE `${1:project}.${2:dataset}.${3:table}` a",
          "SET ${4:column} = ${5:value}",
          "FROM `${6:project}.${7:dataset}.${8:table}` b",
          "WHERE a.${9:column} = b.${9:column}"
        ]
      },
      "MERGE": {
        "prefix": "merge",
        "body": [
          "MERGE INTO `${1:project}.${2:dataset}.${3:target_table}` t",
          "USING `${4:project}.${5:dataset}.${6:source_table}` s",
          "ON ${7:merge_condition}",
          "WHEN MATCHED THEN",
          "\tUPDATE SET ${8:target_column} = ${9:value}",
          "WHEN NOT MATCHED THEN",
          "\tINSERT (${10:target_column, ...}) VALUES(${11:source_column, ...})",
          "WHEN MATCHED AND ${12:other_condition} THEN",
          "\tDELETE"
        ]
      },
      // DDL
      "CREATE SCHEMA": {
        "prefix": "create schema",
        "body": [
          "CREATE SCHEMA ${1:[IF NOT EXISTS]} `${2:project}.${3:dataset}`",
          "${4:[OPTIONS (",
          "\tdescription = \"description\",",
          "\tdefault_kms_key_name = \"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]\",",
          "\tdefault_partition_expiration_days = 1,",
          "\tdefault_table_expiration_days = 1,",
          "\tfriendly_name = \"friendly_name\",",
          "\tlabels = [(\"key\", \"value\")]",
          ")]}"
        ]
      },
      "CREATE TEMPORARY TABLE": {
        "prefix": "create temp table",
        "body": [
          "CREATE OR REPLACE TEMP TABLE ${1:table_name}",
          "(",
          "\t${2:column} ${3:type}${4: OPTIONS (description = \"comment\")}",
          ")"
        ]
      },
      "CREATE TABLE": {
        "prefix": "create table",
        "body": [
          "CREATE ${1:[OR REPLACE] }TABLE ${2:[IF NOT EXISTS] }`${3:project}.${4:dataset}.${5:table}`",
          "(",
          "\t${6:column} ${7:type}${8: OPTIONS (description = \"comment\")}",
          ")",
          "${9:[PARTITION BY",
          "\t_PARTITIONDATE",
          "\t|DATE(_PARTITIONTIME)",
          "\t|<date_column>",
          "\t|DATE(<timestamp_column>|<datetime_column>)",
          "\t|DATETIME_TRUNC(<datetime_column>, {DAY|HOUR|MONTH|YEAR\\})",
          "\t|TIMESTAMP_TRUNC(<timestamp_column>, {DAY|HOUR|MONTH|YEAR\\})",
          "\t|TIMESTAMP_TRUNC(_PARTITIONTIME, {DAY|HOUR|MONTH|YEAR\\})",
          "\t|DATE_TRUNC(<date_column>, {MONTH|YEAR\\})",
          "\t|RANGE_BUCKET(<int64_column>, GENERATE_ARRAY(<start>, <end>[, <interval>]))]}",
          "${10:[CLUSTER BY clustering_column_list]}",
          "${11:[OPTIONS (",
          "\tdescription = \"description\",",
          "\texpiration_timestamp = TIMESTAMP \"YYYY-MM-DD HH:MI:SS UTC\",",
          "\tpartition_expiration_days = 1,",
          "\trequire_partition_filter = false,",
          "\tkms_key_name = \"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]\",",
          "\tfriendly_name = \"friendly_name\",",
          "\tlabels = [(\"key\", \"value\")]",
          ")]}"
        ]
      },
      "CREATE TABLE AS SELECT": {
        "prefix": "create table as select",
        "body": [
          "CREATE TABLE `${1:project}.${2:dataset}.${3:table}`",
          "(",
          "\t${4:column} ${5:type}${6: OPTIONS (description = \"comment\")}",
          ") AS",
          "SELECT",
          "\t${7:column}",
          "FROM `${8:project}.${9:dataset}.${10:table}`",
          "WHERE ${11:condition}"
        ]
      },
      "CREATE TABLE OPTIONS": {
        "prefix": ["create table options", "options"],
        "body": [
          "OPTIONS (",
          "\tdescription = \"description\",",
          "\texpiration_timestamp = TIMESTAMP \"YYYY-MM-DD HH:MI:SS UTC\",",
          "\tpartition_expiration_days = 1,",
          "\trequire_partition_filter = false,",
          "\tkms_key_name = \"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]\",",
          "\tfriendly_name = \"friendly_name\",",
          "\tlabels = [(\"key\", \"value\")]",
          ")"
        ]
      },
      "CREATE SNAPSHOT TABLE": {
        "prefix": "create snapshot table",
        "body": [
          "CREATE SNAPSHOT TABLE ${1:[IF NOT EXISTS] }`${2:project}.${3:dataset}.${4:snapshot_table}`",
          "\tCLONE `${5:project}.${6:dataset}.${7:source_table}`",
          "${8:\t[FOR SYSTEM_TIME AS OF ${9:time_expression}]}",
          "${10:[OPTIONS (",
          "\tdescription = \"description\",",
          "\texpiration_timestamp = TIMESTAMP \"YYYY-MM-DD HH:MI:SS UTC\",",
          "\tfriendly_name = \"friendly_name\",",
          "\tlabels = [(\"key\", \"value\")]",
          ")]}"
        ]
      },
      "CREATE VIEW": {
        "prefix": "create view",
        "body": [
          "CREATE ${1:[OR REPLACE] }VIEW ${2:[IF NOT EXISTS] }`${4:project}.${5:dataset}.${6:view}`",
          "${7:[(",
          "\tcolumn_name_list",
          ")]}",
          "${8:[OPTIONS (",
          "\tdescription = \"description\",",
          "\texpiration_timestamp = TIMESTAMP \"YYYY-MM-DD HH:MI:SS UTC\",",
          "\tfriendly_name = \"friendly_name\",",
          "\tlabels = [(\"key\", \"value\")]",
          ")]}",
          "AS",
          "SELECT",
          "\t${9:column}",
          "FROM `${10:project}.${11:dataset}.${12:table}`"
        ]
      },
      "CREATE MATERIALIZED VIEW": {
        "prefix": "create materialized view",
        "body": [
          "CREATE MATERIALIZED VIEW ${1:[IF NOT EXISTS] }`${2:project}.${3:dataset}.${4:materialized_view}`",
          "${5:[PARTITION BY",
          "\t_PARTITIONDATE",
          "\t|DATE(_PARTITIONTIME)",
          "\t|<date_column>",
          "\t|DATE(<timestamp_column>|<datetime_column>)",
          "\t|DATETIME_TRUNC(<datetime_column>, {DAY|HOUR|MONTH|YEAR\\})",
          "\t|TIMESTAMP_TRUNC(<timestamp_column>, {DAY|HOUR|MONTH|YEAR\\})",
          "\t|TIMESTAMP_TRUNC(_PARTITIONTIME, {DAY|HOUR|MONTH|YEAR\\})",
          "\t|DATE_TRUNC(<date_column>, {MONTH|YEAR\\})",
          "\t|RANGE_BUCKET(<int64_column>, GENERATE_ARRAY(<start>, <end>[, <interval>]))]}",
          "${6:[CLUSTER BY clustering_column_list]}",
          "${7:[OPTIONS (",
          "\tdescription = \"description\",",
          "\texpiration_timestamp = TIMESTAMP \"YYYY-MM-DD HH:MI:SS UTC\",",
          "\tenable_refresh = false,",
          "\trefresh_interval_minutes = 1440,",
          "\tfriendly_name = \"friendly_name\",",
          "\tlabels = [(\"key\", \"value\")]",
          ")]}"
        ]
      },
      "CREATE EXTERNAL TABLE": {
        "prefix": "create external table",
        "body": [
          "CREATE ${1:[OR REPLACE] }EXTERNAL TABLE ${2:[IF NOT EXISTS] }`${3:project}.${4:dataset}.${5:external_table}`",
          "${6:[(",
          "\tcolumn type OPTIONS (description = \"comment\")",
          ")]}",
          "${7:[WITH PARTITION COLUMNS]}",
          "OPTIONS (",
          "\t${8:description = \"description\",}",
          "\t${9:allow_jagged_rows = false,}",
          "\t${10:allow_quoted_newlines = false,}",
          "\t${11:compression = \"GZIP\",}",
          "\t${12:enable_logical_types = false,}",
          "\t${13:encoding = \"UTF8\"|\"ISO_8859_1\",}",
          "\t${14:expiration_timestamp = TIMESTAMP \"YYYY-MM-DD HH:MI:SS UTC\",}",
          "\t${15:field_delimiter = \",\"|\"\\t\"|\"other\",}",
          "\t${16:format = \"AVRO\"|\"CSV\"|\"DATASTORE_BACKUP\"|\"GOOGLE_SHEETS\"|\"NEWLINE_DELIMITED_JSON\"|\"ORC\"|\"PARQUET\",}",
          "\t${17:decimal_target_types = [\"NUMERIC\", \"BIGNUMERIC\"],}",
          "\t${18:hive_partition_uri_prefix = \"gs://bucket/path\",}",
          "\t${19:ignore_unknown_values = false,}",
          "\t${20:max_bad_records = 0,}",
          "\t${21:null_marker = NULL,}",
          "\t${22:projection_fields = \"\",}",
          "\t${23:quote = \"\\\"\",}",
          "\t${24:require_hive_partition_filter = false,}",
          "\t${25:sheet_range = \"sheet1!A1:B20\",}",
          "\t${26:skip_leading_rows = 0,}",
          "\t${27:uris = [\"gs://bucket/path/*\"]}",
          ")"
        ]
      },
      "CREATE TEMPORARY JavaScript FUNCTION": {
        "prefix": "create temp function javascript",
        "body": [
          "CREATE TEMP FUNCTION ${1:functionName}(${2:param_name data_type[, ...]})",
          "RETURNS ${3:data_type}",
          "LANGUAGE js",
          "${4:[OPTIONS (library = [\"gs://bucket/path/file.js\"])]}",
          "AS \"\"\"",
          "\t${5:return \"expression\";}",
          "\"\"\";"
        ]
      },
      "CREATE TEMPORARY SQL FUNCTION": {
        "prefix": "create temp function sql",
        "body": [
          "CREATE TEMP FUNCTION ${1:functionName}(${2:param_name data_type[, ...]})",
          "${3:[RETURNS data_type]}",
          "AS (",
          "\t${4:sql_expression}",
          ");"
        ]
      },
      "CREATE JavaScript FUNCTION": {
        "prefix": "create function javascript",
        "body": [
          "CREATE ${1:[OR REPLACE] }FUNCTION ${2:[IF NOT EXISTS] }`${3:project}.${4:dataset}.${5:functionName}`(${6:param_name data_type[, ...]})",
          "RETURNS ${7:data_type}",
          "LANGUAGE js",
          "${8:[OPTIONS (library = [\"gs://bucket/path/file.js\"])]}",
          "AS \"\"\"",
          "\t${9:return \"expression\";}",
          "\"\"\";"
        ]
      },
      "CREATE SQL FUNCTION": {
        "prefix": "create function sql",
        "body": [
          "CREATE ${1:[OR REPLACE] }FUNCTION ${2:[IF NOT EXISTS] }`${3:project}.${4:dataset}.${5:functionName}`(${6:param_name data_type[, ...]})",
          "${7:[RETURNS data_type]}",
          "AS (",
          "\t${8:sql_expression}",
          ");"
        ]
      },
      "CREATE TABLE FUNCTION": {
        "prefix": "create table function",
        "body": [
          "CREATE ${1:[OR REPLACE] }TABLE FUNCTION ${2:[IF NOT EXISTS] }`${3:project}.${4:dataset}.${5:functionName}`(${6:param_name data_type|ANY TYPE[, ...]})",
          "${7:[RETURNS TABLE<column_name data_type[, ...]>]}",
          "AS (",
          "\t${8:sql_query}",
          ");"
        ]
      },
      "CREATE PROCEDURE": {
        "prefix": "create procedure",
        "body": [
          "CREATE ${1:[OR REPLACE] }PROCEDURE ${2:[IF NOT EXISTS] }`${3:project}.${4:dataset}.${5:ProcedureName}`(${6:[IN|OUT|INOUT] arg_name arg_type[, ...]})",
          "${7:[OPTIONS (strict_mode = TRUE|FALSE)]}",
          "BEGIN",
          "\t${8:statements}",
          "END;"
        ]
      },
      "CREATE MODEL": {
        "prefix": "create model",
        "body": [
          "CREATE ${1:[OR REPLACE] }MODEL ${2:[IF NOT EXISTS] }`${3:project}.${4:dataset}.${5:model}`",
          "${6:[OPTIONS (model_option_list)]}",
          "AS",
          "${7:query_statement}"
        ]
      },
      "DROP SCHEMA": {
        "prefix": "drop schema",
        "body": "DROP SCHEMA ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:dataset}` ${5:[CASCADE|RESTRICT]}"
      },
      "DROP TABLE": {
        "prefix": "drop table",
        "body": "DROP TABLE ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:table}`"
      },
      "DROP EXTERNAL TABLE": {
        "prefix": "drop external table",
        "body": "DROP EXTERNAL TABLE ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:external_table}`"
      },
      "DROP VIEW": {
        "prefix": "drop view",
        "body": "DROP VIEW ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:view}`"
      },
      "DROP MATERIALIZED VIEW": {
        "prefix": "drop materialized view",
        "body": "DROP MATERIALIZED VIEW ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:materialized_view}`"
      },
      "DROP FUNCTION": {
        "prefix": "drop function",
        "body": "DROP FUNCTION ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:functionName}`"
      },
      "DROP TABLE FUNCTION": {
        "prefix": "drop table function",
        "body": "DROP TABLE FUNCTION ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:functionName}`"
      },
      "DROP PROCEDURE": {
        "prefix": "drop procedure",
        "body": "DROP PROCEDURE ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:ProcedureName}`"
      },
      "DROP MODEL": {
        "prefix": "drop model",
        "body": "${1:DROP MODEL | DROP MODEL IF EXISTS} `${2:project}.${3:dataset}.${4:model}`"
      },
      "ALTER SCHEMA SET OPTIONS": {
        "prefix": "alter schema",
        "body": [
          "ALTER SCHEMA ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:dataset}`",
          "SET OPTIONS (",
          "${5:\tdescription = \"description\",",
          "\tdefault_kms_key_name = \"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]\",",
          "\tdefault_partition_expiration_days = 1,",
          "\tdefault_table_expiration_days = 1,",
          "\tfriendly_name = \"friendly_name\",",
          "\tlabels = [(\"key\", \"value\")]}",
          ")"
        ]
      },
      "ALTER TABLE SET OPTIONS": {
        "prefix": "alter table options",
        "body": [
          "ALTER TABLE ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:table}`",
          "SET OPTIONS (",
          "${5:\tdescription = \"description\",",
          "\texpiration_timestamp = TIMESTAMP \"YYYY-MM-DD HH:MI:SS UTC\",",
          "\tpartition_expiration_days = 1,",
          "\trequire_partition_filter = false,",
          "\tkms_key_name = \"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]\",",
          "\tfriendly_name = \"friendly_name\",",
          "\tlabels = [(\"key\", \"value\")]}",
          ")"
        ]
      },
      "ALTER TABLE RENAME TO": {
        "prefix": "alter table rename",
        "body": [
          "ALTER TABLE ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:table}`",
          "\tRENAME TO ${5:new_table_name}"
        ]
      },
      "ALTER TABLE ADD COLUMN": {
        "prefix": "alter table add column",
        "body": [
          "ALTER TABLE `${1:project}.${2:dataset}.${3:table}`",
          "\tADD COLUMN ${4:[IF NOT EXISTS]} ${5:column_name} ${6:type}${7: OPTIONS (description = \"comment\")}"
        ]
      },
      "ALTER TABLE DROP COLUMN": {
        "prefix": "alter table drop column",
        "body": [
          "ALTER TABLE `${1:project}.${2:dataset}.${3:table}`",
          "\tDROP COLUMN ${4:[IF EXISTS]} ${5:column_name}"
        ]
      },
      "ALTER COLUMN SET OPTIONS": {
        "prefix": "alter column set options",
        "body": [
          "ALTER TABLE ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:table}`",
          "\tALTER COLUMN ${5:[IF EXISTS]} ${6:column_name} SET OPTIONS (${7:description = \"comment\"})"
        ]
      },
      "ALTER COLUMN DROP NOT NULL": {
        "prefix": "alter column drop not null",
        "body": [
          "ALTER TABLE ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:table}`",
          "\tALTER COLUMN ${5:[IF EXISTS]} ${6:column_name} DROP NOT NULL"
        ]
      },
      "ALTER COLUMN SET DATA TYPE": {
        "prefix": "alter column set data type",
        "body": [
          "ALTER TABLE ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:table}`",
          "\tALTER COLUMN ${5:[IF EXISTS]} ${6:column_name} SET DATA TYPE (${7:data_type})"
        ]
      },
      "ALTER VIEW SET OPTIONS": {
        "prefix": "alter view",
        "body": [
          "ALTER VIEW ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:view}`",
          "SET OPTIONS (",
          "${5:\tdescription = \"description\",",
          "\texpiration_timestamp = TIMESTAMP \"YYYY-MM-DD HH:MI:SS UTC\",",
          "\tfriendly_name = \"friendly_name\",",
          "\tlabels = [(\"key\", \"value\")]}",
          ")"
        ]
      },
      "ALTER MATERIALIZED VIEW SET OPTIONS": {
        "prefix": "alter materialized view",
        "body": [
          "ALTER MATERIALIZED VIEW ${1:[IF EXISTS]} `${2:project}.${3:dataset}.${4:materialized_view}`",
          "SET OPTIONS (",
          "${5:\tdescription = \"description\",",
          "\texpiration_timestamp = TIMESTAMP \"YYYY-MM-DD HH:MI:SS UTC\",",
          "\tenable_refresh = false,",
          "\trefresh_interval_minutes = 1440,",
          "\tfriendly_name = \"friendly_name\",",
          "\tlabels = [(\"key\", \"value\")]}",
          ")"
        ]
      },
      // DCL
      "GRANT": {
        "prefix": "grant",
        "body": [
          "GRANT `${1:role_name[, ...]}`",
          "\tON ${2:SCHEMA `project.dataset`}|${3:TABLE `project.dataset.table`}|${4:VIEW `project.dataset.view`}",
          "\tTO ${5:\"user:user@domain|group:group@domain|serviceAccount:user@project.iam.gserviceaccount.com|domain:domain|specialGroup:(allAuthenticatedUsers|allUsers)\"[, ...]}"
        ]
      },
      "REVOKE": {
        "prefix": "revoke",
        "body": [
          "REVOKE `${1:role_name[, ...]}`",
          "\tON ${2:SCHEMA `project.dataset`}|${3:TABLE `project.dataset.table`}|${4:VIEW `project.dataset.view`}",
          "\tFROM ${5:\"user:user@domain|group:group@domain|serviceAccount:user@project.iam.gserviceaccount.com|domain:domain|specialGroup:(allAuthenticatedUsers|allUsers)\"[, ...]}"
        ]
      },
      // Debugging statements
      "ASSERT": {
        "prefix": "assert",
        "body": "ASSERT ${1:expression}${2: [AS \"description\"]}"
      },
      // Scripting
      "CALL PROCEDURE": {
        "prefix": "call procedure",
        "body": [
          "CALL `${1:project}.${2:dataset}.${3:ProcedureName}`(${4:arg[, ...]});"
        ]
      },
      "DECLARE": {
        "prefix": "declare",
        "body": [
          "DECLARE ${1:variable_name[, ...] variable_type [DEFAULT expression]};"
        ]
      },
      "SET": {
        "prefix": "set",
        "body": [
          "SET ${1:variable_name} = ${2:expression};"
        ]
      },
      "SET multiple": {
        "prefix": "set multiple",
        "body": [
          "SET (${1:variable_name_1, ...}) = (${2:expression_1, ...});"
        ]
      },
      "SET from query": {
        "prefix": "set query",
        "body": [
          "SET ${1:variable_name} = (${2:SELECT query});"
        ]
      },
      "EXECUTE IMMEDIATE": {
        "prefix": "execute immediate",
        "body": [
          "EXECUTE IMMEDIATE",
          "\t${1:\"sql_expression @parameter_name\"}",
          "\t${2:[INTO variable]}",
          "\t${3:[USING value AS parameter_name]};"
        ],
        "description": "Executes a dynamic SQL statement on the fly."
      },
      "BEGIN ... END": {
        "prefix": "begin end",
        "body": [
          "BEGIN",
          "\t${1:statements}",
          "",
          "EXCEPTION WHEN ERROR THEN",
          "\t${2:# Get error informations",
          "\tSELECT",
          "\t\t@@error.message,",
          "\t\t@@error.stack_trace,",
          "\t\t@@error.statement_text,",
          "\t\t@@error.formatted_stack_trace;}",
          "END;"
        ]
      },
      "IF ... THEN": {
        "prefix": "if then",
        "body": [
          "IF ${1:condition} THEN",
          "\t${2:statements}",
          "END IF;"
        ]
      },
      "IF ... ELSEIF ... ELSE": {
        "prefix": "if elseif else",
        "body": [
          "IF ${1:condition} THEN",
          "\t${2:statements}",
          "ELSEIF ${3:condition} THEN",
          "\t${4:statements}",
          "ELSE",
          "\t${5:statements}",
          "END IF;"
        ]
      },
      "ELSEIF ... THEN": {
        "prefix": "elseif",
        "body": [
          "ELSEIF ${1:condition} THEN",
          "\t${2:statements}"
        ]
      },
      "ELSE": {
        "prefix": "else",
        "body": [
          "ELSE",
          "\t${1:statements}"
        ]
      },
      "IF EXISTS query THEN": {
        "prefix": "if exists query",
        "body": [
          "IF EXISTS (${1:SELECT expression FROM `project.dataset.table` WHERE condition}) THEN",
          "\t${2:statements}",
          "END IF;"
        ]
      },
      "LOOP": {
        "prefix": "loop",
        "body": [
          "LOOP",
          "\t${1:statements}",
          "\tIF ${2:condition} THEN",
          "\t\tBREAK;",
          "\tEND IF;",
          "END LOOP;"
        ]
      },
      "WHILE": {
        "prefix": "while",
        "body": [
          "WHILE ${1:expression} DO",
          "\t${2:statements}",
          "END WHILE;"
        ]
      },
      "BREAK": {
        "prefix": "break",
        "body": "BREAK;",
        "description": "Exit the current loop."
      },
      "LEAVE": {
        "prefix": "leave",
        "body": "LEAVE;",
        "description": "Synonym for BREAK."
      },
      "CONTINUE": {
        "prefix": "continue",
        "body": "CONTINUE;",
        "description": "Skip statements and return to the start of the loop."
      },
      "ITERATE": {
        "prefix": "iterate",
        "body": "ITERATE;",
        "description": "Synonym for CONTINUE."
      },
      "RAISE": {
        "prefix": "raise",
        "body": "RAISE ${1:[USING MESSAGE = \"message\"]};",
        "description": "Raises an error."
      },
      "RETURN": {
        "prefix": "return",
        "body": "RETURN;",
        "description": "RETURN terminates execution of the current script."
      },
      // Other statements
      "BQ.JOBS.CANCEL": {
        "prefix": "call bq jobs cancel",
        "body": "CALL BQ.JOBS.CANCEL(${1:\"project-id.job_id\"});",
        "description": "Canceling a job."
      },
      "EXPORT DATA": {
        "prefix": "export data",
        "body": [
          "EXPORT DATA",
          "OPTIONS (",
          "\t${1:format = \"AVRO\"|\"CSV\"|\"JSON\"|\"PARQUET\",}",
          "\t${2:compression = \"GZIP\"|\"DEFLATE\"|\"SNAPPY\",}",
          "\t${3:field_delimiter = \",\"|\"\\t\"|\"other\",}",
          "\t${4:header = false|true,}",
          "\t${5:overwrite = false|true,}",
          "\t${6:uri = \"gs://bucket/path/file_*.csv.gz\"}",
          ") AS",
          "query_statement"
        ]
      },
      // Functions
      "ANY_VALUE()": {
        "prefix": "any_value",
        "body": "ANY_VALUE(${1:expr}) ${2:[OVER (...)]}",
        "description": "Returns any value from the input or NULL if there are zero input rows."
      },
      "ARRAY_AGG()": {
        "prefix": "array_agg",
        "body": [
          "ARRAY_AGG(${1:[DISTINCT] expression [{IGNORE|RESPECT\\} NULLS]",
          "          [ORDER BY key [{ASC|DESC\\}] [, ... ]] [LIMIT n]})",
          "${2:[OVER (...)]}"
        ],
        "description": "Returns an ARRAY of `expression` values."
      },
      "ARRAY_CONCAT_AGG()": {
        "prefix": "array_concat_agg",
        "body": "ARRAY_CONCAT_AGG(${1:expression [ORDER BY key [{ASC|DESC\\}] [, ... ]] [LIMIT n]})",
        "description": "Concatenates elements from `expression` of type ARRAY, returning a single ARRAY as a result."
      },
      "AVG()": {
        "prefix": "avg",
        "body": "AVG(${1:[DISTINCT] expression}) ${2:[OVER (...)]}",
        "description": "Returns the average of non-NULL input values, or NaN if the input contains a NaN."
      },
      "BIT_AND()": {
        "prefix": "bit_and",
        "body": "BIT_AND(${1:expression})",
        "description": "Performs a bitwise AND operation on `expression` and returns the result."
      },
      "BIT_OR()": {
        "prefix": "bit_or",
        "body": "BIT_OR(${1:expression})",
        "description": "Performs a bitwise OR operation on `expression` and returns the result."
      },
      "BIT_XOR()": {
        "prefix": "bit_xor",
        "body": "BIT_XOR(${1:expression})",
        "description": "Performs a bitwise XOR operation on `expression` and returns the result."
      },
      "COUNT(*)": {
        "prefix": "count",
        "body": "COUNT(*)",
        "description": "Returns the number of rows in the input."
      },
      "COUNT(expr)": {
        "prefix": "count expr",
        "body": "COUNT(${1:[DISTINCT] expression}) ${2:[OVER (...)]}",
        "description": "Returns the number of rows with `expression` evaluated to any value other than NULL."
      },
      "COUNTIF()": {
        "prefix": "countif",
        "body": "COUNTIF(${1:expression}) ${2:[OVER (...)]}",
        "description": "Returns the count of TRUE values for `expression`."
      },
      "LOGICAL_AND()": {
        "prefix": "logical_and",
        "body": "LOGICAL_AND(${1:expression})",
        "description": "Returns the logical AND of all non-NULL expressions."
      },
      "LOGICAL_OR()": {
        "prefix": "logical_or",
        "body": "LOGICAL_OR(${1:expression})",
        "description": "Returns the logical OR of all non-NULL expressions."
      },
      "MAX()": {
        "prefix": "max",
        "body": "MAX(${1:expression}) ${2:[OVER (...)]}",
        "description": "Returns the maximum value of non-NULL expressions."
      },
      "MIN()": {
        "prefix": "min",
        "body": "MIN(${1:expression}) ${2:[OVER (...)]}",
        "description": "Returns the minimum value of non-NULL expressions."
      },
      "STRING_AGG()": {
        "prefix": "string_agg",
        "body": [
          "STRING_AGG(${1:[DISTINCT] expression [, delimiter] [ORDER BY key [{ASC|DESC\\}] [, ... ]] [LIMIT n]})",
          "${2:[OVER (...)]}"
        ],
        "description": [
          "Returns a value (either STRING or BYTES) obtained by concatenating non-null values."
        ]
      },
      "SUM()": {
        "prefix": "sum",
        "body": "SUM(${1:expression}) ${2:[OVER (...)]}",
        "description": [
          "Returns the sum of non-null values."
        ]
      },
      "CORR()": {
        "prefix": "corr",
        "body": "CORR(${1:X1}, ${2:X2}) ${3:[OVER (...)]}",
        "description": [
          "Returns the Pearson coefficient of correlation of a set of number pairs."
        ]
      },
      "COVAR_POP()": {
        "prefix": "covar_pop",
        "body": "COVAR_POP(${1:X1}, ${2:X2}) ${3:[OVER (...)]}",
        "description": [
          "Returns the population covariance of a set of number pairs."
        ]
      },
      "COVAR_SAMP()": {
        "prefix": "covar_samp",
        "body": "COVAR_SAMP(${1:X1}, ${2:X2}) ${3:[OVER (...)]}",
        "description": [
          "Returns the sample covariance of a set of number pairs."
        ]
      },
      "STDDEV_POP()": {
        "prefix": "stddev_pop",
        "body": "STDDEV_POP(${1:[DISTINCT] expression}) ${2:[OVER (...)]}",
        "description": [
          "Returns the population (biased) standard deviation of the values. The return result is between `0` and `+Inf`."
        ]
      },
      "STDDEV_SAMP()": {
        "prefix": "stddev_samp",
        "body": "STDDEV_SAMP(${1:[DISTINCT] expression}) ${2:[OVER (...)]}",
        "description": [
          "Returns the sample (unbiased) standard deviation of the values. The return result is between `0` and `+Inf`."
        ]
      },
      "STDDEV()": {
        "prefix": "stddev",
        "body": "STDDEV(${1:[DISTINCT] expression}) ${2:[OVER (...)]}",
        "description": "An alias of STDDEV_SAMP."
      },
      "VAR_POP()": {
        "prefix": "var_pop",
        "body": "VAR_POP(${1:[DISTINCT] expression}) ${2:[OVER (...)]}",
        "description": [
          "Returns the population (biased) variance of the values. The return result is between `0` and `+Inf`."
        ]
      },
      "VAR_SAMP()": {
        "prefix": "var_samp",
        "body": "VAR_SAMP(${1:[DISTINCT] expression}) ${2:[OVER (...)]}",
        "description": [
          "Returns the sample (unbiased) variance of the values. The return result is between `0` and `+Inf`."
        ]
      },
      "VARIANCE()": {
        "prefix": "variance",
        "body": "VARIANCE(${1:[DISTINCT] expression}) ${2:[OVER (...)]}",
        "description": "An alias of VAR_SAMP."
      },
      "APPROX_COUNT_DISTINCT()": {
        "prefix": "approx_count_distinct",
        "body": "APPROX_COUNT_DISTINCT(${1:expression})",
        "description": [
          "Returns the approximate result for `COUNT(DISTINCT expression)`."
        ]
      },
      "APPROX_QUANTILES()": {
        "prefix": "approx_quantiles",
        "body": "APPROX_QUANTILES(${1:[DISTINCT] expression, number [{IGNORE|RESPECT\\} NULLS]})",
        "description": "Returns the approximate boundaries for a group of `expression` values, where `number` represents the number of quantiles to create."
      },
      "APPROX_TOP_COUNT()": {
        "prefix": "approx_top_count",
        "body": "APPROX_TOP_COUNT(${1:expression}, ${2:number})",
        "description": "Returns the approximate top elements of `expression`."
      },
      "APPROX_TOP_SUM()": {
        "prefix": "approx_top_sum",
        "body": "APPROX_TOP_SUM(${1:expression}, ${2:weight}, ${3:number})",
        "description": [
          "Returns the approximate top elements of `expression`, based on the sum of an assigned `weight`. The `number` parameter specifies the number of elements returned."
        ]
      },
      "HLL_COUNT.INIT()": {
        "prefix": "hll_count.init",
        "body": "HLL_COUNT.INIT(${1:input [, precision]})",
        "description": "A scalar function that takes one or more input values and aggregates them into a HyperLogLog++ sketch."
      },
      "HLL_COUNT.MERGE()": {
        "prefix": "hll_count.merge",
        "body": "HLL_COUNT.MERGE(${1:sketch})",
        "description": [
          "An aggregate function that returns the cardinality of several HyperLogLog++ set sketches by computing their union."
        ]
      },
      "HLL_COUNT.MERGE_PARTIAL()": {
        "prefix": "hll_count.merge_partial",
        "body": "HLL_COUNT.MERGE_PARTIAL(${1:sketch})",
        "description": [
          "An aggregate function that takes one or more HyperLogLog++ `sketch` inputs and merges them into a new sketch."
        ]
      },
      "HLL_COUNT.EXTRACT()": {
        "prefix": "hll_count.extract",
        "body": "HLL_COUNT.EXTRACT(${1:sketch})",
        "description": [
          "A scalar function that extracts an cardinality estimate of a single HyperLogLog++ sketch."
        ]
      },
      "RANK()": {
        "prefix": "rank",
        "body": "RANK()",
        "description": "Returns the ordinal (1-based) rank of each row within the ordered partition."
      },
      "DENSE_RANK()": {
        "prefix": "dense_rank",
        "body": "DENSE_RANK()",
        "description": "Returns the ordinal (1-based) rank of each row within the window partition."
      },
      "PERCENT_RANK()": {
        "prefix": "percent_rank",
        "body": "PERCENT_RANK()",
        "description": "Return the percentile rank of a row defined as (RK-1)/(NR-1), where RK is the `RANK` of the row and NR is the number of rows in the partition. Returns 0 if NR=1."
      },
      "CUME_DIST()": {
        "prefix": "cume_dist",
        "body": "CUME_DIST()",
        "description": "Return the relative rank of a row defined as NP/NR. NP is defined to be the number of rows that either precede or are peers with the current row. NR is the number of rows in the partition."
      },
      "NTILE()": {
        "prefix": "ntile",
        "body": "NTILE(${1:constant_integer_expression})",
        "description": "This function divides the rows into `constant_integer_expression` buckets based on row ordering and returns the 1-based bucket number that is assigned to each row."
      },
      "ROW_NUMBER()": {
        "prefix": "row_number",
        "body": "ROW_NUMBER()",
        "description": "Does not require the `ORDER BY` clause."
      },
      "FIRST_VALUE()": {
        "prefix": "first_value",
        "body": "FIRST_VALUE(${1:value_expression [{RESPECT | IGNORE\\} NULLS]})",
        "description": [
          "Returns the value of the `value_expression` for the first row in the current window frame."
        ]
      },
      "LAST_VALUE()": {
        "prefix": "last_value",
        "body": "LAST_VALUE(${1:value_expression [{RESPECT | IGNORE\\} NULLS]})",
        "description": [
          "Returns the value of the `value_expression` for the last row in the current window frame."
        ]
      },
      "NTH_VALUE()": {
        "prefix": "nth_value",
        "body": "NTH_VALUE(${1:value_expression, constant_integer_expression [{RESPECT | IGNORE\\} NULLS]})",
        "description": [
          "Returns the value of `value_expression` at the Nth row of the current window frame, where Nth is defined by `constant_integer_expression`. Returns NULL if there is no such row."
        ]
      },
      "LEAD()": {
        "prefix": "lead",
        "body": "LEAD(${1:value_expression, [, offset [, default_expression]]})",
        "description": [
          "Returns the value of the `value_expression` on a subsequent row."
        ]
      },
      "LAG()": {
        "prefix": "lag",
        "body": "LAG(${1:value_expression, [, offset [, default_expression]]})",
        "description": [
          "Returns the value of the `value_expression` on a preceding row."
        ]
      },
      "PERCENTILE_CONT()": {
        "prefix": "percentile_cont",
        "body": "PERCENTILE_CONT(${1:value_expression, percentile [{RESPECT | IGNORE\\} NULLS]})",
        "description": [
          "Computes the specified percentile value for the value_expression, with linear interpolation."
        ]
      },
      "PERCENTILE_DISC()": {
        "prefix": "percentile_disc",
        "body": "PERCENTILE_DISC(${1:value_expression, percentile [{RESPECT | IGNORE\\} NULLS]})",
        "description": [
          "Computes the specified percentile value for a discrete `value_expression`."
        ]
      },
      "BIT_COUNT()": {
        "prefix": "bit_count",
        "body": "BIT_COUNT(${1:expression})",
        "description": [
          "The input, `expression`, must be an integer or BYTES."
        ]
      },
      "ABS()": {
        "prefix": "abs",
        "body": "ABS(${1:X})",
        "description": "Computes absolute value."
      },
      "SIGN()": {
        "prefix": "sign",
        "body": "SIGN(${1:X})",
        "description": "Returns -1, 0, or +1 for negative, zero and positive argument respectively."
      },
      "IS_INF()": {
        "prefix": "is_inf",
        "body": "IS_INF(${1:X})",
        "description": "Return TRUE if the value is positive or negative infinity."
      },
      "IS_NAN()": {
        "prefix": "is_nan",
        "body": "IS_NAN(${1:X})",
        "description": "Return TRUE if the value is a `NaN` value."
      },
      "IEEE_DIVIDE()": {
        "prefix": "ieee_divide",
        "body": "IEEE_DIVIDE(${1:X}, ${2:Y})",
        "description": [
          "Divides X by Y; never fails. Returns FLOAT64. Unlike division operator (/), does not generate errors for division by zero or overflow."
        ]
      },
      "RAND()": {
        "prefix": "rand",
        "body": "RAND()",
        "description": "Generates a pseudo-random value of type FLOAT64 in the range of [0, 1), inclusive of 0 and exclusive of 1."
      },
      "SQRT()": {
        "prefix": "sqrt",
        "body": "SQRT(${1:X})",
        "description": "Computes the square root of X."
      },
      "POW()": {
        "prefix": "pow",
        "body": "POW(${1:X}, ${2:Y})",
        "description": "Power function: returns the value of X raised to the power of Y."
      },
      "POWER()": {
        "prefix": "power",
        "body": "POWER(${1:X}, ${2:Y})",
        "description": "Synonym of POW()."
      },
      "EXP()": {
        "prefix": "exp",
        "body": "EXP(${1:X})",
        "description": "Computes natural exponential function ex."
      },
      "LN()": {
        "prefix": "ln",
        "body": "LN(${1:X})",
        "description": "Computes the natural logarithm of X."
      },
      "LOG(X)": {
        "prefix": "logln",
        "body": "LOG(${1:X})",
        "description": "Synonym of LN(X)"
      },
      "LOG(X, Y)": {
        "prefix": "log",
        "body": "LOG(${1:X}, ${2:Y})",
        "description": "Computes logarithm of X to base Y."
      },
      "LOG10()": {
        "prefix": "log10",
        "body": "LOG10(${1:X})",
        "description": "Similar to LOG(X) but computes logarithm to base 10."
      },
      "GREATEST()": {
        "prefix": "greatest",
        "body": "GREATEST(${1:X1,...,XN})",
        "description": "Returns `NULL` if any of the inputs is `NULL`."
      },
      "LEAST()": {
        "prefix": "least",
        "body": "LEAST(${1:X1,...,XN})",
        "description": "Returns `NULL` if any of the inputs is `NULL`."
      },
      "DIV()": {
        "prefix": "div",
        "body": "DIV(${1:X}, ${2:Y})",
        "description": "Returns the result of integer division of X by Y."
      },
      "SAFE_DIVIDE()": {
        "prefix": "safe_divide",
        "body": "SAFE_DIVIDE(${1:X}, ${2:Y})",
        "description": "Equivalent to the division operator (`/`)."
      },
      "MOD()": {
        "prefix": "mod",
        "body": "MOD(${1:X}, ${2:Y})",
        "description": "Modulo function: returns the remainder of the division of X by Y."
      },
      "COS()": {
        "prefix": "cos",
        "body": "COS(${1:X})",
        "description": "Computes cosine of X. Never fails."
      },
      "COSH()": {
        "prefix": "cosh",
        "body": "COSH(${1:X})",
        "description": "Computes the hyperbolic cosine of X."
      },
      "ACOS()": {
        "prefix": "acos",
        "body": "ACOS(${1:X})",
        "description": "Computes the principal value of the arc cosine of X."
      },
      "ACOSH()": {
        "prefix": "acosh",
        "body": "ACOSH(${1:X})",
        "description": "Computes the inverse hyperbolic cosine of X."
      },
      "SIN()": {
        "prefix": "sin",
        "body": "SIN(${1:X})",
        "description": "Computes the sine of X. Never fails."
      },
      "SINH()": {
        "prefix": "sinh",
        "body": "SINH(${1:X})",
        "description": "Computes the hyperbolic sine of X."
      },
      "ASIN()": {
        "prefix": "asin",
        "body": "ASIN(${1:X})",
        "description": "Computes the principal value of the arc sine of X."
      },
      "ASINH()": {
        "prefix": "asinh",
        "body": "ASINH(${1:X})",
        "description": "Computes the inverse hyperbolic sine of X. Does not fail."
      },
      "TAN()": {
        "prefix": "tan",
        "body": "TAN(${1:X})",
        "description": "Computes tangent of X."
      },
      "TANH()": {
        "prefix": "tanh",
        "body": "TANH(${1:X})",
        "description": "Computes hyperbolic tangent of X. Does not fail."
      },
      "ATAN()": {
        "prefix": "atan",
        "body": "ATAN(${1:X})",
        "description": "Computes the principal value of the arc tangent of X."
      },
      "ATANH()": {
        "prefix": "atanh",
        "body": "ATANH(${1:X})",
        "description": "Computes the inverse hyperbolic tangent of X."
      },
      "ATAN2()": {
        "prefix": "atan2",
        "body": "ATAN2(${1:X}, ${2:Y})",
        "description": "Calculates the principal value of the arc tangent of Y/X using the signs of the two arguments to determine the quadrant."
      },
      "RANGE_BUCKET()": {
        "prefix": "range_bucket",
        "body": "RANGE_BUCKET(${1:point}, ${2:boundaries_array})",
        "description": "Scans through a sorted array and returns the 0-based position of the point's upper bound."
      },
      "FARM_FINGERPRINT()": {
        "prefix": "farm_fingerprint",
        "body": "FARM_FINGERPRINT(${1:value})",
        "type": "function",
        "description": "Computes the fingerprint of the STRING or BYTES input using the Fingerprint64 function from the open-source FarmHash library."
      },
      "MD5()": {
        "prefix": "md5",
        "body": "MD5(${1:input})",
        "description": [
          "Computes the hash of the input using the MD5 algorithm."
        ]
      },
      "SHA1()": {
        "prefix": "sha1",
        "body": "SHA1(${1:input})",
        "description": [
          "Computes the hash of the input using the SHA-1 algorithm."
        ]
      },
      "SHA256()": {
        "prefix": "sha256",
        "body": "SHA256(${1:input})",
        "description": [
          "Computes the hash of the input using the SHA-256 algorithm."
        ]
      },
      "SHA512()": {
        "prefix": "sha512",
        "body": "SHA512(${1:input})",
        "description": [
          "Computes the hash of the input using the SHA-512 algorithm."
        ]
      },
      // Conversion functions
      "CAST()": {
        "prefix": "cast",
        "body": "CAST(${1:expr} AS ${2:type})",
        "description": "Cast syntax is used in a query to indicate that the result type of an expression should be converted to some other type."
      },
      "CAST(... FORMAT)": {
        "prefix": "cast format",
        "body": "CAST(${1:expr} AS ${2:STRING|BYTES} FORMAT \"${3:format_string_expression}\")",
        "description": "The format clause can be used in some CAST functions."
      },
      "SAFE_CAST()": {
        "prefix": "safe_cast",
        "body": "SAFE_CAST(${1:expr} AS ${3:type})",
        "description": "SAFE_CAST is identical to CAST, except it returns NULL instead of raising an error."
      },
      "PARSE_BIGNUMERIC()": {
        "prefix": "parse_bignumeric",
        "body": "PARSE_BIGNUMERIC(${1:string_expression})",
        "description": "Converts a string to a BIGNUMERIC value."
      },
      "PARSE_NUMERIC()": {
        "prefix": "parse_numeric",
        "body": "PARSE_NUMERIC(${1:string_expression})",
        "description": "Converts a string to a NUMERIC value."
      },
      // String functions
      "ASCII()": {
        "prefix": "ascii",
        "body": "ASCII(${1:value})",
        "description": "Returns the ASCII code for the first character or byte in value."
      },
      "BYTE_LENGTH()": {
        "prefix": "byte_length",
        "body": "BYTE_LENGTH(${1:value})",
        "description": "Returns the length of the value in bytes, regardless of whether the type of the value is STRING or BYTES."
      },
      "CHAR_LENGTH()": {
        "prefix": "char_length",
        "body": "CHAR_LENGTH(${1:value})",
        "description": "Returns the length of the STRING in characters."
      },
      "CHARACTER_LENGTH()": {
        "prefix": "character_length",
        "body": "CHARACTER_LENGTH(${1:value})",
        "description": "Synonym for CHAR_LENGTH."
      },
      "CHR()": {
        "prefix": "chr",
        "body": "CHR(${1:value})",
        "description": "Takes a Unicode code point and returns the character that matches the code point."
      },
      "CODE_POINTS_TO_BYTES()": {
        "prefix": "code_points_to_bytes",
        "body": "CODE_POINTS_TO_BYTES(${1:ascii_values})",
        "description": [
          "Takes an array of extended ASCII code points (ARRAY of INT64) and returns BYTES."
        ]
      },
      "CODE_POINTS_TO_STRING()": {
        "prefix": "code_points_to_string",
        "body": "CODE_POINTS_TO_STRING(${1:value})",
        "description": [
          "Takes an array of Unicode code points (ARRAY of INT64) and returns a STRING."
        ]
      },
      "CONCAT()": {
        "prefix": "concat",
        "body": "CONCAT(${1:value1[, ...]})",
        "description": "Concatenates one or more values into a single result."
      },
      "ENDS_WITH()": {
        "prefix": "ends_with",
        "body": "ENDS_WITH(${1:value1}, ${2:value2})",
        "description": "Takes two values. Returns TRUE if the second value is a suffix of the first."
      },
      "FORMAT()": {
        "prefix": "format",
        "body": "FORMAT(${1:<format_string>, ...})",
        "description": "BigQuery supports a FORMAT() function for formatting strings. This function is similar to the C printf function."
      },
      "FROM_BASE32()": {
        "prefix": "from_base32",
        "body": "FROM_BASE32(${1:string_expr})",
        "description": "Converts the base32-encoded input `string_expr` into BYTES format."
      },
      "FROM_BASE64()": {
        "prefix": "from_base64",
        "body": "FROM_BASE64(${1:string_expr})",
        "description": "Converts the base64-encoded input `string_expr` into BYTES format."
      },
      "FROM_HEX()": {
        "prefix": "from_hex",
        "body": "FROM_HEX(${1:string})",
        "description": "Converts a hexadecimal-encoded STRING into BYTES format."
      },
      "INITCAP()": {
        "prefix": "initcap",
        "body": "INITCAP(${1:value}${2:[, delimiters]})",
        "description": "Returns it with the first character in each word in uppercase and all other characters in lowercase."
      },
      "INSTR()": {
        "prefix": "instr",
        "body": "INSTR(${1:source_value}, ${2:search_value}${3:[, position[, occurrence]]})",
        "description": "Returns the lowest 1-based index of search_value in source_value."
      },
      "LEFT()": {
        "prefix": "left",
        "body": "LEFT(${1:value}, ${2:length})",
        "description": "Return the specified leftmost number of characters."
      },
      "LENGTH()": {
        "prefix": "length",
        "body": "LENGTH(${1:value})",
        "description": "Returns the length of the value."
      },
      "LPAD()": {
        "prefix": "lpad",
        "body": "LPAD(${1:original_value}, ${2:return_length[, pattern]})",
        "description": [
          "Returns a value that consists of `original_value` prepended with `pattern`."
        ]
      },
      "LOWER()": {
        "prefix": "lower",
        "body": "LOWER(${1:value})",
        "description": [
          "For STRING arguments, returns the original string with all alphabetic characters in lowercase."
        ]
      },
      "LTRIM()": {
        "prefix": "ltrim",
        "body": "LTRIM(${1:value1[, value2]})",
        "description": "Identical to TRIM, but only removes leading characters."
      },
      "NORMALIZE()": {
        "prefix": "normalize",
        "body": "NORMALIZE(${1:value[, normalization_mode]})",
        "description": [
          "Takes a STRING, `value`, and returns it as a normalized string."
        ]
      },
      "NORMALIZE_AND_CASEFOLD()": {
        "prefix": "normalize_and_casefold",
        "body": "NORMALIZE_AND_CASEFOLD(${1:value[, normalization_mode]})",
        "description": "Takes a STRING, `value`, and performs the same actions as NORMALIZE, as well as casefolding for case-insensitive operations."
      },
      "OCTET_LENGTH()": {
        "prefix": "octet_length",
        "body": "OCTET_LENGTH(${1:value})",
        "description": "Alias for BYTE_LENGTH."
      },
      "REGEXP_CONTAINS()": {
        "prefix": "regexp_contains",
        "body": "REGEXP_CONTAINS(${1:value}, r\"${2:regex}\")",
        "description": "Returns TRUE if `value` is a partial match for the regular expression, `regex`."
      },
      "REGEXP_EXTRACT()": {
        "prefix": "regexp_extract",
        "body": "REGEXP_EXTRACT(${1:value}, r\"${2:regex}\"${3:[, position[, occurrence]]})",
        "description": "Returns the first substring in `value` that matches the regular expression, `regex`. Returns NULL if there is no match."
      },
      "REGEXP_EXTRACT_ALL()": {
        "prefix": "regexp_extract_all",
        "body": "REGEXP_EXTRACT_ALL(${1:value}, r\"${2:regex}\")",
        "description": "Returns an array of all substrings of `value` that match the regular expression, `regex`."
      },
      "REGEXP_INSTR()": {
        "prefix": "regexp_instr",
        "body": "REGEXP_INSTR(${1:source_value}, r\"${2:regex}\"${3:[, position[, occurrence, [occurrence_position]]]})",
        "description": "Returns the lowest 1-based index of a regular expression, regexp, in source_value."
      },
      "REGEXP_REPLACE()": {
        "prefix": "regexp_replace",
        "body": "REGEXP_REPLACE(${1:value}, r\"${2:regex}\", ${3:replacement})",
        "description": "Returns a STRING where all substrings of `value` that match regular expression `regex` are replaced with `replacement`."
      },
      "REGEXP_SUBSTR()": {
        "prefix": "regexp_substr",
        "body": "REGEXP_SUBSTR(${1:value}, r\"${2:regex}\"${3:[, position[, occurrence]]})",
        "description": "Synonym for REGEXP_EXTRACT."
      },
      "REPLACE()": {
        "prefix": "replace",
        "body": "REPLACE(${1:original_value}, ${2:from_value}, ${3:to_value})",
        "description": "Replaces all occurrences of `from_value` with `to_value` in `original_value`."
      },
      "REPEAT()": {
        "prefix": "repeat",
        "body": "REPEAT(${1:original_value}, ${2:repetitions})",
        "description": [
          "Returns a value that consists of `original_value`, repeated."
        ]
      },
      "REVERSE()": {
        "prefix": "reverse",
        "body": "REVERSE(${1:value})",
        "description": "Returns the reverse of the input STRING or BYTES."
      },
      "RIGHT()": {
        "prefix": "right",
        "body": "RIGHT(${1:value}, ${2:length})",
        "description": "Return the specified rightmost number of characters."
      },
      "RPAD()": {
        "prefix": "rpad",
        "body": "RPAD(${1:original_value}, ${2:return_length[, pattern]})",
        "description": [
          "Returns a value that consists of `original_value` appended with pattern."
        ]
      },
      "RTRIM()": {
        "prefix": "rtrim",
        "body": "RTRIM(${1:value1[, value2]})",
        "description": "Identical to TRIM, but only removes trailing characters."
      },
      "SAFE_CONVERT_BYTES_TO_STRING()": {
        "prefix": "safe_convert_bytes_to_string",
        "body": "SAFE_CONVERT_BYTES_TO_STRING(${1:value})",
        "description": "Converts a sequence of bytes to a string."
      },
      "SOUNDEX()": {
        "prefix": "soundex",
        "body": "SOUNDEX(${1:value})",
        "description": "Returns a STRING that represents the Soundex code for value."
      },
      "SPLIT()": {
        "prefix": "split",
        "body": "SPLIT(${1:value[, delimiter]})",
        "description": [
          "Splits `value` using the `delimiter` argument."
        ]
      },
      "STARTS_WITH()": {
        "prefix": "starts_with",
        "body": "STARTS_WITH(${1:value1}, ${2:value2})",
        "description": "Takes two values. Returns TRUE if the second value is a prefix of the first."
      },
      "STRPOS()": {
        "prefix": "strpos",
        "body": "STRPOS(${1:string}, ${2:substring})",
        "description": "Returns the 1-based index of the first occurrence of `substring` inside `string`. Returns 0 if `substring` is not found."
      },
      "SUBSTR()": {
        "prefix": "substr",
        "body": "SUBSTR(${1:value}, ${2:position}${3:[, length]})",
        "description": [
          "Returns a substring of the supplied `value`."
        ]
      },
      "SUBSTRING()": {
        "prefix": "substring",
        "body": "SUBSTRING(${1:value}, ${2:position}${3:[, length]})",
        "description": [
          "Returns a substring of the supplied `value`. (Alias for SUBSTR)"
        ]
      },
      "TO_BASE32()": {
        "prefix": "to_base32",
        "body": "TO_BASE32(${1:bytes_expr})",
        "description": "Converts a sequence of BYTES into a base32-encoded STRING."
      },
      "TO_BASE64()": {
        "prefix": "to_base64",
        "body": "TO_BASE64(${1:bytes_expr})",
        "description": "Converts a sequence of BYTES into a base64-encoded STRING."
      },
      "TO_CODE_POINTS()": {
        "prefix": "to_code_points",
        "body": "TO_CODE_POINTS(${1:value})",
        "description": [
          "Takes a value and returns an array of INT64."
        ]
      },
      "TO_HEX()": {
        "prefix": "to_hex",
        "body": "TO_HEX(${1:bytes})",
        "description": "Converts a sequence of BYTES into a hexadecimal STRING."
      },
      "TRANSLATE()": {
        "prefix": "translate",
        "body": "TRANSLATE(${1:expression}, ${2:source_characters}, ${3:target_characters})",
        "description": "In `expression`, replaces each character in `source_characters` with the corresponding character in `target_characters`."
      },
      "TRIM()": {
        "prefix": "trim",
        "body": "TRIM(${1:value1[, value2]})",
        "description": "Removes all leading and trailing characters that match `value2`."
      },
      "UNICODE()": {
        "prefix": "unicode",
        "body": "UNICODE(${1:value})",
        "description": "Returns the Unicode code point for the first character in value."
      },
      "UPPER()": {
        "prefix": "upper",
        "body": "UPPER(${1:value})",
        "description": [
          "For STRING arguments, returns the original string with all alphabetic characters in uppercase."
        ]
      },
      // JSON functions
      "JSON_EXTRACT()": {
        "prefix": "json_extract",
        "body": "JSON_EXTRACT(${1:'json_string_expr'}, ${2:'json_path'})",
        "description": "Extracts a JSON values. (Legacy JSON function, recommend using `JSON_QUERY`)"
      },
      "JSON_QUERY()": {
        "prefix": "json_query",
        "body": "JSON_QUERY(${1:\"json_string_expr\"}, ${2:\"json_path\"})",
        "description": "Extracts a JSON values."
      },
      "JSON_EXTRACT_SCALAR()": {
        "prefix": "json_extract_scalar",
        "body": "JSON_EXTRACT_SCALAR(${1:'json_string_expr'}, ${2:'json_path'})",
        "description": "Extracts a scalar value. (Legacy JSON function, recommend using `JSON_VALUE`)"
      },
      "JSON_VALUE()": {
        "prefix": "json_value",
        "body": "JSON_VALUE(${1:\"json_string_expr\"}, ${2:\"json_path\"})",
        "description": "Extracts a scalar value."
      },
      "JSON_EXTRACT_ARRAY()": {
        "prefix": "json_extract_array",
        "body": "JSON_EXTRACT_ARRAY(${1:'json_string_expr'}, ${2:'json_path'})",
        "description": "Extracts an array of JSON values. (Legacy JSON function, recommend using `JSON_QUERY_ARRAY`)"
      },
      "JSON_QUERY_ARRAY()": {
        "prefix": "json_query_array",
        "body": "JSON_QUERY_ARRAY(${1:\"json_string_expr\"}, ${2:\"json_path\"})",
        "description": "Extracts an array of JSON values."
      },
      "JSON_EXTRACT_STRING_ARRAY()": {
        "prefix": "json_extract_string_array",
        "body": "JSON_EXTRACT_STRING_ARRAY(${1:'json_string_expr'}, ${2:'json_path'})",
        "description": "Extracts an array of scalar values. (Legacy JSON function, recommend using `JSON_VALUE_ARRAY`)"
      },
      "JSON_VALUE_ARRAY()": {
        "prefix": "json_value_array",
        "body": "JSON_VALUE_ARRAY(${1:\"json_string_expr\"}, ${2:\"json_path\"})",
        "description": "Extracts an array of scalar values."
      },
      "TO_JSON_STRING()": {
        "prefix": "to_json_string",
        "body": "TO_JSON_STRING(${1:value[, pretty_print]})",
        "description": "Returns a JSON-formatted string representation of the value."
      },
      "ARRAY_CONCAT()": {
        "prefix": "array_concat",
        "body": "ARRAY_CONCAT(${1:array_expression_1 [, array_expression_n]})",
        "description": "Concatenates one or more arrays with the same element type into a single array."
      },
      "ARRAY_LENGTH()": {
        "prefix": "array_length",
        "body": "ARRAY_LENGTH(${1:array_expression})",
        "description": "Returns the size of the array."
      },
      "ARRAY_TO_STRING()": {
        "prefix": "array_to_string",
        "body": "ARRAY_TO_STRING(${1:array_expression}, ${2:delimiter[, null_text]})",
        "description": [
          "Returns a concatenation of the elements in `array_expression` as a STRING. The value for `array_expression` can either be an array of STRING or BYTES data types."
        ]
      },
      "GENERATE_ARRAY()": {
        "prefix": "generate_array",
        "body": "GENERATE_ARRAY(${1:start_expression})",
        "description": [
          "Returns an array of values. The `start_expression` and `end_expression` parameters determine the inclusive start and end of the array."
        ]
      },
      "GENERATE_DATE_ARRAY()": {
        "prefix": "generate_date_array",
        "body": "GENERATE_DATE_ARRAY(${1:start_date}, ${2:end_date[, INTERVAL INT64_expr date_part]})",
        "description": [
          "Returns an array of dates. The `start_date` and `end_date` parameters determine the inclusive start and end of the array."
        ]
      },
      "GENERATE_TIMESTAMP_ARRAY()": {
        "prefix": "generate_timestamp_array",
        "body": "GENERATE_TIMESTAMP_ARRAY(${1:start_timestamp}, ${2:end_timestamp[, INTERVAL step_expression date_part]})",
        "description": [
          "Returns an `ARRAY` of `TIMESTAMPS` separated by a given interval."
        ]
      },
      "[OFFSET(zero_based_offset)]": {
        "prefix": "offset",
        "body": "OFFSET(${1:zero_based_offset})",
        "description": "Accesses an ARRAY element by position and returns the element."
      },
      "[ORDINAL(one_based_offset)]": {
        "prefix": "ordinal",
        "body": "ORDINAL(${1:one_based_offset})",
        "description": "Accesses an ARRAY element by position and returns the element."
      },
      "ARRAY_REVERSE()": {
        "prefix": "array_reverse",
        "body": "ARRAY_REVERSE(${1:value})",
        "description": "Returns the input ARRAY with elements in reverse order."
      },
      "[SAFE_OFFSET(zero_based_offset)]": {
        "prefix": "safe_offset",
        "body": "SAFE_OFFSET(${1:zero_based_offset})",
        "description": "Identical to `OFFSET` and `ORDINAL`, except returns `NULL` if the index is out of range."
      },
      "[SAFE_ORDINAL(one_based_offset)]": {
        "prefix": "safe_ordinal",
        "body": "SAFE_ORDINAL(${1:one_based_offset})",
        "description": "Identical to `OFFSET` and `ORDINAL`, except returns `NULL` if the index is out of range."
      },
      // Date functions
      "CURRENT_DATE()": {
        "prefix": "current_date",
        "body": "CURRENT_DATE(${1:[time_zone]})",
        "description": [
          "Returns the current date as of the specified or default timezone."
        ]
      },
      "EXTRACT(part FROM date_expression)": {
        "prefix": "extract date",
        "body": "EXTRACT(${1:part} FROM ${2:date_expression})",
        "description": [
          "Returns the value corresponding to the specified date part. The `part` must be one of:"
        ]
      },
      "DATE(year, month, day)": {
        "prefix": "date use int",
        "body": "DATE(${1:year}, ${2:month}, ${3:day})",
        "description": "Constructs a `DATE` from `INT64` values representing the year, month, and day."
      },
      "DATE(timestamp)": {
        "prefix": "date use timestamp",
        "body": "DATE(${1:timestamp_expression[, timezone]})",
        "description": "Converts a `timestamp_expression` to a `DATE` data type."
      },
      "DATE_ADD()": {
        "prefix": "date_add",
        "body": "DATE_ADD(${1:date_expression}, INTERVAL ${2:INT64_expr date_part})",
        "description": [
          "Adds a specified time interval to a DATE."
        ]
      },
      "DATE_SUB()": {
        "prefix": "date_sub",
        "body": "DATE_SUB(${1:date_expression}, INTERVAL ${2:INT64_expr date_part})",
        "description": [
          "Subtracts a specified time interval from a DATE."
        ]
      },
      "DATE_DIFF()": {
        "prefix": "date_diff",
        "body": "DATE_DIFF(${1:date_expression}, ${2:date_expression}, ${3:date_part})",
        "description": [
          "Returns the number of `date_part` boundaries between the two `date_expression`s."
        ]
      },
      "DATE_TRUNC()": {
        "prefix": "date_trunc",
        "body": "DATE_TRUNC(${1:date_expression}, ${2:date_part})",
        "description": [
          "Truncates the date to the specified granularity."
        ]
      },
      "DATE_FROM_UNIX_DATE()": {
        "prefix": "date_from_unix_date",
        "body": "DATE_FROM_UNIX_DATE(${1:INT64_expression})",
        "description": "Interprets `INT64_expression` as the number of days since 1970-01-01."
      },
      "FORMAT_DATE()": {
        "prefix": "format_date",
        "body": "FORMAT_DATE(${1:format_string}, ${2:date_expr})",
        "description": [
          "Formats the `date_expr` according to the specified `format_string`."
        ]
      },
      "LAST_DAY()": {
        "prefix": "last_day",
        "body": "LAST_DAY(${1:date_expression}${2:[, date_part]})",
        "description": "Returns the last day from a date expression."
      },
      "PARSE_DATE()": {
        "prefix": "parse_date",
        "body": "PARSE_DATE(${1:format_string}, ${2:date_string})",
        "description": [
          "Uses a `format_string` and a string representation of a date to return a DATE object."
        ]
      },
      "UNIX_DATE()": {
        "prefix": "unix_date",
        "body": "UNIX_DATE(${1:date_expression})",
        "description": "Returns the number of days since 1970-01-01."
      },
      // Datetime functions
      "CURRENT_DATETIME()": {
        "prefix": "current_datetime",
        "body": "CURRENT_DATETIME(${1:[timezone]})",
        "description": [
          "Returns the current time as a DATETIME object."
        ]
      },
      "DATETIME(year, month, day, hour, minute, second)": {
        "prefix": "datetime use int",
        "body": "DATETIME(${1:year}, ${2:month}, ${3:day}, ${4:hour}, ${5:minute}, ${6:second})",
        "description": "Constructs a `DATETIME` object using `INT64` values representing the year, month, day, hour, minute, and second."
      },
      "DATETIME(date, time)": {
        "prefix": "datetime use datetime",
        "body": "DATETIME(${1:date_expression}, ${2:time_expression})",
        "description": "Constructs a `DATETIME` object using a `DATE` object and a `TIME` object."
      },
      "DATETIME(timestamp)": {
        "prefix": "datetime use timestamp",
        "body": "DATETIME(${1:timestamp_expression[, timezone]})",
        "description": "Constructs a `DATETIME` object using a `TIMESTAMP` object."
      },
      "DATETIME_ADD()": {
        "prefix": "datetime_add",
        "body": "DATETIME_ADD(${1:datetime_expression}, INTERVAL ${2:INT64_expr part})",
        "description": [
          "Adds `INT64_expr` units of `part` to the DATETIME object."
        ]
      },
      "DATETIME_SUB()": {
        "prefix": "datetime_sub",
        "body": "DATETIME_SUB(${1:datetime_expression}, INTERVAL ${2:INT64_expr part})",
        "description": [
          "Subtracts `INT64_expr` units of `part` from the DATETIME."
        ]
      },
      "DATETIME_DIFF()": {
        "prefix": "datetime_diff",
        "body": "DATETIME_DIFF(${1:datetime_expression}, ${2:datetime_expression}, ${3:part})",
        "description": [
          "Returns the number of `part` boundaries between the two `datetime_expressions`."
        ]
      },
      "DATETIME_TRUNC()": {
        "prefix": "datetime_trunc",
        "body": "DATETIME_TRUNC(${1:datetime_expression}, ${2:part})",
        "description": [
          "Truncates a `DATETIME` object to the granularity of `part`."
        ]
      },
      "FORMAT_DATETIME()": {
        "prefix": "format_datetime",
        "body": "FORMAT_DATETIME(${1:format_string}, ${2:datetime_expression})",
        "description": [
          "Formats a DATETIME object according to the specified `format_string`."
        ]
      },
      "PARSE_DATETIME()": {
        "prefix": "parse_datetime",
        "body": "PARSE_DATETIME(${1:format_string}, ${2:datetime_string})",
        "description": [
          "Uses a `format_string` and a `string` representation of a timestamp to return a TIMESTAMP object."
        ]
      },
      "CURRENT_TIME()": {
        "prefix": "current_time",
        "body": "CURRENT_TIME()",
        "description": "Returns the current time as a TIME object."
      },
      "TIME(hour, minute, second)": {
        "prefix": "time use int",
        "body": "TIME(${1:hour}, ${2:minute}, ${3:second})",
        "description": "Constructs a `TIME` object using `INT64` values representing the hour, minute, and second."
      },
      "TIME(datetime)": {
        "prefix": "time use datetime",
        "body": "TIME(${1:datetime})",
        "description": "Constructs a `TIME` object using a `DATETIME` object."
      },
      "TIME(timestamp)": {
        "prefix": "time",
        "body": "TIME(${1:timestamp[, timezone]})",
        "description": "Constructs a `TIME` object using a `TIMESTAMP` object."
      },
      "TIME_ADD()": {
        "prefix": "time_add",
        "body": "TIME_ADD(${1:time_expression}, INTERVAL ${2:INT64_expr part})",
        "description": [
          "Adds `INT64_expr` units of `part` to the TIME object."
        ]
      },
      "TIME_SUB()": {
        "prefix": "time_sub",
        "body": "TIME_SUB(${1:time_expression}, INTERVAL ${2:INT64_expr part})",
        "description": [
          "Subtracts `INT64_expr` units of `part` from the TIME object."
        ]
      },
      "TIME_DIFF()": {
        "prefix": "time_diff",
        "body": "TIME_DIFF(${1:time_expression}, ${2:time_expression}, ${3:part})",
        "description": [
          "Returns the number of whole specified `part` intervals between two TIME objects."
        ]
      },
      "TIME_TRUNC()": {
        "prefix": "time_trunc",
        "body": "TIME_TRUNC(${1:time_expression}, ${2:part})",
        "description": [
          "Truncates a TIME object to the granularity of `part`."
        ]
      },
      "FORMAT_TIME()": {
        "prefix": "format_time",
        "body": "FORMAT_TIME(${1:format_string}, ${2:time_object})",
        "description": [
          "Formats a TIME object according to the specified `format_string`."
        ]
      },
      "PARSE_TIME()": {
        "prefix": "parse_time",
        "body": "PARSE_TIME(${1:format_string}, ${2:string})",
        "description": [
          "Uses a `format_string` and a string to return a TIME object."
        ]
      },
      "CURRENT_TIMESTAMP()": {
        "prefix": "current_timestamp",
        "body": "CURRENT_TIMESTAMP()",
        "description": "Parentheses are optional."
      },
      "EXTRACT(part FROM timestamp)": {
        "prefix": "extract timestamp",
        "body": "EXTRACT(${1:part} FROM ${2:timestamp_expression [AT TIME ZONE tz_spec]})",
        "description": [
          "Returns an `INT64` value that corresponds to the specified `part` from a supplied `timestamp_expression`."
        ]
      },
      "STRING()": {
        "prefix": "string",
        "body": "STRING(${1:timestamp_expression[, timezone]})",
        "description": [
          "Converts a `timestamp_expression` to a STRING data type."
        ]
      },
      "TIMESTAMP(string)": {
        "prefix": "timestamp use string",
        "body": "TIMESTAMP(${1:string_expression[, timezone]})",
        "description": "Converts a STRING expression to a TIMESTAMP data type."
      },
      "TIMESTAMP(date)": {
        "prefix": "timestamp use date",
        "body": "TIMESTAMP(${1:date_expression[, timezone]})",
        "description": "Converts a DATE object to a TIMESTAMP data type."
      },
      "TIMESTAMP(datetime)": {
        "prefix": "timestamp use datetime",
        "body": "TIMESTAMP(${1:datetime_expression[, timezone]})",
        "description": "Converts a DATETIME object to a TIMESTAMP data type."
      },
      "TIMESTAMP_ADD()": {
        "prefix": "timestamp_add",
        "body": "TIMESTAMP_ADD(${1:timestamp_expression}, INTERVAL ${2:INT64_expr date_part})",
        "description": [
          "Adds `INT64_expr` units of `date_part` to the timestamp, independent of any time zone."
        ]
      },
      "TIMESTAMP_SUB()": {
        "prefix": "timestamp_sub",
        "body": "TIMESTAMP_SUB(${1:timestamp_expression}, INTERVAL ${2:INT64_expr date_part})",
        "description": [
          "Subtracts `INT64_expr` units of `date_part` from the timestamp, independent of any time zone."
        ]
      },
      "TIMESTAMP_DIFF()": {
        "prefix": "timestamp_diff",
        "body": "TIMESTAMP_DIFF(${1:timestamp_expression}, ${2:timestamp_expression}, ${3:date_part})",
        "description": [
          "Returns the number of whole specified `date_part` intervals between two timestamps."
        ]
      },
      "TIMESTAMP_TRUNC()": {
        "prefix": "timestamp_trunc",
        "body": "TIMESTAMP_TRUNC(${1:timestamp_expression}, ${2:date_part, [, time_zone]})",
        "description": [
          "Truncates a timestamp to the granularity of `date_part`."
        ]
      },
      "FORMAT_TIMESTAMP()": {
        "prefix": "format_timestamp",
        "body": "FORMAT_TIMESTAMP(${1:format_string}, ${2:timestamp[, time_zone]})",
        "description": [
          "Formats a timestamp according to the specified `format_string`."
        ]
      },
      "PARSE_TIMESTAMP()": {
        "prefix": "parse_timestamp",
        "body": "PARSE_TIMESTAMP(${1:format_string}, ${2:string[, time_zone]})",
        "description": [
          "Uses a `format_string` and a string representation of a timestamp to return a TIMESTAMP object."
        ]
      },
      "TIMESTAMP_SECONDS()": {
        "prefix": "timestamp_seconds",
        "body": "TIMESTAMP_SECONDS(${1:int64_expression})",
        "description": "Interprets `int64_expression` as the number of seconds since 1970-01-01 00:00:00 UTC."
      },
      "TIMESTAMP_MILLIS()": {
        "prefix": "timestamp_millis",
        "body": "TIMESTAMP_MILLIS(${1:int64_expression})",
        "description": "Interprets `int64_expression` as the number of milliseconds since 1970-01-01 00:00:00 UTC."
      },
      "TIMESTAMP_MICROS()": {
        "prefix": "timestamp_micros",
        "body": "TIMESTAMP_MICROS(${1:int64_expression})",
        "description": "Interprets `int64_expression` as the number of microseconds since 1970-01-01 00:00:00 UTC."
      },
      "UNIX_SECONDS()": {
        "prefix": "unix_seconds",
        "body": "UNIX_SECONDS(${1:timestamp_expression})",
        "description": "Returns the number of seconds since 1970-01-01 00:00:00 UTC."
      },
      "UNIX_MILLIS()": {
        "prefix": "unix_millis",
        "body": "UNIX_MILLIS(${1:timestamp_expression})",
        "description": "Returns the number of milliseconds since 1970-01-01 00:00:00 UTC."
      },
      "UNIX_MICROS()": {
        "prefix": "unix_micros",
        "body": "UNIX_MICROS(${1:timestamp_expression})",
        "description": "Returns the number of microseconds since 1970-01-01 00:00:00 UTC."
      },
      "SESSION_USER()": {
        "prefix": "session_user",
        "body": "SESSION_USER()",
        "description": "Returns the email address of whoever is executing the query."
      },
      "NET.IP_FROM_STRING()": {
        "prefix": "net.ip_from_string",
        "body": "NET.IP_FROM_STRING(${1:addr_str})",
        "description": [
          "Converts an IPv4 or IPv6 address from text (STRING) format to binary (BYTES) format in network byte order."
        ]
      },
      "NET.SAFE_IP_FROM_STRING()": {
        "prefix": "net.safe_ip_from_string",
        "body": "NET.SAFE_IP_FROM_STRING(${1:addr_str})",
        "description": "Similar to NET.IP_FROM_STRING, but returns `NULL` instead of throwing an error if the input is invalid."
      },
      "NET.IP_TO_STRING()": {
        "prefix": "net.ip_to_string",
        "body": "NET.IP_TO_STRING(${1:addr_bin})",
        "description": [
          "Converts an IPv4 or IPv6 address from binary (BYTES) format in network byte order to text (STRING) format."
        ]
      },
      "NET.IP_NET_MASK()": {
        "prefix": "net.ip_net_mask",
        "body": "NET.IP_NET_MASK(${1:num_output_bytes}, ${2:prefix_length})",
        "description": "Returns a network mask: a byte sequence with length equal to `num_output_bytes`, where the first `prefix_length` bits are set to 1 and the other bits are set to 0."
      },
      "NET.IP_TRUNC()": {
        "prefix": "net.ip_trunc",
        "body": "NET.IP_TRUNC(${1:addr_bin}, ${2:prefix_length})",
        "description": [
          "Takes `addr_bin`, an IPv4 or IPv6 address in binary (BYTES) format in network byte order, and returns a subnet address in the same format."
        ]
      },
      "NET.IPV4_FROM_INT64()": {
        "prefix": "net.ipv4_from_int64",
        "body": "NET.IPV4_FROM_INT64(${1:integer_value})",
        "description": [
          "Converts an IPv4 address from integer format to binary (BYTES) format in network byte order."
        ]
      },
      "NET.IPV4_TO_INT64()": {
        "prefix": "net.ipv4_to_int64",
        "body": "NET.IPV4_TO_INT64(${1:addr_bin})",
        "description": [
          "Converts an IPv4 address from binary (BYTES) format in network byte order to integer format."
        ]
      },
      "NET.HOST()": {
        "prefix": "net.host",
        "body": "NET.HOST(${1:url})",
        "description": "Takes a URL as a STRING and returns the host as a STRING."
      },
      "NET.PUBLIC_SUFFIX()": {
        "prefix": "net.public_suffix",
        "body": "NET.PUBLIC_SUFFIX(${1:url})",
        "description": [
          "Takes a URL as a STRING and returns the public suffix (such as `com`, `org`, or `net`) as a STRING."
        ]
      },
      "NET.REG_DOMAIN()": {
        "prefix": "net.reg_domain",
        "body": "NET.REG_DOMAIN(${1:url})",
        "description": [
          "Takes a URL as a STRING and returns the registered or registerable domain (the public suffix plus one preceding label), as a STRING."
        ]
      },
      "CASE expr WHEN value ... END": {
        "prefix": "case",
        "body": [
          "CASE ${1:expr}",
          "\tWHEN ${2:value} THEN ${3:result}",
          "\tWHEN ${4:value} THEN ${5:result}",
          "\tELSE ${6:else_result}",
          "END"
        ],
        "description": "Compares `expr` to value of each successive `WHEN` clause and returns the first result where this comparison returns true."
      },
      "CASE WHEN condition ... END": {
        "prefix": "casecond",
        "body": [
          "CASE",
          "\tWHEN ${1:cond} THEN ${2:result}",
          "\tWHEN ${4:cond} THEN ${5:result}",
          "\tELSE ${6:else_result}",
          "END"
        ]
      },
      "COALESCE()": {
        "prefix": "coalesce",
        "body": "COALESCE(${1:expr1, ..., exprN})",
        "description": "Returns the value of the first non-null expression."
      },
      "IF()": {
        "prefix": "if",
        "body": "IF(${1:cond}, ${2:true_result}, ${3:else_result})",
        "description": "If `cond` is true, returns `true_result`, else returns `else_result`."
      },
      "IFNULL()": {
        "prefix": "ifnull",
        "body": "IFNULL(${1:expr}, ${2:null_result})",
        "description": "If `expr` is `NULL`, return `null_result`."
      },
      "NULLIF()": {
        "prefix": "nullif",
        "body": "NULLIF(${1:expression}, ${2:expression_to_match})",
        "description": "Returns `NULL` if `expression = expression_to_match` is true, otherwise returns `expression`."
      },
      "EXTRACT(DAYOFWEEK FROM date_expression)": {
        "prefix": "dayofweek",
        "body": "EXTRACT(DAYOFWEEK FROM ${1:date_expression})"
      },
      "EXTRACT(DAY FROM date_expression)": {
        "prefix": "day",
        "body": "EXTRACT(DAY FROM ${1:date_expression})"
      },
      "EXTRACT(DAYOFYEAR FROM date_expression)": {
        "prefix": "dayofyear",
        "body": "EXTRACT(DAYOFYEAR FROM ${1:date_expression})"
      },
      "EXTRACT(WEEK FROM date_expression)": {
        "prefix": "week",
        "body": "EXTRACT(WEEK FROM ${1:date_expression})"
      },
      "EXTRACT(WEEK<WEEKDAY> FROM date_expression)": {
        "prefix": "weekday",
        "body": "EXTRACT(WEEK(${1:<WEEKDAY>}) FROM ${2:date_expression})"
      },
      "EXTRACT(ISOWEEK FROM date_expression)": {
        "prefix": "isoweek",
        "body": "EXTRACT(ISOWEEK FROM ${1:date_expression})"
      },
      "EXTRACT(MONTH FROM date_expression)": {
        "prefix": "month",
        "body": "EXTRACT(MONTH FROM ${1:date_expression})"
      },
      "EXTRACT(QUARTER FROM date_expression)": {
        "prefix": "quarter",
        "body": "EXTRACT(QUARTER FROM ${1:date_expression})"
      },
      "EXTRACT(YEAR FROM date_expression)": {
        "prefix": "year",
        "body": "EXTRACT(YEAR FROM ${1:date_expression})"
      },
      "EXTRACT(ISOYEAR FROM date_expression)": {
        "prefix": "isoyear",
        "body": "EXTRACT(ISOYEAR FROM ${1:date_expression})"
      },
      "EXTRACT(MICROSECOND FROM timestamp_expression)": {
        "prefix": "microsecond",
        "body": "EXTRACT(MICROSECOND FROM ${1:timestamp_expression [AT TIME ZONE tz_spec]})"
      },
      "EXTRACT(MILLISECOND FROM timestamp_expression)": {
        "prefix": "millisecond",
        "body": "EXTRACT(MILLISECOND FROM ${1:timestamp_expression [AT TIME ZONE tz_spec]})"
      },
      "EXTRACT(SECOND FROM timestamp_expression)": {
        "prefix": "second",
        "body": "EXTRACT(SECOND FROM ${1:timestamp_expression [AT TIME ZONE tz_spec]})"
      },
      "EXTRACT(MINUTE FROM timestamp_expression)": {
        "prefix": "minute",
        "body": "EXTRACT(MINUTE FROM ${1:timestamp_expression [AT TIME ZONE tz_spec]})"
      },
      "EXTRACT(HOUR FROM timestamp_expression)": {
        "prefix": "hour",
        "body": "EXTRACT(HOUR FROM ${1:timestamp_expression [AT TIME ZONE tz_spec]})"
      },
      // Debugging functions
      "ERROR()": {
        "prefix": "error",
        "body": "ERROR(${1:error_message})",
        "description": "Returns an error. The error_message argument is a STRING."
      },
      "SAFE.prefix()": {
        "prefix": "safeprefix",
        "body": "SAFE.${1:function_name()}",
        "description": [
          "If you begin a function with the SAFE. prefix, it will return NULL instead of an error."
        ]
      },
      "ML.EVALUATE()": {
        "prefix": "mlevaluate",
        "body": [
          "ML.EVALUATE(MODEL `${1:project}.${2:dataset}.${3:model}`,",
          "\t${4:{TABLE table_name | (query_statement)}},",
          "\t${5:[STRUCT(<T> AS threshold)]})"
        ]
      },
      "ML.ROC_CURVE()": {
        "prefix": "mlroccurve",
        "body": [
          "ML.ROC_CURVE(MODEL `${1:project}.${2:dataset}.${3:model}`,",
          "\t${4:{TABLE table_name | (query_statement)}},",
          "\t${5:[GENERATE_ARRAY(thresholds)]})"
        ]
      },
      "ML.CONFUSION_MATRIX()": {
        "prefix": "mlconfusionmatrix",
        "body": [
          "ML.CONFUSION_MATRIX(MODEL `${1:project}.${2:dataset}.${3:model}`,",
          "\t${4:{TABLE table_name | (query_statement)}},",
          "\t${5:[GENERATE_ARRAY(thresholds)]})"
        ]
      },
      "ML.TRAINING_INFO()": {
        "prefix": "mltraininginfo",
        "body": "ML.TRAINING_INFO(MODEL `${1:project}.${2:dataset}.${3:model}`)"
      },
      "ML.FEATURE_INFO()": {
        "prefix": "mlfeatureinfo",
        "body": "ML.FEATURE_INFO(MODEL `${1:project}.${2:dataset}.${3:model}`)"
      },
      "ML.WEIGHTS()": {
        "prefix": "mlweights",
        "body": [
          "ML.WEIGHTS(MODEL `${1:project}.${2:dataset}.${3:model}`,",
          "\t${4:[STRUCT(<T> AS standardize)]})"
        ]
      },
      "ML.PREDICT()": {
        "prefix": "mlpredict",
        "body": [
          "ML.PREDICT(MODEL `${1:project}.${2:dataset}.${3:model}`,",
          "\t${4:{TABLE table_name | (query_statement)}},",
          "\t${5:[STRUCT(<threshold FLOAT64> AS threshold)]})"
        ]
      },
      // Geography functions
      "ST_AREA()": {
        "prefix": "st_area",
        "body": "ST_AREA(${1:geography_expression[, spheroid=FALSE]})"
      },
      "ST_ASBINARY()": {
        "prefix": "st_asbinary",
        "body": "ST_ASBINARY(${1:geography_expression})"
      },
      "ST_ASGEOJSON()": {
        "prefix": "st_asgeojson",
        "body": "ST_ASGEOJSON(${1:geography_expression})"
      },
      "ST_ASTEXT()": {
        "prefix": "st_astext",
        "body": "ST_ASTEXT(${1:geography_expression})"
      },
      "ST_BOUNDARY()": {
        "prefix": "st_boundary",
        "body": "ST_BOUNDARY(${1:geography_expression})"
      },
      "ST_CENTROID()": {
        "prefix": "st_centroid",
        "body": "ST_CENTROID(${1:geography_expression})"
      },
      "ST_CENTROID_AGG()": {
        "prefix": "st_centroid_agg",
        "body": "ST_CENTROID_AGG(${1:geography})"
      },
      "ST_CLOSESTPOINT()": {
        "prefix": "st_closestpoint",
        "body": "ST_CLOSESTPOINT(${1:geography_1}, ${2:geography_2}${3:[, spheroid=FALSE]})"
      },
      "ST_CLUSTERDBSCAN()": {
        "prefix": "st_clusterdbscan",
        "body": "ST_CLUSTERDBSCAN(${1:geography_column}, ${2:epsilon}, ${3:minimum_geographies}) OVER (${4:...})"
      },
      "ST_CONTAINS()": {
        "prefix": "st_contains",
        "body": "ST_CONTAINS(${1:geography_1}, ${2:geography_2})"
      },
      "ST_CONVEXHULL()": {
        "prefix": "st_convexhull",
        "body": "ST_CONVEXHULL(${1:geography_expression})"
      },
      "ST_COVEREDBY()": {
        "prefix": "st_coveredby",
        "body": "ST_COVEREDBY(${1:geography_1}, ${2:geography_2})"
      },
      "ST_COVERS()": {
        "prefix": "st_covers",
        "body": "ST_COVERS(${1:geography_1}, ${2:geography_2})"
      },
      "ST_DIFFERENCE()": {
        "prefix": "st_difference",
        "body": "ST_DIFFERENCE(${1:geography_1}, ${2:geography_2})"
      },
      "ST_DIMENSION()": {
        "prefix": "st_dimension",
        "body": "ST_DIMENSION(${1:geography_expression})"
      },
      "ST_DISJOINT()": {
        "prefix": "st_disjoint",
        "body": "ST_DISJOINT(${1:geography_1}, ${2:geography_2})"
      },
      "ST_DISTANCE()": {
        "prefix": "st_distance",
        "body": "ST_DISTANCE(${1:geography_1}, ${2:geography_2[, spheroid=FALSE]})"
      },
      "ST_DUMP()": {
        "prefix": "st_dump",
        "body": "ST_DUMP(${1:geography}${2:[, dimension]})"
      },
      "ST_DWITHIN()": {
        "prefix": "st_dwithin",
        "body": "ST_DWITHIN(${1:geography_1}, ${2:geography_2}, ${3:distance[, spheroid=FALSE]})"
      },
      "ST_ENDPOINT()": {
        "prefix": "st_endpoint",
        "body": "ST_ENDPOINT(${1:linestring_geography})"
      },
      "ST_EQUALS()": {
        "prefix": "st_equals",
        "body": "ST_EQUALS(${1:geography_1}, ${2:geography_2})"
      },
      "ST_GEOGFROM()": {
        "prefix": "st_geogfrom",
        "body": "ST_GEOGFROM(${1:expression})"
      },
      "ST_GEOGFROMGEOJSON()": {
        "prefix": "st_geogfromgeojson",
        "body": "ST_GEOGFROMGEOJSON(${1:geojson_string}${2:[, make_valid => constant_expression]})"
      },
      "ST_GEOGFROMTEXT()": {
        "prefix": "st_geogfromtext",
        "body": "ST_GEOGFROMTEXT(${1:wkt_string}${2:[, oriented => boolean_constant_1]}${3:[, planar => boolean_constant_2]}${4:[, make_valid => boolean_constant_3]})"
      },
      "ST_GEOGFROMWKB()": {
        "prefix": "st_geogfromwkb",
        "body": "ST_GEOGFROMWKB(${1:wkb_bytes_expression|wkb_hex_string_expression})"
      },
      "ST_GEOGPOINT()": {
        "prefix": "st_geogpoint",
        "body": "ST_GEOGPOINT(${1:longitude}, ${2:latitude})"
      },
      "ST_GEOGPOINTFROMGEOHASH()": {
        "prefix": "st_geogpointfromgeohash",
        "body": "ST_GEOGPOINTFROMGEOHASH(${1:geohash})"
      },
      "ST_GEOHASH()": {
        "prefix": "st_geohash",
        "body": "ST_GEOHASH(${1:geography_expression}, ${2:maxchars})"
      },
      "ST_INTERSECTION()": {
        "prefix": "st_intersection",
        "body": "ST_INTERSECTION(${1:geography_1}, ${2:geography_2})"
      },
      "ST_INTERSECTS()": {
        "prefix": "st_intersects",
        "body": "ST_INTERSECTS(${1:geography_1}, ${2:geography_2})"
      },
      "ST_INTERSECTSBOX()": {
        "prefix": "st_intersectsbox",
        "body": "ST_INTERSECTSBOX(${1:geography}, ${2:lng1}, ${3:lat1}, ${4:lng2}, ${5:lat2})"
      },
      "ST_ISCOLLECTION()": {
        "prefix": "st_iscollection",
        "body": "ST_ISCOLLECTION(${1:geography_expression})"
      },
      "ST_ISEMPTY()": {
        "prefix": "st_isempty",
        "body": "ST_ISEMPTY(${1:geography_expression})"
      },
      "ST_LENGTH()": {
        "prefix": "st_length",
        "body": "ST_LENGTH(${1:geography_expression[, spheroid=FALSE]})"
      },
      "ST_MAKELINE()": {
        "prefix": "st_makeline",
        "body": "ST_MAKELINE(${1:geography_1, geography_2 | array_of_geography})"
      },
      "ST_MAKEPOLYGON()": {
        "prefix": "st_makepolygon",
        "body": "ST_MAKEPOLYGON(${1:geography_expression[, array_of_geography]})"
      },
      "ST_MAKEPOLYGONORIENTED()": {
        "prefix": "st_makepolygonoriented",
        "body": "ST_MAKEPOLYGONORIENTED(${1:array_of_geography})"
      },
      "ST_MAXDISTANCE()": {
        "prefix": "st_maxdistance",
        "body": "ST_MAXDISTANCE(${1:geography_1}, ${2:geography_2[, spheroid=FALSE]})"
      },
      "ST_NPOINTS()": {
        "prefix": "st_npoints",
        "body": "ST_NPOINTS(${1:geography_expression})"
      },
      "ST_NUMPOINTS()": {
        "prefix": "st_numpoints",
        "body": "ST_NUMPOINTS(${1:geography_expression})"
      },
      "ST_PERIMETER()": {
        "prefix": "st_perimeter",
        "body": "ST_PERIMETER(${1:geography_expression[, spheroid=FALSE]})"
      },
      "ST_POINTN()": {
        "prefix": "st_pointn",
        "body": "ST_POINTN(${1:linestring_geography}, ${2:index})"
      },
      "ST_SIMPLIFY()": {
        "prefix": "st_simplify",
        "body": "ST_SIMPLIFY(${1:geography}, ${2:tolerance_meters})"
      },
      "ST_SNAPTOGRID()": {
        "prefix": "st_snaptogrid",
        "body": "ST_SNAPTOGRID(${1:geography_expression}, ${2:grid_size})"
      },
      "ST_STARTPOINT()": {
        "prefix": "st_startpoint",
        "body": "ST_STARTPOINT(${1:linestring_geography})"
      },
      "ST_TOUCHES()": {
        "prefix": "st_touches",
        "body": "ST_TOUCHES(${1:geography_1}, ${2:geography_2})"
      },
      "ST_UNION()": {
        "prefix": "st_union",
        "body": "ST_UNION(${1:geography_1, geography_2 | array_of_geography})"
      },
      "ST_UNION_AGG()": {
        "prefix": "st_union_agg",
        "body": "ST_UNION_AGG(${1:geography})"
      },
      "ST_WITHIN()": {
        "prefix": "st_within",
        "body": "ST_WITHIN(${1:geography_1}, ${2:geography_2})"
      },
      "ST_X()": {
        "prefix": "st_x",
        "body": "ST_X(${1:geography_expression})"
      },
      "ST_Y()": {
        "prefix": "st_y",
        "body": "ST_Y(${1:geography_expression})"
      },
      // AEAD encryption functions
      "KEYS.NEW_KEYSET": {
        "prefix": "keysnew_keyset",
        "body": "KEYS.NEW_KEYSET(${1:key_type})"
      },
      "KEYS.ADD_KEY_FROM_RAW_BYTES": {
        "prefix": "keysadd_key_from_raw_bytes",
        "body": "KEYS.ADD_KEY_FROM_RAW_BYTES(${1:keyset}, ${2:key_type}, ${3:raw_key_bytes})"
      },
      "AEAD.DECRYPT_BYTES": {
        "prefix": "aeaddecrypt_bytes",
        "body": "AEAD.DECRYPT_BYTES(${1:keyset}, ${2:ciphertext}, ${3:additional_data})"
      },
      "AEAD.DECRYPT_STRING": {
        "prefix": "aeaddecrypt_string",
        "body": "AEAD.DECRYPT_STRING(${1:keyset}, ${2:ciphertext}, ${3:additional_data})"
      },
      "AEAD.ENCRYPT": {
        "prefix": "aeadencrypt",
        "body": "AEAD.ENCRYPT(${1:keyset}, ${2:plaintext}, ${3:additional_data})"
      },
      "KEYS.KEYSET_FROM_JSON": {
        "prefix": "keyskeyset_from_json",
        "body": "KEYS.KEYSET_FROM_JSON(${1:json_keyset})"
      },
      "KEYS.KEYSET_TO_JSON": {
        "prefix": "keyskeyset_to_json",
        "body": "KEYS.KEYSET_TO_JSON(${1:keyset})"
      },
      "KEYS.ROTATE_KEYSET": {
        "prefix": "keysrotate_keyset",
        "body": "KEYS.ROTATE_KEYSET(${1:keyset}, ${2:key_type})"
      },
      "EXTERNAL_QUERY()": {
        "prefix": "external_query",
        "body": "EXTERNAL_QUERY(${1:connection_id}, ${2:external_database_query}${3:[, options]})",
        "description": "Executes the query in Cloud SQL and returns results as a temporary table."
      },
      // INFORMATION_SCHEMA - Dataset metadata
      "INFORMATION_SCHEMA.SCHEMATA": {
        "prefix": "info schemata",
        "body": "INFORMATION_SCHEMA.SCHEMATA",
        "description": "Results contain one row for each dataset in a project to which the current user has access."
      },
      "INFORMATION_SCHEMA.SCHEMATA_OPTIONS": {
        "prefix": "info schemata options",
        "body": "INFORMATION_SCHEMA.SCHEMATA_OPTIONS",
        "description": "Results contain one row for each dataset in a project to which the current user has access."
      },
      // INFORMATION_SCHEMA - Table metadata
      "INFORMATION_SCHEMA.TABLES": {
        "prefix": "info tables",
        "body": "INFORMATION_SCHEMA.TABLES",
        "description": "Results contain one row for each table or view in a dataset."
      },
      "INFORMATION_SCHEMA.TABLE_OPTIONS": {
        "prefix": "info table options",
        "body": "INFORMATION_SCHEMA.TABLE_OPTIONS",
        "description": "Results contain one row for each table or view in a dataset."
      },
      "INFORMATION_SCHEMA.COLUMNS": {
        "prefix": "info columns",
        "body": "INFORMATION_SCHEMA.COLUMNS",
        "description": "Results contain one row for each column (field) in a table."
      },
      "INFORMATION_SCHEMA.COLUMN_FIELD_PATHS": {
        "prefix": "info column field paths",
        "body": "INFORMATION_SCHEMA.COLUMN_FIELD_PATHS",
        "description": "Results contain one row for each column nested within a RECORD (or STRUCT) column."
      },
      "INFORMATION_SCHEMA.PARTITIONS": {
        "prefix": "info partitions",
        "body": "INFORMATION_SCHEMA.PARTITIONS",
        "description": "Results contain one row for each partition."
      },
      // INFORMATION_SCHEMA - Snapshot metadata
      "INFORMATION_SCHEMA.TABLE_SNAPSHOTS": {
        "prefix": "info table snapshots",
        "body": "INFORMATION_SCHEMA.TABLE_SNAPSHOTS",
        "description": "Results contain one row for each table snapshot in the specified dataset or region."
      },
      // INFORMATION_SCHEMA - View metadata
      "INFORMATION_SCHEMA.VIEWS": {
        "prefix": "info views",
        "body": "INFORMATION_SCHEMA.VIEWS",
        "description": "Results contain one row for each view in a dataset."
      },
      // INFORMATION_SCHEMA - Job metadata
      "INFORMATION_SCHEMA.JOBS_BY_USER": {
        "prefix": "info jobs by user",
        "body": "INFORMATION_SCHEMA.JOBS_BY_USER",
        "description": "Returns only the jobs submitted by the current user in the current project."
      },
      "INFORMATION_SCHEMA.JOBS_BY_PROJECT": {
        "prefix": "info jobs by project",
        "body": "INFORMATION_SCHEMA.JOBS_BY_PROJECT",
        "description": "Returns all jobs submitted in the current project."
      },
      "INFORMATION_SCHEMA.JOBS_BY_FOLDER": {
        "prefix": "info jobs by folder",
        "body": "INFORMATION_SCHEMA.JOBS_BY_FOLDER",
        "description": "Returns returns all jobs submitted in the parent folder of the current project, including the jobs in subfolders under it."
      },
      "INFORMATION_SCHEMA.JOBS_BY_ORGANIZATION": {
        "prefix": "info jobs by organization",
        "body": "INFORMATION_SCHEMA.JOBS_BY_ORGANIZATION",
        "description": "Returns all jobs submitted in the organization that is associated with the current project."
      },
      // INFORMATION_SCHEMA - Job metadata by timeslice
      "INFORMATION_SCHEMA.JOBS_TIMELINE_BY_USER": {
        "prefix": "info jobs timeline by user",
        "body": "INFORMATION_SCHEMA.JOBS_TIMELINE_BY_USER",
        "description": "Returns only the jobs submitted by the current user in the current project."
      },
      "INFORMATION_SCHEMA.JOBS_TIMELINE_BY_PROJECT": {
        "prefix": "info jobs timeline by project",
        "body": "INFORMATION_SCHEMA.JOBS_TIMELINE_BY_PROJECT",
        "description": "Returns all jobs submitted in the current project."
      },
      "INFORMATION_SCHEMA.JOBS_TIMELINE_BY_FOLDER": {
        "prefix": "info jobs timeline by folder",
        "body": "INFORMATION_SCHEMA.JOBS_TIMELINE_BY_FOLDER",
        "description": "Returns all jobs submitted in the parent folder of the current project, including the jobs in subfolders under it."
      },
      "INFORMATION_SCHEMA.JOBS_TIMELINE_BY_ORGANIZATION": {
        "prefix": "info jobs timeline by organization",
        "body": "INFORMATION_SCHEMA.JOBS_TIMELINE_BY_ORGANIZATION",
        "description": "Returns all jobs submitted in the parent folder of the current project, including the jobs in subfolders under it."
      },
      // INFORMATION_SCHEMA - Object privilege
      "INFORMATION_SCHEMA.OBJECT_PRIVILEGES": {
        "prefix": "info object privileges",
        "body": "INFORMATION_SCHEMA.OBJECT_PRIVILEGES",
        "description": "Returns access control bindings for a resource."
      },
      // INFORMATION_SCHEMA - Reservations metadata
      "INFORMATION_SCHEMA.RESERVATION_CHANGES_BY_PROJECT": {
        "prefix": "info reservation changes by project",
        "body": "INFORMATION_SCHEMA.RESERVATION_CHANGES_BY_PROJECT",
        "description": "Contains a list of all changes to reservations within the administration project. Each row represents a change to a single reservation."
      },
      "INFORMATION_SCHEMA.RESERVATIONS_BY_PROJECT": {
        "prefix": "info reservations by project",
        "body": "INFORMATION_SCHEMA.RESERVATIONS_BY_PROJECT",
        "description": "Contains a list of all current reservations within the administration project. Each row represents a single, current reservation. A current reservation is a reservation that has not been deleted."
      },
      "INFORMATION_SCHEMA.CAPACITY_COMMITMENT_CHANGES_BY_PROJECT": {
        "prefix": "info capacity commitment changes by project",
        "body": "INFORMATION_SCHEMA.CAPACITY_COMMITMENT_CHANGES_BY_PROJECT",
        "description": "Contains a list of all changes to capacity commitments within the administration project. Each row represents a single change to a single capacity commitment."
      },
      "INFORMATION_SCHEMA.CAPACITY_COMMITMENTS_BY_PROJECT": {
        "prefix": "info capacity commitments by project",
        "body": "INFORMATION_SCHEMA.CAPACITY_COMMITMENTS_BY_PROJECT",
        "description": "Contains a list of all current capacity commitments within the administration project. Each row represents a single, current capacity commitment. A current capacity commitment is either pending or active and has not been deleted."
      },
      "INFORMATION_SCHEMA.ASSIGNMENT_CHANGES_BY_PROJECT": {
        "prefix": "info assignment changes by project",
        "body": "INFORMATION_SCHEMA.ASSIGNMENT_CHANGES_BY_PROJECT",
        "description": "Contains a list of all changes to assignments within the administration project. Each row represents a single change to a single assignment."
      },
      "INFORMATION_SCHEMA.ASSIGNMENTS_BY_PROJECT": {
        "prefix": "info assignments by project",
        "body": "INFORMATION_SCHEMA.ASSIGNMENTS_BY_PROJECT",
        "description": "Contains a list of all current assignments within the administration project. Each row represents a single, current assignment. A current assignment is either pending or active and has not been deleted."
      },
      // INFORMATION_SCHEMA - Routine metadata
      "INFORMATION_SCHEMA.ROUTINES": {
        "prefix": "info routines",
        "body": "INFORMATION_SCHEMA.ROUTINES",
        "description": "Contains "
      },
      "INFORMATION_SCHEMA.ROUTINE_OPTIONS": {
        "prefix": "info routine options",
        "body": "INFORMATION_SCHEMA.ROUTINE_OPTIONS",
        "description": "Contains "
      },
      "INFORMATION_SCHEMA.PARAMETERS": {
        "prefix": "info parameters",
        "body": "INFORMATION_SCHEMA.PARAMETERS",
        "description": "Contains "
      },
      // INFORMATION_SCHEMA - Streaming metadata
      "INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_PROJECT": {
        "prefix": "info streaming timeline by project",
        "body": "INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_PROJECT",
        "description": "Contains per-minute aggregated streaming statistics for the current project."
      },
      "INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_FOLDER": {
        "prefix": "info streaming timeline by folder",
        "body": "INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_FOLDER",
        "description": "Contains per-minute aggregated streaming statistics for the parent folder of the current project, including its subfolders."
      },
      "INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_ORGANIZATION": {
        "prefix": "info streaming timeline by organization",
        "body": "INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_ORGANIZATION",
        "description": "Contains per-minute aggregated streaming statistics for the whole organization associated with the current project."
      },
      // INFORMATION_SCHEMA - Dataset metadata
      "SELECT ... FROM INFORMATION_SCHEMA.SCHEMATA": {
        "prefix": "select info schemata",
        "body": [
          "SELECT",
          "\tcatalog_name,",
          "\tschema_name,",
          "\tschema_owner,",
          "\tcreation_time,",
          "\tlast_modified_time,",
          "\tlocation",
          "FROM",
          "\t`${1:project}`.INFORMATION_SCHEMA.SCHEMATA",
          "ORDER BY",
          "\tschema_name"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.SCHEMATA_OPTIONS": {
        "prefix": "select info schemata options",
        "body": [
          "SELECT",
          "\tcatalog_name,",
          "\tschema_name,",
          "\toption_name,",
          "\toption_type,",
          "\toption_value",
          "FROM",
          "\t`${1:project}`.INFORMATION_SCHEMA.SCHEMATA_OPTIONS",
          "ORDER BY",
          "\tschema_name, option_name"
        ]
      },
      // INFORMATION_SCHEMA - Table metadata
      "SELECT ... FROM INFORMATION_SCHEMA.TABLES": {
        "prefix": "select info tables",
        "body": [
          "SELECT",
          "\ttable_catalog,",
          "\ttable_schema,",
          "\ttable_name,",
          "\ttable_type,",
          "\tis_insertable_into,",
          "\tis_typed,",
          "\tcreation_time,",
          "\tddl",
          "FROM",
          "\t`${1:project}.${2:dataset}`.INFORMATION_SCHEMA.TABLES",
          "ORDER BY",
          "\ttable_name"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.TABLE_OPTIONS": {
        "prefix": "select info table options",
        "body": [
          "SELECT",
          "\ttable_catalog,",
          "\ttable_schema,",
          "\ttable_name,",
          "\toption_name,",
          "\toption_type,",
          "\toption_value",
          "FROM",
          "\t`${1:project}.${2:dataset}`.INFORMATION_SCHEMA.TABLE_OPTIONS",
          "ORDER BY",
          "\ttable_name, option_name"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.COLUMNS": {
        "prefix": "select info columns",
        "body": [
          "SELECT",
          "\ttable_catalog,",
          "\ttable_schema,",
          "\ttable_name,",
          "\tcolumn_name,",
          "\tordinal_position,",
          "\tis_nullable,",
          "\tdata_type,",
          "\tis_generated,",
          "\tgeneration_expression,",
          "\tis_stored,",
          "\tis_hidden,",
          "\tis_updatable,",
          "\tis_system_defined,",
          "\tis_partitioning_column,",
          "\tclustering_ordinal_position",
          "FROM",
          "\t`${1:project}.${2:dataset}`.INFORMATION_SCHEMA.COLUMNS",
          "ORDER BY",
          "\ttable_name, ordinal_position"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.COLUMN_FIELD_PATHS": {
        "prefix": "select info column field paths",
        "body": [
          "SELECT",
          "\ttable_catalog,",
          "\ttable_schema,",
          "\ttable_name,",
          "\tcolumn_name,",
          "\tfield_path,",
          "\tdata_type,",
          "\tdescription",
          "FROM",
          "\t`${1:project}.${2:dataset}`.INFORMATION_SCHEMA.COLUMN_FIELD_PATHS",
          "ORDER BY",
          "\ttable_name, column_name"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.PARTITIONS": {
        "prefix": "select info partitions",
        "body": [
          "SELECT",
          "\ttable_catalog,",
          "\ttable_schema,",
          "\ttable_name,",
          "\tpartition_id,",
          "\ttotal_rows,",
          "\ttotal_logical_bytes,",
          "\ttotal_billable_bytes,",
          "\tlast_modified_time,",
          "\tstorage_tier",
          "FROM",
          "\t`${1:project}.${2:dataset}`.INFORMATION_SCHEMA.PARTITIONS",
          "ORDER BY",
          "\ttable_name, partition_id DESC"
        ]
      },
      // INFORMATION_SCHEMA - Snapshot metadata
      "SELECT ... FROM INFORMATION_SCHEMA.TABLE_SNAPSHOTS": {
        "prefix": "select info table snapshots",
        "body": [
          "SELECT",
          "\ttable_catalog",
          "\ttable_schema",
          "\ttable_name",
          "\tbase_table_catalog",
          "\tbase_table_schema",
          "\tbase_table_name",
          "\tsnapshot_time",
          "FROM",
          "\t`${1:project}.${2:dataset}`|`region-${3:(us|eu|region_name)}`.INFORMATION_SCHEMA.TABLE_SNAPSHOTS",
          "ORDER BY",
          "\ttable_name"
        ]
      },
      // INFORMATION_SCHEMA - View metadata
      "SELECT ... FROM INFORMATION_SCHEMA.VIEWS": {
        "prefix": "select info views",
        "body": [
          "SELECT",
          "\ttable_catalog,",
          "\ttable_schema,",
          "\ttable_name,",
          "\tview_definition,",
          "\tcheck_option,",
          "\tuse_standard_sql",
          "FROM",
          "\t`${1:project}.${2:dataset}`.INFORMATION_SCHEMA.VIEWS",
          "ORDER BY",
          "\ttable_name"
        ]
      },
      // INFORMATION_SCHEMA - Job metadata
      "SELECT ... FROM INFORMATION_SCHEMA.JOBS_BY_USER": {
        "prefix": "select info jobs by user",
        "body": [
          "SELECT",
          "\tcreation_time,",
          "\tproject_id,",
          "\tproject_number,",
          "\tuser_email,",
          "\tjob_id,",
          "\tjob_type,",
          "\tstatement_type,",
          "\tpriority,",
          "\tstart_time,",
          "\tend_time,",
          "\tquery,",
          "\tstate,",
          "\treservation_id,",
          "\ttotal_bytes_processed,",
          "\ttotal_slot_ms,",
          "\terror_result,",
          "\tcache_hit,",
          "\tdestination_table,",
          "\treferenced_tables,",
          "\tlabels,",
          "\ttimeline,",
          "\tjob_stages,",
          "\ttotal_bytes_billed,",
          "\tparent_job_id",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.JOBS_BY_USER",
          "ORDER BY",
          "\tcreation_time DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.JOBS_BY_PROJECT": {
        "prefix": "select info jobs by project",
        "body": [
          "SELECT",
          "\tcreation_time,",
          "\tproject_id,",
          "\tproject_number,",
          "\tuser_email,",
          "\tjob_id,",
          "\tjob_type,",
          "\tstatement_type,",
          "\tpriority,",
          "\tstart_time,",
          "\tend_time,",
          "\tquery,",
          "\tstate,",
          "\treservation_id,",
          "\ttotal_bytes_processed,",
          "\ttotal_slot_ms,",
          "\terror_result,",
          "\tcache_hit,",
          "\tdestination_table,",
          "\treferenced_tables,",
          "\tlabels,",
          "\ttimeline,",
          "\tjob_stages,",
          "\ttotal_bytes_billed,",
          "\tparent_job_id",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.JOBS_BY_PROJECT",
          "ORDER BY",
          "\tcreation_time DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.JOBS_BY_FOLDER": {
        "prefix": "select info jobs by folder",
        "body": [
          "SELECT",
          "\tcreation_time,",
          "\tproject_id,",
          "\tproject_number,",
          "\tfolder_numbers,",
          "\tuser_email,",
          "\tjob_id,",
          "\tjob_type,",
          "\tstatement_type,",
          "\tpriority,",
          "\tstart_time,",
          "\tend_time,",
          "\tstate,",
          "\treservation_id,",
          "\ttotal_bytes_processed,",
          "\ttotal_slot_ms,",
          "\terror_result,",
          "\tcache_hit,",
          "\tdestination_table,",
          "\treferenced_tables,",
          "\tlabels,",
          "\ttimeline,",
          "\tjob_stages,",
          "\ttotal_bytes_billed,",
          "\tparent_job_id",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.JOBS_BY_FOLDER",
          "ORDER BY",
          "\tcreation_time DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.JOBS_BY_ORGANIZATION": {
        "prefix": "select info jobs by organization",
        "body": [
          "SELECT",
          "\tcreation_time,",
          "\tproject_id,",
          "\tproject_number,",
          "\tfolder_numbers,",
          "\tuser_email,",
          "\tjob_id,",
          "\tjob_type,",
          "\tstatement_type,",
          "\tpriority,",
          "\tstart_time,",
          "\tend_time,",
          "\tstate,",
          "\treservation_id,",
          "\ttotal_bytes_processed,",
          "\ttotal_slot_ms,",
          "\terror_result,",
          "\tcache_hit,",
          "\tdestination_table,",
          "\treferenced_tables,",
          "\tlabels,",
          "\ttimeline,",
          "\tjob_stages,",
          "\ttotal_bytes_billed,",
          "\tparent_job_id",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.JOBS_BY_ORGANIZATION",
          "ORDER BY",
          "\tcreation_time DESC"
        ]
      },
      // INFORMATION_SCHEMA - Job metadata by timeslice
      "SELECT ... FROM INFORMATION_SCHEMA.JOBS_TIMELINE_BY_USER": {
        "prefix": "select info jobs timeline by user",
        "body": [
          "SELECT",
          "\tperiod_start,",
          "\tperiod_slot_ms,",
          "\tproject_id,",
          "\tproject_number,",
          "\tuser_email,",
          "\tjob_id,",
          "\tjob_type,",
          "\tstatement_type,",
          "\tpriority,",
          "\tjob_creation_time,",
          "\tjob_start_time,",
          "\tjob_end_time,",
          "\tstate,",
          "\treservation_id,",
          "\ttotal_bytes_processed,",
          "\terror_result,",
          "\tcache_hit,",
          "\ttotal_bytes_billed,",
          "\tparent_job_id",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.JOBS_TIMELINE_BY_USER",
          "ORDER BY",
          "\tperiod_start DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.JOBS_TIMELINE_BY_PROJECT": {
        "prefix": "select info jobs timeline by project",
        "body": [
          "SELECT",
          "\tperiod_start,",
          "\tperiod_slot_ms,",
          "\tproject_id,",
          "\tproject_number,",
          "\tuser_email,",
          "\tjob_id,",
          "\tjob_type,",
          "\tstatement_type,",
          "\tpriority,",
          "\tjob_creation_time,",
          "\tjob_start_time,",
          "\tjob_end_time,",
          "\tstate,",
          "\treservation_id,",
          "\ttotal_bytes_processed,",
          "\terror_result,",
          "\tcache_hit,",
          "\ttotal_bytes_billed,",
          "\tparent_job_id",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.JOBS_TIMELINE_BY_PROJECT",
          "ORDER BY",
          "\tperiod_start DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.JOBS_TIMELINE_BY_FOLDER": {
        "prefix": "select info jobs timeline by folder",
        "body": [
          "SELECT",
          "\tperiod_start,",
          "\tperiod_slot_ms,",
          "\tproject_id,",
          "\tproject_number,",
          "\tfolder_numbers,",
          "\tuser_email,",
          "\tjob_id,",
          "\tjob_type,",
          "\tstatement_type,",
          "\tpriority,",
          "\tjob_creation_time,",
          "\tjob_start_time,",
          "\tjob_end_time,",
          "\tstate,",
          "\treservation_id,",
          "\ttotal_bytes_processed,",
          "\terror_result,",
          "\tcache_hit,",
          "\ttotal_bytes_billed,",
          "\tparent_job_id",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.JOBS_TIMELINE_BY_FOLDER",
          "ORDER BY",
          "\tperiod_start DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.JOBS_TIMELINE_BY_ORGANIZATION": {
        "prefix": "select info jobs timeline by organization",
        "body": [
          "SELECT",
          "\tperiod_start,",
          "\tperiod_slot_ms,",
          "\tproject_id,",
          "\tproject_number,",
          "\tfolder_numbers,",
          "\tuser_email,",
          "\tjob_id,",
          "\tjob_type,",
          "\tstatement_type,",
          "\tpriority,",
          "\tjob_creation_time,",
          "\tjob_start_time,",
          "\tjob_end_time,",
          "\tstate,",
          "\treservation_id,",
          "\ttotal_bytes_processed,",
          "\terror_result,",
          "\tcache_hit,",
          "\ttotal_bytes_billed,",
          "\tparent_job_id",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.JOBS_TIMELINE_BY_ORGANIZATION",
          "ORDER BY",
          "\tperiod_start DESC"
        ]
      },
      // INFORMATION_SCHEMA - Object privilege
      "SELECT ... FROM INFORMATION_SCHEMA.OBJECT_PRIVILEGES": {
        "prefix": "select info object privileges",
        "body": [
          "SELECT",
          "\tobject_catalog,",
          "\tobject_schema,",
          "\tobject_name,",
          "\tobject_type,",
          "\tprivilege_type,",
          "\tgrantee",
          "FROM",
          "\t${1:`project`}.`region-${2:(us|eu|region_name)}`.INFORMATION_SCHEMA.OBJECT_PRIVILEGES",
          "WHERE",
          "\t-- Dataset required condition",
          "\t${3:object_name = \"dataset\"}",
          "\t-- Table/View required conditions",
          "\t${4:object_schema = \"dataset\"}",
          "\tAND ${5:object_name = \"table_or_view\"}",
          "ORDER BY",
          "\tprivilege_type,",
          "\tgrantee"
        ]
      },
      // INFORMATION_SCHEMA - Reservations metadata
      "SELECT ... FROM INFORMATION_SCHEMA.RESERVATION_CHANGES_BY_PROJECT": {
        "prefix": "select info reservation changes by project",
        "body": [
          "SELECT",
          "\tchange_timestamp,",
          "\tproject_id,",
          "\tproject_number,",
          "\treservation_name,",
          "\tignore_idle_slots,",
          "\taction,",
          "\tslot_capacity,",
          "\tuser_email",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.RESERVATION_CHANGES_BY_PROJECT",
          "ORDER BY",
          "\tchange_timestamp DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.RESERVATIONS_BY_PROJECT": {
        "prefix": "select info reservations by project",
        "body": [
          "SELECT",
          "\tproject_id,",
          "\tproject_number,",
          "\treservation_name,",
          "\tignore_idle_slots,",
          "\tslot_capacity",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.RESERVATIONS_BY_PROJECT",
          "ORDER BY",
          "\tproject_id"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.CAPACITY_COMMITMENT_CHANGES_BY_PROJECT": {
        "prefix": "select info capacity commitment changes by project",
        "body": [
          "SELECT",
          "\tchange_timestamp,",
          "\tproject_id,",
          "\tproject_number,",
          "\tcapacity_commitment_id,",
          "\tcommitment_plan,",
          "\tstate,",
          "\tslot_count,",
          "\taction,",
          "\tuser_email,",
          "\tcommitment_start_time,",
          "\tcommitment_end_time,",
          "\tfailure_status,",
          "\trenewal_plan",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.CAPACITY_COMMITMENT_CHANGES_BY_PROJECT",
          "ORDER BY",
          "\tchange_timestamp DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.CAPACITY_COMMITMENTS_BY_PROJECT": {
        "prefix": "select info capacity commitments by project",
        "body": [
          "SELECT",
          "\tproject_id,",
          "\tproject_number,",
          "\tcapacity_commitment_id,",
          "\tcommitment_plan,",
          "\tstate,",
          "\tslot_count",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.CAPACITY_COMMITMENTS_BY_PROJECT",
          "ORDER BY",
          "\tproject_id"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.ASSIGNMENT_CHANGES_BY_PROJECT": {
        "prefix": "select info assignment changes by project",
        "body": [
          "SELECT",
          "\tchange_timestamp,",
          "\tproject_id,",
          "\tproject_number,",
          "\tassignment_id,",
          "\treservation_name,",
          "\tjob_type,",
          "\tassignee_id,",
          "\tassignee_number,",
          "\tassignee_type,",
          "\taction,",
          "\tuser_email,",
          "\tstate",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.ASSIGNMENT_CHANGES_BY_PROJECT",
          "ORDER BY",
          "\tchange_timestamp DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.ASSIGNMENTS_BY_PROJECT": {
        "prefix": "select info assignments by project",
        "body": [
          "SELECT",
          "\tproject_id,",
          "\tproject_number,",
          "\tassignment_id,",
          "\treservation_name,",
          "\tjob_type,",
          "\tassignee_id,",
          "\tassignee_number,",
          "\tassignee_type",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.ASSIGNMENTS_BY_PROJECT",
          "ORDER BY",
          "\tproject_id"
        ]
      },
      // INFORMATION_SCHEMA - Routine metadata
      "SELECT ... FROM INFORMATION_SCHEMA.ROUTINES": {
        "prefix": "select info routines",
        "body": [
          "SELECT",
          "\tspecific_catalog,",
          "\tspecific_schema,",
          "\tspecific_name,",
          "\troutine_catalog,",
          "\troutine_schema,",
          "\troutine_name,",
          "\troutine_type,",
          "\tdata_type,",
          "\troutine_body,",
          "\troutine_definition,",
          "\texternal_language,",
          "\tis_deterministic,",
          "\tsecurity_type,",
          "\tcreated,",
          "\tlast_modified",
          "FROM",
          "\t`${1:project}.${2:dataset}`.INFORMATION_SCHEMA.ROUTINES",
          "ORDER BY",
          "\tspecific_catalog, specific_schema, specific_name"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.ROUTINE_OPTIONS": {
        "prefix": "select info routine options",
        "body": [
          "SELECT",
          "\tspecific_catalog,",
          "\tspecific_schema,",
          "\tspecific_name,",
          "\toption_name,",
          "\toption_type,",
          "\toption_value",
          "FROM",
          "\t`${1:project}.${2:dataset}`.INFORMATION_SCHEMA.ROUTINE_OPTIONS",
          "ORDER BY",
          "\tspecific_catalog, specific_schema, specific_name, option_name"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.PARAMETERS": {
        "prefix": "select info parameters",
        "body": [
          "SELECT",
          "\tspecific_catalog,",
          "\tspecific_schema,",
          "\tspecific_name,",
          "\tordinal_position,",
          "\tparameter_mode,",
          "\tis_result,",
          "\tparameter_name,",
          "\tdata_type,",
          "\tparameter_default,",
          "\tis_aggregate",
          "FROM",
          "\t`${1:project}.${2:dataset}`.INFORMATION_SCHEMA.PARAMETERS",
          "ORDER BY",
          "\tspecific_catalog, specific_schema, specific_name, ordinal_position"
        ]
      },
      // INFORMATION_SCHEMA - Streaming metadata
      "SELECT ... FROM INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_PROJECT": {
        "prefix": "select info streaming timeline by project",
        "body": [
          "SELECT",
          "\tstart_timestamp,",
          "\tproject_id,",
          "\tproject_number,",
          "\tdataset_id,",
          "\ttable_id,",
          "\terror_code,",
          "\ttotal_requests,",
          "\ttotal_rows,",
          "\ttotal_input_bytes",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_PROJECT",
          "ORDER BY",
          "\tstart_timestamp DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_FOLDER": {
        "prefix": "select info streaming timeline by folder",
        "body": [
          "SELECT",
          "\tstart_timestamp,",
          "\tproject_id,",
          "\tproject_number,",
          "\tdataset_id,",
          "\ttable_id,",
          "\terror_code,",
          "\ttotal_requests,",
          "\ttotal_rows,",
          "\ttotal_input_bytes",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_FOLDER",
          "ORDER BY",
          "\tstart_timestamp DESC"
        ]
      },
      "SELECT ... FROM INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_ORGANIZATION": {
        "prefix": "select info streaming timeline by organization",
        "body": [
          "SELECT",
          "\tstart_timestamp,",
          "\tproject_id,",
          "\tproject_number,",
          "\tdataset_id,",
          "\ttable_id,",
          "\terror_code,",
          "\ttotal_requests,",
          "\ttotal_rows,",
          "\ttotal_input_bytes",
          "FROM",
          "\t`region-${1:(us|eu|region_name)}`.INFORMATION_SCHEMA.STREAMING_TIMELINE_BY_ORGANIZATION",
          "ORDER BY",
          "\tstart_timestamp DESC"
        ]
      }
    }
  