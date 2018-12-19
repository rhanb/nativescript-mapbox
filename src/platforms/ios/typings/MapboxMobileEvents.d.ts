
declare class MMEAPIClient extends NSObject implements MMEAPIClientProtocol {

	static alloc(): MMEAPIClient; // inherited from NSObject

	static new(): MMEAPIClient; // inherited from NSObject

	accessToken: string; // inherited from MMEAPIClientProtocol

	baseURL: NSURL; // inherited from MMEAPIClientProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hostSDKVersion: string; // inherited from MMEAPIClientProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	userAgentBase: string; // inherited from MMEAPIClientProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { accessToken: string; userAgentBase: string; hostSDKVersion: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getConfigurationWithCompletionHandler(completionHandler: (p1: NSError, p2: NSData) => void): void;

	initWithAccessTokenUserAgentBaseHostSDKVersion(accessToken: string, userAgentBase: string, hostSDKVersion: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	postEventCompletionHandler(event: MMEEvent, completionHandler: (p1: NSError) => void): void;

	postEventsCompletionHandler(events: NSArray<any>, completionHandler: (p1: NSError) => void): void;

	postMetadataFilePathsCompletionHandler(metadata: NSArray<any>, filePaths: NSArray<any>, completionHandler: (p1: NSError) => void): void;

	reconfigure(configuration: MMEEventsConfiguration): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	statusErrorFromRequestAndHTTPResponse(request: NSURLRequest, httpResponse: NSHTTPURLResponse): NSError;

	unexpectedResponseErrorfromRequestAndResponse(request: NSURLRequest, response: NSURLResponse): NSError;
}

declare var MMEAPIClientAttachmentsHeaderFieldContentTypeValue: string;

declare var MMEAPIClientAttachmentsPath: string;

declare var MMEAPIClientBaseAPIURL: string;

declare var MMEAPIClientBaseChinaAPIURL: string;

declare var MMEAPIClientBaseChinaEventsURL: string;

declare var MMEAPIClientBaseURL: string;

declare var MMEAPIClientEventsConfigPath: string;

declare var MMEAPIClientEventsPath: string;

declare var MMEAPIClientHTTPMethodGet: string;

declare var MMEAPIClientHTTPMethodPost: string;

declare var MMEAPIClientHeaderFieldContentEncodingKey: string;

declare var MMEAPIClientHeaderFieldContentTypeKey: string;

declare var MMEAPIClientHeaderFieldContentTypeValue: string;

declare var MMEAPIClientHeaderFieldUserAgentKey: string;

interface MMEAPIClientProtocol extends NSObjectProtocol {

	accessToken: string;

	baseURL: NSURL;

	hostSDKVersion: string;

	userAgentBase: string;

	getConfigurationWithCompletionHandler?(completionHandler: (p1: NSError, p2: NSData) => void): void;

	postEventCompletionHandler(event: MMEEvent, completionHandler: (p1: NSError) => void): void;

	postEventsCompletionHandler(events: NSArray<any>, completionHandler: (p1: NSError) => void): void;

	postMetadataFilePathsCompletionHandler(metadata: NSArray<any>, filePaths: NSArray<any>, completionHandler: (p1: NSError) => void): void;

	reconfigure?(configuration: MMEEventsConfiguration): void;

	statusErrorFromRequestAndHTTPResponse?(request: NSURLRequest, httpResponse: NSHTTPURLResponse): NSError;

	unexpectedResponseErrorfromRequestAndResponse?(request: NSURLRequest, response: NSURLResponse): NSError;
}
declare var MMEAPIClientProtocol: {

	prototype: MMEAPIClientProtocol;
};

declare var MMEApplicationStateBackground: string;

declare var MMEApplicationStateForeground: string;

declare var MMEApplicationStateInactive: string;

declare var MMEApplicationStateUnknown: string;

declare class MMECategoryLoader extends NSObject {

	static alloc(): MMECategoryLoader; // inherited from NSObject

