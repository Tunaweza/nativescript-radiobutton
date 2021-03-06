"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var viewModel = new main_view_model_1.HelloWorldModel();
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
function onChanged(args) {
    console.log("onChanged called. Selected: " + args.value);
    if (args.object.bindingContext) {
        args.object.bindingContext.set('selectedOption', args.value);
        args.object.bindingContext.set('color', 'blue');
    }
}
exports.onChanged = onChanged;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EscURBQW9EO0FBRXBELElBQU0sU0FBUyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBR3hDLG9CQUEyQixJQUEwQjtJQUVqRCxJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ3BDLENBQUM7QUFKRCxnQ0FJQztBQUVELG1CQUEyQixJQUF1QjtJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUErQixJQUFJLENBQUMsS0FBTyxDQUFDLENBQUM7SUFDekQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0FBQ0gsQ0FBQztBQU5ELDhCQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgb2JzZXJ2YWJsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBwYWdlcyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRFdmVudERhdGEgfSBmcm9tICduYXRpdmVzY3JpcHQtcmFkaW9idXR0b24nO1xuaW1wb3J0IHsgSGVsbG9Xb3JsZE1vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xuXG5jb25zdCB2aWV3TW9kZWwgPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgJ2xvYWRlZCcgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogb2JzZXJ2YWJsZS5FdmVudERhdGEpIHtcbiAgICAvLyBHZXQgdGhlIGV2ZW50IHNlbmRlclxuICAgIGxldCBwYWdlID0gPHBhZ2VzLlBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2hhbmdlZCAoYXJnczogU2VsZWN0ZWRFdmVudERhdGEpOiB2b2lkIHtcbiAgY29uc29sZS5sb2coYG9uQ2hhbmdlZCBjYWxsZWQuIFNlbGVjdGVkOiAke2FyZ3MudmFsdWV9YCk7XG4gIGlmKGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0KSB7XG4gICAgYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQuc2V0KCdzZWxlY3RlZE9wdGlvbicsIGFyZ3MudmFsdWUpO1xuICAgIGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0LnNldCgnY29sb3InLCAnYmx1ZScpO1xuICB9XG59XG5cbiJdfQ==