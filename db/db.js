var _ = require('underscore');
var mongojs = require('mongojs');
var fs = require('fs');
var path = require('path');

var config_path = path.join(__dirname, '../config/config.json');

var db_config = JSON.parse(fs.readFileSync(config_path, 'utf8'));
var db_uri_template = _.template("mongodb://<%= username %>:<%= password %>@<%= host %>:<%= port %>/<%= db_name %>");
var db_uri = db_uri_template({
    username: db_config.db_username,
    password: db_config.db_password,
    host: db_config.db_host,
    port: db_config.db_port,
    db_name: db_config.db_name
});

var dbDriver = mongojs.connect(db_uri, ['demo_test'])

exports.dbDriver = dbDriver;