	static loadCategories(): void;

	static new(): MMECategoryLoader; // inherited from NSObject
}

declare class MMECommonEventData extends NSObject {

	static alloc(): MMECommonEventData; // inherited from NSObject

	static new(): MMECommonEventData; // inherited from NSObject

	iOSVersion: string;

	model: string;

	scale: number;

	vendorId: string;

	applicationState(): string;
}

declare class MMEConfigurator extends NSObject {

	static alloc(): MMEConfigurator; // inherited from NSObject

	static new(): MMEConfigurator; // inherited from NSObject

	delegate: MMEConfiguratorDelegate;

	timeInterval: number;

	constructor(o: { timeInterval: number; });

	initWithTimeInterval(timeInterval: number): this;

	updateConfigurationFromAPIClient(apiClient: MMEAPIClient): void;
}

interface MMEConfiguratorDelegate extends NSObjectProtocol {

	configuratorDidUpdate(updater: any, configuration: MMEEventsConfiguration): void;
}
declare var MMEConfiguratorDelegate: {

	prototype: MMEConfiguratorDelegate;
};

declare class MMEConstants extends NSObject {

	static alloc(): MMEConstants; // inherited from NSObject

	static new(): MMEConstants; // inherited from NSObject
}

declare var MMEDebugEventType: string;

declare var MMEDebugEventTypeBackgroundTask: string;

declare var MMEDebugEventTypeFlush: string;

declare var MMEDebugEventTypeLocationManager: string;

declare var MMEDebugEventTypeMetricCollection: string;

declare var MMEDebugEventTypePost: string;

declare var MMEDebugEventTypePostFailed: string;

declare var MMEDebugEventTypePush: string;

declare var MMEDebugEventTypeTurnstile: string;

declare var MMEDebugEventTypeTurnstileFailed: string;

declare class MMEDependencyManager extends NSObject {

	static alloc(): MMEDependencyManager; // inherited from NSObject

	static new(): MMEDependencyManager; // inherited from NSObject

	static sharedManager(): MMEDependencyManager;

	locationManagerInstance(): CLLocationManager;
}

declare class MMEDispatchManager extends NSObject {

	static alloc(): MMEDispatchManager; // inherited from NSObject

	static new(): MMEDispatchManager; // inherited from NSObject

	scheduleBlockAfterDelay(block: () => void, delay: number): void;
}

declare var MMEErrorDomain: string;

declare class MMEEvent extends NSObject {

	static alloc(): MMEEvent; // inherited from NSObject

	static carplayEventWithNameAttributes(name: string, attributes: NSDictionary<any, any>): MMEEvent;

	static debugEventWithAttributes(attributes: NSDictionary<any, any>): MMEEvent;

	static locationEventWithAttributesInstanceIdentiferCommonEventData(attributes: NSDictionary<any, any>, instanceIdentifer: string, commonEventData: MMECommonEventData): MMEEvent;

	static mapDragEndEventWithDateStringAttributes(dateString: string, attributes: NSDictionary<any, any>): MMEEvent;

	static mapLoadEventWithDateStringCommonEventData(dateString: string, commonEventData: MMECommonEventData): MMEEvent;

	static mapOfflineDownloadCompleteWithDateStringAttributes(dateString: string, attributes: NSDictionary<any, any>): MMEEvent;

	static mapOfflineDownloadStartWithDateStringAttributes(dateString: string, attributes: NSDictionary<any, any>): MMEEvent;

	static mapTapEventWithDateStringAttributes(dateString: string, attributes: NSDictionary<any, any>): MMEEvent;

	static navigationEventWithNameAttributes(name: string, attributes: NSDictionary<any, any>): MMEEvent;

	static new(): MMEEvent; // inherited from NSObject

	static searchEventWithNameAttributes(name: string, attributes: NSDictionary<any, any>): MMEEvent;

	static turnstileEventWithAttributes(attributes: NSDictionary<any, any>): MMEEvent;

