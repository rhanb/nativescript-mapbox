
declare const enum MBAttributeOptions {

	Distance = 2,

	ExpectedTravelTime = 4,

	Speed = 8,

	CongestionLevel = 16
}

interface MBComponentRepresentable extends NSSecureCoding {
}
declare var MBComponentRepresentable: {

	prototype: MBComponentRepresentable;
};

declare const enum MBCongestionLevel {

	Unknown = 0,

	Low = 1,

	Moderate = 2,

	Heavy = 3,

	Severe = 4
}

declare class MBCoordinateBounds extends NSObject {

	static alloc(): MBCoordinateBounds; // inherited from NSObject

	static new(): MBCoordinateBounds; // inherited from NSObject

	constructor();

	constructor(o: { northWest: CLLocationCoordinate2D; southEast: CLLocationCoordinate2D; });

	init(coordinates: NSArray<NSValue>): this;

	initWithNorthWestSouthEast(northWest: CLLocationCoordinate2D, southEast: CLLocationCoordinate2D): this;
}

declare class MBDirections extends NSObject implements MBOfflineDirectionsProtocol {

	static alloc(): MBDirections; // inherited from NSObject

	static new(): MBDirections; // inherited from NSObject

	readonly accessToken: string;

	readonly apiEndpoint: NSURL;

	static readonly sharedDirections: MBDirections;

	constructor(o: { accessToken: string; });

	constructor(o: { accessToken: string; host: string; });

	URLForCalculatingDirectionsWithOptions(options: MBDirectionsOptions): NSURL;

	calculateDirectionsWithOptionsCompletionHandler(options: MBRouteOptions, completionHandler: (p1: NSArray<MBWaypoint>, p2: NSArray<MBRoute>, p3: NSError) => void): NSURLSessionDataTask;

	calculateMatchesWithOptionsCompletionHandler(options: MBMatchOptions, completionHandler: (p1: NSArray<MBMatch>, p2: NSError) => void): NSURLSessionDataTask;

	calculateRoutesMatchingOptionsCompletionHandler(options: MBMatchOptions, completionHandler: (p1: NSArray<MBWaypoint>, p2: NSArray<MBRoute>, p3: NSError) => void): NSURLSessionDataTask;

	downloadTilesInVersionSessionCompletionHandler(coordinateBounds: MBCoordinateBounds, version: string, session: NSURLSession, completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDownloadTask;

	fetchAvailableOfflineVersionsWithCompletionHandler(completionHandler: (p1: NSArray<string>, p2: NSError) => void): NSURLSessionDataTask;

	initWithAccessToken(accessToken: string): this;

	initWithAccessTokenHost(accessToken: string, host: string): this;
}

declare class MBDirectionsOptions extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): MBDirectionsOptions; // inherited from NSObject

	static new(): MBDirectionsOptions; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	attributeOptions: MBAttributeOptions;

	distanceMeasurementSystem: MBMeasurementSystem;

	includesSpokenInstructions: boolean;

	includesSteps: boolean;

	includesVisualInstructions: boolean;

	locale: NSLocale;

	profileIdentifier: string;

	routeShapeResolution: MBRouteShapeResolution;

	shapeFormat: MBRouteShapeFormat;

	waypoints: NSArray<MBWaypoint>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { waypoints: NSArray<MBWaypoint>; profileIdentifier: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithWaypointsProfileIdentifier(waypoints: NSArray<MBWaypoint>, profileIdentifier: string): this;

	isEqualToDirectionsOptions(directionsOptions: MBDirectionsOptions): boolean;
}

declare var MBDirectionsProfileIdentifierAutomobile: string;

declare var MBDirectionsProfileIdentifierAutomobileAvoidingTraffic: string;

declare var MBDirectionsProfileIdentifierCycling: string;

declare var MBDirectionsProfileIdentifierWalking: string;

declare class MBDirectionsResult extends NSObject implements NSSecureCoding {

	static alloc(): MBDirectionsResult; // inherited from NSObject

	static new(): MBDirectionsResult; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	accessToken: string;

	apiEndpoint: NSURL;

	readonly coordinateCount: number;

	readonly coordinates: NSArray<NSValue>;

	readonly directionsOptions: MBDirectionsOptions;

	readonly distance: number;

	readonly expectedTravelTime: number;

	readonly legs: NSArray<MBRouteLeg>;

	routeIdentifier: string;

