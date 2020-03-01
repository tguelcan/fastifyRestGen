"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.autoPrefix = void 0;

var _schema = require("./schema");

const autoPrefix = '/messages';
exports.autoPrefix = autoPrefix;

var _default = function _default(route, opts, next) {
  route.addSchema((0, _schema.params)(autoPrefix)); // Add Routes

  route.get('/', {
    schema: { ...(0, _schema.documentation)(autoPrefix)
    }
  }, async function (req, res) {
    return res.send({
      hello: 'world'
    });
  });
  route.get('/:id', {
    schema: { ...(0, _schema.documentation)(autoPrefix),
      params: `${autoPrefix}#`
    }
  }, async function (req, res) {
    return res.send(req.params);
  });
  next();
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWVzc2FnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0b1ByZWZpeCIsInJvdXRlIiwib3B0cyIsIm5leHQiLCJhZGRTY2hlbWEiLCJnZXQiLCJzY2hlbWEiLCJyZXEiLCJyZXMiLCJzZW5kIiwiaGVsbG8iLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxNQUFNQSxVQUFVLEdBQUcsV0FBbkI7OztlQUVRLGtCQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBY0MsSUFBZCxFQUF1QjtBQUNsQ0YsRUFBQUEsS0FBSyxDQUFDRyxTQUFOLENBQWdCLG9CQUFPSixVQUFQLENBQWhCLEVBRGtDLENBR2xDOztBQUVBQyxFQUFBQSxLQUFLLENBQUNJLEdBQU4sQ0FBVSxHQUFWLEVBQWU7QUFDWEMsSUFBQUEsTUFBTSxFQUFFLEVBQ0osR0FBRywyQkFBY04sVUFBZDtBQURDO0FBREcsR0FBZixFQUlHLGdCQUFNTyxHQUFOLEVBQVdDLEdBQVg7QUFBQSxXQUNDQSxHQUFHLENBQUNDLElBQUosQ0FBUztBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFULENBREQ7QUFBQSxHQUpIO0FBUUFULEVBQUFBLEtBQUssQ0FBQ0ksR0FBTixDQUFVLE1BQVYsRUFBa0I7QUFDZEMsSUFBQUEsTUFBTSxFQUFFLEVBQ0osR0FBRywyQkFBY04sVUFBZCxDQURDO0FBRUpXLE1BQUFBLE1BQU0sRUFBRyxHQUFFWCxVQUFXO0FBRmxCO0FBRE0sR0FBbEIsRUFLRyxnQkFBTU8sR0FBTixFQUFXQyxHQUFYO0FBQUEsV0FDQ0EsR0FBRyxDQUFDQyxJQUFKLENBQVNGLEdBQUcsQ0FBQ0ksTUFBYixDQUREO0FBQUEsR0FMSDtBQVNBUixFQUFBQSxJQUFJO0FBQ1AsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcmFtcywgZG9jdW1lbnRhdGlvbiB9IGZyb20gJy4vc2NoZW1hJ1xuXG5leHBvcnQgY29uc3QgYXV0b1ByZWZpeCA9ICcvbWVzc2FnZXMnXG5cbmV4cG9ydCBkZWZhdWx0IChyb3V0ZSwgb3B0cywgbmV4dCkgPT4ge1xuICAgIHJvdXRlLmFkZFNjaGVtYShwYXJhbXMoYXV0b1ByZWZpeCkpXG5cbiAgICAvLyBBZGQgUm91dGVzXG5cbiAgICByb3V0ZS5nZXQoJy8nLCB7IFxuICAgICAgICBzY2hlbWE6IHsgICAgICAgIFxuICAgICAgICAgICAgLi4uZG9jdW1lbnRhdGlvbihhdXRvUHJlZml4KSxcbiAgICAgICAgfSBcbiAgICB9LCBhc3luYyhyZXEsIHJlcykgPT4gXG4gICAgICAgIHJlcy5zZW5kKHsgaGVsbG86ICd3b3JsZCcgfSlcbiAgICApXG5cbiAgICByb3V0ZS5nZXQoJy86aWQnLCB7IFxuICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgIC4uLmRvY3VtZW50YXRpb24oYXV0b1ByZWZpeCksXG4gICAgICAgICAgICBwYXJhbXM6IGAke2F1dG9QcmVmaXh9I2BcbiAgICAgICAgfVxuICAgIH0sIGFzeW5jKHJlcSwgcmVzKSA9PiBcbiAgICAgICAgcmVzLnNlbmQocmVxLnBhcmFtcylcbiAgICApXG5cbiAgICBuZXh0KClcbn1cblxuIl19