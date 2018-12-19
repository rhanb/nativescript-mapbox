
declare class EndOfRouteFeedback extends NSObject {

	static alloc(): EndOfRouteFeedback; // inherited from NSObject

	static new(): EndOfRouteFeedback; // inherited from NSObject

	constructor(o: { rating: number; comment: string; });

	initWithRatingComment(ratingNumber: number, comment: string): this;
}

interface EventsManagerDataSource {

	desiredAccuracy: number;

	location: CLLocation;

	locationProvider: typeof NSObject;

	routeProgress: MBRouteProgress;
}
declare var EventsManagerDataSource: {

	prototype: EventsManagerDataSource;
};

interface MBDefaultInterfaceFlag {

	usesDefaultUserInterface: boolean;
}
declare var MBDefaultInterfaceFlag: {

	prototype: MBDefaultInterfaceFlag;
};

declare class MBDistanceFormatter extends NSLengthFormatter {

	static alloc(): MBDistanceFormatter; // inherited from NSObject

	static new(): MBDistanceFormatter; // inherited from NSObject

	constructor(o: { approximate: boolean; });

	initWithApproximate(approximate: boolean): this;

	measurementOfDistance(distance: number): NSMeasurement<NSUnitLength>;

	stringFrom(distance: number): string;
}

declare var MBErrorDomain: string;

declare const enum MBFeedbackSource {

	User = 0,

	Reroute = 1,

	Unknown = 2
}

declare class MBNavigationDirections {

	constructor(o: { accessToken: string; host: string; });

	initWithAccessTokenHost(accessToken: string, host: string): this;
}

declare class MBNavigationEventsManager extends NSObject {

	static alloc(): MBNavigationEventsManager; // inherited from NSObject

	static new(): MBNavigationEventsManager; // inherited from NSObject

	delaysEventFlushing: boolean;

	constructor(o: { dataSource: EventsManagerDataSource; accessToken: string; mobileEventsManager: MMEEventsManager; });

	cancelFeedbackWithUuid(uuid: NSUUID): void;

	initWithDataSourceAccessTokenMobileEventsManager(source: EventsManagerDataSource, possibleToken: string, mobileEventsManager: MMEEventsManager): this;
}

declare class MBNavigationLocationManager extends CLLocationManager implements MBRouterDataSource {

	static alloc(): MBNavigationLocationManager; // inherited from NSObject

	static new(): MBNavigationLocationManager; // inherited from NSObject

	readonly location: CLLocation; // inherited from MBRouterDataSource

	readonly locationProvider: typeof NSObject; // inherited from MBRouterDataSource
}

declare class MBNavigationMatchOptions {

	constructor(o: { coder: NSCoder; });

	constructor(o: { coordinates: NSArray<NSValue>; profileIdentifier: any; });

	constructor(o: { locations: NSArray<CLLocation>; profileIdentifier: any; });

	constructor(o: { waypoints: NSArray<MBWaypoint>; profileIdentifier: any; });

	initWithCoder(decoder: NSCoder): this;

	initWithCoordinatesProfileIdentifier(coordinates: NSArray<NSValue>, profileIdentifier: any): this;

	initWithLocationsProfileIdentifier(locations: NSArray<CLLocation>, profileIdentifier: any): this;

	initWithWaypointsProfileIdentifier(waypoints: NSArray<MBWaypoint>, profileIdentifier: any): this;
}

declare class MBNavigationRouteOptions {

	constructor(o: { coder: NSCoder; });

	constructor(o: { coordinates: NSArray<NSValue>; profileIdentifier: any; });

	constructor(o: { locations: NSArray<CLLocation>; profileIdentifier: any; });

	constructor(o: { waypoints: NSArray<MBWaypoint>; profileIdentifier: any; });

	initWithCoder(decoder: NSCoder): this;

	initWithCoordinatesProfileIdentifier(coordinates: NSArray<NSValue>, profileIdentifier: any): this;

	initWithLocationsProfileIdentifier(locations: NSArray<CLLocation>, profileIdentifier: any): this;

	initWithWaypointsProfileIdentifier(waypoints: NSArray<MBWaypoint>, profileIdentifier: any): this;
}

declare class MBNavigationService extends NSObject implements CLLocationManagerDelegate, MBNavigationServiceProtocol, MBRouterDelegate {

	static alloc(): MBNavigationService; // inherited from NSObject

	static new(): MBNavigationService; // inherited from NSObject

	directions: MBDirections;

