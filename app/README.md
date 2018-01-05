# Important informations

NATIVESCRIPT-ANGULAR-CLI - https://www.npmjs.com/package/nativescript-angular-cli
```
tns generate component <component-name>
tns g c <component-name>
tns generate module <module-name>
tns g m <module-name>
tns generate service <service-name>
tns g s <service-name>
tns generate shared-module <module-name>
tns g sm <module-name>
```

TNS-NG - https://www.npmjs.com/package/tns-ng
```
	Component	tng g component my-component
	Service		tng g service my-service
```

https://developer.android.com/studio/run/emulator-commandline.html	
```
	emulator -list-avds
	emulator -avd avd_name
	emulator @avd_name

	emulator -avd Galaxy_Nexus_API_25
```
	
https://play.google.com/apps/publish/?account=7776469193716073940#AppListPlace

Declaring Tablet Layouts for Android 3.2
	https://developer.android.com/guide/practices/screens_support.html#DeclaringTabletLayouts
	
	https://developer.telerik.com/featured/demystifying-nativescript-layouts/
	
	https://docs.nativescript.org/ui/styling#supported-css-properties
	
	
```
System.err: Calling js method onCreateView failed
System.err:
System.err: TypeError: Cannot read property 'unit' of undefined
System.err: File: "file:///data/data/org.nativescript.BeePakKalendar/files/app/tns_modules/tns-core-modules/ui/core/view/view.js, line: 539, column: 27
```
>A html view-ben változó kötés van [] de a componensben még nincs inicializálva (undefined) az osztály deklarációjában.