	static visionEventWithNameAttributes(name: string, attributes: NSDictionary<any, any>): MMEEvent;

	static visitEventWithAttributes(attributes: NSDictionary<any, any>): MMEEvent;

	attributes: NSDictionary<any, any>;

	name: string;
}

declare var MMEEventGestureDoubleTap: string;

declare var MMEEventGesturePanStart: string;

declare var MMEEventGesturePinchStart: string;

declare var MMEEventGesturePitchStart: string;

declare var MMEEventGestureQuickZoom: string;

declare var MMEEventGestureRotateStart: string;

declare var MMEEventGestureSingleTap: string;

declare var MMEEventGestureTwoFingerSingleTap: string;

declare var MMEEventHorizontalAccuracy: string;

declare var MMEEventKeyAccessibilityFontScale: string;

declare var MMEEventKeyAltitude: string;

declare var MMEEventKeyApplicationState: string;

declare var MMEEventKeyArrivalDate: string;

declare var MMEEventKeyCreated: string;

declare var MMEEventKeyDepartureDate: string;

declare var MMEEventKeyDevice: string;

declare var MMEEventKeyEnabledTelemetry: string;

declare var MMEEventKeyEvent: string;

declare var MMEEventKeyGestureID: string;

declare var MMEEventKeyLatitude: string;

declare var MMEEventKeyLocalDebugDescription: string;

declare var MMEEventKeyLongitude: string;

declare var MMEEventKeyModel: string;

declare var MMEEventKeyOperatingSystem: string;

declare var MMEEventKeyOrientation: string;

declare var MMEEventKeyPluggedIn: string;

declare var MMEEventKeyResolution: string;

declare var MMEEventKeySessionId: string;

declare var MMEEventKeySource: string;

declare var MMEEventKeyVendorID: string;

declare var MMEEventKeyWifi: string;

declare var MMEEventKeyZoomLevel: string;

declare class MMEEventLogReportViewController extends UIViewController {

	static alloc(): MMEEventLogReportViewController; // inherited from NSObject

	static new(): MMEEventLogReportViewController; // inherited from NSObject

	webView: WKWebView;

	displayHTMLFromRowsWithDataString(dataString: string): void;
}

declare class MMEEventLogger extends NSObject {

	static alloc(): MMEEventLogger; // inherited from NSObject

	static new(): MMEEventLogger; // inherited from NSObject

	static sharedLogger(): MMEEventLogger;

	enabled: boolean;

	logEvent(event: MMEEvent): void;

	readAndDisplayLogFileFromDate(logDate: Date): void;
}

declare var MMEEventSDKIdentifier: string;

declare var MMEEventSDKVersion: string;

declare var MMEEventSource: string;

declare var MMEEventTypeAppUserTurnstile: string;

declare var MMEEventTypeLocalDebug: string;

declare var MMEEventTypeLocation: string;

declare var MMEEventTypeMapDragEnd: string;

declare var MMEEventTypeMapLoad: string;

declare var MMEEventTypeMapTap: string;

declare var MMEEventTypeNavigationArrive: string;

declare var MMEEventTypeNavigationCancel: string;

declare var MMEEventTypeNavigationDepart: string;

declare var MMEEventTypeNavigationFeedback: string;

declare var MMEEventTypeNavigationReroute: string;

declare var MMEEventTypeSearchFeedback: string;

declare var MMEEventTypeSearchSelected: string;

declare var MMEEventTypeVisit: string;

declare class MMEEventsConfiguration extends NSObject {

	static alloc(): MMEEventsConfiguration; // inherited from NSObject

	static configuration(): MMEEventsConfiguration;

	static configurationFromData(data: NSData): MMEEventsConfiguration;

	static new(): MMEEventsConfiguration; // inherited from NSObject

	blacklist: NSArray<any>;

	configurationRotationTimeInterval: number;

	eventFlushCountThreshold: number;

	eventFlushSecondsThreshold: number;

	initializationDelay: number;

	instanceIdentifierRotationTimeInterval: number;

