# Jetpack AppCompat 布局加载

## setContentView()


```kotlin
/**
 * [androidx.appcompat.app.AppCompatDelegateImpl.setContentView]
 * [androidx.appcompat.app.AppCompatDelegateImpl.ensureSubDecor]
 * [androidx.appcompat.app.AppCompatDelegateImpl.createSubDecor]
 * NoTitle
 * - [androidx.appcompat.R.layout.abc_screen_simple_overlay_action_mode]
 * - [androidx.appcompat.R.layout.abc_screen_simple]
 *   -> [androidx.appcompat.widget.ViewStubCompat]
 *   ->  [androidx.appcompat.R.layout.abc_action_mode_bar]
 * Title
 * - Floating [androidx.appcompat.R.layout.abc_dialog_title_material]
 * - ActionBar[androidx.appcompat.R.layout.abc_screen_toolbar]
 *   -> [androidx.appcompat.widget.ActionBarOverlayLayout]
 *   ->  [androidx.appcompat.widget.ActionBarContainer]
 *   ->   [androidx.appcompat.widget.Toolbar]
 *   ->   [androidx.appcompat.widget.ActionBarContextView]
 *
 * content [androidx.appcompat.R.layout.abc_screen_content_include]
 * -> [androidx.appcompat.widget.ContentFrameLayout]
 */
```