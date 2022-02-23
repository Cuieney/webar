!(function (e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        const s = (i[n] = { exports: {}, id: n, loaded: !1 });
        return e[n].call(s.exports, s, s.exports, t), (s.loaded = !0), s.exports;
    }
    var i = {};
    return (t.m = e), (t.c = i), (t.p = ''), t(0);
})([
    function (e, t, i) {
        function n(e) {
            return e && e.__esModule ? e : { default: e };
        }
        const s = i(1);
        const o = n(s);
        if (typeof AFRAME === 'undefined')
            throw 'mouse-cursor Component attempted to register before AFRAME was available.';
        const r = AFRAME.utils.device.isMobile() || window.hasNonPolyfillWebVRSupport;
        AFRAME.registerComponent('mouse-cursor', {
            schema: {},
            init() {
                (this._raycaster = new THREE.Raycaster()),
                    (this._mouse = new THREE.Vector2()),
                    (this._isMobile = this.el.sceneEl.isMobile),
                    (this._isStereo = !1),
                    (this._active = !1),
                    (this._isDown = !1),
                    (this._intersectedEl = null),
                    this._attachEventListeners(),
                    (this._canvasSize = !1),
                    (this.__getCanvasPos = this._getCanvasPos.bind(this)),
                    (this.__getCanvasPos = this._getCanvasPos.bind(this)),
                    (this.__onEnterVR = this._onEnterVR.bind(this)),
                    (this.__onExitVR = this._onExitVR.bind(this)),
                    (this.__onDown = this._onDown.bind(this)),
                    (this.__onClick = this._onClick.bind(this)),
                    (this.__onMouseMove = this._onMouseMove.bind(this)),
                    (this.__onRelease = this._onRelease.bind(this)),
                    (this.__onTouchMove = this._onTouchMove.bind(this)),
                    (this.__onComponentChanged = this._onComponentChanged.bind(this));
            },
            update(e) { },
            remove() {
                this._removeEventListeners(), (this._raycaster = null);
            },
            pause() {
                this._active = !1;
            },
            play() {
                this._active = !0;
            },
            _attachEventListeners() {
                const e = this.el;
                const t = e.sceneEl;
                const i = t.canvas;
                return i
                    ? (window.addEventListener('resize', this.__getCanvasPos),
                        document.addEventListener('scroll', this.__getCanvasPos),
                        this._getCanvasPos(),
                        t.addEventListener('enter-vr', this.__onEnterVR),
                        t.addEventListener('exit-vr', this.__onExitVR),
                        i.addEventListener('mousedown', this.__onDown),
                        i.addEventListener('mousemove', this.__onMouseMove),
                        i.addEventListener('mouseup', this.__onRelease),
                        i.addEventListener('mouseout', this.__onRelease),
                        i.addEventListener('touchstart', this.__onDown),
                        i.addEventListener('touchmove', this.__onTouchMove),
                        i.addEventListener('touchend', this.__onRelease),
                        i.addEventListener('click', this.__onClick),
                        void e.addEventListener('componentchanged', this.__onComponentChanged))
                    : void e.sceneEl.addEventListener('render-target-loaded', this._attachEventListeners.bind(this));
            },
            _removeEventListeners() {
                const e = this.el;
                const t = e.sceneEl;
                const i = t.canvas;
                i &&
                    (window.removeEventListener('resize', this.__getCanvasPos),
                        document.removeEventListener('scroll', this.__getCanvasPos),
                        t.removeEventListener('enter-vr', this.__onEnterVR),
                        t.removeEventListener('exit-vr', this.__onExitVR),
                        i.removeEventListener('mousedown', this.__onDown),
                        i.removeEventListener('mousemove', this.__onMouseMove),
                        i.removeEventListener('mouseup', this.__onRelease),
                        i.removeEventListener('mouseout', this.__onRelease),
                        i.removeEventListener('touchstart', this.__onDown),
                        i.removeEventListener('touchmove', this.__onTouchMove),
                        i.removeEventListener('touchend', this.__onRelease),
                        i.removeEventListener('click', this.__onClick),
                        e.removeEventListener('componentchanged', this.__onComponentChanged));
            },
            _isActive() {
                return !(!this._active && !this._raycaster);
            },
            _onDown(e) {
                this._isActive() &&
                    ((this._isDown = !0),
                        this._updateMouse(e),
                        this._updateIntersectObject(),
                        this._isMobile || this._setInitMousePosition(e),
                        this._intersectedEl && this._emit('mousedown'));
            },
            _onClick(e) {
                this._isActive() &&
                    (this._updateMouse(e), this._updateIntersectObject(), this._intersectedEl && this._emit('click'));
            },
            _onRelease() {
                if (this._isActive()) {
                    if (this._defMousePosition) {
                        const e = Math.abs(this._initMousePosition.x - this._defMousePosition.x);
                        const t = Math.abs(this._initMousePosition.y - this._defMousePosition.y);
                        const i = Math.max(e, t);
                        i > 0.04 && (this._isDown = !1);
                    }
                    this._isDown && this._intersectedEl && this._emit('mouseup'), (this._isDown = !1), this._resetMousePosition();
                }
            },
            _onMouseMove(e) {
                this._isActive() &&
                    (this._updateMouse(e), this._updateIntersectObject(), this._isDown && this._setMousePosition(e));
            },
            _onTouchMove(e) {
                this._isActive() && (this._isDown = !1);
            },
            _onEnterVR() {
                r && (this._isStereo = !0), this._getCanvasPos();
            },
            _onExitVR() {
                (this._isStereo = !1), this._getCanvasPos();
            },
            _onComponentChanged(e) {
                e.detail.name === 'position' && this._updateIntersectObject();
            },
            _getPosition(e) {
                const t = this._canvasSize;
                const i = t.width;
                const n = t.height;
                const s = t.left;
                const o = t.top;
                let r = void 0;
                let h = void 0;
                if (this._isMobile) {
                    const c = e.touches;
                    if (!c || c.length !== 1) return;
                    const _ = c[0];
                    (r = _.clientX), (h = _.clientY);
                } else (r = e.clientX), (h = e.clientY);
                (r -= s), (h -= o), this._isStereo && (r = (r % (i / 2)) * 2);
                const a = (r / i) * 2 - 1;
                const u = 2 * -(h / n) + 1;
                return { x: a, y: u };
            },
            _updateMouse(e) {
                const t = this._getPosition(e);
                t && ((this._mouse.x = t.x), (this._mouse.y = t.y));
            },
            _setMousePosition(e) {
                this._defMousePosition = this._getPosition(e);
            },
            _setInitMousePosition(e) {
                this._initMousePosition = this._getPosition(e);
            },
            _resetMousePosition() {
                this._initMousePosition = this._defMousePosition = null;
            },
            _getCanvasPos() {
                this._canvasSize = this.el.sceneEl.canvas.getBoundingClientRect();
            },
            _getChildren(e) {
                const t = this;
                return e.children.map(function (e) {
                    return e.type === 'Group' ? t._getChildren(e) : e;
                });
            },
            _getAllChildren() {
                const e = this._getChildren(this.el.sceneEl.object3D);
                return (0, o.default)(e);
            },
            _updateIntersectObject() {
                const e = this._raycaster;
                const t = this.el;
                const i = this._mouse;
                const n = (t.sceneEl.object3D, this.el.getObject3D('camera'));
                this._getAllChildren(),
                    e.ray.origin.setFromMatrixPosition(n.matrixWorld),
                    e.ray.direction.set(i.x, i.y, 0.5).unproject(n).sub(e.ray.origin).normalize();
                const s = this._getAllChildren();
                const o = e.intersectObjects(s);
                if (o.length > 0) {
                    let r = void 0;
                    if (
                        (o.every(function (e) {
                            return e.object.parent.visible !== !0 || ((r = e.object), !1);
                        }),
                            !r)
                    )
                        return void this._clearIntersectObject();
                    const h = r.parent.el;
                    if (this._intersectedEl === h) return;
                    this._clearIntersectObject(), this._setIntersectObject(h);
                } else this._clearIntersectObject();
            },
            _setIntersectObject(e) {
                (this._intersectedEl = e),
                    this._isMobile || (e.addState('hovered'), e.emit('mouseenter'), this.el.addState('hovering'));
            },
            _clearIntersectObject() {
                const e = this._intersectedEl;
                e && !this._isMobile && (e.removeState('hovered'), e.emit('mouseleave'), this.el.removeState('hovering')),
                    (this._intersectedEl = null);
            },
            _emit(e) {
                const t = this._intersectedEl;
                this.el.emit(e, { target: t }), t && t.emit(e);
            },
        });
    },
    function (e, t) {
        (function (t) {
            function i(e, t) {
                for (let i = -1, n = t.length, s = e.length; ++i < n;) e[s + i] = t[i];
                return e;
            }
            function n(e, t, o, r, h) {
                let c = -1;
                const _ = e.length;
                for (o || (o = s), h || (h = []); ++c < _;) {
                    const a = e[c];
                    t > 0 && o(a) ? (t > 1 ? n(a, t - 1, o, r, h) : i(h, a)) : r || (h[h.length] = a);
                }
                return h;
            }
            function s(e) {
                return w(e) || r(e) || !!(y && e && e[y]);
            }
            function o(e) {
                const t = e ? e.length : 0;
                return t ? n(e, v) : [];
            }
            function r(e) {
                return c(e) && C.call(e, 'callee') && (!j.call(e, 'callee') || P.call(e) == f);
            }
            function h(e) {
                return e != null && a(e.length) && !_(e);
            }
            function c(e) {
                return l(e) && h(e);
            }
            function _(e) {
                const t = u(e) ? P.call(e) : '';
                return t == m || t == E;
            }
            function a(e) {
                return typeof e === 'number' && e > -1 && e % 1 == 0 && e <= d;
            }
            function u(e) {
                const t = typeof e;
                return !!e && (t == 'object' || t == 'function');
            }
            function l(e) {
                return !!e && typeof e === 'object';
            }
            var v = 1 / 0;
            var d = 9007199254740991;
            var f = '[object Arguments]';
            var m = '[object Function]';
            var E = '[object GeneratorFunction]';
            const b = typeof t === 'object' && t && t.Object === Object && t;
            const p = typeof self === 'object' && self && self.Object === Object && self;
            const g = b || p || Function('return this')();
            const M = Object.prototype;
            var C = M.hasOwnProperty;
            var P = M.toString;
            const L = g.Symbol;
            var j = M.propertyIsEnumerable;
            var y = L ? L.isConcatSpreadable : void 0;
            var w = Array.isArray;
            e.exports = o;
        }.call(
            t,
            (function () {
                return this;
            })(),
        ));
    },
]);
