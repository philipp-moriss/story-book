"use strict";

var _react = _interopRequireDefault(require("react"));
var _addons = require("@storybook/addons");
var _components = require("@storybook/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ADDON_ID = 'custom-addon';
var PANEL_ID = "".concat(ADDON_ID, "/panel");

// give a unique name for the panel
var MyPanel = function MyPanel() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    width: '30%',
    height: '20%',
    src: 'https://raw.githubusercontent.com/gist/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif',
    alt: 'cat'
  }));
};
_addons.addons.register(ADDON_ID, function (api) {
  _addons.addons.add(PANEL_ID, {
    type: _addons.types.PANEL,
    title: 'Custom Addon',
    render: function render(_ref) {
      var active = _ref.active,
        key = _ref.key;
      return /*#__PURE__*/_react.default.createElement(_components.AddonPanel, {
        active: active,
        key: key
      }, /*#__PURE__*/_react.default.createElement(MyPanel, null));
    }
  });
});