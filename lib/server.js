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

var _fastifyRateLimit = _interopRequireDefault(require("fastify-rate-limit"));

var _fastifyAutoload = _interopRequireDefault(require("fastify-autoload"));

var _fastifyBlipp = _interopRequireDefault(require("fastify-blipp"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _fastify.default)({
  logger: _config.logger
});
app.register(_fastifyBlipp.default);
app.register(_fastifyFormbody.default);
app.register(_fastifyRateLimit.default, _config.server === null || _config.server === void 0 ? void 0 : _config.server.rateLimitConfig);
app.register(_fastifyOas.default, _config.apiDoc);
app.register(_fastifyAutoload.default, _config.server === null || _config.server === void 0 ? void 0 : _config.server.autoloadConfig);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiYXBwIiwibG9nZ2VyIiwicmVnaXN0ZXIiLCJibGlwcCIsImZvcm1ib2R5IiwicmF0ZUxpbWl0Iiwic2VydmVyIiwicmF0ZUxpbWl0Q29uZmlnIiwib2FzIiwiYXBpRG9jIiwiYXV0b2xvYWQiLCJhdXRvbG9hZENvbmZpZyIsImhlbG1ldCIsInN0YXJ0IiwiZmFzdGlmeUVudiIsInJlYWR5IiwibGlzdGVuIiwiY29uZmlnIiwiUE9SVCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInByb2Nlc3MiLCJleGl0Iiwib24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUVBLE1BQU1BLEdBQUcsR0FBRyxzQkFBUTtBQUFFQyxFQUFBQSxNQUFNLEVBQU5BO0FBQUYsQ0FBUixDQUFaO0FBRUFELEdBQUcsQ0FBQ0UsUUFBSixDQUFhQyxxQkFBYjtBQUNBSCxHQUFHLENBQUNFLFFBQUosQ0FBYUUsd0JBQWI7QUFDQUosR0FBRyxDQUFDRSxRQUFKLENBQWFHLHlCQUFiLEVBQXdCQyxjQUF4QixhQUF3QkEsY0FBeEIsdUJBQXdCQSxlQUFRQyxlQUFoQztBQUNBUCxHQUFHLENBQUNFLFFBQUosQ0FBYU0sbUJBQWIsRUFBa0JDLGNBQWxCO0FBQ0FULEdBQUcsQ0FBQ0UsUUFBSixDQUFhUSx3QkFBYixFQUF1QkosY0FBdkIsYUFBdUJBLGNBQXZCLHVCQUF1QkEsZUFBUUssY0FBL0I7QUFDQVgsR0FBRyxDQUFDRSxRQUFKLENBQWFVLHNCQUFiOztBQUVBLE1BQU1DLEtBQUssR0FBRyxrQkFBWTtBQUN0QixNQUFJO0FBQUE7O0FBQ0EsVUFBTWIsR0FBRyxDQUFDRSxRQUFKLENBQWFZLG1CQUFiLEVBQXlCUixjQUF6QixFQUFpQ1MsS0FBakMsRUFBTjtBQUNBOztBQUNBLFVBQU1mLEdBQUcsQ0FBQ2dCLE1BQUosZ0JBQVdoQixHQUFHLENBQUNpQixNQUFmLGdEQUFXLFlBQVlDLElBQXZCLENBQU47QUFDQWxCLElBQUFBLEdBQUcsQ0FBQ1EsR0FBSjtBQUNBUixJQUFBQSxHQUFHLENBQUNHLEtBQUo7QUFDSCxHQU5ELENBT0EsT0FBT2dCLEdBQVA7QUFBWTtBQUEyQjtBQUNuQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQW5CLElBQUFBLEdBQUcsQ0FBQ3FCLEdBQUosQ0FBUUMsS0FBUixDQUFjSCxHQUFkO0FBQ0FJLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLENBQWI7QUFDSDtBQUNKLENBYkQ7QUFlQTs7O0FBQ0FELE9BQU8sQ0FBQ0UsRUFBUixDQUFXLG1CQUFYLEVBQWdDLFVBQUFILEtBQUssRUFBSTtBQUNyQ0YsRUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWNBLEtBQWQ7QUFDSCxDQUZEO0FBR0E7O0FBQ0FDLE9BQU8sQ0FBQ0UsRUFBUixDQUFXLG9CQUFYLEVBQWlDLFVBQUFILEtBQUssRUFBSTtBQUN0Q0YsRUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWNBLEtBQWQ7QUFDSCxDQUZEO0FBSUFULEtBQUs7ZUFFVWIsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXN0aWZ5IGZyb20gJ2Zhc3RpZnknXG5pbXBvcnQgZmFzdGlmeUVudiBmcm9tICdmYXN0aWZ5LWVudidcbmltcG9ydCBvYXMgZnJvbSAnZmFzdGlmeS1vYXMnXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2Zhc3RpZnktaGVsbWV0J1xuaW1wb3J0IGZvcm1ib2R5IGZyb20gJ2Zhc3RpZnktZm9ybWJvZHknXG5pbXBvcnQgcmF0ZUxpbWl0IGZyb20gJ2Zhc3RpZnktcmF0ZS1saW1pdCdcbmltcG9ydCBhdXRvbG9hZCBmcm9tICdmYXN0aWZ5LWF1dG9sb2FkJ1xuaW1wb3J0IGJsaXBwIGZyb20gJ2Zhc3RpZnktYmxpcHAnXG5cbmltcG9ydCB7IHNlcnZlciwgYXBpRG9jLCBsb2dnZXIgfSBmcm9tICd+L2NvbmZpZydcblxuY29uc3QgYXBwID0gZmFzdGlmeSh7IGxvZ2dlciB9KVxuXG5hcHAucmVnaXN0ZXIoYmxpcHApXG5hcHAucmVnaXN0ZXIoZm9ybWJvZHkpXG5hcHAucmVnaXN0ZXIocmF0ZUxpbWl0LCBzZXJ2ZXI/LnJhdGVMaW1pdENvbmZpZylcbmFwcC5yZWdpc3RlcihvYXMsIGFwaURvYylcbmFwcC5yZWdpc3RlcihhdXRvbG9hZCwgc2VydmVyPy5hdXRvbG9hZENvbmZpZylcbmFwcC5yZWdpc3RlcihoZWxtZXQpXG5cbmNvbnN0IHN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFwcC5yZWdpc3RlcihmYXN0aWZ5RW52LCBzZXJ2ZXIpLnJlYWR5KClcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgYXdhaXQgYXBwLmxpc3RlbihhcHAuY29uZmlnPy5QT1JUKVxuICAgICAgICBhcHAub2FzKClcbiAgICAgICAgYXBwLmJsaXBwKClcbiAgICB9IFxuICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBhcHAubG9nLmVycm9yKGVycilcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfVxufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBlcnJvciA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbn0pXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgZXJyb3IgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG59KVxuXG5zdGFydCgpXG5cbmV4cG9ydCBkZWZhdWx0IGFwcCJdfQ==