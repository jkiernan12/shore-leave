function cov_1z5rys4x0n() {
  var path = "/Users/johnkiernan/turing/3mod/shore-leave/src/api-calls.js";
  var hash = "e597a191c635547daeaed884bb236e89f8c28b41";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/johnkiernan/turing/3mod/shore-leave/src/api-calls.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 26
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 11,
          column: 4
        }
      },
      "2": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 25
        }
      },
      "3": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 21
        }
      },
      "4": {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 9,
          column: 45
        }
      },
      "5": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 23
        }
      },
      "6": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 26
        }
      },
      "7": {
        start: {
          line: 22,
          column: 17
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "8": {
        start: {
          line: 28,
          column: 26
        },
        end: {
          line: 28,
          column: 83
        }
      },
      "9": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 39,
          column: 4
        }
      },
      "10": {
        start: {
          line: 34,
          column: 15
        },
        end: {
          line: 34,
          column: 25
        }
      },
      "11": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 36,
          column: 21
        }
      },
      "12": {
        start: {
          line: 37,
          column: 24
        },
        end: {
          line: 37,
          column: 42
        }
      },
      "13": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "fetchMarinas",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 58
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 8
          },
          end: {
            line: 6,
            column: 9
          }
        },
        loc: {
          start: {
            line: 6,
            column: 15
          },
          end: {
            line: 6,
            column: 25
          }
        },
        line: 6
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 7,
            column: 9
          }
        },
        loc: {
          start: {
            line: 7,
            column: 16
          },
          end: {
            line: 11,
            column: 3
          }
        },
        line: 7
      },
      "3": {
        name: "searchPOI",
        decl: {
          start: {
            line: 19,
            column: 9
          },
          end: {
            line: 19,
            column: 18
          }
        },
        loc: {
          start: {
            line: 19,
            column: 69
          },
          end: {
            line: 40,
            column: 3
          }
        },
        line: 19
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 34,
            column: 8
          },
          end: {
            line: 34,
            column: 9
          }
        },
        loc: {
          start: {
            line: 34,
            column: 15
          },
          end: {
            line: 34,
            column: 25
          }
        },
        line: 34
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 35,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        },
        loc: {
          start: {
            line: 35,
            column: 16
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 35
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e597a191c635547daeaed884bb236e89f8c28b41"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1z5rys4x0n = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1z5rys4x0n();
import { cleanMarinaData, cleanPOIData } from './utilities';

function fetchMarinas({
  north,
  east,
  south,
  west
}, setter) {
  cov_1z5rys4x0n().f[0]++;
  cov_1z5rys4x0n().s[0]++;
  console.log('fetch ran');
  cov_1z5rys4x0n().s[1]++;
  fetch(`https://api.marinas.com/v1/points/search?bounds[ne][lat]=${north}&bounds[ne][lon]=${east}&bounds[sw][lat]=${south}&bounds[sw][lon]=${west}`).then(res => {
    cov_1z5rys4x0n().f[1]++;
    cov_1z5rys4x0n().s[2]++;
    return res.json();
  }).then(data => {
    cov_1z5rys4x0n().f[2]++;
    cov_1z5rys4x0n().s[3]++;
    console.log(data);
    const cleanedData = (cov_1z5rys4x0n().s[4]++, cleanMarinaData(data));
    cov_1z5rys4x0n().s[5]++;
    setter(cleanedData);
  }); //Seeded data call below
  // const cleanedData = cleanMarinaData(data)
  // console.log(cleanedData)
  // setMarinas(cleanedData)
}

function searchPOI({
  locomotion,
  travelTime,
  interest
}, trip, setter) {
  cov_1z5rys4x0n().f[3]++;
  cov_1z5rys4x0n().s[6]++;
  console.log('fetch ran');
  const POIMap = (cov_1z5rys4x0n().s[7]++, {
    'restaurants': 13000,
    'grocery-stores': 17069,
    'hardware-stores': 17090,
    'entertainment': 10000
  });
  const currLocationStr = (cov_1z5rys4x0n().s[8]++, `${trip.marina.location.lat},${trip.marina.location.lon}`);
  cov_1z5rys4x0n().s[9]++;
  fetch(`https://api.foursquare.com/v3/places/search?ll=${currLocationStr}&radius=${travelTime * 80}&categories=${POIMap[interest]}&limit=50&session_token=fsq3JtsIUeGTGKP54qKENvvcQdGsJnY0NDfooAk1Nvf%2FbLc%3D`, {
    headers: {
      Authorization: 'fsq3JtsIUeGTGKP54qKENvvcQdGsJnY0NDfooAk1Nvf/bLc='
    }
  }).then(res => {
    cov_1z5rys4x0n().f[4]++;
    cov_1z5rys4x0n().s[10]++;
    return res.json();
  }).then(data => {
    cov_1z5rys4x0n().f[5]++;
    cov_1z5rys4x0n().s[11]++;
    console.log(data);
    const cleanedData = (cov_1z5rys4x0n().s[12]++, cleanPOIData(data));
    cov_1z5rys4x0n().s[13]++;
    setter(cleanedData);
  });
}

export { fetchMarinas, searchPOI };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS1jYWxscy5qcyJdLCJuYW1lcyI6WyJjbGVhbk1hcmluYURhdGEiLCJjbGVhblBPSURhdGEiLCJmZXRjaE1hcmluYXMiLCJub3J0aCIsImVhc3QiLCJzb3V0aCIsIndlc3QiLCJzZXR0ZXIiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjbGVhbmVkRGF0YSIsInNlYXJjaFBPSSIsImxvY29tb3Rpb24iLCJ0cmF2ZWxUaW1lIiwiaW50ZXJlc3QiLCJ0cmlwIiwiUE9JTWFwIiwiY3VyckxvY2F0aW9uU3RyIiwibWFyaW5hIiwibG9jYXRpb24iLCJsYXQiLCJsb24iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsZUFBVCxFQUEwQkMsWUFBMUIsUUFBOEMsYUFBOUM7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQjtBQUFDQyxFQUFBQSxLQUFEO0FBQVFDLEVBQUFBLElBQVI7QUFBY0MsRUFBQUEsS0FBZDtBQUFxQkMsRUFBQUE7QUFBckIsQ0FBdEIsRUFBa0RDLE1BQWxELEVBQTBEO0FBQUE7QUFBQTtBQUN4REMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUR3RDtBQUV4REMsRUFBQUEsS0FBSyxDQUFFLDREQUEyRFAsS0FBTSxvQkFBbUJDLElBQUssb0JBQW1CQyxLQUFNLG9CQUFtQkMsSUFBSyxFQUE1SSxDQUFMLENBQ0NLLElBREQsQ0FDTUMsR0FBRyxJQUFJO0FBQUE7QUFBQTtBQUFBLFdBQUFBLEdBQUcsQ0FBQ0MsSUFBSjtBQUFVLEdBRHZCLEVBRUNGLElBRkQsQ0FFTUcsSUFBSSxJQUFJO0FBQUE7QUFBQTtBQUNaTixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssSUFBWjtBQUNBLFVBQU1DLFdBQVcsNkJBQUdmLGVBQWUsQ0FBQ2MsSUFBRCxDQUFsQixDQUFqQjtBQUZZO0FBR1pQLElBQUFBLE1BQU0sQ0FBQ1EsV0FBRCxDQUFOO0FBQ0QsR0FORCxFQUZ3RCxDQVV4RDtBQUNFO0FBQ0E7QUFDQTtBQUNIOztBQUVELFNBQVNDLFNBQVQsQ0FBbUI7QUFBQ0MsRUFBQUEsVUFBRDtBQUFhQyxFQUFBQSxVQUFiO0FBQXlCQyxFQUFBQTtBQUF6QixDQUFuQixFQUF1REMsSUFBdkQsRUFBNkRiLE1BQTdELEVBQXFFO0FBQUE7QUFBQTtBQUVuRUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBLFFBQU1ZLE1BQU0sNkJBQUc7QUFDYixtQkFBZSxLQURGO0FBRWIsc0JBQWtCLEtBRkw7QUFHYix1QkFBbUIsS0FITjtBQUliLHFCQUFpQjtBQUpKLEdBQUgsQ0FBWjtBQU1BLFFBQU1DLGVBQWUsNkJBQUksR0FBRUYsSUFBSSxDQUFDRyxNQUFMLENBQVlDLFFBQVosQ0FBcUJDLEdBQUksSUFBR0wsSUFBSSxDQUFDRyxNQUFMLENBQVlDLFFBQVosQ0FBcUJFLEdBQUksRUFBM0QsQ0FBckI7QUFUbUU7QUFVbkVoQixFQUFBQSxLQUFLLENBQUUsa0RBQWlEWSxlQUFnQixXQUFVSixVQUFVLEdBQUcsRUFBRyxlQUFjRyxNQUFNLENBQUNGLFFBQUQsQ0FBVyw4RUFBNUgsRUFBMk07QUFDOU1RLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxhQUFhLEVBQUU7QUFEUjtBQURxTSxHQUEzTSxDQUFMLENBS0NqQixJQUxELENBS01DLEdBQUcsSUFBSTtBQUFBO0FBQUE7QUFBQSxXQUFBQSxHQUFHLENBQUNDLElBQUo7QUFBVSxHQUx2QixFQU1DRixJQU5ELENBTU1HLElBQUksSUFBSTtBQUFBO0FBQUE7QUFDWk4sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlLLElBQVo7QUFDQSxVQUFNQyxXQUFXLDhCQUFHZCxZQUFZLENBQUNhLElBQUQsQ0FBZixDQUFqQjtBQUZZO0FBR1pQLElBQUFBLE1BQU0sQ0FBQ1EsV0FBRCxDQUFOO0FBQ0QsR0FWRDtBQVdDOztBQUVELFNBQVFiLFlBQVIsRUFBc0JjLFNBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlYW5NYXJpbmFEYXRhLCBjbGVhblBPSURhdGEgfSBmcm9tICcuL3V0aWxpdGllcydcblxuZnVuY3Rpb24gZmV0Y2hNYXJpbmFzKHtub3J0aCwgZWFzdCwgc291dGgsIHdlc3R9LCBzZXR0ZXIpIHtcbiAgY29uc29sZS5sb2coJ2ZldGNoIHJhbicpXG4gIGZldGNoKGBodHRwczovL2FwaS5tYXJpbmFzLmNvbS92MS9wb2ludHMvc2VhcmNoP2JvdW5kc1tuZV1bbGF0XT0ke25vcnRofSZib3VuZHNbbmVdW2xvbl09JHtlYXN0fSZib3VuZHNbc3ddW2xhdF09JHtzb3V0aH0mYm91bmRzW3N3XVtsb25dPSR7d2VzdH1gKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBjb25zdCBjbGVhbmVkRGF0YSA9IGNsZWFuTWFyaW5hRGF0YShkYXRhKVxuICAgIHNldHRlcihjbGVhbmVkRGF0YSlcbiAgfSlcblxuICAvL1NlZWRlZCBkYXRhIGNhbGwgYmVsb3dcbiAgICAvLyBjb25zdCBjbGVhbmVkRGF0YSA9IGNsZWFuTWFyaW5hRGF0YShkYXRhKVxuICAgIC8vIGNvbnNvbGUubG9nKGNsZWFuZWREYXRhKVxuICAgIC8vIHNldE1hcmluYXMoY2xlYW5lZERhdGEpXG59XG5cbmZ1bmN0aW9uIHNlYXJjaFBPSSh7bG9jb21vdGlvbiwgdHJhdmVsVGltZSwgaW50ZXJlc3R9LCB0cmlwLCBzZXR0ZXIpIHtcblxuICBjb25zb2xlLmxvZygnZmV0Y2ggcmFuJylcbiAgY29uc3QgUE9JTWFwID0ge1xuICAgICdyZXN0YXVyYW50cyc6IDEzMDAwLFxuICAgICdncm9jZXJ5LXN0b3Jlcyc6IDE3MDY5LFxuICAgICdoYXJkd2FyZS1zdG9yZXMnOiAxNzA5MCxcbiAgICAnZW50ZXJ0YWlubWVudCc6IDEwMDAwXG4gIH1cbiAgY29uc3QgY3VyckxvY2F0aW9uU3RyID0gYCR7dHJpcC5tYXJpbmEubG9jYXRpb24ubGF0fSwke3RyaXAubWFyaW5hLmxvY2F0aW9uLmxvbn1gXG4gIGZldGNoKGBodHRwczovL2FwaS5mb3Vyc3F1YXJlLmNvbS92My9wbGFjZXMvc2VhcmNoP2xsPSR7Y3VyckxvY2F0aW9uU3RyfSZyYWRpdXM9JHt0cmF2ZWxUaW1lICogODB9JmNhdGVnb3JpZXM9JHtQT0lNYXBbaW50ZXJlc3RdfSZsaW1pdD01MCZzZXNzaW9uX3Rva2VuPWZzcTNKdHNJVWVHVEdLUDU0cUtFTnZ2Y1FkR3NKblkwTkRmb29BazFOdmYlMkZiTGMlM0RgLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ2ZzcTNKdHNJVWVHVEdLUDU0cUtFTnZ2Y1FkR3NKblkwTkRmb29BazFOdmYvYkxjPSdcbiAgICB9XG4gIH0pXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGNvbnN0IGNsZWFuZWREYXRhID0gY2xlYW5QT0lEYXRhKGRhdGEpXG4gICAgc2V0dGVyKGNsZWFuZWREYXRhKVxuICB9KVxuICB9XG5cbiAgZXhwb3J0IHtmZXRjaE1hcmluYXMsIHNlYXJjaFBPSX0iXX0=