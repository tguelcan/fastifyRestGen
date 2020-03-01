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
  autoloadConfig: {
    dir: _path.default.join(__dirname, 'api'),
    options: {
      prefix: '/api'
    },
    ignorePattern: /.*(test|spec).js/
  }
};
exports.server = server;
const logger = {
  prettyPrint: true,
  level: 'info'
};
exports.logger = logger;
const apiDoc = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcuanMiXSwibmFtZXMiOlsiYXBwSW5mbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2ZXJzaW9uIiwiZXh0ZXJuYWxEb2NzIiwidXJsIiwic2VydmVyIiwiY29uZktleSIsInNjaGVtYSIsInR5cGUiLCJyZXF1aXJlZCIsInByb3BlcnRpZXMiLCJQT1JUIiwiZGVmYXVsdCIsImF1dG9sb2FkQ29uZmlnIiwiZGlyIiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJvcHRpb25zIiwicHJlZml4IiwiaWdub3JlUGF0dGVybiIsImxvZ2dlciIsInByZXR0eVByaW50IiwibGV2ZWwiLCJhcGlEb2MiLCJyb3V0ZVByZWZpeCIsInN3YWdnZXIiLCJpbmZvIiwiY29uc3VtZXMiLCJwcm9kdWNlcyIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiVVJMIiwiZXhwb3NlUm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLE9BQU8sR0FBRztBQUNuQkMsRUFBQUEsS0FBSyxFQUFFLGNBRFk7QUFFbkJDLEVBQUFBLFdBQVcsRUFBRSxpQ0FGTTtBQUduQkMsRUFBQUEsT0FBTyxFQUFFLE9BSFU7QUFJbkJDLEVBQUFBLFlBQVksRUFBRTtBQUNWQyxJQUFBQSxHQUFHLEVBQUUsb0JBREs7QUFFVkgsSUFBQUEsV0FBVyxFQUFFO0FBRkg7QUFKSyxDQUFoQjs7QUFVQSxNQUFNSSxNQUFNLEdBQUc7QUFDbEJDLEVBQUFBLE9BQU8sRUFBRSxRQURTO0FBRWxCQyxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsSUFBSSxFQUFFLFFBREY7QUFFSkMsSUFBQUEsUUFBUSxFQUFFLENBQUUsTUFBRixDQUZOO0FBR0pDLElBQUFBLFVBQVUsRUFBRTtBQUNSQyxNQUFBQSxJQUFJLEVBQUU7QUFDRkgsUUFBQUEsSUFBSSxFQUFFLFFBREo7QUFFRkksUUFBQUEsT0FBTyxFQUFFO0FBRlA7QUFERTtBQUhSLEdBRlU7QUFZbEJDLEVBQUFBLGNBQWMsRUFBRTtBQUNaQyxJQUFBQSxHQUFHLEVBQUVDLGNBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixLQUFyQixDQURPO0FBRVpDLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUZHO0FBR1pDLElBQUFBLGFBQWEsRUFBRTtBQUhIO0FBWkUsQ0FBZjs7QUFtQkEsTUFBTUMsTUFBTSxHQUFHO0FBQ2xCQyxFQUFBQSxXQUFXLEVBQUUsSUFESztBQUVsQkMsRUFBQUEsS0FBSyxFQUFFO0FBRlcsQ0FBZjs7QUFNQSxNQUFNQyxNQUFNLEdBQUc7QUFDbEJDLEVBQUFBLFdBQVcsRUFBRSxPQURLO0FBRWxCQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsSUFBSSxFQUFFNUIsT0FERDtBQUVMSSxJQUFBQSxZQUFZLEVBQUVKLE9BQU8sQ0FBQ0ksWUFGakI7QUFHTHlCLElBQUFBLFFBQVEsRUFBRSxDQUFDLGtCQUFELENBSEw7QUFJTEMsSUFBQUEsUUFBUSxFQUFFLENBQUMsa0JBQUQsQ0FKTDtBQUtMQyxJQUFBQSxJQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaLElBQW1CO0FBTHBCLEdBRlM7QUFTbEJDLEVBQUFBLFdBQVcsRUFBRTtBQVRLLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgY29uc3QgYXBwSW5mbyA9IHtcbiAgICB0aXRsZTogJ1Rlc3Qgb3BlbmFwaScsXG4gICAgZGVzY3JpcHRpb246ICd0ZXN0aW5nIHRoZSBmYXN0aWZ5IHN3YWdnZXIgYXBpJyxcbiAgICB2ZXJzaW9uOiAnMC4xLjAnLFxuICAgIGV4dGVybmFsRG9jczoge1xuICAgICAgICB1cmw6ICdodHRwczovL3N3YWdnZXIuaW8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbmQgbW9yZSBpbmZvIGhlcmUnLFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IHtcbiAgICBjb25mS2V5OiAnY29uZmlnJyxcbiAgICBzY2hlbWE6IHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHJlcXVpcmVkOiBbICdQT1JUJyBdLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBQT1JUOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMzAwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBhdXRvbG9hZENvbmZpZzoge1xuICAgICAgICBkaXI6IHBhdGguam9pbihfX2Rpcm5hbWUsICdhcGknKSxcbiAgICAgICAgb3B0aW9uczogeyBwcmVmaXg6ICcvYXBpJyB9LFxuICAgICAgICBpZ25vcmVQYXR0ZXJuOiAvLioodGVzdHxzcGVjKS5qcy9cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dnZXIgPSB7IFxuICAgIHByZXR0eVByaW50OiB0cnVlLCBcbiAgICBsZXZlbDogJ2luZm8nIFxufVxuXG5cbmV4cG9ydCBjb25zdCBhcGlEb2MgPSB7XG4gICAgcm91dGVQcmVmaXg6ICcvZG9jcycsXG4gICAgc3dhZ2dlcjoge1xuICAgICAgICBpbmZvOiBhcHBJbmZvLFxuICAgICAgICBleHRlcm5hbERvY3M6IGFwcEluZm8uZXh0ZXJuYWxEb2NzLFxuICAgICAgICBjb25zdW1lczogWydhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgICAgIHByb2R1Y2VzOiBbJ2FwcGxpY2F0aW9uL2pzb24nXSxcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuVVJMIHx8ICdsb2NhbGhvc3Q6MzAwMCdcbiAgICB9LFxuICAgIGV4cG9zZVJvdXRlOiB0cnVlXG59Il19