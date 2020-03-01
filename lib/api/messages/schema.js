"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.documentation = exports.params = void 0;

const params = function (apiName) {
  return {
    $id: apiName,
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'number',
        description: 'simple id'
      }
    }
  };
};

exports.params = params;

const documentation = function (apiName) {
  return {
    description: apiName,
    tags: [apiName]
  };
};

exports.documentation = documentation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWVzc2FnZXMvc2NoZW1hLmpzIl0sIm5hbWVzIjpbInBhcmFtcyIsImFwaU5hbWUiLCIkaWQiLCJ0eXBlIiwicmVxdWlyZWQiLCJwcm9wZXJ0aWVzIiwiaWQiLCJkZXNjcmlwdGlvbiIsImRvY3VtZW50YXRpb24iLCJ0YWdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sTUFBTUEsTUFBTSxHQUFHLFVBQUFDLE9BQU87QUFBQSxTQUFLO0FBQzlCQyxJQUFBQSxHQUFHLEVBQUVELE9BRHlCO0FBRTlCRSxJQUFBQSxJQUFJLEVBQUUsUUFGd0I7QUFHOUJDLElBQUFBLFFBQVEsRUFBRSxDQUFDLElBQUQsQ0FIb0I7QUFJOUJDLElBQUFBLFVBQVUsRUFBRTtBQUNSQyxNQUFBQSxFQUFFLEVBQUU7QUFDQUgsUUFBQUEsSUFBSSxFQUFFLFFBRE47QUFFQUksUUFBQUEsV0FBVyxFQUFFO0FBRmI7QUFESTtBQUprQixHQUFMO0FBQUEsQ0FBdEI7Ozs7QUFhQSxNQUFNQyxhQUFhLEdBQUcsVUFBQVAsT0FBTztBQUFBLFNBQUs7QUFDckNNLElBQUFBLFdBQVcsRUFBRU4sT0FEd0I7QUFFckNRLElBQUFBLElBQUksRUFBRSxDQUFDUixPQUFEO0FBRitCLEdBQUw7QUFBQSxDQUE3QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwYXJhbXMgPSBhcGlOYW1lID0+ICh7XG4gICAgJGlkOiBhcGlOYW1lLFxuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHJlcXVpcmVkOiBbJ2lkJ10sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogeyBcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLCAgICAgICAgIFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdzaW1wbGUgaWQnXG4gICAgICAgIH1cblxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudGF0aW9uID0gYXBpTmFtZSA9PiAoe1xuICAgIGRlc2NyaXB0aW9uOiBhcGlOYW1lLFxuICAgIHRhZ3M6IFthcGlOYW1lXVxufSlcbiJdfQ==