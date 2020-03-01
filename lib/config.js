"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiDoc = exports.logger = exports.server = exports.appInfo = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appInfo = {
  title: 'Test openapi',
  description: 'testing the fastify swagger api',
  version: '0.1.0',
  externalDocs: {
    url: 'https://swagger.io',
    description: 'Find more info here'
  }
};
exports.appInfo = appInfo;
const server = {
  confKey: 'config',
  // Options: https://github.com/fastify/fastify-env#usage
  schema: {
    type: 'object',
    required: ['PORT'],
    properties: {
      PORT: {
        type: 'string',
        default: 3000
      }
    }
  },
  // Options: https://github.com/fastify/fastify-autoload#example
  autoloadConfig: {
    dir: _path.default.join(__dirname, 'api'),
    options: {
      prefix: '/api'
    },
    ignorePattern: /.*(test|spec).js/
  },
  // Options: https://github.com/fastify/fastify-rate-limit#usage
  rateLimitConfig: {
    max: 100,
    timeWindow: '1 minute',
    whitelist: ['127.0.0.1']
  }
};
exports.server = server;
const logger = {
  // Options: https://github.com/pinojs/pino-pretty#options
  prettyPrint: {
    colorize: true
  },
  level: 'info'
};
exports.logger = logger;
const apiDoc = {
  // Options: https://www.npmjs.com/package/fastify-oas#toc
  routePrefix: '/docs',
  swagger: {
    info: appInfo,
    externalDocs: appInfo.externalDocs,
    consumes: ['application/json'],
    produces: ['application/json'],
    host: process.env.URL || 'localhost:3000'
  },
  exposeRoute: true
};
exports.apiDoc = apiDoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcuanMiXSwibmFtZXMiOlsiYXBwSW5mbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2ZXJzaW9uIiwiZXh0ZXJuYWxEb2NzIiwidXJsIiwic2VydmVyIiwiY29uZktleSIsInNjaGVtYSIsInR5cGUiLCJyZXF1aXJlZCIsInByb3BlcnRpZXMiLCJQT1JUIiwiZGVmYXVsdCIsImF1dG9sb2FkQ29uZmlnIiwiZGlyIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJvcHRpb25zIiwicHJlZml4IiwiaWdub3JlUGF0dGVybiIsInJhdGVMaW1pdENvbmZpZyIsIm1heCIsInRpbWVXaW5kb3ciLCJ3aGl0ZWxpc3QiLCJsb2dnZXIiLCJwcmV0dHlQcmludCIsImNvbG9yaXplIiwibGV2ZWwiLCJhcGlEb2MiLCJyb3V0ZVByZWZpeCIsInN3YWdnZXIiLCJpbmZvIiwiY29uc3VtZXMiLCJwcm9kdWNlcyIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiVVJMIiwiZXhwb3NlUm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLE9BQU8sR0FBRztBQUNuQkMsRUFBQUEsS0FBSyxFQUFFLGNBRFk7QUFFbkJDLEVBQUFBLFdBQVcsRUFBRSxpQ0FGTTtBQUduQkMsRUFBQUEsT0FBTyxFQUFFLE9BSFU7QUFJbkJDLEVBQUFBLFlBQVksRUFBRTtBQUNWQyxJQUFBQSxHQUFHLEVBQUUsb0JBREs7QUFFVkgsSUFBQUEsV0FBVyxFQUFFO0FBRkg7QUFKSyxDQUFoQjs7QUFVQSxNQUFNSSxNQUFNLEdBQUc7QUFDbEJDLEVBQUFBLE9BQU8sRUFBRSxRQURTO0FBRWxCO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRTtBQUNKQyxJQUFBQSxJQUFJLEVBQUUsUUFERjtBQUVKQyxJQUFBQSxRQUFRLEVBQUUsQ0FBRSxNQUFGLENBRk47QUFHSkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1JDLE1BQUFBLElBQUksRUFBRTtBQUNGSCxRQUFBQSxJQUFJLEVBQUUsUUFESjtBQUVGSSxRQUFBQSxPQUFPLEVBQUU7QUFGUDtBQURFO0FBSFIsR0FIVTtBQWFsQjtBQUNBQyxFQUFBQSxjQUFjLEVBQUU7QUFDWkMsSUFBQUEsR0FBRyxFQUFFQyxjQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsS0FBckIsQ0FETztBQUVaQyxJQUFBQSxPQUFPLEVBQUU7QUFBRUMsTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FGRztBQUdaQyxJQUFBQSxhQUFhLEVBQUU7QUFISCxHQWRFO0FBbUJsQjtBQUNBQyxFQUFBQSxlQUFlLEVBQUU7QUFDYkMsSUFBQUEsR0FBRyxFQUFFLEdBRFE7QUFFYkMsSUFBQUEsVUFBVSxFQUFFLFVBRkM7QUFHYkMsSUFBQUEsU0FBUyxFQUFFLENBQUMsV0FBRDtBQUhFO0FBcEJDLENBQWY7O0FBMkJBLE1BQU1DLE1BQU0sR0FBRztBQUNsQjtBQUNBQyxFQUFBQSxXQUFXLEVBQUU7QUFDVEMsSUFBQUEsUUFBUSxFQUFFO0FBREQsR0FGSztBQUtsQkMsRUFBQUEsS0FBSyxFQUFFO0FBTFcsQ0FBZjs7QUFTQSxNQUFNQyxNQUFNLEdBQUc7QUFDbEI7QUFDQUMsRUFBQUEsV0FBVyxFQUFFLE9BRks7QUFHbEJDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUVqQyxPQUREO0FBRUxJLElBQUFBLFlBQVksRUFBRUosT0FBTyxDQUFDSSxZQUZqQjtBQUdMOEIsSUFBQUEsUUFBUSxFQUFFLENBQUMsa0JBQUQsQ0FITDtBQUlMQyxJQUFBQSxRQUFRLEVBQUUsQ0FBQyxrQkFBRCxDQUpMO0FBS0xDLElBQUFBLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVosSUFBbUI7QUFMcEIsR0FIUztBQVVsQkMsRUFBQUEsV0FBVyxFQUFFO0FBVkssQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBjb25zdCBhcHBJbmZvID0ge1xuICAgIHRpdGxlOiAnVGVzdCBvcGVuYXBpJyxcbiAgICBkZXNjcmlwdGlvbjogJ3Rlc3RpbmcgdGhlIGZhc3RpZnkgc3dhZ2dlciBhcGknLFxuICAgIHZlcnNpb246ICcwLjEuMCcsXG4gICAgZXh0ZXJuYWxEb2NzOiB7XG4gICAgICAgIHVybDogJ2h0dHBzOi8vc3dhZ2dlci5pbycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRmluZCBtb3JlIGluZm8gaGVyZScsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2VydmVyID0ge1xuICAgIGNvbmZLZXk6ICdjb25maWcnLFxuICAgIC8vIE9wdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYXN0aWZ5L2Zhc3RpZnktZW52I3VzYWdlXG4gICAgc2NoZW1hOiB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICByZXF1aXJlZDogWyAnUE9SVCcgXSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgUE9SVDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDMwMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gT3B0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2Zhc3RpZnkvZmFzdGlmeS1hdXRvbG9hZCNleGFtcGxlXG4gICAgYXV0b2xvYWRDb25maWc6IHtcbiAgICAgICAgZGlyOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnYXBpJyksXG4gICAgICAgIG9wdGlvbnM6IHsgcHJlZml4OiAnL2FwaScgfSxcbiAgICAgICAgaWdub3JlUGF0dGVybjogLy4qKHRlc3R8c3BlYykuanMvXG4gICAgfSxcbiAgICAvLyBPcHRpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZmFzdGlmeS9mYXN0aWZ5LXJhdGUtbGltaXQjdXNhZ2VcbiAgICByYXRlTGltaXRDb25maWc6IHtcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHRpbWVXaW5kb3c6ICcxIG1pbnV0ZScsXG4gICAgICAgIHdoaXRlbGlzdDogWycxMjcuMC4wLjEnXVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IHsgXG4gICAgLy8gT3B0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL3Bpbm9qcy9waW5vLXByZXR0eSNvcHRpb25zXG4gICAgcHJldHR5UHJpbnQ6IHtcbiAgICAgICAgY29sb3JpemU6IHRydWVcbiAgICB9LCBcbiAgICBsZXZlbDogJ2luZm8nIFxufVxuXG5cbmV4cG9ydCBjb25zdCBhcGlEb2MgPSB7XG4gICAgLy8gT3B0aW9uczogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmFzdGlmeS1vYXMjdG9jXG4gICAgcm91dGVQcmVmaXg6ICcvZG9jcycsXG4gICAgc3dhZ2dlcjoge1xuICAgICAgICBpbmZvOiBhcHBJbmZvLFxuICAgICAgICBleHRlcm5hbERvY3M6IGFwcEluZm8uZXh0ZXJuYWxEb2NzLFxuICAgICAgICBjb25zdW1lczogWydhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgICAgIHByb2R1Y2VzOiBbJ2FwcGxpY2F0aW9uL2pzb24nXSxcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuVVJMIHx8ICdsb2NhbGhvc3Q6MzAwMCdcbiAgICB9LFxuICAgIGV4cG9zZVJvdXRlOiB0cnVlXG59Il19