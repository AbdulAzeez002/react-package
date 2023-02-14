"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url-search-params.js");
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ImageUploader(props) {
  const [file, setFile] = (0, _react.useState)(null);
  const [fileUrl, setFileUrl] = (0, _react.useState)(null);
  const [full, setFull] = (0, _react.useState)(false);
  const [show, setShow] = (0, _react.useState)(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const myRef = (0, _react.useRef)(null);
  const handleChange = e => {
    // console.log(e.target.files[0],'files target')
    props.value(e.target.files[0]);
    setFileUrl(URL.createObjectURL(e.target.files[0]));
  };
  const fullImage = () => {
    console.log('full');
    setFull(true);
    //  console.log(full,'full')
  };

  const remove = () => {
    // console.log('removed')
    setFileUrl(null);
    setFull(false);
    myRef.current.value = "";
  };
  const update = () => {
    // console.log('updated')
    myRef.current.click();
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    class: "form-group mt-4 mb-1"
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: myRef,
    type: "file",
    onChange: handleChange,
    className: "form-control shadow-none ",
    accept: "image/png, image/gif, image/jpeg"
  })), fileUrl ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    "data-modal-target": "defaultModal",
    onClick: handleShow,
    height: 70,
    width: 70,
    src: fileUrl,
    style: {
      cursor: "pointer"
    },
    className: "mt-4 pe-auto"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: remove,
    className: " pe-auto text-decoration-none me-2 text-danger "
  }, "delete"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    onClick: update,
    className: " pe-auto text-decoration-none text-success "
  }, "update")))) : null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
    show: show,
    onHide: handleClose,
    size: "lg"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: fileUrl,
    className: "d-flex  justify-content-center w-100 h-100"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Footer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "secondary",
    onClick: handleClose
  }, "Close"))));
}
var _default = ImageUploader;
exports.default = _default;