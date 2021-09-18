const config = require('./webpack.config.dev');

// Не включайте вывод/ввод - karma-webpack не поддерживает его
delete config.entry;
delete config.output.filename;
delete config.output.path;

// Показывать только ошибки при использовании кармы
config.stats = 'errors-only';

module.exports = config;
