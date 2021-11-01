## Starter

Building APK key

```

yarn install
mkdir -p android/app/src/main/assets
yarn clean:android && rm -rf android/app/build
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
rm -rf android/app/src/main/res/drawable-\* android/app/src/main/res/raw
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

### Create Sprint (Demo) Release

```

# This suppose that you are currently in develop branch

# Branch must always start with 'release/' followed by any name of your release

git checkout -b release/sprint1
git push -u origin release/sprint1

# This push will trigger the release CI/CD pipeline and distribute to App Center

```

### How to execute Appium End2End Test

```

# You have to locally test your Appium script before running it on AppCenter

# Create a new branch that start with 'end2end/' followed by meaningful name for your test

git checkout -b end2end/users_scenario1
git push -u origin end2end/users_scenario1

# This will trigger CI/CD pipeline that will build and run your test on Appcenter

# Once you finish the Test you have to Merge it into develop

```

## Generate hashed certificate public key

### Recette

openssl s_client -servername recettebes.bankofafrica.ma -connect recettebes.bankofafrica.ma:443 | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64

### Prod

openssl s_client -servername www.dabatransfer.com -connect www.dabatransfer.com:443 | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64

```

```
