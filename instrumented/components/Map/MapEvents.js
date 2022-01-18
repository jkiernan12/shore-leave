function cov_iwo8bpwqu() {
  var path = "/Users/johnkiernan/turing/3mod/shore-leave/src/components/Map/MapEvents.js";
  var hash = "200190934b073c322fab394eea92a815629d6a1b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnkiernan/turing/3mod/shore-leave/src/components/Map/MapEvents.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 6,
          column: 46
        }
      },
      "1": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 7,
          column: 46
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "3": {
        start: {
          line: 17,
          column: 14
        },
        end: {
          line: 21,
          column: 4
        }
      },
      "4": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 47
        }
      },
      "5": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 13
        }
      }
    },
    fnMap: {
      "0": {
        name: "cleanMapBounds",
        decl: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 23
          }
        },
        loc: {
          start: {
            line: 5,
            column: 29
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "MapEvents",
        decl: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 18
          }
        },
        loc: {
          start: {
            line: 16,
            column: 29
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 13
          },
          end: {
            line: 18,
            column: 14
          }
        },
        loc: {
          start: {
            line: 18,
            column: 19
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "200190934b073c322fab394eea92a815629d6a1b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_iwo8bpwqu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_iwo8bpwqu();
import React, { useState, useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';
import { fetchMarinas } from '../../api-calls';

function cleanMapBounds(map) {
  cov_iwo8bpwqu().f[0]++;
  const northEast = (cov_iwo8bpwqu().s[0]++, map.getBounds()._northEast);
  const southWest = (cov_iwo8bpwqu().s[1]++, map.getBounds()._southWest);
  cov_iwo8bpwqu().s[2]++;
  return {
    north: northEast.lat,
    east: northEast.lng,
    south: southWest.lat,
    west: southWest.lng
  };
}

function MapEvents({
  setter
}) {
  cov_iwo8bpwqu().f[1]++;
  const map = (cov_iwo8bpwqu().s[3]++, useMapEvents({
    moveend: () => {
      cov_iwo8bpwqu().f[2]++;
      cov_iwo8bpwqu().s[4]++;
      fetchMarinas(cleanMapBounds(map), setter);
    }
  }));
  cov_iwo8bpwqu().s[5]++;
  return null;
}

export default MapEvents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1hcEV2ZW50cy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWFwIiwidXNlTWFwRXZlbnRzIiwiZmV0Y2hNYXJpbmFzIiwiY2xlYW5NYXBCb3VuZHMiLCJtYXAiLCJub3J0aEVhc3QiLCJnZXRCb3VuZHMiLCJfbm9ydGhFYXN0Iiwic291dGhXZXN0IiwiX3NvdXRoV2VzdCIsIm5vcnRoIiwibGF0IiwiZWFzdCIsImxuZyIsInNvdXRoIiwid2VzdCIsIk1hcEV2ZW50cyIsInNldHRlciIsIm1vdmVlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsRUFBMEJDLFNBQTFCLFFBQTJDLE9BQTNDO0FBQ0EsU0FBU0MsTUFBVCxFQUFpQkMsWUFBakIsUUFBcUMsZUFBckM7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGlCQUE3Qjs7QUFFQSxTQUFTQyxjQUFULENBQXdCQyxHQUF4QixFQUE2QjtBQUFBO0FBQzNCLFFBQU1DLFNBQVMsNEJBQUdELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQkMsVUFBbkIsQ0FBZjtBQUNBLFFBQU1DLFNBQVMsNEJBQUdKLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQkcsVUFBbkIsQ0FBZjtBQUYyQjtBQUczQixTQUFPO0FBQ0xDLElBQUFBLEtBQUssRUFBRUwsU0FBUyxDQUFDTSxHQURaO0FBRUxDLElBQUFBLElBQUksRUFBRVAsU0FBUyxDQUFDUSxHQUZYO0FBR0xDLElBQUFBLEtBQUssRUFBRU4sU0FBUyxDQUFDRyxHQUhaO0FBSUxJLElBQUFBLElBQUksRUFBRVAsU0FBUyxDQUFDSztBQUpYLEdBQVA7QUFNRDs7QUFFRCxTQUFTRyxTQUFULENBQW1CO0FBQUNDLEVBQUFBO0FBQUQsQ0FBbkIsRUFBNkI7QUFBQTtBQUMzQixRQUFNYixHQUFHLDRCQUFHSCxZQUFZLENBQUM7QUFDdkJpQixJQUFBQSxPQUFPLEVBQUUsTUFBTTtBQUFBO0FBQUE7QUFDYmhCLE1BQUFBLFlBQVksQ0FBQ0MsY0FBYyxDQUFDQyxHQUFELENBQWYsRUFBc0JhLE1BQXRCLENBQVo7QUFDRDtBQUhzQixHQUFELENBQWYsQ0FBVDtBQUQyQjtBQU0zQixTQUFPLElBQVA7QUFDRDs7QUFFRCxlQUFlRCxTQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNYXAsIHVzZU1hcEV2ZW50cyB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnXG5pbXBvcnQgeyBmZXRjaE1hcmluYXMgfSBmcm9tICcuLi8uLi9hcGktY2FsbHMnXG5cbmZ1bmN0aW9uIGNsZWFuTWFwQm91bmRzKG1hcCkge1xuICBjb25zdCBub3J0aEVhc3QgPSBtYXAuZ2V0Qm91bmRzKCkuX25vcnRoRWFzdDtcbiAgY29uc3Qgc291dGhXZXN0ID0gbWFwLmdldEJvdW5kcygpLl9zb3V0aFdlc3Q7XG4gIHJldHVybiB7XG4gICAgbm9ydGg6IG5vcnRoRWFzdC5sYXQsIFxuICAgIGVhc3Q6IG5vcnRoRWFzdC5sbmcsXG4gICAgc291dGg6IHNvdXRoV2VzdC5sYXQsIFxuICAgIHdlc3Q6IHNvdXRoV2VzdC5sbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBNYXBFdmVudHMoe3NldHRlcn0pIHtcbiAgY29uc3QgbWFwID0gdXNlTWFwRXZlbnRzKHtcbiAgICBtb3ZlZW5kOiAoKSA9PiB7XG4gICAgICBmZXRjaE1hcmluYXMoY2xlYW5NYXBCb3VuZHMobWFwKSwgc2V0dGVyKVxuICAgIH0sXG4gIH0pXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcEV2ZW50cyJdfQ==