	speechLocale: NSLocale;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	getCoordinates(coordinates: interop.Pointer | interop.Reference<CLLocationCoordinate2D>): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare const enum MBInstructionFormat {

	Text = 0,

	Html = 1
}

declare class MBIntersection extends NSObject implements NSSecureCoding {

	static alloc(): MBIntersection; // inherited from NSObject

	static new(): MBIntersection; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly approachIndex: number;

	readonly approachLanes: NSArray<MBLane>;

	readonly headings: NSArray<number>;

	readonly location: CLLocationCoordinate2D;

	readonly outletIndex: number;

	readonly outletIndexes: NSIndexSet;

	readonly usableApproachLanes: NSIndexSet;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class MBLane extends NSObject implements NSSecureCoding {

	static alloc(): MBLane; // inherited from NSObject

	static new(): MBLane; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly indications: MBLaneIndication;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { indications: MBLaneIndication; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithIndications(indications: MBLaneIndication): this;
}

declare const enum MBLaneIndication {

	SharpRight = 2,

	Right = 4,

	SlightRight = 8,

	StraightAhead = 16,

	SlightLeft = 32,

	Left = 64,

	SharpLeft = 128,

	UTurn = 256
}

declare class MBLaneIndicationComponent extends NSObject implements MBComponentRepresentable {

	static alloc(): MBLaneIndicationComponent; // inherited from NSObject

	static new(): MBLaneIndicationComponent; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	indications: MBLaneIndication;

	isUsable: boolean;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { indications: MBLaneIndication; isUsable: boolean; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithIndicationsIsUsable(indications: MBLaneIndication, isUsable: boolean): this;
}

declare const enum MBManeuverDirection {

	None = 0,

	SharpRight = 1,

	Right = 2,

	SlightRight = 3,

	StraightAhead = 4,

	SlightLeft = 5,

	Left = 6,

	SharpLeft = 7,

	UTurn = 8
}

declare const enum MBManeuverType {

	None = 0,

	Depart = 1,

	Turn = 2,

	Continue = 3,

	PassNameChange = 4,

	Merge = 5,

	TakeOnRamp = 6,

	TakeOffRamp = 7,

	ReachFork = 8,

	ReachEnd = 9,

	UseLane = 10,

	TakeRoundabout = 11,

	TakeRotary = 12,

	TurnAtRoundabout = 13,

	ExitRoundabout = 14,

	ExitRotary = 15,

	HeedWarning = 16,

	Arrive = 17,

	PassWaypoint = 18
}

declare class MBMatch extends MBDirectionsResult {

	static alloc(): MBMatch; // inherited from NSObject

	static new(): MBMatch; // inherited from NSObject

	confidence: number;

	tracepoints: NSArray<MBTracepoint>;

	waypointIndices: NSIndexSet;

	constructor(o: { JSON: NSDictionary<string, any>; tracepoints: NSArray<MBTracepoint>; waypointIndices: NSIndexSet; matchOptions: MBMatchOptions; });

	initWithJSONTracepointsWaypointIndicesMatchOptions(json: NSDictionary<string, any>, tracepoints: NSArray<MBTracepoint>, waypointIndices: NSIndexSet, matchOptions: MBMatchOptions): this;

	isEqualToMatch(match: MBMatch): boolean;
}

declare class MBMatchOptions extends MBDirectionsOptions {

	static alloc(): MBMatchOptions; // inherited from NSObject

	static new(): MBMatchOptions; // inherited from NSObject

	resamplesTraces: boolean;

	waypointIndices: NSIndexSet;

	constructor(o: { coordinates: NSArray<NSValue>; profileIdentifier: string; });

	constructor(o: { locations: NSArray<CLLocation>; profileIdentifier: string; });

	initWithCoordinatesProfileIdentifier(coordinates: NSArray<NSValue>, profileIdentifier: string): this;

	initWithLocationsProfileIdentifier(locations: NSArray<CLLocation>, profileIdentifier: string): this;
}

declare const enum MBMeasurementSystem {

	Imperial = 0,

	Metric = 1
}

interface MBOfflineDirectionsProtocol {

	downloadTilesInVersionSessionCompletionHandler(coordinateBounds: MBCoordinateBounds, version: string, session: NSURLSession, completionHandler: (p1: NSURL, p2: NSURLResponse, p3: NSError) => void): NSURLSessionDownloadTask;

	fetchAvailableOfflineVersionsWithCompletionHandler(completionHandler: (p1: NSArray<string>, p2: NSError) => void): NSURLSessionDataTask;
}
declare var MBOfflineDirectionsProtocol: {

	prototype: MBOfflineDirectionsProtocol;
};

declare const enum MBRoadClasses {

	Toll = 2,

	Restricted = 4,

	Motorway = 8,

	Ferry = 16,

	Tunnel = 32
}

declare class MBRoute extends MBDirectionsResult {

	static alloc(): MBRoute; // inherited from NSObject

	static new(): MBRoute; // inherited from NSObject

	constructor(o: { JSON: NSDictionary<string, any>; waypoints: NSArray<MBWaypoint>; routeOptions: MBRouteOptions; });

	initWithJSONWaypointsRouteOptions(json: NSDictionary<string, any>, waypoints: NSArray<MBWaypoint>, options: MBRouteOptions): this;
}

declare class MBRouteLeg extends NSObject implements NSSecureCoding {

	static alloc(): MBRouteLeg; // inherited from NSObject

	static new(): MBRouteLeg; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly destination: MBWaypoint;

	readonly distance: number;

	readonly expectedSegmentTravelTimes: NSArray<number>;

	readonly expectedTravelTime: number;

	readonly name: string;

	readonly profileIdentifier: string;

	readonly segmentDistances: NSArray<number>;

	readonly segmentSpeeds: NSArray<number>;

	readonly source: MBWaypoint;

	readonly steps: NSArray<MBRouteStep>;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSON: NSDictionary<string, any>; source: MBWaypoint; destination: MBWaypoint; options: MBRouteOptions; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithJSONSourceDestinationOptions(json: NSDictionary<string, any>, source: MBWaypoint, destination: MBWaypoint, options: MBRouteOptions): this;
}

declare class MBRouteOptions extends MBDirectionsOptions {

	static alloc(): MBRouteOptions; // inherited from NSObject

	static new(): MBRouteOptions; // inherited from NSObject

	allowsUTurnAtWaypoint: boolean;

	includesAlternativeRoutes: boolean;

	includesExitRoundaboutManeuver: boolean;

	roadClassesToAvoid: MBRoadClasses;

	constructor(o: { coordinates: NSArray<NSValue>; profileIdentifier: string; });

	constructor(o: { locations: NSArray<CLLocation>; profileIdentifier: string; });

	initWithCoordinatesProfileIdentifier(coordinates: NSArray<NSValue>, profileIdentifier: string): this;

	initWithLocationsProfileIdentifier(locations: NSArray<CLLocation>, profileIdentifier: string): this;

	isEqualToRouteOptions(routeOptions: MBRouteOptions): boolean;
}

declare class MBRouteOptionsV4 extends MBRouteOptions {

	static alloc(): MBRouteOptionsV4; // inherited from NSObject

	static new(): MBRouteOptionsV4; // inherited from NSObject

	includesShapes: boolean;

	instructionFormat: MBInstructionFormat;
}

declare const enum MBRouteShapeFormat {

	GeoJSON = 0,

	Polyline = 1,

	Polyline6 = 2
}

declare const enum MBRouteShapeResolution {

	None = 0,

	Low = 1,

	Full = 2
}

declare class MBRouteStep extends NSObject implements NSSecureCoding {

	static alloc(): MBRouteStep; // inherited from NSObject

	static new(): MBRouteStep; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly codes: NSArray<string>;

	readonly coordinateCount: number;

	readonly coordinates: NSArray<NSValue>;

	readonly destinationCodes: NSArray<string>;

	readonly destinations: NSArray<string>;

	readonly distance: number;

	readonly exitCodes: NSArray<string>;

	readonly exitNames: NSArray<string>;

	readonly expectedTravelTime: number;

	readonly instructions: string;

	readonly instructionsDisplayedAlongStep: NSArray<MBVisualInstructionBanner>;

	readonly instructionsSpokenAlongStep: NSArray<MBSpokenInstruction>;

	readonly intersections: NSArray<MBIntersection>;

	readonly maneuverDirection: MBManeuverDirection;

	readonly maneuverLocation: CLLocationCoordinate2D;

	readonly maneuverType: MBManeuverType;

	readonly names: NSArray<string>;

	readonly phoneticExitNames: NSArray<string>;

	readonly phoneticNames: NSArray<string>;

	readonly transportType: MBTransportType;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSON: NSDictionary<string, any>; options: MBRouteOptions; });

	encodeWithCoder(aCoder: NSCoder): void;

	getCoordinates(coordinates: interop.Pointer | interop.Reference<CLLocationCoordinate2D>): boolean;

	initWithCoder(aDecoder: NSCoder): this;

	initWithJSONOptions(json: NSDictionary<string, any>, options: MBRouteOptions): this;
}

declare class MBSpokenInstruction extends NSObject implements NSSecureCoding {

