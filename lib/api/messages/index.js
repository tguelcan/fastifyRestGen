"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.autoPrefix = void 0;

var _schema = require("./schema");

const autoPrefix = '/messages';
exports.autoPrefix = autoPrefix;

var _default = function _default(route, opts, next) {
  route.addSchema(_schema.params); // Add Routes

  route.get('/', {
    schema: { ..._schema.documentation
    }
  }, async function (req, res) {
    return res.send({
      hello: 'world'
    });
  });
  route.get('/:id', {
    schema: { ..._schema.documentation,
      params: 'messages#'
    }
  }, async function (req, res) {
    return res.send(req.params);
  });
  next();
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWVzc2FnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0b1ByZWZpeCIsInJvdXRlIiwib3B0cyIsIm5leHQiLCJhZGRTY2hlbWEiLCJwYXJhbXMiLCJnZXQiLCJzY2hlbWEiLCJkb2N1bWVudGF0aW9uIiwicmVxIiwicmVzIiwic2VuZCIsImhlbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sTUFBTUEsVUFBVSxHQUFHLFdBQW5COzs7ZUFDUSxrQkFBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWNDLElBQWQsRUFBdUI7QUFFbENGLEVBQUFBLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsY0FBaEIsRUFGa0MsQ0FLbEM7O0FBRUFKLEVBQUFBLEtBQUssQ0FBQ0ssR0FBTixDQUFVLEdBQVYsRUFBZTtBQUNYQyxJQUFBQSxNQUFNLEVBQUUsRUFDSixHQUFHQztBQURDO0FBREcsR0FBZixFQUlHLGdCQUFNQyxHQUFOLEVBQVdDLEdBQVg7QUFBQSxXQUNDQSxHQUFHLENBQUNDLElBQUosQ0FBUztBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFULENBREQ7QUFBQSxHQUpIO0FBUUFYLEVBQUFBLEtBQUssQ0FBQ0ssR0FBTixDQUFVLE1BQVYsRUFBa0I7QUFDZEMsSUFBQUEsTUFBTSxFQUFFLEVBQ0osR0FBR0MscUJBREM7QUFFSkgsTUFBQUEsTUFBTSxFQUFFO0FBRko7QUFETSxHQUFsQixFQUtHLGdCQUFNSSxHQUFOLEVBQVdDLEdBQVg7QUFBQSxXQUNDQSxHQUFHLENBQUNDLElBQUosQ0FBU0YsR0FBRyxDQUFDSixNQUFiLENBREQ7QUFBQSxHQUxIO0FBU0FGLEVBQUFBLElBQUk7QUFDUCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyYW1zLCBkb2N1bWVudGF0aW9uIH0gZnJvbSAnLi9zY2hlbWEnXG5cbmV4cG9ydCBjb25zdCBhdXRvUHJlZml4ID0gJy9tZXNzYWdlcydcbmV4cG9ydCBkZWZhdWx0IChyb3V0ZSwgb3B0cywgbmV4dCkgPT4ge1xuICAgIFxuICAgIHJvdXRlLmFkZFNjaGVtYShwYXJhbXMpXG5cblxuICAgIC8vIEFkZCBSb3V0ZXNcblxuICAgIHJvdXRlLmdldCgnLycsIHsgXG4gICAgICAgIHNjaGVtYTogeyAgICAgICAgXG4gICAgICAgICAgICAuLi5kb2N1bWVudGF0aW9uLFxuICAgICAgICB9IFxuICAgIH0sIGFzeW5jKHJlcSwgcmVzKSA9PiBcbiAgICAgICAgcmVzLnNlbmQoeyBoZWxsbzogJ3dvcmxkJyB9KVxuICAgIClcblxuICAgIHJvdXRlLmdldCgnLzppZCcsIHsgXG4gICAgICAgIHNjaGVtYToge1xuICAgICAgICAgICAgLi4uZG9jdW1lbnRhdGlvbixcbiAgICAgICAgICAgIHBhcmFtczogJ21lc3NhZ2VzIydcbiAgICAgICAgfVxuICAgIH0sIGFzeW5jKHJlcSwgcmVzKSA9PiBcbiAgICAgICAgcmVzLnNlbmQocmVxLnBhcmFtcylcbiAgICApXG5cbiAgICBuZXh0KClcbn1cblxuIl19