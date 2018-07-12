"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var color_1 = require("tns-core-modules/color");
var platform_1 = require("tns-core-modules/platform");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var label_1 = require("tns-core-modules/ui/label");
var GroupCheckedChangeListener;
function initializeGroupCheckedChangeListener() {
    if (GroupCheckedChangeListener) {
        return;
    }
    var GroupCheckedChangeListenerImpl = (function (_super) {
        __extends(GroupCheckedChangeListenerImpl, _super);
        function GroupCheckedChangeListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        GroupCheckedChangeListenerImpl.prototype.onCheckedChanged = function (sender, checkedId) {
            if (this.owner) {
                exports.checkedButtonProperty.nativeValueChange(this.owner, checkedId);
                var view = this.owner.android.findViewById(checkedId);
                this.owner.notify({
                    eventName: RadioGroup.selectedEvent,
                    object: this.owner,
                    checkId: checkedId,
                    value: view.getText(),
                });
            }
        };
        GroupCheckedChangeListenerImpl = __decorate([
            Interfaces([android.widget.RadioGroup.OnCheckedChangeListener]),
            __metadata("design:paramtypes", [RadioGroup])
        ], GroupCheckedChangeListenerImpl);
        return GroupCheckedChangeListenerImpl;
    }(java.lang.Object));
    GroupCheckedChangeListener = GroupCheckedChangeListenerImpl;
}
var ButtonCheckedChangeListener;
function initializeButtonCheckedChangeListener() {
    if (ButtonCheckedChangeListener) {
        return;
    }
    var ButtonCheckedChangeListenerImpl = (function (_super) {
        __extends(ButtonCheckedChangeListenerImpl, _super);
        function ButtonCheckedChangeListenerImpl(owner) {
            var _this = _super.call(this) || this;
            _this.owner = owner;
            return global.__native(_this);
        }
        ButtonCheckedChangeListenerImpl.prototype.onCheckedChanged = function (buttonView, isChecked) {
            if (this.owner) {
                exports.checkedButtonProperty.nativeValueChange(this.owner, isChecked);
            }
        };
        ButtonCheckedChangeListenerImpl = __decorate([
            Interfaces([android.widget.CompoundButton.OnCheckedChangeListener]),
            __metadata("design:paramtypes", [RadioButton])
        ], ButtonCheckedChangeListenerImpl);
        return ButtonCheckedChangeListenerImpl;
    }(java.lang.Object));
    ButtonCheckedChangeListener = ButtonCheckedChangeListenerImpl;
}
exports.checkedButtonProperty = new view_1.Property({ name: 'checkedButton' });
var RadioGroup = (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup() {
        return _super.call(this) || this;
    }
    Object.defineProperty(RadioGroup.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "checkedButton", {
        get: function () {
            return this._getValue(exports.checkedButtonProperty);
        },
        set: function (value) {
            this._setValue(exports.checkedButtonProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "fillColor", {
        get: function () {
            return this._fillColor;
        },
        set: function (color) {
            this._fillColor = color;
            if (this._android && platform_1.device.sdkVersion >= "21")
                this._android.setButtonTintList(android.content.res.ColorStateList.valueOf(new color_1.Color(this._fillColor).android));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "tintColor", {
        get: function () {
            return this.fillColor;
        },
        set: function (color) {
            this.fillColor = color;
        },
        enumerable: true,
        configurable: true
    });
    RadioGroup.prototype.createNativeView = function () {
        initializeGroupCheckedChangeListener();
        this._android = new android.widget.RadioGroup(this._context);
        var listener = new GroupCheckedChangeListener(this);
        this._android.setOnCheckedChangeListener(listener);
        this._android.listener = listener;
        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
        return this._android;
    };
    RadioGroup.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeViewProtected;
        nativeView.listener.owner = this;
    };
    RadioGroup.prototype.disposeNativeView = function () {
        var nativeView = this.nativeViewProtected;
        nativeView.listener.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    RadioGroup.selectedEvent = 'selected';
    return RadioGroup;
}(stack_layout_1.StackLayout));
exports.RadioGroup = RadioGroup;
exports.checkedButtonProperty.register(RadioGroup);
exports.checkedProperty = new view_1.Property({
    name: 'checked',
    defaultValue: false,
    valueConverter: view_1.booleanConverter
});
exports.enabledProperty = new view_1.Property({
    name: 'enabled',
    defaultValue: true,
    valueConverter: view_1.booleanConverter
});
exports.textProperty = new view_1.Property({
    name: 'text'
});
exports.fillColorProperty = new view_1.CssProperty({
    name: 'fillColor',
    cssName: 'fill-color',
    valueConverter: function (v) {
        return String(v);
    }
});
exports.tintColorProperty = new view_1.CssProperty({
    name: 'tintColor',
    cssName: 'tint-color',
    defaultValue: 'black',
    valueConverter: function (v) {
        return String(v);
    }
});
var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton() {
        return _super.call(this) || this;
    }
    Object.defineProperty(RadioButton.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "checkStyle", {
        get: function () {
            return this._checkStyle;
        },
        set: function (style) {
            this._checkStyle = style;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "checkPadding", {
        get: function () {
            return this._checkPadding;
        },
        set: function (padding) {
            this._checkPadding = padding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "checkPaddingLeft", {
        get: function () {
            return this._checkPaddingLeft;
        },
        set: function (padding) {
            this._checkPaddingLeft = padding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "checkPaddingTop", {
        get: function () {
            return this._checkPaddingTop;
        },
        set: function (padding) {
            this._checkPaddingTop = padding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "checkPaddingRight", {
        get: function () {
            return this._checkPaddingRight;
        },
        set: function (padding) {
            this._checkPaddingRight = padding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "checkPaddingBottom", {
        get: function () {
            return this._checkPaddingBottom;
        },
        set: function (padding) {
            this._checkPaddingBottom = padding;
        },
        enumerable: true,
        configurable: true
    });
    RadioButton.prototype[exports.checkedProperty.getDefault] = function () {
        return false;
    };
    RadioButton.prototype[exports.checkedProperty.setNative] = function (value) {
        this.nativeViewProtected.setChecked(Boolean(value));
    };
    RadioButton.prototype[exports.textProperty.getDefault] = function () {
        return "";
    };
    RadioButton.prototype[exports.textProperty.setNative] = function (value) {
        this.nativeViewProtected.setText(java.lang.String.valueOf(value));
    };
    Object.defineProperty(RadioButton.prototype, "enabled", {
        get: function () {
            return this._getValue(exports.enabledProperty);
        },
        set: function (value) {
            this._setValue(exports.enabledProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "text", {
        get: function () {
            return this._getValue(exports.textProperty);
        },
        set: function (value) {
            this._setValue(exports.textProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "fillColor", {
        get: function () {
            return this.style.fillColor;
        },
        set: function (color) {
            this.style.fillColor = color;
            if (this._android && platform_1.device.sdkVersion >= "21") {
                this._android.setButtonTintList(android.content.res.ColorStateList.valueOf(new color_1.Color(color).android));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButton.prototype, "tintColor", {
        get: function () {
            return this.style.fillColor;
        },
        set: function (color) {
            this.style.fillColor = color;
        },
        enumerable: true,
        configurable: true
    });
    RadioButton.prototype.createNativeView = function () {
        initializeButtonCheckedChangeListener();
        this._android = new android.widget.RadioButton(this._context, null);
        if (this.checkPaddingLeft) {
            this._android.setPadding(parseInt(this.checkPaddingLeft), this._android.getPaddingTop(), this._android.getPaddingRight(), this._android.getPaddingBottom());
        }
        if (this.checkPaddingTop) {
            this._android.setPadding(this._android.getPaddingLeft(), parseInt(this.checkPaddingTop), this._android.getPaddingRight(), this._android.getPaddingBottom());
        }
        if (this.checkPaddingRight) {
            this._android.setPadding(this._android.getPaddingLeft(), this._android.getPaddingTop(), parseInt(this.checkPaddingRight), this._android.getPaddingBottom());
        }
        if (this.checkPaddingBottom) {
            this._android.setPadding(this._android.getPaddingLeft(), this._android.getPaddingTop(), this._android.getPaddingRight(), parseInt(this.checkPaddingBottom));
        }
        if (this.checkPadding) {
            var pads = this.checkPadding.toString().split(',');
            switch (pads.length) {
                case 1:
                    this._android.setPadding(parseInt(pads[0]), parseInt(pads[0]), parseInt(pads[0]), parseInt(pads[0]));
                    break;
                case 2:
                    this._android.setPadding(parseInt(pads[0]), parseInt(pads[1]), parseInt(pads[0]), parseInt(pads[1]));
                    break;
                case 3:
                    this._android.setPadding(parseInt(pads[0]), parseInt(pads[1]), parseInt(pads[2]), parseInt(pads[1]));
                    break;
                case 4:
                    this._android.setPadding(parseInt(pads[0]), parseInt(pads[1]), parseInt(pads[2]), parseInt(pads[3]));
                    break;
            }
        }
        if (this.text) {
            this._android.setText(this.text);
        }
        if (this.enabled) {
            this._android.setEnabled(this.enabled);
        }
        if (!this.fontSize) {
            this.fontSize = 15;
        }
        var listener = new ButtonCheckedChangeListener(this);
        this._android.setOnCheckedChangeListener(listener);
        this._android.listener = listener;
        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
        return this._android;
    };
    RadioButton.prototype.toggle = function () {
        this._android.toggle();
    };
    return RadioButton;
}(label_1.Label));
exports.RadioButton = RadioButton;
exports.checkedProperty.register(RadioButton);
exports.enabledProperty.register(RadioButton);
exports.textProperty.register(RadioButton);
exports.fillColorProperty.register(view_1.Style);
exports.tintColorProperty.register(view_1.Style);
//# sourceMappingURL=radiogroup.android.js.map