	static alloc(): MBSpokenInstruction; // inherited from NSObject

	static new(): MBSpokenInstruction; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly distanceAlongStep: number;

	readonly ssmlText: string;

	readonly text: string;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { distanceAlongStep: number; text: string; ssmlText: string; });

	constructor(o: { JSON: NSDictionary<string, any>; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithDistanceAlongStepTextSsmlText(distanceAlongStep: number, text: string, ssmlText: string): this;

	initWithJSON(json: NSDictionary<string, any>): this;
}

declare class MBTracepoint extends MBWaypoint {

	static alloc(): MBTracepoint; // inherited from NSObject

	static new(): MBTracepoint; // inherited from NSObject

	alternateCount: number;
}

declare const enum MBTransportType {

	None = 0,

	Automobile = 1,

	Ferry = 2,

	MovableBridge = 3,

	Inaccessible = 4,

	Walking = 5,

	Cycling = 6,

	Train = 7
}

declare class MBVisualInstruction extends NSObject implements NSSecureCoding {

	static alloc(): MBVisualInstruction; // inherited from NSObject

	static new(): MBVisualInstruction; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly components: NSArray<MBComponentRepresentable>;

	finalHeading: number;

	maneuverDirection: MBManeuverDirection;

	maneuverType: MBManeuverType;

	readonly text: string;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSON: NSDictionary<string, any>; });