	eventsManager: MBNavigationEventsManager;

	router: Router;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: NavigationServiceDelegate; // inherited from MBNavigationServiceProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly desiredAccuracy: number; // inherited from EventsManagerDataSource

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly location: CLLocation; // inherited from EventsManagerDataSource

	readonly locationManager: MBNavigationLocationManager; // inherited from MBNavigationServiceProtocol

	readonly locationProvider: typeof NSObject; // inherited from EventsManagerDataSource

	poorGPSPatience: number; // inherited from MBNavigationServiceProtocol

	route: MBRoute; // inherited from MBNavigationServiceProtocol

	readonly routeProgress: MBRouteProgress; // inherited from EventsManagerDataSource

	simulationMode: MBNavigationSimulationOptions; // inherited from MBNavigationServiceProtocol

	simulationSpeedMultiplier: number; // inherited from MBNavigationServiceProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	usesDefaultUserInterface: boolean; // inherited from MBDefaultInterfaceFlag

	readonly  // inherited from NSObjectProtocol

	constructor(o: { route: MBRoute; directions: MBDirections; locationSource: MBNavigationLocationManager; eventsManagerType: typeof NSObject; simulating: MBNavigationSimulationOptions; routerType: typeof NSObject; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	endNavigationWithFeedback(feedback: EndOfRouteFeedback): void;

	initWithRouteDirectionsLocationSourceEventsManagerTypeSimulatingRouterType(route: MBRoute, directions: MBDirections, locationSource: MBNavigationLocationManager, eventsManagerType: typeof NSObject, simulationMode: MBNavigationSimulationOptions, routerType: typeof NSObject): this;

	isEqual(object: any): boolean;

	isInTunnelAtAlong(location: CLLocation, progress: MBRouteProgress): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus): void;

	locationManagerDidDetermineStateForRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion): void;

	locationManagerDidEnterRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidExitRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidFailWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidPauseLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidRangeBeaconsInRegion(manager: CLLocationManager, beacons: NSArray<CLBeacon>, region: CLBeaconRegion): void;

	locationManagerDidResumeLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidUpdateHeading(manager: CLLocationManager, newHeading: CLHeading): void;

	locationManagerDidUpdateLocations(manager: CLLocationManager, locations: NSArray<CLLocation>): void;

	locationManagerDidUpdateToLocationFromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

	locationManagerDidVisit(manager: CLLocationManager, visit: CLVisit): void;

	locationManagerMonitoringDidFailForRegionWithError(manager: CLLocationManager, region: CLRegion, error: NSError): void;

	locationManagerRangingBeaconsDidFailForRegionWithError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

	locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	routerDidArriveAtWaypoint(router: Router, waypoint: MBWaypoint): boolean;

	routerDidFailToRerouteWithError(router: Router, error: NSError): void;

	routerDidRerouteAlongRouteAtProactive(router: Router, route: MBRoute, location: CLLocation, proactive: boolean): void;

	routerDidUpdateProgressWithLocationRawLocation(router: Router, progress: MBRouteProgress, location: CLLocation, rawLocation: CLLocation): void;

	routerShouldDisableBatteryMonitoring(router: Router): boolean;

	routerShouldDiscardLocation(router: Router, location: CLLocation): boolean;

	routerShouldPreventReroutesWhenArrivingAtWaypoint(router: Router, waypoint: MBWaypoint): boolean;

	routerShouldRerouteFromLocation(router: Router, location: CLLocation): boolean;

	routerWillArriveAtWaypointInDistance(router: Router, waypoint: MBWaypoint, remainingTimeInterval: number, distance: number): void;

	routerWillRerouteFromLocation(router: Router, location: CLLocation): void;

	self(): this;

	start(): void;

	stop(): void;
}

interface MBNavigationServiceProtocol extends CLLocationManagerDelegate, EventsManagerDataSource, MBDefaultInterfaceFlag, MBRouterDataSource {

	delegate: NavigationServiceDelegate;

	directions: MBDirections;

	eventsManager: MBNavigationEventsManager;

	locationManager: MBNavigationLocationManager;

	poorGPSPatience: number;

	route: MBRoute;

	router: Router;

	simulationMode: MBNavigationSimulationOptions;

	simulationSpeedMultiplier: number;

	endNavigationWithFeedback(feedback: EndOfRouteFeedback): void;

	isInTunnelAtAlong(location: CLLocation, progress: MBRouteProgress): boolean;

	start(): void;

