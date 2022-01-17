function cov_2dn5ao6h27() {
  var path = "/Users/johnkiernan/turing/3mod/shore-leave/src/reportWebVitals.js";
  var hash = "f8dd5ac3839880bc785683dbaa4227f5d4823a90";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnkiernan/turing/3mod/shore-leave/src/reportWebVitals.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 24
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "2": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 9,
          column: 7
        }
      },
      "3": {
        start: {
          line: 4,
          column: 6
        },
        end: {
          line: 4,
          column: 26
        }
      },
      "4": {
        start: {
          line: 5,
          column: 6
        },
        end: {
          line: 5,
          column: 26
        }
      },
      "5": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 6,
          column: 26
        }
      },
      "6": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 26
        }
      },
      "7": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1,
            column: 39
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 3,
            column: 31
          }
        },
        loc: {
          start: {
            line: 3,
            column: 79
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }, {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 2,
            column: 6
          },
          end: {
            line: 2,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 2,
            column: 6
          },
          end: {
            line: 2,
            column: 17
          }
        }, {
          start: {
            line: 2,
            column: 21
          },
          end: {
            line: 2,
            column: 52
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f8dd5ac3839880bc785683dbaa4227f5d4823a90"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dn5ao6h27 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2dn5ao6h27();
cov_2dn5ao6h27().s[0]++;

const reportWebVitals = onPerfEntry => {
  cov_2dn5ao6h27().f[0]++;
  cov_2dn5ao6h27().s[1]++;

  if ((cov_2dn5ao6h27().b[1][0]++, onPerfEntry) && (cov_2dn5ao6h27().b[1][1]++, onPerfEntry instanceof Function)) {
    cov_2dn5ao6h27().b[0][0]++;
    cov_2dn5ao6h27().s[2]++;
    import('web-vitals').then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      cov_2dn5ao6h27().f[1]++;
      cov_2dn5ao6h27().s[3]++;
      getCLS(onPerfEntry);
      cov_2dn5ao6h27().s[4]++;
      getFID(onPerfEntry);
      cov_2dn5ao6h27().s[5]++;
      getFCP(onPerfEntry);
      cov_2dn5ao6h27().s[6]++;
      getLCP(onPerfEntry);
      cov_2dn5ao6h27().s[7]++;
      getTTFB(onPerfEntry);
    });
  } else {
    cov_2dn5ao6h27().b[0][1]++;
  }
};

export default reportWebVitals;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydFdlYlZpdGFscy5qcyJdLCJuYW1lcyI6WyJyZXBvcnRXZWJWaXRhbHMiLCJvblBlcmZFbnRyeSIsIkZ1bmN0aW9uIiwidGhlbiIsImdldENMUyIsImdldEZJRCIsImdldEZDUCIsImdldExDUCIsImdldFRURkIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7O0FBZlosTUFBTUEsZUFBZSxHQUFHQyxXQUFXLElBQUk7QUFBQTtBQUFBOztBQUNyQyxNQUFJLDZCQUFBQSxXQUFXLGtDQUFJQSxXQUFXLFlBQVlDLFFBQTNCLENBQWYsRUFBb0Q7QUFBQTtBQUFBO0FBQ2xELFdBQU8sWUFBUCxFQUFxQkMsSUFBckIsQ0FBMEIsQ0FBQztBQUFFQyxNQUFBQSxNQUFGO0FBQVVDLE1BQUFBLE1BQVY7QUFBa0JDLE1BQUFBLE1BQWxCO0FBQTBCQyxNQUFBQSxNQUExQjtBQUFrQ0MsTUFBQUE7QUFBbEMsS0FBRCxLQUFpRDtBQUFBO0FBQUE7QUFDekVKLE1BQUFBLE1BQU0sQ0FBQ0gsV0FBRCxDQUFOO0FBRHlFO0FBRXpFSSxNQUFBQSxNQUFNLENBQUNKLFdBQUQsQ0FBTjtBQUZ5RTtBQUd6RUssTUFBQUEsTUFBTSxDQUFDTCxXQUFELENBQU47QUFIeUU7QUFJekVNLE1BQUFBLE1BQU0sQ0FBQ04sV0FBRCxDQUFOO0FBSnlFO0FBS3pFTyxNQUFBQSxPQUFPLENBQUNQLFdBQUQsQ0FBUDtBQUNELEtBTkQ7QUFPRCxHQVJEO0FBQUE7QUFBQTtBQVNELENBVkQ7O0FBWUEsZUFBZUQsZUFBZiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IG9uUGVyZkVudHJ5ID0+IHtcbiAgaWYgKG9uUGVyZkVudHJ5ICYmIG9uUGVyZkVudHJ5IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBpbXBvcnQoJ3dlYi12aXRhbHMnKS50aGVuKCh7IGdldENMUywgZ2V0RklELCBnZXRGQ1AsIGdldExDUCwgZ2V0VFRGQiB9KSA9PiB7XG4gICAgICBnZXRDTFMob25QZXJmRW50cnkpO1xuICAgICAgZ2V0RklEKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldEZDUChvblBlcmZFbnRyeSk7XG4gICAgICBnZXRMQ1Aob25QZXJmRW50cnkpO1xuICAgICAgZ2V0VFRGQihvblBlcmZFbnRyeSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcG9ydFdlYlZpdGFscztcbiJdfQ==