	locationManagerHibernationRadius: number;
}

declare class MMEEventsManager extends NSObject {

	static alloc(): MMEEventsManager; // inherited from NSObject

	static new(): MMEEventsManager; // inherited from NSObject

	static sharedManager(): MMEEventsManager;

	accessToken: string;

	accountType: number;

	baseURL: NSURL;

	debugLoggingEnabled: boolean;

	delegate: MMEEventsManagerDelegate;

	readonly hostSDKVersion: string;

	metricsEnabled: boolean;

	metricsEnabledForInUsePermissions: boolean;

	metricsEnabledInSimulator: boolean;

	readonly userAgentBase: string;

	disableLocationMetrics(): void;

	displayLogFileFromDate(logDate: Date): void;

	enqueueEventWithName(name: string): void;

	enqueueEventWithNameAttributes(name: string, attributes: NSDictionary<string, any>): void;

	flush(): void;

	initializeWithAccessTokenUserAgentBaseHostSDKVersion(accessToken: string, userAgentBase: string, hostSDKVersion: string): void;

	pauseOrResumeMetricsCollectionIfRequired(): void;

	postMetadataFilePathsCompletionHandler(metadata: NSArray<any>, filePaths: NSArray<any>, completionHandler: (p1: NSError) => void): void;

	sendTurnstileEvent(): void;
}

interface MMEEventsManagerDelegate extends NSObjectProtocol {

	eventsManagerDidUpdateLocations?(eventsManager: MMEEventsManager, locations: NSArray<CLLocation>): void;

	eventsManagerDidVisit?(eventsManager: MMEEventsManager, visit: CLVisit): void;
}
declare var MMEEventsManagerDelegate: {

	prototype: MMEEventsManagerDelegate;
};

declare class MMEHashProvider extends NSObject {

	static alloc(): MMEHashProvider; // inherited from NSObject

	static new(): MMEHashProvider; // inherited from NSObject

	readonly cnHashes: NSArray<any>;

	readonly comHashes: NSArray<any>;

	updateHashesWithConfiguration(configuration: MMEEventsConfiguration): void;
}

declare class MMELocationManager extends NSObject implements MMELocationManagerProtocol {

	static alloc(): MMELocationManager; // inherited from NSObject

	static new(): MMELocationManager; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: MMELocationManagerDelegate; // inherited from MMELocationManagerProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	metricsEnabledForInUsePermissions: boolean; // inherited from MMELocationManagerProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly updatingLocation: boolean; // inherited from MMELocationManagerProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reconfigure(configuration: MMEEventsConfiguration): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startUpdatingLocation(): void;

	stopUpdatingLocation(): void;
}

interface MMELocationManagerDelegate extends NSObjectProtocol {

	locationManagerBackgroundLocationUpdatesDidAutomaticallyPause?(locationManager: MMELocationManager): void;

	locationManagerBackgroundLocationUpdatesDidTimeout?(locationManager: MMELocationManager): void;

	locationManagerDidStartLocationUpdates?(locationManager: MMELocationManager): void;

	locationManagerDidStopLocationUpdates?(locationManager: MMELocationManager): void;

	locationManagerDidUpdateLocations?(locationManager: MMELocationManager, locations: NSArray<any>): void;

	locationManagerDidVisit?(locationManager: MMELocationManager, visit: CLVisit): void;
}
declare var MMELocationManagerDelegate: {

	prototype: MMELocationManagerDelegate;
};

declare var MMELocationManagerDistanceFilter: number;

declare var MMELocationManagerHibernationRadius: number;

interface MMELocationManagerProtocol extends NSObjectProtocol {

	delegate: MMELocationManagerDelegate;

	metricsEnabledForInUsePermissions: boolean;

	updatingLocation: boolean;

	reconfigure?(configuration: MMEEventsConfiguration): void;

	startUpdatingLocation(): void;

