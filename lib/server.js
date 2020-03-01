"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fastify = _interopRequireDefault(require("fastify"));

var _fastifyEnv = _interopRequireDefault(require("fastify-env"));

var _fastifyOas = _interopRequireDefault(require("fastify-oas"));

var _fastifyHelmet = _interopRequireDefault(require("fastify-helmet"));

var _fastifyFormbody = _interopRequireDefault(require("fastify-formbody"));

var _fastifyAutoload = _interopRequireDefault(require("fastify-autoload"));

var _fastifyBlipp = _interopRequireDefault(require("fastify-blipp"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _fastify.default)({
  logger: _config.logger
});
app.register(_fastifyBlipp.default);
app.register(_fastifyFormbody.default);
app.register(_fastifyOas.default, _config.apiDoc);
app.register(_fastifyAutoload.default, _config.server.autoloadConfig);
app.register(_fastifyHelmet.default);

const start = async function () {
  try {
    var _app$config;

    await app.register(_fastifyEnv.default, _config.server).ready();
    /* istanbul ignore next */

    await app.listen((_app$config = app.config) === null || _app$config === void 0 ? void 0 : _app$config.PORT);
    app.oas();
    app.blipp();
  } catch (err)
  /* istanbul ignore next */
  {
    console.log(err);
    app.log.error(err);
    process.exit(1);
  }
};
/* istanbul ignore next */


process.on('uncaughtException', function (error) {
  console.error(error);
});
/* istanbul ignore next */

process.on('unhandledRejection', function (error) {
  console.error(error);
});
start();
var _default = app;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiYXBwIiwibG9nZ2VyIiwicmVnaXN0ZXIiLCJibGlwcCIsImZvcm1ib2R5Iiwib2FzIiwiYXBpRG9jIiwiYXV0b2xvYWQiLCJzZXJ2ZXIiLCJhdXRvbG9hZENvbmZpZyIsImhlbG1ldCIsInN0YXJ0IiwiZmFzdGlmeUVudiIsInJlYWR5IiwibGlzdGVuIiwiY29uZmlnIiwiUE9SVCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInByb2Nlc3MiLCJleGl0Iiwib24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVBLE1BQU1BLEdBQUcsR0FBRyxzQkFBUTtBQUFFQyxFQUFBQSxNQUFNLEVBQU5BO0FBQUYsQ0FBUixDQUFaO0FBRUFELEdBQUcsQ0FBQ0UsUUFBSixDQUFhQyxxQkFBYjtBQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYUUsd0JBQWI7QUFFQUosR0FBRyxDQUFDRSxRQUFKLENBQWFHLG1CQUFiLEVBQWtCQyxjQUFsQjtBQUNBTixHQUFHLENBQUNFLFFBQUosQ0FBYUssd0JBQWIsRUFBdUJDLGVBQU9DLGNBQTlCO0FBQ0FULEdBQUcsQ0FBQ0UsUUFBSixDQUFhUSxzQkFBYjs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsa0JBQVk7QUFDdEIsTUFBSTtBQUFBOztBQUNBLFVBQU1YLEdBQUcsQ0FBQ0UsUUFBSixDQUFhVSxtQkFBYixFQUF5QkosY0FBekIsRUFBaUNLLEtBQWpDLEVBQU47QUFDQTs7QUFDQSxVQUFNYixHQUFHLENBQUNjLE1BQUosZ0JBQVdkLEdBQUcsQ0FBQ2UsTUFBZixnREFBVyxZQUFZQyxJQUF2QixDQUFOO0FBQ0FoQixJQUFBQSxHQUFHLENBQUNLLEdBQUo7QUFDQUwsSUFBQUEsR0FBRyxDQUFDRyxLQUFKO0FBQ0gsR0FORCxDQU9BLE9BQU9jLEdBQVA7QUFBWTtBQUEyQjtBQUNuQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQWpCLElBQUFBLEdBQUcsQ0FBQ21CLEdBQUosQ0FBUUMsS0FBUixDQUFjSCxHQUFkO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLENBQWI7QUFDSDtBQUNKLENBYkQ7QUFlQTs7O0FBQ0FELE9BQU8sQ0FBQ0UsRUFBUixDQUFXLG1CQUFYLEVBQWdDLFVBQUFILEtBQUssRUFBSTtBQUNyQ0YsRUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWNBLEtBQWQ7QUFDSCxDQUZEO0FBR0E7O0FBQ0FDLE9BQU8sQ0FBQ0UsRUFBUixDQUFXLG9CQUFYLEVBQWlDLFVBQUFILEtBQUssRUFBSTtBQUN0Q0YsRUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWNBLEtBQWQ7QUFDSCxDQUZEO0FBSUFULEtBQUs7ZUFFVVgsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXN0aWZ5IGZyb20gJ2Zhc3RpZnknXG5pbXBvcnQgZmFzdGlmeUVudiBmcm9tICdmYXN0aWZ5LWVudidcbmltcG9ydCBvYXMgZnJvbSAnZmFzdGlmeS1vYXMnXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2Zhc3RpZnktaGVsbWV0J1xuaW1wb3J0IGZvcm1ib2R5IGZyb20gJ2Zhc3RpZnktZm9ybWJvZHknXG5pbXBvcnQgYXV0b2xvYWQgZnJvbSAnZmFzdGlmeS1hdXRvbG9hZCdcbmltcG9ydCBibGlwcCBmcm9tICdmYXN0aWZ5LWJsaXBwJ1xuXG5pbXBvcnQgeyBzZXJ2ZXIsIGFwaURvYywgbG9nZ2VyIH0gZnJvbSAnfi9jb25maWcnXG5cbmNvbnN0IGFwcCA9IGZhc3RpZnkoeyBsb2dnZXIgfSlcblxuYXBwLnJlZ2lzdGVyKGJsaXBwKVxuYXBwLnJlZ2lzdGVyKGZvcm1ib2R5KVxuXG5hcHAucmVnaXN0ZXIob2FzLCBhcGlEb2MpXG5hcHAucmVnaXN0ZXIoYXV0b2xvYWQsIHNlcnZlci5hdXRvbG9hZENvbmZpZylcbmFwcC5yZWdpc3RlcihoZWxtZXQpXG5cbmNvbnN0IHN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFwcC5yZWdpc3RlcihmYXN0aWZ5RW52LCBzZXJ2ZXIpLnJlYWR5KClcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgYXdhaXQgYXBwLmxpc3RlbihhcHAuY29uZmlnPy5QT1JUKVxuICAgICAgICBhcHAub2FzKClcbiAgICAgICAgYXBwLmJsaXBwKClcbiAgICB9IFxuICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBhcHAubG9nLmVycm9yKGVycilcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfVxufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvciA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbn0pXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgZXJyb3IgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG59KVxuXG5zdGFydCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFwcCJdfQ==