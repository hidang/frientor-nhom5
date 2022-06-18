(this["webpackJsonpfrientor-client"] =
  this["webpackJsonpfrientor-client"] || []).push([
  [0],
  {
    41: function (e, t, n) {},
    70: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(1),
        r = n.n(c),
        a = n(33),
        i = n.n(a),
        o = (n(41), n(5)),
        s = n(2),
        l = n(6),
        d = n(4),
        u = n(7),
        b = n(15),
        j = n(34),
        h = n
          .n(j)
          .a.create({
            baseURL: "http://frientor-server.herokuapp.com",
            headers: { "content-type": "application/json" },
          });
      n(60);
      n(62).config();
      b.a.initializeApp({
        apiKey: "AIzaSyDjbXGfZSCrUVY3nrK9xt5EHBwMBVoUQCY",
        authDomain: "react-firebase-chat-ff4d2.firebaseapp.com",
        projectId: "react-firebase-chat-ff4d2",
        storageBucket: "react-firebase-chat-ff4d2.appspot.com",
        messagingSenderId: "295931462158",
        appId: "1:295931462158:web:d6c975eff953e4b1c7f25f",
      });
      var m = b.a.auth(),
        f = n(0);
      var x = function () {
        var e = Object(o.f)(),
          t = function (e) {
            e &&
              h
                .post(
                  "/user/register",
                  {},
                  { headers: { Authorization: "Bearer " + e } }
                )
                .then(function (e) {
                  e || alert(e);
                })
                .catch(function (e) {
                  console.log(e);
                });
          },
          n = (function () {
            var t = Object(u.a)(
              Object(d.a)().mark(function t(n) {
                var c, r;
                return Object(d.a)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          n.preventDefault(),
                          (c = n.target.querySelector("#email").value),
                          (r = n.target.querySelector("#password").value),
                          (t.next = 5),
                          m
                            .signInWithEmailAndPassword(c, r)
                            .then(function (e) {
                              return e.user.getIdToken();
                            })
                            .then(function (t) {
                              e.push("/");
                            })
                            .catch(function (e) {
                              alert(e);
                            })
                        );
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          c = (function () {
            var n = Object(u.a)(
              Object(d.a)().mark(function n() {
                return Object(d.a)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          m
                            .signInWithPopup(new b.a.auth.GoogleAuthProvider())
                            .then(function (e) {
                              return e.user.getIdToken();
                            })
                            .then(function (n) {
                              return e.push("/"), t(n);
                            })
                            .catch(function (e) {
                              console.error(e);
                            })
                        );
                      case 2:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function () {
              return n.apply(this, arguments);
            };
          })();
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsx)("div", {
            className: "max-w-md mx-auto",
            children: Object(f.jsx)("div", {
              className:
                "flex justify-center block lg:flex bg-white lg:shadow-lg rounded-lg",
              children: Object(f.jsxs)("div", {
                className: "w-full px-6 py-16",
                children: [
                  Object(f.jsx)("div", {
                    className: "mb-4 font-light tracking-widest text-2xl",
                    children: "LOGIN",
                  }),
                  Object(f.jsxs)("form", {
                    onSubmit: n,
                    children: [
                      Object(f.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          Object(f.jsx)("label", {
                            htmlFor: "email",
                            className: "block mb-2 text-sm text-gray-800",
                            children: "Email",
                          }),
                          Object(f.jsx)("input", {
                            type: "email",
                            name: "email",
                            id: "email",
                            className:
                              "focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none",
                            autoComplete: "email",
                            required: !0,
                          }),
                          Object(f.jsx)("div", {
                            "v-if": "feedback.email.error",
                            children: Object(f.jsx)("div", {
                              className: "text-sm text-red-500 mt-2",
                              "v-text": "feedback.email.message",
                            }),
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          Object(f.jsx)("label", {
                            htmlFor: "password",
                            className: "block mb-2 text-sm text-gray-800",
                            children: "Your password",
                          }),
                          Object(f.jsx)("input", {
                            type: "password",
                            name: "password",
                            id: "password",
                            className:
                              "focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none",
                            autoComplete: "current-password",
                            required: !0,
                          }),
                        ],
                      }),
                      Object(f.jsx)("div", {
                        className: "block md:flex items-center justify-center",
                        children: Object(f.jsx)("button", {
                          type: "submit",
                          className:
                            "min-w-full align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg",
                          children: "Login",
                        }),
                      }),
                    ],
                  }),
                  Object(f.jsxs)("button", {
                    onClick: c,
                    className:
                      "mt-2 min-w-full align-middle bg-red-500 hover:bg-red-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg",
                    children: [
                      Object(f.jsx)("i", { className: "mr-2 fab fa-google" }),
                      "Login with Google",
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var v = function () {
        var e = Object(o.f)(),
          t = function (e) {
            e &&
              h
                .post(
                  "/user/register",
                  {},
                  { headers: { Authorization: "Bearer " + e } }
                )
                .then(function (e) {
                  e || alert(e);
                })
                .catch(function (e) {
                  console.log(e);
                });
          },
          n = (function () {
            var n = Object(u.a)(
              Object(d.a)().mark(function n(c) {
                var r, a;
                return Object(d.a)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          c.preventDefault(),
                          (r = c.target.querySelector("#email").value),
                          (a = c.target.querySelector("#password").value),
                          (n.next = 5),
                          m
                            .createUserWithEmailAndPassword(r, a)
                            .then(function (e) {
                              return e.user.getIdToken();
                            })
                            .then(function (n) {
                              return e.push("/"), t(n);
                            })
                            .catch(function (e) {
                              console.error(e);
                            })
                        );
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })(),
          c = (function () {
            var n = Object(u.a)(
              Object(d.a)().mark(function n() {
                return Object(d.a)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          m
                            .signInWithPopup(new b.a.auth.GoogleAuthProvider())
                            .then(function (e) {
                              return e.user.getIdToken();
                            })
                            .then(function (n) {
                              return e.push("/"), t(n);
                            })
                            .catch(function (e) {
                              console.error(e);
                            })
                        );
                      case 2:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function () {
              return n.apply(this, arguments);
            };
          })();
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsx)("div", {
            className: "max-w-md mx-auto",
            children: Object(f.jsx)("div", {
              className:
                "flex justify-center block lg:flex bg-white lg:shadow-lg rounded-lg",
              children: Object(f.jsxs)("div", {
                className: "w-full px-6 py-16",
                children: [
                  Object(f.jsx)("div", {
                    className: "mb-4 font-light tracking-widest text-2xl",
                    children: "SIGN UP",
                  }),
                  Object(f.jsxs)("form", {
                    onSubmit: n,
                    children: [
                      Object(f.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          Object(f.jsx)("label", {
                            htmlFor: "email",
                            className: "block mb-2 text-sm text-gray-800",
                            children: "Email",
                          }),
                          Object(f.jsx)("input", {
                            type: "email",
                            name: "email",
                            id: "email",
                            className:
                              "focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none",
                            autoComplete: "email",
                            required: !0,
                          }),
                          Object(f.jsx)("div", {
                            "v-if": "feedback.email.error",
                            children: Object(f.jsx)("div", {
                              className: "text-sm text-red-500 mt-2",
                              "v-text": "feedback.email.message",
                            }),
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          Object(f.jsx)("label", {
                            htmlFor: "password",
                            className: "block mb-2 text-sm text-gray-800",
                            children: "Your password",
                          }),
                          Object(f.jsx)("input", {
                            type: "password",
                            name: "password",
                            id: "password",
                            className:
                              "focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none",
                            autoComplete: "current-password",
                            required: !0,
                          }),
                        ],
                      }),
                      Object(f.jsx)("div", {
                        className: "block md:flex items-center justify-center",
                        children: Object(f.jsx)("button", {
                          type: "submit",
                          className:
                            "min-w-full align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg",
                          children: "Sign up",
                        }),
                      }),
                    ],
                  }),
                  Object(f.jsxs)("button", {
                    onClick: c,
                    className:
                      "mt-2 min-w-full align-middle bg-red-500 hover:bg-red-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg",
                    children: [
                      Object(f.jsx)("i", { className: "mr-2 fab fa-google" }),
                      "Sign with Google",
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var g = function (e) {
        var t = e.match_path;
        return Object(f.jsxs)("div", {
          className: "flex items-center my-1 mr-2",
          children: [
            Object(f.jsx)(l.b, {
              to: "".concat(t, "/register"),
              activeClassName: "active",
              children: Object(f.jsx)("button", {
                className:
                  "block bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-red-700 hover:border-red-500 rounded",
                children: "Sign up",
              }),
            }),
            Object(f.jsx)(l.b, {
              to: "".concat(t, "/login"),
              activeClassName: "active-menu",
              exact: !0,
              children: Object(f.jsx)("button", {
                className:
                  "block p-3 ml-1 mr-1 block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded",
                children: "Login",
              }),
            }),
          ],
        });
      };
      var O = function (e) {
        return e.user, Object(f.jsx)(f.Fragment, {});
      };
      var p = function () {
        var e = Object(c.useState)(null),
          t = Object(s.a)(e, 2),
          n = t[0],
          r = t[1];
        m.onAuthStateChanged(function (e) {
          e &&
            e.getIdToken().then(function (t) {
              r(e);
            });
        });
        var a = Object(c.useState)(null),
          i = Object(s.a)(a, 2),
          d = i[0],
          u = i[1];
        Object(c.useEffect)(
          function () {
            h.get("/user/".concat(null === n || void 0 === n ? void 0 : n.uid))
              .then(function (e) {
                u(e.data);
              })
              .catch(function (e) {
                return console.log(e), null;
              });
          },
          [n]
        );
        var b = Object(o.h)();
        return Object(f.jsxs)(f.Fragment, {
          children: [
            !n &&
              Object(f.jsxs)("div", {
                className: "flex justify-between text-sm text-gray-700",
                children: [
                  Object(f.jsx)("div", {
                    className: "flex justify-between text-sm text-gray-700",
                    children: Object(f.jsx)("div", {
                      className: "flex items-center",
                      children: Object(f.jsx)(l.b, {
                        to: "/",
                        activeClassName: "active-menu",
                        exact: !0,
                        children: Object(f.jsx)("h2", {
                          className:
                            "text-red-500 font-svn-inter font-bold text-4xl mt-2 ml-4 cursor-pointer",
                          children: "Frientor",
                        }),
                      }),
                    }),
                  }),
                  Object(f.jsx)(g, { match_path: "".concat(b.path) }),
                ],
              }),
            n &&
              Object(f.jsxs)(f.Fragment, {
                children: [
                  Object(f.jsx)("div", {
                    className: "flex justify-between text-sm text-gray-700",
                    children: Object(f.jsx)("div", {
                      className: "flex items-center",
                      children: Object(f.jsx)(l.b, {
                        to: "/",
                        activeClassName: "active-menu",
                        exact: !0,
                        children: Object(f.jsx)("h2", {
                          className:
                            "text-red-500 font-svn-inter font-bold text-4xl mt-2 ml-4 cursor-pointer",
                          children: "Frientor",
                        }),
                      }),
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className: "rounded rounded-t-lg overflow-hidden ",
                    children: [
                      Object(f.jsx)("div", {
                        className: "flex justify-center mt-8",
                        children: Object(f.jsx)("img", {
                          src:
                            (null === d || void 0 === d
                              ? void 0
                              : d.photoURL) ||
                            "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg",
                          width: "96",
                          height: "96",
                          alt: "avatar",
                          className:
                            "rounded-full border-solid border-white border-2 -mt-3",
                        }),
                      }),
                      Object(f.jsxs)("div", {
                        className: "text-center px-3 pb-6 pt-2",
                        children: [
                          Object(f.jsxs)("h3", {
                            className: "text-black text-sm bold font-sans",
                            children: [
                              null === d || void 0 === d ? void 0 : d.name,
                              " ",
                              Object(f.jsx)("i", {
                                className: "fas fa-edit ml-1",
                              }),
                            ],
                          }),
                          Object(f.jsx)("p", {
                            className:
                              "mt-2 font-sans font-light text-grey-dark",
                            children:
                              null === d || void 0 === d ? void 0 : d.bio,
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        className: "flex justify-center pb-3 text-grey-dark",
                        children: [
                          Object(f.jsxs)("div", {
                            className: "text-center mr-3 border-r pr-3",
                            children: [
                              Object(f.jsx)("h2", { children: "34" }),
                              Object(f.jsxs)("span", {
                                children: [
                                  Object(f.jsx)("i", {
                                    className: "far fa-question-circle mr-1",
                                  }),
                                  "Question",
                                ],
                              }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            className: "text-center",
                            children: [
                              Object(f.jsx)("h2", { children: "42" }),
                              Object(f.jsxs)("span", {
                                children: [
                                  Object(f.jsx)("i", {
                                    className: "far fa-lightbulb mr-1",
                                  }),
                                  "Idea",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(f.jsx)("center", {
                        children: Object(f.jsxs)("button", {
                          onClick: function () {
                            m.signOut().then(function (e) {
                              console.log(e, n), r(null);
                            });
                          },
                          className: "",
                          children: [
                            Object(f.jsx)("i", {
                              className: "fas fa-sign-out-alt mr-1",
                            }),
                            "Log out ",
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(f.jsx)(O, { user: n }),
                ],
              }),
            Object(f.jsxs)(o.c, {
              children: [
                Object(f.jsx)(o.a, {
                  path: "".concat(b.path, "/login"),
                  exact: !0,
                  children: !n && Object(f.jsx)(x, {}),
                }),
                Object(f.jsx)(o.a, {
                  path: "".concat(b.path, "/register"),
                  exact: !0,
                  children: !n && Object(f.jsx)(v, {}),
                }),
              ],
            }),
          ],
        });
      };
      function w() {
        var e = Object(c.useState)(!0),
          t = Object(s.a)(e, 2),
          n = t[0],
          r = t[1];
        Object(c.useEffect)(function () {
          m.onAuthStateChanged(function (e) {
            r(e || !1);
          });
        });
        var a = Object(o.f)(),
          i = function (e) {
            e.preventDefault();
            var t = document.querySelector("#searchContent").value;
            t && a.push("/search?q=".concat(t));
          };
        return Object(f.jsx)("div", {
          children: Object(f.jsxs)("div", {
            children: [
              Object(f.jsxs)("div", {
                className:
                  "flex flex-wrap justify-between text-sm text-gray-500 font-bold",
                children: [
                  Object(f.jsx)("div", {
                    className: "flex items-center",
                    children: Object(f.jsx)(l.b, {
                      to: "search?q=",
                      activeClassName: "active-menu",
                      exact: !0,
                      children: Object(f.jsx)("p", {
                        className: "block p-3 text-xl",
                        children: "Frientor Now",
                      }),
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex items-center ml-3",
                    children: [
                      !n && Object(f.jsx)(g, { match_path: "user" }),
                      n &&
                        Object(f.jsxs)(f.Fragment, {
                          children: [
                            Object(f.jsx)("p", {
                              className: "block",
                              children: Object(f.jsx)(l.b, {
                                to: "user",
                                activeClassName: "active-menu",
                                exact: !0,
                                children: Object(f.jsx)("p", {
                                  className: "block",
                                  children:
                                    (null === n || void 0 === n
                                      ? void 0
                                      : n.displayName) ||
                                    (null === n || void 0 === n
                                      ? void 0
                                      : n.email),
                                }),
                              }),
                            }),
                            Object(f.jsx)("p", {
                              className: "block",
                              children: Object(f.jsx)("img", {
                                alt: "",
                                className: "rounded-full block py-3 px-3",
                                src:
                                  (null === n || void 0 === n
                                    ? void 0
                                    : n.photoURL) ||
                                  "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg",
                                width: "62",
                                height: "62",
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              Object(f.jsx)("div", {
                className: "flex justify-center pt-20 content-center my-10",
                children: Object(f.jsxs)("div", {
                  children: [
                    Object(f.jsx)("img", {
                      alt: "frientor",
                      className:
                        "w-2/3 ml-auto mr-auto mb-6 my-6 cursor-pointer",
                      src: "data:image/png;base64,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",
                    }),
                    Object(f.jsx)("div", {
                      className:
                        "flex border border-gray-200 rounded-full p-4 shadow text-xl focus:outline-none",
                      children: Object(f.jsx)("input", {
                        onKeyPress: function (e) {
                          (e.keyCode || 13 === e.which) && i(e);
                        }.bind(this),
                        type: "text",
                        id: "searchContent",
                        className:
                          "w-full outline-none px-3 font-bold focus:outline-none",
                        placeholder: "What are you searching for?",
                      }),
                    }),
                    Object(f.jsx)("div", {
                      className: "mt-8 text-center",
                      children: Object(f.jsx)("button", {
                        onClick: i,
                        className:
                          "items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded",
                        children: "Go!",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var N = function (e) {
        var t = e.questionItem,
          n = Object(o.f)(),
          r = Object(c.useState)(function () {
            h.get("/user/".concat(null === t || void 0 === t ? void 0 : t.uid))
              .then(function (e) {
                l(e.data);
              })
              .catch(function (e) {
                return console.log(e), null;
              });
          }),
          a = Object(s.a)(r, 2),
          i = a[0],
          l = a[1];
        return Object(f.jsx)("div", {
          className: "mt-6",
          children: Object(f.jsxs)("div", {
            className: " px-10 py-6 bg-white rounded-lg shadow-md",
            children: [
              Object(f.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [
                  Object(f.jsx)("input", {
                    type: "button",
                    className:
                      "bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100",
                    defaultValue: "0 \u2764",
                  }),
                  Object(f.jsx)("span", {
                    className: "font-light text-gray-600",
                    children: (function (e) {
                      function t(e) {
                        return 1 === e.length && (e = "0" + e), e;
                      }
                      var n = new Date(e),
                        c = n.getDate() + "",
                        r = n.getMonth() + 1 + "",
                        a = n.getFullYear() + "",
                        i = n.getHours() + "",
                        o = n.getMinutes() + "",
                        s = n.getSeconds() + "";
                      return (
                        (c = t(c)) +
                        "/" +
                        (r = t(r)) +
                        "/" +
                        (a = t(a)) +
                        " " +
                        (i = t(i)) +
                        ":" +
                        (o = t(o)) +
                        ":" +
                        (s = t(s))
                      );
                    })(null === t || void 0 === t ? void 0 : t.date),
                  }),
                ],
              }),
              Object(f.jsx)("div", {
                className: "mt-2",
                children: Object(f.jsx)("p", {
                  href: "#",
                  onClick: function () {
                    n.push(
                      "/question?id=".concat(
                        null === t || void 0 === t ? void 0 : t._id
                      )
                    );
                  },
                  className:
                    " text-gray-700 font-bold hover:underline cursor-pointer",
                  children: null === t || void 0 === t ? void 0 : t.content,
                }),
              }),
              Object(f.jsxs)("div", {
                className: "flex justify-between items-center mt-4",
                children: [
                  Object(f.jsx)("p", {
                    href: "#",
                    className: "text-blue-500",
                    children: "0 Idea",
                  }),
                  Object(f.jsx)("div", {
                    children: Object(f.jsxs)("p", {
                      href: "#",
                      className: "flex items-center",
                      children: [
                        Object(f.jsx)("img", {
                          src:
                            (null === i || void 0 === i
                              ? void 0
                              : i.photoURL) ||
                            "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg",
                          alt: "avatar",
                          className:
                            "mx-4 w-10 h-10 object-cover rounded-full hidden sm:block",
                        }),
                        Object(f.jsx)("h1", {
                          className: "text-gray-700 font-bold hover:underline",
                          children:
                            (null === i || void 0 === i ? void 0 : i.name) ||
                            (null === i || void 0 === i ? void 0 : i.email),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      function y(e) {
        var t = e.split(" "),
          n = {};
        return (
          t.forEach(function (e) {
            n[e] = (n[e] || 0) + 1;
          }),
          n
        );
      }
      function A(e, t) {
        for (var n in e) t[n] = !0;
      }
      function k(e, t) {
        var n = [];
        for (var c in t) n.push(e[c] || 0);
        return n;
      }
      function q(e) {
        for (var t = 0, n = 0; n < e.length; n++) t += e[n] * e[n];
        return Math.sqrt(t);
      }
      function C(e, t) {
        var n = y(e),
          c = y(t),
          r = {};
        A(n, r), A(c, r);
        var a,
          i,
          o = k(n, r),
          s = k(c, r);
        return (
          (function (e, t) {
            for (var n = 0, c = 0; c < e.length; c++) n += e[c] * t[c];
            return n;
          })((a = o), (i = s)) /
          (q(a) * q(i))
        );
      }
      function S(e, t) {
        (this.id_user = e), (this.ques = t);
      }
      function I(e, t) {
        return t.probability - e.probability;
      }
      function X(e, t) {
        var n = [];
        return (
          e.map(function (e) {
            return n.push(
              new S(
                null === e || void 0 === e ? void 0 : e._id,
                null === e || void 0 === e ? void 0 : e.content
              )
            );
          }),
          (function (e, t) {
            var n = [];
            for (var c in e)
              n.push({
                index: e[c].id_user,
                probability: 100 * C(t, e[c].ques),
              });
            return n.sort(I).slice(0, 9);
          })(n, t)
        );
      }
      var F = function (e) {
        var t = Object(o.g)(),
          n = new URLSearchParams(t.search).get("q"),
          r = Object(c.useState)({}),
          a = Object(s.a)(r, 2),
          i = a[0],
          b = a[1],
          j = Object(c.useState)(),
          x = Object(s.a)(j, 2),
          v = x[0],
          O = x[1];
        Object(c.useEffect)(
          function () {
            h.get("/question")
              .then(function (e) {
                var t = e.data;
                if (t) {
                  var c = X(t, n),
                    r = [];
                  c.map(function (e) {
                    return r.push(
                      t.filter(function (t) {
                        return t._id === e.index;
                      })
                    );
                  }),
                    O(r);
                }
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          [n, i, window.location.href]
        );
        var p = Object(c.useState)(!0),
          w = Object(s.a)(p, 2),
          y = w[0],
          A = w[1];
        Object(c.useEffect)(function () {
          m.onAuthStateChanged(function (e) {
            A(e || !1);
          });
        });
        var k = (function () {
            var e = Object(u.a)(
              Object(d.a)().mark(function e(t) {
                var n, c;
                return Object(d.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (y) {
                          e.next = 4;
                          break;
                        }
                        alert("B\u1ea1n ch\u01b0a login"), (e.next = 10);
                        break;
                      case 4:
                        return (
                          t.preventDefault(),
                          (n = document.querySelector("#inputQuestion").value),
                          (e.next = 8),
                          y.getIdToken()
                        );
                      case 8:
                        (c = e.sent),
                          h
                            .post(
                              "/question",
                              { content: n, date: new Date() },
                              { headers: { Authorization: c } }
                            )
                            .then(function () {
                              (document.querySelector("#inputQuestion").value =
                                ""),
                                b({});
                            });
                      case 10:
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          q = Object(o.f)();
        return (
          Object(c.useEffect)(function () {
            var e = setInterval(function () {
              h.get("/question")
                .then(function (e) {
                  var t = e.data;
                  if (t) {
                    var c = X(t, n),
                      r = [];
                    c.map(function (e) {
                      return r.push(
                        t.filter(function (t) {
                          return t._id === e.index;
                        })
                      );
                    }),
                      O(r);
                  }
                })
                .catch(function (e) {
                  console.log(e);
                });
            }, 2e3);
            return function () {
              return clearInterval(e);
            };
          }),
          Object(f.jsxs)("div", {
            children: [
              Object(f.jsxs)("div", {
                className:
                  "flex flex-wrap justify-between text-sm text-gray-700 font-bold",
                children: [
                  Object(f.jsx)("div", {
                    className: "flex items-center",
                    children: Object(f.jsx)(l.b, {
                      to: "/",
                      activeClassName: "active-menu",
                      exact: !0,
                      children: Object(f.jsx)("h2", {
                        className:
                          "text-red-500 font-svn-inter font-bold text-6xl ml-4 cursor-pointer my-3 mr-2",
                        children: "Frientor",
                      }),
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex items-center ml-5",
                    children: [
                      !y && Object(f.jsx)(g, { match_path: "user" }),
                      y &&
                        Object(f.jsxs)(f.Fragment, {
                          children: [
                            Object(f.jsx)("p", {
                              className: "block",
                              children: Object(f.jsx)(l.b, {
                                to: "user",
                                activeClassName: "active-menu",
                                exact: !0,
                                children: Object(f.jsx)("p", {
                                  className: "block",
                                  children:
                                    (null === y || void 0 === y
                                      ? void 0
                                      : y.displayName) ||
                                    (null === y || void 0 === y
                                      ? void 0
                                      : y.email),
                                }),
                              }),
                            }),
                            Object(f.jsx)("p", {
                              className: "block",
                              children: Object(f.jsx)("img", {
                                alt: "",
                                className: "rounded-full block py-3 px-3",
                                src:
                                  (null === y || void 0 === y
                                    ? void 0
                                    : y.photoURL) ||
                                  "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg",
                                width: "62",
                                height: "62",
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              Object(f.jsx)("div", {
                className: "overflow-x-hidden",
                children: Object(f.jsx)("div", {
                  className: "px-6 py-8",
                  children: Object(f.jsxs)("div", {
                    className: "flex justify-between container mx-auto",
                    children: [
                      Object(f.jsx)("div", {
                        className: "-mx-8 w-4/12 hidden lg:block",
                        children: Object(f.jsxs)("div", {
                          className: "px-8",
                          children: [
                            Object(f.jsx)("div", {
                              className: "text-center rounded-none",
                              children: Object(f.jsx)("input", {
                                className:
                                  "text-center text-2xl font-bold focus:outline-none",
                                type: "text",
                                placeholder: "",
                              }),
                            }),
                            Object(f.jsx)("h1", {
                              className:
                                "mb-4 text-xl font-bold text-gray-700 ml-8 my-4",
                              children: "Hot Frientor",
                            }),
                            Object(f.jsx)("div", {
                              className:
                                "flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md",
                              children: Object(f.jsx)("ul", {
                                className: "-mx-4",
                                children: Object(f.jsxs)("li", {
                                  className: "flex items-center mt-6",
                                  children: [
                                    Object(f.jsx)("img", {
                                      src: "https://lh3.googleusercontent.com/a-/AOh14Ghv_1jbVXJ4n3lwIwzvEq-S4Z1gMzmeO3JSpqvcog=s96-c",
                                      alt: "avatar",
                                      className:
                                        "w-10 h-10 object-cover rounded-full mx-4",
                                    }),
                                    Object(f.jsxs)("p", {
                                      children: [
                                        Object(f.jsx)("p", {
                                          href: "#",
                                          className:
                                            "text-gray-700 font-bold mx-1 hover:underline",
                                          children: "Khanh Dang",
                                        }),
                                        Object(f.jsx)("span", {
                                          className:
                                            "text-gray-700 text-sm font-light",
                                          children: "Created 73 Posts",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(f.jsxs)("div", {
                        className: "w-full lg:w-8/12",
                        children: [
                          Object(f.jsxs)("div", {
                            className: "flex flex-wrap",
                            children: [
                              Object(f.jsx)("textarea", {
                                id: "inputQuestion",
                                placeholder: "Write down your question here",
                                defaultValue: n,
                                className:
                                  "mr-5 flex-1 h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline ",
                              }),
                              Object(f.jsx)("div", {
                                children: Object(f.jsx)("button", {
                                  onClick: function (e) {
                                    e.preventDefault();
                                    var t =
                                      document.querySelector(
                                        "#inputQuestion"
                                      ).value;
                                    t && q.push("/search?q=".concat(t));
                                  },
                                  className:
                                    "mb-1 mr-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded",
                                  children: "Search",
                                }),
                              }),
                            ],
                          }),
                          Object(f.jsx)("button", {
                            onClick: k,
                            className:
                              "my-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-yellow-700 hover:border-yellow-500 rounded",
                            children: "Post Question",
                          }),
                          Object(f.jsx)("hr", {}),
                          null === v || void 0 === v
                            ? void 0
                            : v.map(function (e) {
                                return Object(f.jsx)(
                                  N,
                                  { questionItem: e[0] },
                                  e[0]._id
                                );
                              }),
                          Object(f.jsx)("div", {
                            className: "mt-8",
                            children: Object(f.jsxs)("div", {
                              className: "flex",
                              children: [
                                Object(f.jsx)("p", {
                                  href: "#",
                                  className:
                                    "mx-1 px-3 py-2 bg-white text-gray-500 font-medium rounded-md cursor-not-allowed",
                                  children: "previous",
                                }),
                                Object(f.jsx)("p", {
                                  href: "#",
                                  className:
                                    "font-bold mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md",
                                  children: "1",
                                }),
                                Object(f.jsx)("p", {
                                  href: "#",
                                  className:
                                    "mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md",
                                  children: "2",
                                }),
                                Object(f.jsx)("p", {
                                  href: "#",
                                  className:
                                    "mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md",
                                  children: "3",
                                }),
                                Object(f.jsx)("p", {
                                  href: "#",
                                  className:
                                    "mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md",
                                  children: "Next",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
      var P = function (e) {
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsx)("h2", { children: "NOT FOUND" }),
        });
      };
      var T = function (e) {
        var t = e.questionId,
          n = e.commentId,
          r = Math.floor(Math.random() * Math.floor(1e3)),
          a = Object(c.useState)(!0),
          i = Object(s.a)(a, 2),
          o = i[0],
          l = i[1];
        Object(c.useEffect)(function () {
          m.onAuthStateChanged(function (e) {
            l(e || !1);
          });
        });
        var b = (function () {
          var e = Object(u.a)(
            Object(d.a)().mark(function e(c) {
              var a, i;
              return Object(d.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (o) {
                        e.next = 4;
                        break;
                      }
                      alert("B\u1ea1n ch\u01b0a login"), (e.next = 10);
                      break;
                    case 4:
                      return (
                        c.preventDefault(),
                        (a = document.querySelector(
                          "#inputComment".concat(r)
                        ).value),
                        (e.next = 8),
                        o.getIdToken()
                      );
                    case 8:
                      (i = e.sent),
                        h
                          .post(
                            "/question/"
                              .concat(t ? "comment" : "repcomment", "/")
                              .concat(t || n),
                            { content: a, date: new Date() },
                            { headers: { Authorization: i } }
                          )
                          .then(function () {
                            var e = document.querySelector(
                              "#inputComment".concat(r)
                            );
                            e && (e.value = "");
                          });
                    case 10:
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsx)("div", {
            className:
              "flex mx-auto items-center justify-center shadow-lg mt-2 mx-8 mb-4 max-w-2xl",
            children: Object(f.jsx)("form", {
              className: "w-full max-w-xl bg-white rounded-lg px-4 pt-2",
              children: Object(f.jsxs)("div", {
                className: "flex flex-wrap -mx-3 mb-6",
                children: [
                  Object(f.jsx)("h2", {
                    className: "px-4 pt-3 pb-2 text-gray-800 text-lg",
                    children: t ? "Add a new idea" : "Add a new branch",
                  }),
                  Object(f.jsx)("div", {
                    className: "w-full md:w-full px-3 mb-2 mt-2",
                    children: Object(f.jsx)("textarea", {
                      id: "inputComment".concat(r),
                      className:
                        "rounded border border-green-500 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white",
                      name: "body",
                      placeholder: t ? "Type Your Idea" : "Type Your Branch",
                      required: !0,
                      defaultValue: "",
                    }),
                  }),
                  Object(f.jsxs)("div", {
                    className:
                      "w-full md:w-full flex items-start md:w-full px-3",
                    children: [
                      Object(f.jsx)("div", {
                        className:
                          "flex items-start w-1/2 text-gray-700 px-2 mr-auto",
                      }),
                      Object(f.jsx)("div", {
                        className: "-mr-1",
                        children: Object(f.jsx)("input", {
                          onClick: b,
                          type: "button",
                          className:
                            "bg-white text-green-700 font-medium py-1 px-4 border border-green-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100",
                          defaultValue: "Post",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      };
      var D = function (e) {
        var t = e.repComment,
          n = Object(c.useState)(function () {
            h.get("/user/".concat(null === t || void 0 === t ? void 0 : t.uid))
              .then(function (e) {
                i(e.data);
              })
              .catch(function (e) {
                return console.log(e), null;
              });
          }),
          r = Object(s.a)(n, 2),
          a = r[0],
          i = r[1];
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsxs)("p", {
            className: "ml-10 text-xs mr-40",
            children: [
              null === t || void 0 === t ? void 0 : t.content,
              " - ",
              null === a || void 0 === a ? void 0 : a.name,
            ],
          }),
        });
      };
      var U = function (e) {
        var t = e.idComment,
          n = Object(c.useState)(function () {
            t &&
              h
                .get("/question/repcomment/".concat(t))
                .then(function (e) {
                  i(e.data);
                })
                .catch(function (e) {
                  console.log(e);
                });
          }),
          r = Object(s.a)(n, 2),
          a = r[0],
          i = r[1];
        return (
          Object(c.useEffect)(function () {
            var e = setInterval(function () {
              t &&
                h
                  .get("/question/repcomment/".concat(t))
                  .then(function (e) {
                    var t = e.data;
                    (null === t || void 0 === t ? void 0 : t.length) !==
                      a.length && i(e.data);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
            }, 1600);
            return function () {
              return clearInterval(e);
            };
          }),
          Object(f.jsx)(f.Fragment, {
            children:
              null === a || void 0 === a
                ? void 0
                : a.map(function (e) {
                    return Object(f.jsxs)(f.Fragment, {
                      children: [
                        Object(f.jsx)(D, { repComment: e }, e._id),
                        Object(f.jsx)("hr", {}),
                      ],
                    });
                  }),
          })
        );
      };
      var L = function (e) {
        var t = e.commentItem,
          n = Object(c.useState)(function () {
            h.get("/user/".concat(null === t || void 0 === t ? void 0 : t.uid))
              .then(function (e) {
                i(e.data);
              })
              .catch(function (e) {
                return console.log(e), null;
              });
          }),
          r = Object(s.a)(n, 2),
          a = r[0],
          i = r[1],
          o = Object(c.useState)(!1),
          l = Object(s.a)(o, 2),
          d = l[0],
          u = l[1];
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsx)("div", {
            className:
              "flex mx-auto items-center justify-center shadow-lg mt-2 mx-8 mb-4 max-w-2xl",
            children: Object(f.jsx)("form", {
              className: "w-full max-w-xl bg-white rounded-lg px-4 pt-2",
              children: Object(f.jsxs)("div", {
                className: "flex flex-wrap -mx-3 mb-6",
                children: [
                  Object(f.jsxs)("div", {
                    className:
                      "w-full md:w-full px-3 mb-2 mt-2 font-bold text-2xl",
                    children: [
                      "\ud83d\udce2 ",
                      null === t || void 0 === t ? void 0 : t.content,
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className:
                      "w-full md:w-full flex items-start md:w-full px-3",
                    children: [
                      Object(f.jsx)("div", {
                        className:
                          "flex items-start w-1/2 text-gray-700 px-2 mr-auto",
                        children: Object(f.jsxs)("p", {
                          href: "#",
                          className: "hover:underline text-xs pt-px",
                          children: [
                            " ",
                            null === a || void 0 === a ? void 0 : a.name,
                            " ",
                            (function (e) {
                              function t(e) {
                                return 1 === e.length && (e = "0" + e), e;
                              }
                              var n = new Date(e),
                                c = n.getDate() + "",
                                r = n.getMonth() + 1 + "",
                                a = n.getFullYear() + "",
                                i = n.getHours() + "",
                                o = n.getMinutes() + "",
                                s = n.getSeconds() + "";
                              return (
                                (c = t(c)) +
                                "/" +
                                (r = t(r)) +
                                "/" +
                                (a = t(a)) +
                                " " +
                                (i = t(i)) +
                                ":" +
                                (o = t(o)) +
                                ":" +
                                (s = t(s))
                              );
                            })(null === t || void 0 === t ? void 0 : t.date),
                          ],
                        }),
                      }),
                      Object(f.jsx)("div", {
                        className: "-mr-1",
                        children: Object(f.jsx)("input", {
                          type: "button",
                          onClick: function () {
                            u(!d);
                          },
                          className:
                            "bg-white text-blue-700 font-medium py-1 px-4 border border-blue-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100",
                          defaultValue: "Reply",
                        }),
                      }),
                    ],
                  }),
                  Object(f.jsx)(U, {
                    idComment:
                      (null === t || void 0 === t ? void 0 : t._id) || null,
                  }),
                  d &&
                    Object(f.jsx)(T, {
                      questionId: !1,
                      commentId: null === t || void 0 === t ? void 0 : t._id,
                    }),
                ],
              }),
            }),
          }),
        });
      };
      var z = function (e) {
        var t = e.questionId,
          n = Object(c.useState)(),
          r = Object(s.a)(n, 2),
          a = r[0],
          i = r[1];
        return (
          Object(c.useEffect)(
            function () {
              t &&
                h
                  .get("/question/comment/".concat(t))
                  .then(function (e) {
                    i(e.data);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
            },
            [t]
          ),
          Object(c.useEffect)(function () {
            var e = setInterval(function () {
              h.get("/question/comment/".concat(t))
                .then(function (e) {
                  var t = e.data;
                  (null === t || void 0 === t ? void 0 : t.length) !==
                    a.length && i(e.data);
                })
                .catch(function (e) {
                  console.log(e);
                });
            }, 1500);
            return function () {
              return clearInterval(e);
            };
          }),
          Object(f.jsx)(f.Fragment, {
            children:
              null === a || void 0 === a
                ? void 0
                : a.map(function (e) {
                    return Object(f.jsx)(L, { commentItem: e }, e._id);
                  }),
          })
        );
      };
      var R = function (e) {
        var t = Object(c.useState)([]),
          n = Object(s.a)(t, 2),
          r = n[0],
          a = n[1],
          i = Object(c.useState)(null),
          d = Object(s.a)(i, 2),
          u = d[0],
          b = d[1],
          j = Object(c.useState)(!1),
          x = Object(s.a)(j, 2),
          v = x[0],
          O = x[1],
          p = Object(o.g)(),
          w = new URLSearchParams(p.search).get("id"),
          N = Object(c.useState)(!0),
          y = Object(s.a)(N, 2),
          A = y[0],
          k = y[1];
        Object(c.useEffect)(function () {
          m.onAuthStateChanged(function (e) {
            k(e || !1);
          });
        }),
          Object(c.useEffect)(
            function () {
              h.get("/question/".concat(w))
                .then(function (e) {
                  return e.data;
                })
                .then(function (e) {
                  h.get(
                    "/user/".concat(null === r || void 0 === r ? void 0 : r.uid)
                  )
                    .then(function (t) {
                      b(t.data), a(e);
                    })
                    .catch(function (e) {
                      return console.log(e), null;
                    });
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
            [w, null === r || void 0 === r ? void 0 : r.uid]
          );
        var q = Object(o.f)();
        return Object(f.jsxs)("div", {
          children: [
            Object(f.jsxs)("div", {
              className: "flex justify-between text-sm text-gray-700",
              children: [
                Object(f.jsx)("div", {
                  className: "flex items-center",
                  children: Object(f.jsx)(l.b, {
                    to: "/",
                    activeClassName: "active-menu",
                    exact: !0,
                    children: Object(f.jsx)("h2", {
                      className:
                        "text-red-500 font-svn-inter font-bold text-6xl ml-4 cursor-pointer my-3 mr-2",
                      children: "Frientor",
                    }),
                  }),
                }),
                Object(f.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    !A && Object(f.jsx)(g, { match_path: "user" }),
                    A &&
                      Object(f.jsxs)(f.Fragment, {
                        children: [
                          Object(f.jsx)("p", {
                            className: "block",
                            children: Object(f.jsx)(l.b, {
                              to: "user",
                              activeClassName: "active-menu",
                              exact: !0,
                              children: Object(f.jsx)("p", {
                                className: "block",
                                children:
                                  (null === A || void 0 === A
                                    ? void 0
                                    : A.displayName) ||
                                  (null === A || void 0 === A
                                    ? void 0
                                    : A.email),
                              }),
                            }),
                          }),
                          Object(f.jsx)("p", {
                            className: "block",
                            children: Object(f.jsx)("img", {
                              alt: "",
                              className: "rounded-full block py-3 px-3",
                              src:
                                (null === A || void 0 === A
                                  ? void 0
                                  : A.photoURL) ||
                                "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg",
                              width: "62",
                              height: "62",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            Object(f.jsxs)("div", {
              className:
                "flex mx-auto items-center justify-center shadow-lg mt-2 mx-8 mb-4 max-w-5xl",
              children: [
                Object(f.jsx)("div", {
                  className: "mr-1",
                  children: Object(f.jsx)("input", {
                    type: "button",
                    className:
                      "bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-3 hover:bg-gray-100",
                    defaultValue: "\u2764",
                  }),
                }),
                Object(f.jsxs)("div", {
                  className:
                    "flex flex-wrap  mt-4 w-full max-w-xl bg-white rounded-lg px-4 pt-2 mb-4",
                  children: [
                    Object(f.jsx)("div", {
                      className:
                        "flex flex-wrap justify-between items-center -mx-3 mb-6",
                      children: Object(f.jsx)("h2", {
                        className:
                          "px-4 pt-3 pb-2 font-bold text-gray-800 text-4xl mt-12",
                        children:
                          null === r || void 0 === r ? void 0 : r.content,
                      }),
                    }),
                    Object(f.jsxs)("div", {
                      className: "flex justify-between items-center mt-4",
                      children: [
                        Object(f.jsxs)("p", {
                          className: "text-blue-500 ml--2 inline-block",
                          children: [Math.floor(101 * Math.random()), " Ideas"],
                        }),
                        Object(f.jsx)("div", {
                          className: "font-light text-gray-600 ml-4",
                          children: (function (e) {
                            function t(e) {
                              return 1 === e.length && (e = "0" + e), e;
                            }
                            var n = new Date(e),
                              c = n.getDate() + "",
                              r = n.getMonth() + 1 + "",
                              a = n.getFullYear() + "",
                              i = n.getHours() + "",
                              o = n.getMinutes() + "",
                              s = n.getSeconds() + "";
                            return (
                              (c = t(c)) +
                              "/" +
                              (r = t(r)) +
                              "/" +
                              (a = t(a)) +
                              " " +
                              (i = t(i)) +
                              ":" +
                              (o = t(o)) +
                              ":" +
                              (s = t(s))
                            );
                          })(null === r || void 0 === r ? void 0 : r.date),
                        }),
                        Object(f.jsxs)("p", {
                          href: "#",
                          className: "flex items-center",
                          children: [
                            Object(f.jsx)("img", {
                              src:
                                (null === u || void 0 === u
                                  ? void 0
                                  : u.photoURL) ||
                                "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg",
                              alt: "avatar",
                              className:
                                "mx-4 w-10 h-10 object-cover rounded-sm hidden sm:block",
                            }),
                            Object(f.jsx)("h1", {
                              className:
                                "text-gray-700 font-bold hover:underline",
                              children:
                                (null === u || void 0 === u
                                  ? void 0
                                  : u.name) ||
                                (null === u || void 0 === u ? void 0 : u.email),
                            }),
                          ],
                        }),
                      ],
                    }),
                    v &&
                      Object(f.jsx)(T, {
                        questionId: null === r || void 0 === r ? void 0 : r._id,
                        commentId: !1,
                      }),
                  ],
                }),
                Object(f.jsxs)("div", {
                  className: "mr-1",
                  children: [
                    Object(f.jsx)("input", {
                      type: "button",
                      onClick: function () {
                        O(!v);
                      },
                      className:
                        "ml-2 bg-white text-green-700 font-medium py-1 px-4 border border-green-400 rounded-lg tracking-wide ml-1 hover:bg-gray-100 my-4",
                      defaultValue: "Add Idea",
                    }),
                    Object(f.jsx)("input", {
                      onClick: function () {
                        q.push(
                          "/chat?idq=".concat(
                            null === r || void 0 === r ? void 0 : r._id
                          )
                        );
                      },
                      type: "button",
                      className:
                        "bg-white text-red-700 font-medium py-1 px-4 border border-red-400 rounded-lg tracking-wide mr-1 ml-4 hover:bg-gray-100",
                      defaultValue: "Discussion",
                    }),
                  ],
                }),
              ],
            }),
            Object(f.jsx)(z, {
              questionId: null === r || void 0 === r ? void 0 : r._id,
            }),
          ],
        });
      };
      var V = function (e) {
        var t = e.commentItem,
          n = e.handleClickIdea,
          r = e.triggerRefreshChat,
          a = Object(o.g)(),
          i = "bg-blue-200";
        new URLSearchParams(a.search).get("idcomment") ===
          (null === t || void 0 === t ? void 0 : t._id) &&
          (i = "bg-blue-400 border-2 border-black border-opacity-1000");
        var l = Object(c.useState)(!0),
          b = Object(s.a)(l, 2),
          j = b[0],
          x = b[1];
        Object(c.useEffect)(function () {
          m.onAuthStateChanged(function (e) {
            x(e || !1);
          });
        });
        var v = Object(c.useState)(function () {
            h.get("/user/".concat(null === t || void 0 === t ? void 0 : t.uid))
              .then(function (e) {
                p(e.data);
              })
              .catch(function (e) {
                return console.log(e), null;
              });
          }),
          g = Object(s.a)(v, 2),
          O = g[0],
          p = g[1],
          w = (function () {
            var e = Object(u.a)(
              Object(d.a)().mark(function e() {
                var n;
                return Object(d.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (j) {
                          e.next = 3;
                          break;
                        }
                        return alert("You are not Login"), e.abrupt("return");
                      case 3:
                        return (e.next = 5), j.getIdToken();
                      case 5:
                        (n = e.sent),
                          h
                            .post(
                              "/chat/".concat(
                                null === t || void 0 === t ? void 0 : t._id
                              ),
                              {
                                uid2:
                                  null === t || void 0 === t ? void 0 : t.uid,
                                content: [],
                              },
                              { headers: { Authorization: n } }
                            )
                            .then(function () {
                              r();
                            });
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsxs)("button", {
            onClick: function () {
              n(null === t || void 0 === t ? void 0 : t._id);
            },
            className: i,
            children: [
              null === t || void 0 === t ? void 0 : t.content,
              !(j.uid === t.uid) &&
                Object(f.jsx)("div", {
                  className: "flex justify-center",
                  children: Object(f.jsx)("button", {
                    onClick: w,
                    className:
                      " rounded-lg border-double border-3 border-light-blue-500 flex justify-self-end transition duration-500 ease-in-out bg-yellow-200 hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110",
                    children: Object(f.jsxs)("p", {
                      className: "ml-1 mr-1 mt-1 mb-1 text-xs",
                      children: [
                        "Chat with ",
                        Object(f.jsx)("b", {
                          children: Object(f.jsx)("i", {
                            children:
                              null === O || void 0 === O ? void 0 : O.name,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              j.uid === t.uid &&
                Object(f.jsxs)("p", {
                  className: "",
                  children: [
                    " ",
                    Object(f.jsx)("b", {
                      children: Object(f.jsx)("i", { children: "You" }),
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      var E = function (e) {
        var t = e.idQuestion,
          n = e.handleClickIdea,
          r = e.triggerRefreshChat,
          a = Object(c.useState)(function () {
            h.get("/question/comment/".concat(t))
              .then(function (e) {
                l(e.data);
              })
              .catch(function (e) {
                console.log(e);
              });
          }),
          i = Object(s.a)(a, 2),
          o = i[0],
          l = i[1];
        Object(c.useEffect)(function () {
          var e = setInterval(function () {
            h.get("/question/comment/".concat(t))
              .then(function (e) {
                var t = e.data;
                (null === t || void 0 === t ? void 0 : t.length) !== o.length &&
                  l(e.data);
              })
              .catch(function (e) {
                console.log(e);
              });
          }, 1500);
          return function () {
            return clearInterval(e);
          };
        });
        var d = Object(c.useState)(!1),
          u = Object(s.a)(d, 2),
          b = u[0],
          j = u[1],
          m = function () {
            r();
          };
        return Object(f.jsxs)(f.Fragment, {
          children: [
            Object(f.jsx)("input", {
              type: "button",
              onClick: function () {
                j(!b);
              },
              className:
                "ml-2 bg-white text-gray-700 font-medium px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100",
              defaultValue: "+",
            }),
            b && Object(f.jsx)(T, { questionId: t, commentId: !1 }),
            null === o || void 0 === o
              ? void 0
              : o.map(function (e) {
                  return Object(f.jsx)(
                    V,
                    {
                      commentItem: e,
                      handleClickIdea: n,
                      triggerRefreshChat: m,
                    },
                    e._id
                  );
                }),
          ],
        });
      };
      var M = function (e) {
        var t = e.idComment,
          n = e.repComment,
          r = e.triggerRefreshChat,
          a = Object(c.useState)(!0),
          i = Object(s.a)(a, 2),
          o = i[0],
          l = i[1];
        Object(c.useEffect)(function () {
          m.onAuthStateChanged(function (e) {
            l(e || !1);
          });
        });
        var b = Object(c.useState)(function () {
            h.get("/user/".concat(null === n || void 0 === n ? void 0 : n.uid))
              .then(function (e) {
                v(e.data);
              })
              .catch(function (e) {
                return console.log(e), null;
              });
          }),
          j = Object(s.a)(b, 2),
          x = j[0],
          v = j[1],
          g = (function () {
            var e = Object(u.a)(
              Object(d.a)().mark(function e() {
                var n;
                return Object(d.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (o) {
                          e.next = 3;
                          break;
                        }
                        return alert("You are not Login"), e.abrupt("return");
                      case 3:
                        return (e.next = 5), o.getIdToken();
                      case 5:
                        (n = e.sent),
                          h
                            .post(
                              "/chat/".concat(t),
                              {
                                uid2:
                                  null === x || void 0 === x ? void 0 : x.uid,
                                content: [],
                              },
                              { headers: { Authorization: n } }
                            )
                            .then(function () {
                              r();
                            });
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsxs)("div", {
            className:
              "flex flex-none text-sm bg-white rounded p-4 items-center grid justify-items-stretch",
            children: [
              null === n || void 0 === n ? void 0 : n.content,
              !(o.uid === n.uid) &&
                Object(f.jsx)("button", {
                  onClick: g,
                  className:
                    "rounded-lg border-double border-3 border-light-blue-500 flex justify-self-end transition duration-500 ease-in-out bg-yellow-200 hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110",
                  children: Object(f.jsxs)("p", {
                    className: "ml-1 mr-1 mt-1 mb-1 text-xs",
                    children: [
                      "Chat with ",
                      Object(f.jsx)("b", {
                        children: Object(f.jsx)("i", {
                          children:
                            null === x || void 0 === x ? void 0 : x.name,
                        }),
                      }),
                    ],
                  }),
                }),
              o.uid === n.uid &&
                Object(f.jsxs)("p", {
                  className:
                    "ml-1 mr-1 mt-1 mb-1 text-xs flex justify-self-end transition duration-500 ease-in-out bg-white hover:bg-yellow-100 transform hover:-translate-y-1 hover:scale-110",
                  children: [
                    " ",
                    Object(f.jsx)("b", {
                      children: Object(f.jsx)("i", { children: "You" }),
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      var B = function (e) {
        var t = e.idComment,
          n = e.handleChithubEvent,
          r = Object(c.useState)(),
          a = Object(s.a)(r, 2),
          i = a[0],
          o = a[1];
        Object(c.useEffect)(
          function () {
            t &&
              h
                .get("/question/repcomment/".concat(t))
                .then(function (e) {
                  var t = e.data;
                  (null === t || void 0 === t ? void 0 : t.length) !==
                    (null === i || void 0 === i ? void 0 : i.length) &&
                    o(e.data);
                })
                .catch(function (e) {
                  console.log(e);
                });
          },
          [t, null === i || void 0 === i ? void 0 : i.length]
        ),
          Object(c.useEffect)(function () {
            var e = setInterval(function () {
              t &&
                h
                  .get("/question/repcomment/".concat(t))
                  .then(function (e) {
                    var t = e.data;
                    (null === t || void 0 === t ? void 0 : t.length) !==
                      (null === i || void 0 === i ? void 0 : i.length) &&
                      o(e.data);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
            }, 2e3);
            return function () {
              return clearInterval(e);
            };
          });
        var l = function () {
            n();
          },
          d = Object(c.useState)(!1),
          u = Object(s.a)(d, 2),
          b = u[0],
          j = u[1];
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsx)("div", {
            className: "w-2/5 bg-gray-200 overflow-y-auto flex flex-col",
            children: Object(f.jsxs)("div", {
              className: "flex flex-col space-y-4 p-4",
              children: [
                Object(f.jsx)("div", {
                  className: "bg-green-300",
                  children: Object(f.jsx)("center", {
                    children: Object(f.jsx)("b", {
                      children: "Branch (RepIdea)",
                    }),
                  }),
                }),
                Object(f.jsx)("input", {
                  type: "button",
                  onClick: function () {
                    j(!b);
                  },
                  className:
                    "ml-2 bg-white text-gray-700 font-medium px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100",
                  defaultValue: "+",
                }),
                b && Object(f.jsx)(T, { questionId: !1, commentId: t }),
                null === i || void 0 === i
                  ? void 0
                  : i.map(function (e) {
                      return Object(f.jsx)(f.Fragment, {
                        children: Object(f.jsx)(
                          M,
                          {
                            idComment: t,
                            repComment: e,
                            triggerRefreshChat: l,
                          },
                          e._id
                        ),
                      });
                    }),
              ],
            }),
          }),
        });
      };
      var G = function (e) {
        var t = e.chithub,
          n = e.handlePickChat,
          r = Object(o.g)(),
          a = new URLSearchParams(r.search),
          i = a.get("idq"),
          l = Object(o.h)(),
          d = Object(o.f)(),
          u = "border-l-2 border-transparent hover:bg-gray-100 p-3 space-y-4";
        a.get("idchat") === (null === t || void 0 === t ? void 0 : t._id) &&
          (u =
            "border-l-2 bg-green-200 border-transparent hover:bg-green-300 p-3 space-y-4");
        var b = Object(c.useState)(!0),
          j = Object(s.a)(b, 2),
          x = j[0],
          v = j[1];
        Object(c.useEffect)(function () {
          m.onAuthStateChanged(function (e) {
            e ? v(e) : w(!1);
          });
        }, []);
        var g = Object(c.useState)(null),
          O = Object(s.a)(g, 2),
          p = O[0],
          w = O[1];
        return (
          Object(c.useEffect)(
            function () {
              var e = null;
              (e =
                x.uid === (null === t || void 0 === t ? void 0 : t.uid1)
                  ? null === t || void 0 === t
                    ? void 0
                    : t.uid2
                  : null === t || void 0 === t
                  ? void 0
                  : t.uid1),
                h
                  .get("/user/".concat(e))
                  .then(function (e) {
                    w(e.data);
                  })
                  .catch(function (e) {
                    return console.log(e), null;
                  });
            },
            [t, null === x || void 0 === x ? void 0 : x.uid]
          ),
          Object(f.jsx)(f.Fragment, {
            children: Object(f.jsx)("p", {
              id: null === t || void 0 === t ? void 0 : t._id,
              onClick: function () {
                n(null === t || void 0 === t ? void 0 : t._id),
                  d.push(
                    ""
                      .concat(l.path, "?idq=")
                      .concat(i, "&idcomment=")
                      .concat(
                        null === t || void 0 === t ? void 0 : t.commentId,
                        "&idchat="
                      )
                      .concat(null === t || void 0 === t ? void 0 : t._id)
                  );
              },
              className: "block border-b",
              children: Object(f.jsx)("div", {
                className: u,
                children: Object(f.jsxs)("div", {
                  className: "flex flex-row items-center space-x-2",
                  children: [
                    Object(f.jsx)("img", {
                      alt: "",
                      src:
                        (null === p || void 0 === p ? void 0 : p.photoURL) ||
                        "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg",
                      className: "flex-none rounded-full w-6 h-6",
                    }),
                    Object(f.jsx)("strong", {
                      className: "flex-grow text-sm",
                      children: null === p || void 0 === p ? void 0 : p.name,
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
      var Y = function (e) {
        var t = e.idComment,
          n = e.handleSetChatContent,
          r = e.triggerNe,
          a = Object(c.useState)([]),
          i = Object(s.a)(a, 2),
          o = i[0],
          l = i[1],
          b = Object(c.useState)(!0),
          j = Object(s.a)(b, 2),
          x = j[0],
          v = j[1];
        Object(c.useEffect)(
          function () {
            m.onAuthStateChanged(
              (function () {
                var e = Object(u.a)(
                  Object(d.a)().mark(function e(n) {
                    var c;
                    return Object(d.a)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!n) {
                              e.next = 8;
                              break;
                            }
                            return v(n), (e.next = 4), n.getIdToken();
                          case 4:
                            (c = e.sent),
                              h
                                .get("/chat/".concat(t), {
                                  headers: { Authorization: c },
                                })
                                .then(function (e) {
                                  l(e.data);
                                }),
                              (e.next = 9);
                            break;
                          case 8:
                            v(!1);
                          case 9:
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            );
          },
          [t, r]
        );
        var g = (function () {
          var e = Object(u.a)(
            Object(d.a)().mark(function e(t) {
              var c;
              return Object(d.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (x) {
                        e.next = 4;
                        break;
                      }
                      alert("B\u1ea1n ch\u01b0a login"), (e.next = 8);
                      break;
                    case 4:
                      return (e.next = 6), x.getIdToken();
                    case 6:
                      (c = e.sent),
                        h
                          .get("/chat/content/".concat(t), {
                            headers: { Authorization: c },
                          })
                          .then(function (e) {
                            n(e.data);
                          });
                    case 8:
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return Object(f.jsx)(f.Fragment, {
          children: o
            ? o.map(function (e) {
                return Object(f.jsx)(
                  G,
                  { chithub: e, handlePickChat: g },
                  e._id
                );
              })
            : null,
        });
      };
      var W = function (e) {
        var t = e.content,
          n = e.user;
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsxs)("div", {
            className:
              "flex flex-row space-x-2 flex-row-reverse space-x-reverse",
            children: [
              Object(f.jsx)("img", {
                alt: "",
                src:
                  (null === n || void 0 === n ? void 0 : n.photoURL) ||
                  "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg",
                className: "flex-none rounded-full w-6 h-6",
              }),
              Object(f.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  Object(f.jsx)("div", {
                    className: "bg-blue-100 rounded p-2",
                    children: null === t || void 0 === t ? void 0 : t.content,
                  }),
                  Object(f.jsx)("div", {
                    className: "text-sm text-gray-600",
                    children: (function (e) {
                      function t(e) {
                        return 1 === e.length && (e = "0" + e), e;
                      }
                      var n = new Date(e),
                        c = n.getHours() + "",
                        r = n.getMinutes() + "",
                        a = n.getSeconds() + "";
                      return (c = t(c)) + ":" + (r = t(r)) + ":" + (a = t(a));
                    })(null === t || void 0 === t ? void 0 : t.date),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var Z = function (e) {
        var t = e.content,
          n = e.user;
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsxs)("div", {
            className: "flex flex-row space-x-2",
            children: [
              Object(f.jsx)("img", {
                alt: "",
                src:
                  (null === n || void 0 === n ? void 0 : n.photoURL) ||
                  "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg",
                className: "flex-none rounded-full w-6 h-6",
              }),
              Object(f.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  Object(f.jsx)("div", {
                    className: "bg-gray-200 rounded p-2",
                    children: null === t || void 0 === t ? void 0 : t.content,
                  }),
                  Object(f.jsx)("div", {
                    className: "text-sm text-gray-600",
                    children: (function (e) {
                      function t(e) {
                        return 1 === e.length && (e = "0" + e), e;
                      }
                      var n = new Date(e),
                        c = n.getHours() + "",
                        r = n.getMinutes() + "",
                        a = n.getSeconds() + "";
                      return (c = t(c)) + ":" + (r = t(r)) + ":" + (a = t(a));
                    })(null === t || void 0 === t ? void 0 : t.date),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var J = function (e) {
        var t,
          n,
          r = e._chatContent,
          a = Object(c.useState)(r),
          i = Object(s.a)(a, 2),
          o = i[0],
          l = i[1],
          b = Object(c.useState)(!0),
          j = Object(s.a)(b, 2),
          x = j[0],
          v = j[1];
        Object(c.useEffect)(function () {
          m.onAuthStateChanged(function (e) {
            v(e || !1);
          });
        }),
          Object(c.useEffect)(
            function () {
              m.onAuthStateChanged(
                (function () {
                  var e = Object(u.a)(
                    Object(d.a)().mark(function e(t) {
                      var n;
                      return Object(d.a)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t) {
                                e.next = 8;
                                break;
                              }
                              return (
                                x !== t && v(t), (e.next = 4), t.getIdToken()
                              );
                            case 4:
                              (n = e.sent),
                                h
                                  .get(
                                    "/chat/content/".concat(
                                      null === r || void 0 === r
                                        ? void 0
                                        : r._id
                                    ),
                                    { headers: { Authorization: n } }
                                  )
                                  .then(function (e) {
                                    l(e.data);
                                  }),
                                (e.next = 9);
                              break;
                            case 8:
                              v(!1);
                            case 9:
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
            [r, x]
          ),
          Object(c.useEffect)(function () {
            var e = setInterval(function () {
              m.onAuthStateChanged(
                (function () {
                  var e = Object(u.a)(
                    Object(d.a)().mark(function e(t) {
                      var n;
                      return Object(d.a)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t) {
                                e.next = 8;
                                break;
                              }
                              return (
                                x !== t && v(t), (e.next = 4), t.getIdToken()
                              );
                            case 4:
                              (n = e.sent),
                                h
                                  .get(
                                    "/chat/content/".concat(
                                      null === r || void 0 === r
                                        ? void 0
                                        : r._id
                                    ),
                                    { headers: { Authorization: n } }
                                  )
                                  .then(function (e) {
                                    e.data.content.length !==
                                      o.content.length && l(e.data);
                                  }),
                                (e.next = 9);
                              break;
                            case 8:
                              v(!1);
                            case 9:
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            }, 1500);
            return function () {
              return clearInterval(e);
            };
          });
        var g = Object(c.useState)([]),
          O = Object(s.a)(g, 2),
          p = O[0],
          w = O[1];
        Object(c.useEffect)(
          function () {
            var e = [];
            h.get("/user/".concat(null === o || void 0 === o ? void 0 : o.uid1))
              .then(function (e) {
                return e.data;
              })
              .then(function (t) {
                h.get(
                  "/user/".concat(null === o || void 0 === o ? void 0 : o.uid2)
                ).then(function (n) {
                  var c = n.data;
                  (null === t || void 0 === t ? void 0 : t.uid) ===
                  (null === x || void 0 === x ? void 0 : x.uid)
                    ? (e.push(t), e.push(c))
                    : (e.push(c), e.push(t)),
                    w(e);
                });
              })
              .catch(function (e) {
                return console.log(e), null;
              });
          },
          [o, x.uid]
        );
        var N = (function () {
          var e = Object(u.a)(
            Object(d.a)().mark(function e(t) {
              var n, c;
              return Object(d.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(n = document.querySelector("#inputChatContent").value)
                      ) {
                        e.next = 18;
                        break;
                      }
                      if (x) {
                        e.next = 6;
                        break;
                      }
                      alert("B\u1ea1n ch\u01b0a login"), (e.next = 18);
                      break;
                    case 6:
                      if ((t.preventDefault(), console.log(n), p)) {
                        e.next = 12;
                        break;
                      }
                      alert("B\u1ea1n ch\u01b0a login"), (e.next = 17);
                      break;
                    case 12:
                      return t.preventDefault(), (e.next = 15), x.getIdToken();
                    case 15:
                      (c = e.sent),
                        h
                          .post(
                            "/chat/content/".concat(
                              null === o || void 0 === o ? void 0 : o._id
                            ),
                            { content: n, date: new Date() },
                            { headers: { Authorization: c } }
                          )
                          .then(function () {
                            document.querySelector("#inputChatContent").value =
                              "";
                          });
                    case 17:
                    case 18:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return Object(f.jsx)(f.Fragment, {
          children: Object(f.jsxs)("div", {
            className: "w-2/5 border-l border-r border-gray-400 flex flex-col",
            children: [
              Object(f.jsxs)("div", {
                className:
                  "flex-none h-20 flex flex-row justify-between items-center p-5 border-b",
                children: [
                  Object(f.jsxs)("div", {
                    className: "flex flex-col space-y-1",
                    children: [
                      Object(f.jsx)("strong", {
                        children:
                          null === (t = p[1]) || void 0 === t ? void 0 : t.name,
                      }),
                      Object(f.jsxs)("label", {
                        class: "inline-flex items-center mt-3",
                        children: [
                          Object(f.jsx)("input", {
                            onClick: function () {
                              alert("Sorry, Coming soon...");
                            },
                            type: "checkbox",
                            class: "form-checkbox h-5 w-5 text-green-600",
                            checked: !0,
                          }),
                          Object(f.jsx)("span", {
                            class: "ml-2 text-gray-700",
                            children: "Private",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    className: "flex flex-row items-center",
                    children: [
                      Object(f.jsx)("p", {
                        onClick: function () {
                          alert("Sorry, Coming soon...");
                        },
                        className: "fas fa-phone mr-4",
                      }),
                      Object(f.jsx)("p", {
                        onClick: function () {
                          alert("Sorry, Coming soon...");
                        },
                        className: "fas fa-video",
                      }),
                    ],
                  }),
                ],
              }),
              Object(f.jsx)("div", {
                className: "flex-auto overflow-y-auto p-5 space-y-4",
                style: {
                  backgroundImage:
                    "url(https://static.intercomassets.com/ember/assets/images/messenger-backgrounds/background-1-99a36524645be823aabcd0e673cb47f8.png)",
                },
                children:
                  o &&
                  (null === o ||
                  void 0 === o ||
                  null === (n = o.content) ||
                  void 0 === n
                    ? void 0
                    : n.map(function (e) {
                        return e.uid ===
                          (null === x || void 0 === x ? void 0 : x.uid)
                          ? Object(f.jsx)(W, { content: e, user: x }, e._id)
                          : Object(f.jsx)(Z, { content: e, user: p[1] }, e._id);
                      })),
              }),
              Object(f.jsxs)("div", {
                className: "flex mb-4",
                children: [
                  Object(f.jsx)("textarea", {
                    id: "inputChatContent",
                    className:
                      "ml-1 w-full h-full outline-none border focus:border-blue-600 hover:border-blue-600 rounded p-4 shadow-lg",
                    defaultValue: "",
                  }),
                  Object(f.jsx)("button", {
                    onClick: N,
                    className:
                      "ml-1 mr-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded float-right",
                    children: "Send",
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var H = function (e) {
        var t = Object(c.useState)({}),
          n = Object(s.a)(t, 2),
          r = n[0],
          a = n[1],
          i = Object(o.g)(),
          d = new URLSearchParams(i.search),
          u = d.get("idq"),
          b = Object(c.useState)(d.get("idcomment")),
          j = Object(s.a)(b, 2),
          x = j[0],
          v = j[1],
          O = Object(o.h)(),
          p = Object(o.f)(),
          w = Object(c.useState)([]),
          N = Object(s.a)(w, 2),
          y = N[0],
          A = N[1],
          k = Object(c.useState)(null),
          q = Object(s.a)(k, 2),
          C = q[0],
          S = q[1],
          I = Object(c.useState)(!0),
          X = Object(s.a)(I, 2),
          F = X[0],
          P = X[1];
        Object(c.useEffect)(function () {
          m.onAuthStateChanged(function (e) {
            P(e || !1);
          });
        }),
          Object(c.useEffect)(
            function () {
              h.get("/question/".concat(u))
                .then(function (e) {
                  return e.data;
                })
                .then(function (e) {
                  h.get(
                    "/user/".concat(null === y || void 0 === y ? void 0 : y.uid)
                  )
                    .then(function (t) {
                      S(t.data), A(e);
                    })
                    .catch(function (e) {
                      return console.log(e), null;
                    });
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
            [u, null === y || void 0 === y ? void 0 : y.uid]
          );
        var T = function () {
            console.log("alo"), a({});
          },
          D = Object(c.useState)(null),
          U = Object(s.a)(D, 2),
          L = U[0],
          z = U[1];
        return Object(f.jsxs)(f.Fragment, {
          children: [
            Object(f.jsxs)("div", {
              className:
                "flex justify-between bg-gray-100 text-sm text-gray-700",
              children: [
                Object(f.jsx)("div", {
                  className: "flex items-center",
                  children: Object(f.jsx)(l.b, {
                    to: "/",
                    activeClassName: "active-menu",
                    exact: !0,
                    children: Object(f.jsx)("h2", {
                      className:
                        "text-red-500 font-svn-inter font-bold text-4xl ml-4 cursor-pointer",
                      children: "Frientor",
                    }),
                  }),
                }),
                Object(f.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    !F && Object(f.jsx)(g, { match_path: "user" }),
                    F &&
                      Object(f.jsxs)(f.Fragment, {
                        children: [
                          Object(f.jsx)("p", {
                            className: "block",
                            children: Object(f.jsx)(l.b, {
                              to: "user",
                              activeClassName: "active-menu",
                              exact: !0,
                              children: Object(f.jsx)("p", {
                                className: "block",
                                children:
                                  (null === F || void 0 === F
                                    ? void 0
                                    : F.displayName) ||
                                  (null === F || void 0 === F
                                    ? void 0
                                    : F.email),
                              }),
                            }),
                          }),
                          Object(f.jsx)("p", {
                            className: "block",
                            children: Object(f.jsx)("img", {
                              alt: "",
                              className: "rounded-full block py-3 px-3",
                              src:
                                (null === F || void 0 === F
                                  ? void 0
                                  : F.photoURL) ||
                                "https://i.pinimg.com/564x/ce/34/25/ce3425a53b03b8eecb176fcc0b4fd44e.jpg",
                              width: "62",
                              height: "62",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            Object(f.jsxs)("div", {
              className: "flex flex-row h-screen bg-gray-100",
              children: [
                Object(f.jsxs)("div", {
                  className:
                    "w-64 flex-none bg-gray-100 p-4 flex flex-col space-y-4",
                  children: [
                    Object(f.jsx)("div", {
                      className: "bg-red-300",
                      children: Object(f.jsx)("center", {
                        children: Object(f.jsx)("b", { children: "Question" }),
                      }),
                    }),
                    Object(f.jsxs)("div", {
                      className:
                        "flex flex-row justify-between items-center mb-6",
                      children: [
                        Object(f.jsxs)("h1", {
                          className: "font-semibold text-xs",
                          children: [
                            null === y || void 0 === y ? void 0 : y.content,
                            " - ",
                            null === C || void 0 === C ? void 0 : C.name,
                          ],
                        }),
                        Object(f.jsx)("svg", {
                          className: "flex-none w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: Object(f.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                          }),
                        }),
                      ],
                    }),
                    Object(f.jsx)("div", {
                      className: "bg-red-300",
                      children: Object(f.jsx)("center", {
                        children: Object(f.jsx)("b", { children: "Idea" }),
                      }),
                    }),
                    Object(f.jsx)(E, {
                      idQuestion: u,
                      handleClickIdea: function (e) {
                        e !== x && v(e),
                          p.push(
                            ""
                              .concat(O.path, "?idq=")
                              .concat(u, "&idcomment=")
                              .concat(e)
                          );
                      },
                      triggerRefreshChat: T,
                    }),
                  ],
                }),
                Object(f.jsxs)("div", {
                  className:
                    "flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl",
                  children: [
                    Object(f.jsx)(B, { idComment: x, handleChithubEvent: T }),
                    Object(f.jsxs)("div", {
                      className: "flex flex-col w-1/5",
                      children: [
                        Object(f.jsx)("div", {
                          className: "flex-none h-20 bg-yellow-200",
                          children: Object(f.jsxs)("center", {
                            children: [
                              " ",
                              Object(f.jsx)("p", {
                                className: "mt-6",
                                children: Object(f.jsx)("b", {
                                  children: "Chithub",
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(f.jsx)("div", {
                          className: "flex-auto overflow-y-auto",
                          children: Object(f.jsx)(Y, {
                            idComment: x,
                            handleSetChatContent: function (e) {
                              e !== L && z(e);
                            },
                            triggerNe: r,
                          }),
                        }),
                      ],
                    }),
                    Object(f.jsx)(J, { _chatContent: L }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var Q = function () {
          return Object(f.jsx)("div", {
            className: "App",
            children: Object(f.jsxs)(o.c, {
              children: [
                Object(f.jsx)(o.a, {
                  path: "/",
                  exact: !0,
                  children: Object(f.jsx)(w, {}),
                }),
                Object(f.jsx)(o.a, {
                  path: "/user",
                  children: Object(f.jsx)(p, {}),
                }),
                Object(f.jsx)(o.a, {
                  path: "/search",
                  exact: !0,
                  children: Object(f.jsx)(F, {}),
                }),
                Object(f.jsx)(o.a, {
                  path: "/question",
                  exact: !0,
                  children: Object(f.jsx)(R, {}),
                }),
                Object(f.jsx)(o.a, {
                  path: "/chat",
                  exact: !0,
                  children: Object(f.jsx)(H, {}),
                }),
                Object(f.jsx)(o.a, { children: Object(f.jsx)(P, {}) }),
              ],
            }),
          });
        },
        K = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 71))
              .then(function (t) {
                var n = t.getCLS,
                  c = t.getFID,
                  r = t.getFCP,
                  a = t.getLCP,
                  i = t.getTTFB;
                n(e), c(e), r(e), a(e), i(e);
              });
        };
      i.a.render(
        Object(f.jsx)(r.a.StrictMode, {
          children: Object(f.jsx)(l.a, { children: Object(f.jsx)(Q, {}) }),
        }),
        document.getElementById("root")
      ),
        K();
    },
  },
  [[70, 1, 2]],
]);
//# sourceMappingURL=main.45ecf04c.chunk.js.map