	stopUpdatingLocation(): void;
}
declare var MMELocationManagerProtocol: {

	prototype: MMELocationManagerProtocol;
};

declare var MMELocationManagerRegionIdentifier: string;

declare var MMELoggerHTML: string;

declare var MMELoggerShareableHTML: string;

declare class MMENSDateWrapper extends NSObject {

	static alloc(): MMENSDateWrapper; // inherited from NSObject

	static new(): MMENSDateWrapper; // inherited from NSObject

	date(): Date;

	formattedDateStringForDate(date: Date): string;

	startOfTomorrow(): Date;
}

declare class MMENSURLSessionWrapper extends NSObject implements MMENSURLSessionWrapperProtocol, NSURLSessionDelegate {

	static alloc(): MMENSURLSessionWrapper; // inherited from NSObject

	static new(): MMENSURLSessionWrapper; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	processRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): void;

	reconfigure(configuration: MMEEventsConfiguration): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface MMENSURLSessionWrapperProtocol extends NSObjectProtocol {

	processRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): void;

	reconfigure?(configuration: MMEEventsConfiguration): void;
}
declare var MMENSURLSessionWrapperProtocol: {

	prototype: MMENSURLSessionWrapperProtocol;
};

declare var MMENavigationEventPrefix: string;

declare class MMEReachability extends NSObject {

	static alloc(): MMEReachability; // inherited from NSObject

	static new(): MMEReachability; // inherited from NSObject

	static reachabilityForInternetConnection(): MMEReachability;

	static reachabilityForLocalWiFi(): MMEReachability;

	static reachabilityWithAddress(hostAddress: interop.Pointer | interop.Reference<any>): MMEReachability;

	static reachabilityWithHostName(hostname: string): MMEReachability;

	static reachabilityWithHostname(hostname: string): MMEReachability;

	reachableBlock: (p1: MMEReachability) => void;

	reachableOnWWAN: boolean;

	unreachableBlock: (p1: MMEReachability) => void;

	constructor(o: { reachabilityRef: any; });

	connectionRequired(): boolean;

	currentReachabilityFlags(): string;

	currentReachabilityStatus(): NetworkStatus;

	currentReachabilityString(): string;

	initWithReachabilityRef(ref: any): this;

	isConnectionOnDemand(): boolean;

	isConnectionRequired(): boolean;

	isInterventionRequired(): boolean;

	isReachable(): boolean;

	isReachableViaWWAN(): boolean;

	isReachableViaWiFi(): boolean;

	reachabilityFlags(): SCNetworkReachabilityFlags;

	startNotifier(): boolean;

	stopNotifier(): void;
}

declare var MMESearchEventPrefix: string;

declare class MMETimerManager extends NSObject {

	static alloc(): MMETimerManager; // inherited from NSObject

	static new(): MMETimerManager; // inherited from NSObject

	readonly selector: string;

	readonly target: any;

	readonly timeInterval: number;

	constructor(o: { timeInterval: number; target: any; selector: string; });

	cancel(): void;

	initWithTimeIntervalTargetSelector(timeInterval: number, aTarget: any, selector: string): this;

	start(): void;
}

declare class MMETrustKitProvider extends NSObject {

	static alloc(): MMETrustKitProvider; // inherited from NSObject

	static new(): MMETrustKitProvider; // inherited from NSObject

	static trustKitWithUpdatedConfiguration(configuration: MMEEventsConfiguration): TrustKit;
}

declare class MMETypes extends NSObject {

	static alloc(): MMETypes; // inherited from NSObject

	static new(): MMETypes; // inherited from NSObject
}

declare class MMEUIApplicationWrapper extends NSObject implements MMEUIApplicationWrapperProtocol {

	static alloc(): MMEUIApplicationWrapper; // inherited from NSObject

	static new(): MMEUIApplicationWrapper; // inherited from NSObject

	readonly applicationState: UIApplicationState; // inherited from MMEUIApplicationWrapperProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	beginBackgroundTaskWithExpirationHandler(handler: () => void): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	endBackgroundTask(identifier: number): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface MMEUIApplicationWrapperProtocol extends NSObjectProtocol {