	stop(): void;
}
declare var MBNavigationServiceProtocol: {

	prototype: MBNavigationServiceProtocol;
};

declare class MBNavigationSettings extends NSObject {

	static alloc(): MBNavigationSettings; // inherited from NSObject

	static new(): MBNavigationSettings; // inherited from NSObject

	distanceUnit: NSLengthFormatterUnit;

	voiceMuted: boolean;

	voiceVolume: number;

	static readonly sharedSettings: MBNavigationSettings;
}

declare var MBNavigationSettingsDidChangeNotification: string;

declare const enum MBNavigationSimulationIntent {

	Manual = 0,

	PoorGPS = 1
}

declare const enum MBNavigationSimulationOptions {

	OnPoorGPS = 0,

	Always = 1,

	Never = 2
}

declare class MBPortableRouteController extends MBRouteController {

	static alloc(): MBPortableRouteController; // inherited from NSObject

	static new(): MBPortableRouteController; // inherited from NSObject
}

declare class MBReplayLocationManager extends MBNavigationLocationManager {

	static alloc(): MBReplayLocationManager; // inherited from NSObject

	static new(): MBReplayLocationManager; // inherited from NSObject

	location: CLLocation;

	locations: NSArray<CLLocation>;

	speedMultiplier: number;
}

declare class MBRouteController extends NSObject implements CLLocationManagerDelegate, Router {

	static alloc(): MBRouteController; // inherited from NSObject

	static new(): MBRouteController; // inherited from NSObject

	dataSource: MBRouterDataSource;

	directions: MBDirections;

	eventsManager: MBNavigationEventsManager;

	locationManager: MBNavigationLocationManager;

	reroutesProactively: boolean;

	readonly reroutingTolerance: number;

	routeProgress: MBRouteProgress;

	tunnelIntersectionManager: any;

	waypointArrivalThreshold: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: MBRouterDelegate; // inherited from Router

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly location: CLLocation; // inherited from Router

	route: MBRoute; // inherited from Router

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { route: MBRoute; directions: MBDirections; locationManager: MBRouterDataSource; }); // inherited from Router

	constructor(o: { route: MBRoute; directions: MBDirections; locationManager: MBNavigationLocationManager; eventsManager: MBNavigationEventsManager; });

	advanceLegIndexWithLocation(location: CLLocation): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	disableLocationRecording(): void;

	enableLocationRecording(): void;

	initWithRouteDirectionsLocationManager(route: MBRoute, directions: MBDirections, source: MBRouterDataSource): this;

	initWithRouteDirectionsLocationManagerEventsManager(route: MBRoute, directions: MBDirections, locationManager: MBNavigationLocationManager, eventsManager: MBNavigationEventsManager): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	locationHistory(): string;

	locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus): void;

	locationManagerDidDetermineStateForRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion): void;

	locationManagerDidEnterRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidExitRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidFailWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidPauseLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidRangeBeaconsInRegion(manager: CLLocationManager, beacons: NSArray<CLBeacon>, region: CLBeaconRegion): void;

	locationManagerDidResumeLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidUpdateHeading(manager: CLLocationManager, newHeading: CLHeading): void;

	locationManagerDidUpdateLocations(manager: CLLocationManager, locations: NSArray<CLLocation>): void;

	locationManagerDidUpdateToLocationFromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

	locationManagerDidVisit(manager: CLLocationManager, visit: CLVisit): void;

	locationManagerMonitoringDidFailForRegionWithError(manager: CLLocationManager, region: CLRegion, error: NSError): void;

	locationManagerRangingBeaconsDidFailForRegionWithError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

	locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	rerouteFromAlong(from: CLLocation, along: MBRouteProgress): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	userIsOnRoute(location: CLLocation): boolean;
}

declare var MBRouteControllerDidFailToRerouteNotification: string;

declare var MBRouteControllerDidPassSpokenInstructionPointNotification: string;

declare var MBRouteControllerDidPassVisualInstructionPointNotification: string;

declare var MBRouteControllerDidRerouteNotification: string;

declare var MBRouteControllerIsProactiveKey: string;

declare var MBRouteControllerLocationKey: string;

declare var MBRouteControllerProgressDidChangeNotification: string;

declare var MBRouteControllerRawLocationKey: string;

declare var MBRouteControllerRouteProgressKey: string;

declare var MBRouteControllerRoutingErrorKey: string;

declare var MBRouteControllerWillRerouteNotification: string;

declare class MBRouteLegProgress extends NSObject {

