## Starter

Building APK key

```

yarn install
mkdir -p android/app/src/main/assets
yarn clean:android && rm -rf android/app/build
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd android && ./gradlew clean assembleRelease && cd ../

```

You can find the build here : `/android/app/build/outputs/apk/release`

### Or if you want to generate AAP instead

cd android && ./gradlew bundleRelease && cd ../

### Testing the release build of your app

npx react-native run-android --variant=release

### Fix some ios bugs

cd ios && rm Podfile.lock && pod deintegrate && pod install && cd .. && yarn clean:ios
// pas nécessaire a priori … nécessaire pour build
npx react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios' --assets-dest ios
yarn ios

```

```