	applicationState: UIApplicationState;

	beginBackgroundTaskWithExpirationHandler(handler: () => void): number;

	endBackgroundTask(identifier: number): void;
}
declare var MMEUIApplicationWrapperProtocol: {

	prototype: MMEUIApplicationWrapperProtocol;
};

declare class MMEUINavigation extends NSObject {

	static alloc(): MMEUINavigation; // inherited from NSObject

	static new(): MMEUINavigation; // inherited from NSObject

	static topViewController(): UIViewController;
}

interface MMEUniqueIdentifer extends NSObjectProtocol {

	timeInterval: number;

	rollingInstanceIdentifer(): string;
}
declare var MMEUniqueIdentifer: {

	prototype: MMEUniqueIdentifer;
};

declare class MMEUniqueIdentifier extends NSObject implements MMEUniqueIdentifer {

	static alloc(): MMEUniqueIdentifier; // inherited from NSObject

	static new(): MMEUniqueIdentifier; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	timeInterval: number; // inherited from MMEUniqueIdentifer

	readonly  // inherited from NSObjectProtocol

	constructor(o: { timeInterval: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithTimeInterval(timeInterval: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	rollingInstanceIdentifer(): string;

	self(): this;
}

declare var MMEVisionEventPrefix: string;

declare var MMEventTypeNavigationCarplayConnect: string;

declare var MMEventTypeNavigationCarplayDisconnect: string;

declare var MMEventTypeOfflineDownloadComplete: string;

declare var MMEventTypeOfflineDownloadStart: string;

declare var MapboxMobileEventsVersionNumber: number;

declare var MapboxMobileEventsVersionString: interop.Reference<number>;

declare var MapboxMobileMetricsVersionNumber: number;

declare var MapboxMobileMetricsVersionString: interop.Reference<number>;

declare const enum NetworkStatus {

	NotReachable = 0,

	ReachableViaWiFi = 2,

	ReachableViaWWAN = 1
}

declare class TSKBackgroundReporter extends NSObject implements NSURLSessionTaskDelegate {

	static alloc(): TSKBackgroundReporter; // inherited from NSObject

	static new(): TSKBackgroundReporter; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { andRateLimitReports: boolean; });

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidCompleteWithError(session: NSURLSession, task: NSURLSessionTask, error: NSError): void;

	URLSessionTaskDidFinishCollectingMetrics(session: NSURLSession, task: NSURLSessionTask, metrics: NSURLSessionTaskMetrics): void;

	URLSessionTaskDidReceiveChallengeCompletionHandler(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;

	URLSessionTaskIsWaitingForConnectivity(session: NSURLSession, task: NSURLSessionTask): void;

	URLSessionTaskNeedNewBodyStream(session: NSURLSession, task: NSURLSessionTask, completionHandler: (p1: NSInputStream) => void): void;

	URLSessionTaskWillBeginDelayedRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, request: NSURLRequest, completionHandler: (p1: NSURLSessionDelayedRequestDisposition, p2: NSURLRequest) => void): void;

	URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: (p1: NSURLRequest) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initAndRateLimitReports(shouldRateLimitReports: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	pinValidationFailedForHostnamePortCertificateChainNotedHostnameReportURIsIncludeSubdomainsEnforcePinningKnownPinsValidationResultExpirationDate(serverHostname: string, serverPort: number, certificateChain: NSArray<any>, notedHostname: string, reportURIs: NSArray<NSURL>, includeSubdomains: boolean, enforcePinning: boolean, knownPins: NSSet<NSData>, validationResult: TSKTrustEvaluationResult, knownPinsExpirationDate: Date): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TSKPinFailureReport extends NSObject {

	static alloc(): TSKPinFailureReport; // inherited from NSObject

	static new(): TSKPinFailureReport; // inherited from NSObject

	readonly appBundleId: string;

	readonly appPlatform: string;

	readonly appPlatformVersion: string;

	readonly appVendorId: string;

	readonly appVersion: string;

	readonly dateTime: Date;

	readonly enforcePinning: boolean;

	readonly hostname: string;

	readonly includeSubdomains: boolean;

	readonly knownPins: NSArray<any>;

	readonly knownPinsExpirationDate: Date;

	readonly notedHostname: string;

	readonly port: number;

	readonly trustkitVersion: string;

	readonly validatedCertificateChain: NSArray<any>;

	readonly validationResult: TSKTrustEvaluationResult;

	constructor(o: { appBundleId: string; appVersion: string; appPlatform: string; appPlatformVersion: string; appVendorId: string; trustkitVersion: string; hostname: string; port: number; dateTime: Date; notedHostname: string; includeSubdomains: boolean; enforcePinning: boolean; validatedCertificateChain: NSArray<string>; knownPins: NSArray<string>; validationResult: TSKTrustEvaluationResult; expirationDate: Date; });

	initWithAppBundleIdAppVersionAppPlatformAppPlatformVersionAppVendorIdTrustkitVersionHostnamePortDateTimeNotedHostnameIncludeSubdomainsEnforcePinningValidatedCertificateChainKnownPinsValidationResultExpirationDate(appBundleId: string, appVersion: string, appPlatform: string, appPlatformVersion: string, appVendorId: string, trustkitVersion: string, serverHostname: string, serverPort: number, dateTime: Date, notedHostname: string, includeSubdomains: boolean, enforcePinning: boolean, validatedCertificateChain: NSArray<string>, knownPins: NSArray<string>, validationResult: TSKTrustEvaluationResult, knownPinsExpirationDate: Date): this;

	json(): NSData;

	requestToUri(reportUri: NSURL): NSMutableURLRequest;
}

declare class TSKPinningValidator extends NSObject {

	static alloc(): TSKPinningValidator; // inherited from NSObject

	static new(): TSKPinningValidator; // inherited from NSObject

	constructor(o: { domainPinningPolicies: NSDictionary<string, NSDictionary<string, any>>; hashCache: TSKSPKIHashCache; ignorePinsForUserTrustAnchors: boolean; validationCallbackQueue: NSObject; validationCallback: (p1: TSKPinningValidatorResult, p2: string, p3: NSDictionary<string, any>) => void; });

	evaluateTrustForHostname(serverTrust: any, serverHostname: string): TSKTrustDecision;

	handleChallengeCompletionHandler(challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): boolean;

	initWithDomainPinningPoliciesHashCacheIgnorePinsForUserTrustAnchorsValidationCallbackQueueValidationCallback(domainPinningPolicies: NSDictionary<string, NSDictionary<string, any>>, hashCache: TSKSPKIHashCache, ignorePinsForUserTrustAnchors: boolean, validationCallbackQueue: NSObject, validationCallback: (p1: TSKPinningValidatorResult, p2: string, p3: NSDictionary<string, any>) => void): this;
}

declare class TSKPinningValidatorResult extends NSObject {

	static alloc(): TSKPinningValidatorResult; // inherited from NSObject

	static new(): TSKPinningValidatorResult; // inherited from NSObject

	readonly certificateChain: NSArray<any>;

	readonly evaluationResult: TSKTrustEvaluationResult;

	readonly finalTrustDecision: TSKTrustDecision;

	readonly serverHostname: string;

	readonly serverTrust: any;

	readonly validationDuration: number;

	constructor(o: { serverHostname: string; serverTrust: any; validationResult: TSKTrustEvaluationResult; finalTrustDecision: TSKTrustDecision; validationDuration: number; });

	initWithServerHostnameServerTrustValidationResultFinalTrustDecisionValidationDuration(serverHostname: string, serverTrust: any, validationResult: TSKTrustEvaluationResult, finalTrustDecision: TSKTrustDecision, validationDuration: number): this;
}

declare const enum TSKPublicKeyAlgorithm {

	Rsa2048 = 0,

	Rsa4096 = 1,

	EcDsaSecp256r1 = 2,

	EcDsaSecp384r1 = 3,

	Last = 3
}

declare class TSKReportsRateLimiter extends NSObject {

	static alloc(): TSKReportsRateLimiter; // inherited from NSObject

	static new(): TSKReportsRateLimiter; // inherited from NSObject

	shouldRateLimitReport(report: TSKPinFailureReport): boolean;
}

declare class TSKSPKIHashCache extends NSObject {

	static alloc(): TSKSPKIHashCache; // inherited from NSObject

	static new(): TSKSPKIHashCache; // inherited from NSObject

	constructor(o: { identifier: string; });

	hashSubjectPublicKeyInfoFromCertificatePublicKeyAlgorithm(certificate: any, publicKeyAlgorithm: TSKPublicKeyAlgorithm): NSData;

	initWithIdentifier(uniqueIdentifier: string): this;
}

declare const enum TSKTrustDecision {

	ShouldAllowConnection = 0,

	ShouldBlockConnection = 1,

	DomainNotPinned = 2
}

declare const enum TSKTrustEvaluationResult {

	Success = 0,

	FailedNoMatchingPin = 1,

	FailedInvalidCertificateChain = 2,

	ErrorInvalidParameters = 3,

	FailedUserDefinedTrustAnchor = 4,

	ErrorCouldNotGenerateSpkiHash = 5
}

declare class TrustKit extends NSObject {

	static alloc(): TrustKit; // inherited from NSObject

	static initSharedInstanceWithConfiguration(trustKitConfig: NSDictionary<string, any>): void;

	static new(): TrustKit; // inherited from NSObject

	static setLoggerBlock(block: (p1: string) => void): void;

	static sharedInstance(): TrustKit;

	pinningValidator: TSKPinningValidator;

	pinningValidatorCallback: (p1: TSKPinningValidatorResult, p2: string, p3: NSDictionary<string, any>) => void;

	pinningValidatorCallbackQueue: NSObject;

	constructor(o: { configuration: NSDictionary<string, any>; });

	initWithConfiguration(trustKitConfig: NSDictionary<string, any>): this;
}

declare var TrustKitVersion: string;

declare function convertPinsToHpkpPins(knownPins: NSSet<NSData>): NSArray<string>;

declare function convertTrustToPemArray(serverTrust: any): NSArray<string>;

declare function getPinningConfigurationKeyForDomain(hostname: string, domainPinningPolicies: NSDictionary<string, NSDictionary<string, any>>): string;

declare function identifier_for_vendor(): string;

declare var kMMEReachabilityChangedNotification: string;

declare var kTSKAdditionalTrustAnchors: string;

declare var kTSKAlgorithmEcDsaSecp256r1: string;

declare var kTSKAlgorithmEcDsaSecp384r1: string;

declare var kTSKAlgorithmRsa2048: string;

declare var kTSKAlgorithmRsa4096: string;

declare var kTSKDisableDefaultReportUri: string;

declare var kTSKEnforcePinning: string;

declare var kTSKExcludeSubdomainFromParentPolicy: string;

declare var kTSKExpirationDate: string;

declare var kTSKIncludeSubdomains: string;

declare var kTSKPinnedDomains: string;

declare var kTSKPublicKeyAlgorithms: string;

declare var kTSKPublicKeyHashes: string;

declare var kTSKReportUris: string;

declare var kTSKSwizzleNetworkDelegates: string;

declare function mme_linkCLLocationCategory(): void;

declare function mme_linkNSDataCategory(): void;

declare function parseTrustKitConfiguration(trustKitArguments: NSDictionary<any, any>): NSDictionary<any, any>;

declare function verifyPublicKeyPin(serverTrust: any, serverHostname: string, supportedAlgorithms: NSArray<number>, knownPins: NSSet<NSData>, hashCache: TSKSPKIHashCache): TSKTrustEvaluationResult;