	static alloc(): MBRouteLegProgress; // inherited from NSObject

	static new(): MBRouteLegProgress; // inherited from NSObject

	readonly currentStep: MBRouteStep;

	currentStepProgress: MBRouteStepProgress;

	readonly distanceRemaining: number;

	readonly distanceTraveled: number;

	readonly durationRemaining: number;

	readonly followOnStep: MBRouteStep;

	readonly fractionTraveled: number;

	readonly leg: MBRouteLeg;

	readonly nearbyCoordinates: NSArray<NSValue>;

	readonly priorStep: MBRouteStep;

	readonly remainingSteps: NSArray<MBRouteStep>;

	stepIndex: number;

	readonly upComingStep: MBRouteStep;

	readonly upcomingStep: MBRouteStep;

	userHasArrivedAtWaypoint: boolean;

	constructor(o: { leg: MBRouteLeg; stepIndex: number; spokenInstructionIndex: number; });

	initWithLegStepIndexSpokenInstructionIndex(leg: MBRouteLeg, stepIndex: number, spokenInstructionIndex: number): this;

	isCurrentStep(step: MBRouteStep): boolean;

	stepAfter(step: MBRouteStep): MBRouteStep;

	stepBefore(step: MBRouteStep): MBRouteStep;
}

declare class MBRouteProgress extends NSObject {

	static alloc(): MBRouteProgress; // inherited from NSObject

	static new(): MBRouteProgress; // inherited from NSObject

	readonly currentLeg: MBRouteLeg;

	currentLegProgress: MBRouteLegProgress;

	readonly distanceRemaining: number;

	readonly distanceTraveled: number;

	readonly durationRemaining: number;

	readonly fractionTraveled: number;

	legIndex: number;

	readonly nearbyCoordinates: NSArray<NSValue>;

	readonly priorLeg: MBRouteLeg;

	readonly priorStep: MBRouteStep;

	readonly remainingLegs: NSArray<MBRouteLeg>;

	readonly remainingSteps: NSArray<MBRouteStep>;

	readonly remainingWaypoints: NSArray<MBWaypoint>;

	readonly route: MBRoute;

	readonly upcomingLeg: MBRouteLeg;

	constructor(o: { route: MBRoute; legIndex: number; spokenInstructionIndex: number; });

	initWithRouteLegIndexSpokenInstructionIndex(route: MBRoute, legIndex: number, spokenInstructionIndex: number): this;
}

declare class MBRouteStepProgress extends NSObject {

	static alloc(): MBRouteStepProgress; // inherited from NSObject

	static new(): MBRouteStepProgress; // inherited from NSObject

	readonly currentIntersection: MBIntersection;

	readonly currentSpokenInstruction: MBSpokenInstruction;

	readonly currentVisualInstruction: MBVisualInstructionBanner;

	readonly distanceRemaining: number;

	distanceTraveled: number;

	readonly durationRemaining: number;

	readonly fractionTraveled: number;

	intersectionDistances: NSArray<number>;

	intersectionIndex: number;

	intersectionsIncludingUpcomingManeuverIntersection: NSArray<MBIntersection>;

	readonly remainingSpokenInstructions: NSArray<MBSpokenInstruction>;

	readonly remainingVisualInstructions: NSArray<MBVisualInstructionBanner>;

	spokenInstructionIndex: number;

	readonly step: MBRouteStep;

	readonly upcomingIntersection: MBIntersection;

	userDistanceToManeuverLocation: number;

	visualInstructionIndex: number;

	constructor(o: { step: MBRouteStep; spokenInstructionIndex: number; });

	initWithStepSpokenInstructionIndex(step: MBRouteStep, spokenInstructionIndex: number): this;
}

interface MBRouterDataSource {

	location: CLLocation;

	locationProvider: typeof NSObject;
}
declare var MBRouterDataSource: {

	prototype: MBRouterDataSource;
};

interface MBRouterDelegate {

	routerDidArriveAtWaypoint?(router: Router, waypoint: MBWaypoint): boolean;

	routerDidFailToRerouteWithError?(router: Router, error: NSError): void;

	routerDidRerouteAlongRouteAtProactive?(router: Router, route: MBRoute, location: CLLocation, proactive: boolean): void;

	routerDidUpdateProgressWithLocationRawLocation?(router: Router, progress: MBRouteProgress, location: CLLocation, rawLocation: CLLocation): void;

	routerShouldDisableBatteryMonitoring?(router: Router): boolean;

