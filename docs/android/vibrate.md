# Vibrate

```xml
<uses-permission android:name="android.permission.VIBRATE"/>
```

```kotlin
fun vibrate(context: Context, duration: Long) {
    try {
        val vibratorManager = context.getSystemService(
            Context.VIBRATOR_MANAGER_SERVICE
        ) as VibratorManager

        val vibrator = vibratorManager.defaultVibrator

        if (vibrator.hasVibrator()) {
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
                val vibrationEffect = VibrationEffect.createOneShot(
                    duration, VibrationEffect.DEFAULT_AMPLITUDE
                )
                vibrator.vibrate(vibrationEffect)
            } else {
                @Suppress("DEPRECATION")
                vibrator.vibrate(duration)
            }
        }
    } catch (e: Throwable) {
        e.printStackTrace()
    }
}
```