	constructor(o: { text: string; maneuverType: MBManeuverType; maneuverDirection: MBManeuverDirection; components: NSArray<MBComponentRepresentable>; degrees: number; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithJSON(json: NSDictionary<string, any>): this;

	initWithTextManeuverTypeManeuverDirectionComponentsDegrees(text: string, maneuverType: MBManeuverType, maneuverDirection: MBManeuverDirection, components: NSArray<MBComponentRepresentable>, degrees: number): this;
}

declare class MBVisualInstructionBanner extends NSObject implements NSSecureCoding {

	static alloc(): MBVisualInstructionBanner; // inherited from NSObject

	static new(): MBVisualInstructionBanner; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	readonly distanceAlongStep: number;

	readonly primaryInstruction: MBVisualInstruction;

	readonly secondaryInstruction: MBVisualInstruction;

	readonly tertiaryInstruction: MBVisualInstruction;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class MBVisualInstructionComponent extends NSObject implements MBComponentRepresentable {

	static alloc(): MBVisualInstructionComponent; // inherited from NSObject

	static new(): MBVisualInstructionComponent; // inherited from NSObject

	static setSupportsSecureCoding(value: boolean): void;

	abbreviation: string;

	abbreviationPriority: number;

	imageURL: NSURL;

	text: string;

	type: MBVisualInstructionComponentType;

	static supportsSecureCoding: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSON: NSDictionary<string, any>; });

	constructor(o: { type: MBVisualInstructionComponentType; text: string; imageURL: NSURL; abbreviation: string; abbreviationPriority: number; });

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithJSON(json: NSDictionary<string, any>): this;

	initWithTypeTextImageURLAbbreviationAbbreviationPriority(type: MBVisualInstructionComponentType, text: string, imageURL: NSURL, abbreviation: string, abbreviationPriority: number): this;
}

declare const enum MBVisualInstructionComponentType {

	Delimiter = 0,

	Text = 1,

	Image = 2,

	Exit = 3,

	ExitCode = 4
}

declare class MBWaypoint extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): MBWaypoint; // inherited from NSObject

	static new(): MBWaypoint; // inherited from NSObject

	static supportsSecureCoding(): boolean;

	allowsArrivingOnOppositeSide: boolean;

	readonly coordinate: CLLocationCoordinate2D;

	coordinateAccuracy: number;

	heading: number;

	headingAccuracy: number;

	name: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { coordinate: CLLocationCoordinate2D; coordinateAccuracy: number; name: string; });

	constructor(o: { location: CLLocation; heading: CLHeading; name: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	initWithCoordinateCoordinateAccuracyName(coordinate: CLLocationCoordinate2D, coordinateAccuracy: number, name: string): this;

	initWithLocationHeadingName(location: CLLocation, heading: CLHeading, name: string): this;
}

declare var MapboxDirectionsVersionNumber: number;

declare var MapboxDirectionsVersionNumberVar: number;

declare var MapboxDirectionsVersionString: interop.Reference<number>;

declare var MapboxDirectionsVersionStringVar: interop.Reference<number>;