	routerShouldDiscardLocation?(router: Router, location: CLLocation): boolean;

	routerShouldPreventReroutesWhenArrivingAtWaypoint?(router: Router, waypoint: MBWaypoint): boolean;

	routerShouldRerouteFromLocation?(router: Router, location: CLLocation): boolean;

	routerWillArriveAtWaypointInDistance?(router: Router, waypoint: MBWaypoint, remainingTimeInterval: number, distance: number): void;

	routerWillRerouteFromLocation?(router: Router, location: CLLocation): void;
}
declare var MBRouterDelegate: {

	prototype: MBRouterDelegate;
};

declare class MBSimulatedLocationManager extends MBNavigationLocationManager {

	static alloc(): MBSimulatedLocationManager; // inherited from NSObject

	static new(): MBSimulatedLocationManager; // inherited from NSObject

	location: CLLocation;

	speedMultiplier: number;

	constructor(o: { route: MBRoute; });

	constructor(o: { routeProgress: MBRouteProgress; });

	initWithRoute(route: MBRoute): this;

	initWithRouteProgress(routeProgress: MBRouteProgress): this;
}

declare var MapboxCoreNavigationVersionNumber: number;

declare var MapboxCoreNavigationVersionNumberVar: number;

declare var MapboxCoreNavigationVersionString: interop.Reference<number>;

declare var MapboxCoreNavigationVersionStringVar: interop.Reference<number>;

interface NavigationServiceDelegate {

	navigationServiceDidArriveAtWaypoint?(service: MBNavigationServiceProtocol, waypoint: MBWaypoint): boolean;

	navigationServiceDidBeginSimulatingBecauseOf?(service: MBNavigationServiceProtocol, progress: MBRouteProgress, reason: MBNavigationSimulationIntent): void;

	navigationServiceDidEndSimulatingBecauseOf?(service: MBNavigationServiceProtocol, progress: MBRouteProgress, reason: MBNavigationSimulationIntent): void;

	navigationServiceDidFailToRerouteWithError?(service: MBNavigationServiceProtocol, error: NSError): void;

	navigationServiceDidRerouteAlongRouteAtProactive?(service: MBNavigationServiceProtocol, route: MBRoute, location: CLLocation, proactive: boolean): void;

	navigationServiceDidUpdateProgressWithLocationRawLocation?(service: MBNavigationServiceProtocol, progress: MBRouteProgress, location: CLLocation, rawLocation: CLLocation): void;

	navigationServiceShouldDisableBatteryMonitoring?(service: MBNavigationServiceProtocol): boolean;

	navigationServiceShouldDiscardLocation?(service: MBNavigationServiceProtocol, location: CLLocation): boolean;

	navigationServiceShouldPreventReroutesWhenArrivingAtWaypoint?(service: MBNavigationServiceProtocol, waypoint: MBWaypoint): boolean;

	navigationServiceShouldRerouteFromLocation?(service: MBNavigationServiceProtocol, location: CLLocation): boolean;

	navigationServiceWillArriveAtWaypointAfterDistance?(service: MBNavigationServiceProtocol, waypoint: MBWaypoint, remainingTimeInterval: number, distance: number): void;

	navigationServiceWillBeginSimulatingBecauseOf?(service: MBNavigationServiceProtocol, progress: MBRouteProgress, reason: MBNavigationSimulationIntent): void;

	navigationServiceWillEndSimulatingBecauseOf?(service: MBNavigationServiceProtocol, progress: MBRouteProgress, reason: MBNavigationSimulationIntent): void;

	navigationServiceWillRerouteFromLocation?(service: MBNavigationServiceProtocol, location: CLLocation): void;
}
declare var NavigationServiceDelegate: {

	prototype: NavigationServiceDelegate;
};

interface Router extends CLLocationManagerDelegate {

	dataSource: MBRouterDataSource;

	delegate: MBRouterDelegate;

	location: CLLocation;

	route: MBRoute;

	routeProgress: MBRouteProgress;

	advanceLegIndexWithLocation(location: CLLocation): void;

	disableLocationRecording?(): void;

	enableLocationRecording?(): void;

	initWithRouteDirectionsLocationManager?(route: MBRoute, directions: MBDirections, source: MBRouterDataSource): Router;

	locationHistory?(): string;

	rerouteFromAlong(from: CLLocation, along: MBRouteProgress): void;

	userIsOnRoute(location: CLLocation): boolean;
}
declare var Router: {

	prototype: Router;
};
