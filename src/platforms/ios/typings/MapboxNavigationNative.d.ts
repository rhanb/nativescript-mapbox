
declare class MBBannerComponent extends NSObject {

	static alloc(): MBBannerComponent; // inherited from NSObject

	static new(): MBBannerComponent; // inherited from NSObject

	readonly abbr: string;

	readonly abbrPriority: number;

	readonly imageBaseurl: string;

	readonly text: string;

	readonly type: string;

	constructor(o: { text: string; type: string; abbr: string; abbrPriority: number; imageBaseurl: string; });

	initWithTextTypeAbbrAbbrPriorityImageBaseurl(text: string, type: string, abbr: string, abbrPriority: number, imageBaseurl: string): this;
}

declare class MBBannerInstruction extends NSObject {

	static alloc(): MBBannerInstruction; // inherited from NSObject

	static new(): MBBannerInstruction; // inherited from NSObject

	readonly index: number;

	readonly primary: MBBannerSection;

	readonly remainingStepDistance: number;

	readonly secondary: MBBannerSection;

	readonly sub: MBBannerSection;

	constructor(o: { primary: MBBannerSection; secondary: MBBannerSection; sub: MBBannerSection; remainingStepDistance: number; index: number; });

	initWithPrimarySecondarySubRemainingStepDistanceIndex(primary: MBBannerSection, secondary: MBBannerSection, sub: MBBannerSection, remainingStepDistance: number, index: number): this;
}

declare class MBBannerSection extends NSObject {

	static alloc(): MBBannerSection; // inherited from NSObject

	static new(): MBBannerSection; // inherited from NSObject

	readonly components: NSArray<MBBannerComponent>;

	readonly degrees: number;

	readonly drivingSide: string;

	readonly modifier: string;

	readonly text: string;

	readonly type: string;

	constructor(o: { text: string; type: string; modifier: string; degrees: number; drivingSide: string; components: NSArray<MBBannerComponent>; });

	initWithTextTypeModifierDegreesDrivingSideComponents(text: string, type: string, modifier: string, degrees: number, drivingSide: string, components: NSArray<MBBannerComponent>): this;
}

declare class MBFixLocation extends NSObject {

	static alloc(): MBFixLocation; // inherited from NSObject

	static new(): MBFixLocation; // inherited from NSObject

	readonly accuracyHorizontal: number;

	readonly altitude: number;

	readonly bearing: number;

	readonly location: CLLocationCoordinate2D;

	readonly provider: string;

	readonly speed: number;

	readonly time: Date;

	constructor(o: { location: CLLocationCoordinate2D; time: Date; speed: number; bearing: number; altitude: number; accuracyHorizontal: number; provider: string; });

	initWithLocationTimeSpeedBearingAltitudeAccuracyHorizontalProvider(location: CLLocationCoordinate2D, time: Date, speed: number, bearing: number, altitude: number, accuracyHorizontal: number, provider: string): this;
}

declare class MBNavigationStatus extends NSObject {

	static alloc(): MBNavigationStatus; // inherited from NSObject

	static new(): MBNavigationStatus; // inherited from NSObject

	readonly bannerInstruction: MBBannerInstruction;

	readonly bearing: number;

	readonly inTunnel: boolean;

	readonly intersectionIndex: number;

	readonly legIndex: number;

	readonly location: CLLocationCoordinate2D;

	readonly predicted: number;

	readonly remainingLegDistance: number;

	readonly remainingLegDuration: number;

	readonly remainingStepDistance: number;

	readonly remainingStepDuration: number;

	readonly routeIndex: number;

	readonly routeState: MBRouteState;

	readonly shapeIndex: number;

	readonly stateMessage: string;

	readonly stepIndex: number;

	readonly time: Date;

	readonly voiceInstruction: MBVoiceInstruction;

	constructor(o: { routeState: MBRouteState; location: CLLocationCoordinate2D; bearing: number; routeIndex: number; legIndex: number; remainingLegDistance: number; remainingLegDuration: number; stepIndex: number; remainingStepDistance: number; remainingStepDuration: number; voiceInstruction: MBVoiceInstruction; bannerInstruction: MBBannerInstruction; stateMessage: string; inTunnel: boolean; time: Date; predicted: number; shapeIndex: number; intersectionIndex: number; });

	initWithRouteStateLocationBearingRouteIndexLegIndexRemainingLegDistanceRemainingLegDurationStepIndexRemainingStepDistanceRemainingStepDurationVoiceInstructionBannerInstructionStateMessageInTunnelTimePredictedShapeIndexIntersectionIndex(routeState: MBRouteState, location: CLLocationCoordinate2D, bearing: number, routeIndex: number, legIndex: number, remainingLegDistance: number, remainingLegDuration: number, stepIndex: number, remainingStepDistance: number, remainingStepDuration: number, voiceInstruction: MBVoiceInstruction, bannerInstruction: MBBannerInstruction, stateMessage: string, inTunnel: boolean, time: Date, predicted: number, shapeIndex: number, intersectionIndex: number): this;
}

declare class MBNavigator extends NSObject {

	static alloc(): MBNavigator; // inherited from NSObject

	static new(): MBNavigator; // inherited from NSObject

	changeRouteLegForRouteLeg(route: number, leg: number): MBNavigationStatus;

	configureNavigatorForNameValue(name: string, value: string): boolean;

	configureRouterForTilesPathTranslationsPath(tilesPath: string, translationsPath: string): number;

	getBannerInstruction(): MBBannerInstruction;

	getBannerInstructionForIndexInRoute(indexInRoute: number): MBBannerInstruction;

	getBearing(): number;

	getHistory(): string;

	getRouteBoundingBox(): NSArray<CLLocation>;

	getRouteForDirectionsUri(directionsUri: string): MBRouterResult;

	getRouteGeometry(): NSArray<CLLocation>;

	getStatusForTimestamp(timestamp: Date): MBNavigationStatus;

	getVoiceInstruction(): MBVoiceInstruction;

	getVoiceInstructionForIndexInRoute(indexInRoute: number): MBVoiceInstruction;

	setRouteForRouteResponseRouteLeg(routeResponse: string, route: number, leg: number): MBNavigationStatus;

	toggleHistoryForOnOff(onOff: boolean): void;

	unpackTilesForPacked_tiles_pathOutput_directory(packed_tiles_path: string, output_directory: string): number;

	updateLocationForFixLocation(fixLocation: MBFixLocation): boolean;
}

declare const enum MBRouteState {

	Invalid = 0,

	Initialized = 1,

	Tracking = 2,

	Complete = 3,

	OffRoute = 4,

	Stale = 5
}

declare class MBRouterResult extends NSObject {

	static alloc(): MBRouterResult; // inherited from NSObject

	static new(): MBRouterResult; // inherited from NSObject

	readonly json: string;

	readonly success: boolean;

	constructor(o: { json: string; success: boolean; });

	initWithJsonSuccess(json: string, success: boolean): this;
}

declare class MBVoiceInstruction extends NSObject {

	static alloc(): MBVoiceInstruction; // inherited from NSObject

	static new(): MBVoiceInstruction; // inherited from NSObject

	readonly announcement: string;

	readonly index: number;

	readonly remainingStepDistance: number;

	readonly ssmlAnnouncement: string;

	constructor(o: { ssmlAnnouncement: string; announcement: string; remainingStepDistance: number; index: number; });

	initWithSsmlAnnouncementAnnouncementRemainingStepDistanceIndex(ssmlAnnouncement: string, announcement: string, remainingStepDistance: number, index: number): this;
}
