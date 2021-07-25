var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Archive(props) {
  var _React$useState = React.useState(props.localPosts),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    localPosts = _React$useState2[0],
    setAllLocalPosts = _React$useState2[1];

  var _React$useState3 = React.useState(props.mediumPosts),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    mediumPosts = _React$useState4[0],
    setAllMediumPosts = _React$useState4[1];

  var _React$useState5 = React.useState(""),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    searchString = _React$useState6[0],
    setSearchString = _React$useState6[1];

  var archiveMethods = {
    filterPosts: function filterPosts(posts) {
      if (searchString == "") {
        return posts;
      }
      return posts.filter(function (p) {
        return p.title.toLowerCase().match(searchString.toLowerCase()) || p.date.match(searchString);
      });
    }
  };

  var filteredLocalPosts = archiveMethods.filterPosts(localPosts);
  var filteredMediumPosts = archiveMethods.filterPosts(mediumPosts);

  function mediumSubtitle() {
    if (filteredMediumPosts.length == 0 || filteredLocalPosts.length == 0) {
      return null;
    }
    return React.createElement(
      "div",
      { className: "grid-container fluid" },
      React.createElement(
        "div",
        { className: "grid-x little-wrapper" },
        React.createElement(
          "div",
          { className: "small-12 cell" },
          React.createElement(
            "h4",
            { className: "gray-border-bottom subtitle" },
            React.createElement("i", { className: "fi-social-medium" }),
            " Medium"
          )
        )
      )
    );
  }

  function Posts(props) {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "grid-container fluid" },
        React.createElement(
          "div",
          { className: "grid-x wrapper" },
          React.createElement(
            "div",
            { className: "large-12 cell" },
            React.createElement(
              "ul",
              null,
              props.content.map(function (p) {
                return React.createElement(
                  "li",
                  { key: p.id },
                  "(",
                  React.createElement(
                    "span",
                    { className: "date" },
                    p.date
                  ),
                  ") ",
                  React.createElement(
                    "a",
                    { href: p.url, target: "_blank" },
                    p.title
                  )
                );
              })
            )
          )
        )
      )
    );
  }

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "grid-container fluid" },
      React.createElement(
        "div",
        { className: "grid-x little-wrapper" },
        React.createElement(
          "div",
          { className: "small-12 cell" },
          React.createElement("input", { type: "text", placeholder: "\uD83D\uDD0D Buscar...", value: searchString, onChange: function onChange(e) {
            return setSearchString(e.target.value);
          } })
        )
      )
    ),
    filteredLocalPosts.length != 0 && React.createElement(Posts, { content: filteredLocalPosts }),
    mediumSubtitle(),
    React.createElement(Posts, { content: filteredMediumPosts })
  );
}
