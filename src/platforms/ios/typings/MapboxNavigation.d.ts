
declare class BaseInstructionsBannerView extends UIControl {

	static alloc(): BaseInstructionsBannerView; // inherited from NSObject

	static appearance(): BaseInstructionsBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): BaseInstructionsBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): BaseInstructionsBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): BaseInstructionsBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): BaseInstructionsBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): BaseInstructionsBannerView; // inherited from UIAppearance

	static new(): BaseInstructionsBannerView; // inherited from NSObject

	showStepIndicator: boolean;

	swipeable: boolean;

	updateForVisualInstructionBanner(instruction: MBVisualInstructionBanner): void;
}

declare class ExitView extends MBStylableView {

	static alloc(): ExitView; // inherited from NSObject

	static appearance(): ExitView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ExitView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ExitView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ExitView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ExitView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ExitView; // inherited from UIAppearance

	static new(): ExitView; // inherited from NSObject

	foregroundColor: UIColor;
}

interface FeedbackViewControllerDelegate {

	feedbackViewControllerDidCancel?(feedbackViewController: MBFeedbackViewController): void;

	feedbackViewControllerDidOpen?(feedbackViewController: MBFeedbackViewController): void;

	feedbackViewControllerDidSendFeedbackItemUUID?(feedbackViewController: MBFeedbackViewController, feedbackItem: MBFeedbackItem, uuid: NSUUID): void;
}
declare var FeedbackViewControllerDelegate: {

	prototype: FeedbackViewControllerDelegate;
};

declare class GenericRouteShield extends MBStylableView {

	static alloc(): GenericRouteShield; // inherited from NSObject

	static appearance(): GenericRouteShield; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GenericRouteShield; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GenericRouteShield; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): GenericRouteShield; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GenericRouteShield; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): GenericRouteShield; // inherited from UIAppearance

	static new(): GenericRouteShield; // inherited from NSObject

	foregroundColor: UIColor;
}

declare class MBArrivalTimeLabel extends MBStylableLabel {

	static alloc(): MBArrivalTimeLabel; // inherited from NSObject

	static appearance(): MBArrivalTimeLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBArrivalTimeLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBArrivalTimeLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBArrivalTimeLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBArrivalTimeLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBArrivalTimeLabel; // inherited from UIAppearance

	static new(): MBArrivalTimeLabel; // inherited from NSObject
}

interface MBBimodalCache {

	clearDiskWithCompletion(completion: () => void): void;

	clearMemory(): void;
}
declare var MBBimodalCache: {

	prototype: MBBimodalCache;
};

interface MBBimodalDataCache extends MBBimodalCache {

	dataForKey(forKey: string): NSData;

	storeForKeyToDiskCompletion(data: NSData, key: string, toDisk: boolean, completionBlock: () => void): void;
}
declare var MBBimodalDataCache: {

	prototype: MBBimodalDataCache;
};

interface MBBimodalImageCache extends MBBimodalCache {

	imageForKey(forKey: string): UIImage;

	storeForKeyToDiskCompletion(image: UIImage, key: string, toDisk: boolean, completionBlock: () => void): void;
}
declare var MBBimodalImageCache: {

	prototype: MBBimodalImageCache;
};

declare class MBBottomBannerContentView extends UIView {

	static alloc(): MBBottomBannerContentView; // inherited from NSObject

	static appearance(): MBBottomBannerContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBBottomBannerContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBBottomBannerContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBBottomBannerContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBBottomBannerContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBBottomBannerContentView; // inherited from UIAppearance

	static new(): MBBottomBannerContentView; // inherited from NSObject
}

declare class MBBottomBannerView extends UIView {

	static alloc(): MBBottomBannerView; // inherited from NSObject

	static appearance(): MBBottomBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBBottomBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBBottomBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBBottomBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBBottomBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBBottomBannerView; // inherited from UIAppearance

	static new(): MBBottomBannerView; // inherited from NSObject
}

declare class MBButton extends MBStylableButton {

	static alloc(): MBButton; // inherited from NSObject

	static appearance(): MBButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MBButton; // inherited from UIButton

	static new(): MBButton; // inherited from NSObject
}

declare class MBCancelButton extends MBButton {

	static alloc(): MBCancelButton; // inherited from NSObject

	static appearance(): MBCancelButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBCancelButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBCancelButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBCancelButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBCancelButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBCancelButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MBCancelButton; // inherited from UIButton

	static new(): MBCancelButton; // inherited from NSObject
}

declare const enum MBCarPlayActivity {

	Browsing = 0,

	Previewing = 1,

	Navigating = 2
}

declare class MBCarPlayManager extends NSObject implements MBNavigationCarPlayDelegate {

	static alloc(): MBCarPlayManager; // inherited from NSObject

	static new(): MBCarPlayManager; // inherited from NSObject

	static setIsConnected(value: boolean): void;

	delegate: MBCarPlayManagerDelegate;

	readonly directions: MBDirections;

	readonly eventsManager: MBNavigationEventsManager;

	readonly mapView: MBNavigationMapView;

	simulatedSpeedMultiplier: number;

	simulatesLocations: boolean;

	styles: NSArray<MBStyle>;

	static isConnected: boolean;

	constructor(o: { styles: NSArray<MBStyle>; directions: MBDirections; eventsManager: MBNavigationEventsManager; });

	applicationDidConnectCarInterfaceControllerToWindow(application: UIApplication, interfaceController: CPInterfaceController, window: CPWindow): void;

	applicationDidDisconnectCarInterfaceControllerFromWindow(application: UIApplication, interfaceController: CPInterfaceController, window: CPWindow): void;

	carPlayNavigationViewControllerDidArrive(carPlayNavigationViewController: MBCarPlayNavigationViewController): void;

	carPlayNavigationViewControllerDidDismissByCanceling(carPlayNavigationViewController: MBCarPlayNavigationViewController, canceled: boolean): void;

	initWithStylesDirectionsEventsManager(styles: NSArray<MBStyle>, directions: MBDirections, eventsManager: MBNavigationEventsManager): this;

	listTemplateDidSelectListItemCompletionHandler(listTemplate: CPListTemplate, item: CPListItem, completionHandler: () => void): void;

	mapTemplateDidBeginPanGesture(mapTemplate: CPMapTemplate): void;

	mapTemplateDidCancelNavigation(mapTemplate: CPMapTemplate): void;

	mapTemplateDidEndPanGestureWithVelocity(mapTemplate: CPMapTemplate, velocity: CGPoint): void;

	mapTemplateDidUpdatePanGestureWithTranslationVelocity(mapTemplate: CPMapTemplate, translation: CGPoint, velocity: CGPoint): void;

	mapTemplatePanWithDirection(mapTemplate: CPMapTemplate, direction: any): void;

	mapTemplateSelectedPreviewForTripUsingRouteChoice(mapTemplate: CPMapTemplate, trip: CPTrip, routeChoice: CPRouteChoice): void;

	mapTemplateStartedTripUsingRouteChoice(mapTemplate: CPMapTemplate, trip: CPTrip, routeChoice: CPRouteChoice): void;

	mapTemplateWillDismissPanningInterface(mapTemplate: CPMapTemplate): void;

	templateDidAppearAnimated(template_: CPTemplate, animated: boolean): void;

	templateWillAppearAnimated(template_: CPTemplate, animated: boolean): void;

	templateWillDisappearAnimated(template_: CPTemplate, animated: boolean): void;
}

interface MBCarPlayManagerDelegate {

	carPlayManagerDidBeginNavigationWithNavigationService(carPlayManager: MBCarPlayManager, service: MBNavigationServiceProtocol): void;

	carPlayManagerDidEndNavigation(carPlayManager: MBCarPlayManager): void;

	carPlayManagerLeadingNavigationBarButtonsWithTraitCollectionInTemplateForActivity?(carPlayManager: MBCarPlayManager, traitCollection: UITraitCollection, template_: CPTemplate, activity: MBCarPlayActivity): NSArray<CPBarButton>;

	carPlayManagerMapButtonsCompatibleWithTraitCollectionInTemplateForActivity?(carPlayManager: MBCarPlayManager, traitCollection: UITraitCollection, template_: CPTemplate, activity: MBCarPlayActivity): NSArray<CPMapButton>;

	carPlayManagerNavigationServiceAlongRoute?(carPlayManager: MBCarPlayManager, route: MBRoute): MBNavigationServiceProtocol;

	carPlayManagerSearchTemplateSelectedResultCompletionHandler?(carPlayManager: MBCarPlayManager, searchTemplate: CPSearchTemplate, item: CPListItem, completionHandler: () => void): void;

	carPlayManagerSearchTemplateUpdatedSearchTextCompletionHandler?(carPlayManager: MBCarPlayManager, searchTemplate: CPSearchTemplate, searchText: string, completionHandler: (p1: NSArray<CPListItem>) => void): void;

	carPlayManagerTrailingNavigationBarButtonsWithTraitCollectionInTemplateForActivity?(carPlayManager: MBCarPlayManager, traitCollection: UITraitCollection, template_: CPTemplate, activity: MBCarPlayActivity): NSArray<CPBarButton>;

	carplayManagerShouldDisableIdleTimer?(carPlayManager: MBCarPlayManager): boolean;
}
declare var MBCarPlayManagerDelegate: {

	prototype: MBCarPlayManagerDelegate;
};

declare class MBCarPlayNavigationViewController extends UIViewController implements MBNavigationMapViewDelegate, MBStyleManagerDelegate {

	static alloc(): MBCarPlayNavigationViewController; // inherited from NSObject

	static new(): MBCarPlayNavigationViewController; // inherited from NSObject

	carPlayNavigationDelegate: MBNavigationCarPlayDelegate;

	readonly mapView: MBNavigationMapView;

	styles: NSArray<MBStyle>;

	tracksUserCourse: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { navigationService: MBNavigationServiceProtocol; mapTemplate: CPMapTemplate; interfaceController: CPInterfaceController; manager: MBCarPlayManager; styles: NSArray<MBStyle>; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	exitNavigationByCanceling(canceled: boolean): void;

	initWithNavigationServiceMapTemplateInterfaceControllerManagerStyles(navigationService: MBNavigationServiceProtocol, mapTemplate: CPMapTemplate, interfaceController: CPInterfaceController, manager: MBCarPlayManager, styles: NSArray<MBStyle>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	locationForStyleManager(styleManager: MBStyleManager): CLLocation;

	navigationMapViewDidSelectRoute(mapView: MBNavigationMapView, route: MBRoute): void;

	navigationMapViewDidSelectWaypoint(mapView: MBNavigationMapView, waypoint: MBWaypoint): void;

	navigationMapViewImageForAnnotation(mapView: MGLMapView, annotation: MGLAnnotation): MGLAnnotationImage;

	navigationMapViewRouteCasingStyleLayerWithIdentifierSource(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationMapViewRouteStyleLayerWithIdentifierSource(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationMapViewShapeForRoutes(mapView: MBNavigationMapView, routes: NSArray<MBRoute>): MGLShape;

	navigationMapViewShapeForWaypointsLegIndex(mapView: MBNavigationMapView, waypoints: NSArray<MBWaypoint>, legIndex: number): MGLShape;

	navigationMapViewSimplifiedShapeForRoute(mapView: MBNavigationMapView, route: MBRoute): MGLShape;

	navigationMapViewUserAnchorPoint(mapView: MBNavigationMapView): CGPoint;

	navigationMapViewViewForAnnotation(mapView: MGLMapView, annotation: MGLAnnotation): MGLAnnotationView;

	navigationMapViewWaypointStyleLayerWithIdentifierSource(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationMapViewWaypointSymbolStyleLayerWithIdentifierSource(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationServiceDidArriveAtWaypoint(service: MBNavigationServiceProtocol, waypoint: MBWaypoint): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showFeedback(): void;

	startNavigationSessionForTrip(trip: CPTrip): void;

	styleManagerDidApply(styleManager: MBStyleManager, style: MBStyle): void;

	styleManagerDidRefreshAppearance(styleManager: MBStyleManager): void;
}

declare class MBDashedLineView extends MBLineView {

	static alloc(): MBDashedLineView; // inherited from NSObject

	static appearance(): MBDashedLineView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBDashedLineView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBDashedLineView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBDashedLineView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBDashedLineView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBDashedLineView; // inherited from UIAppearance

	static new(): MBDashedLineView; // inherited from NSObject

	dashedGap: number;

	dashedLength: number;
}

declare class MBDataCache extends NSObject implements MBBimodalDataCache {

	static alloc(): MBDataCache; // inherited from NSObject

	static new(): MBDataCache; // inherited from NSObject

	clearDiskWithCompletion(completion: () => void): void;

	clearMemory(): void;

	dataForKey(forKey: string): NSData;

	storeForKeyToDiskCompletion(data: NSData, key: string, toDisk: boolean, completionBlock: () => void): void;
}

declare class MBDayStyle extends MBStyle {

	static alloc(): MBDayStyle; // inherited from NSObject

	static new(): MBDayStyle; // inherited from NSObject
}

declare class MBDismissButton extends MBButton {

	static alloc(): MBDismissButton; // inherited from NSObject

	static appearance(): MBDismissButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBDismissButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBDismissButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBDismissButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBDismissButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBDismissButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MBDismissButton; // inherited from UIButton

	static new(): MBDismissButton; // inherited from NSObject
}

declare class MBDistanceLabel extends MBStylableLabel {

	static alloc(): MBDistanceLabel; // inherited from NSObject

	static appearance(): MBDistanceLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBDistanceLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBDistanceLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBDistanceLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBDistanceLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBDistanceLabel; // inherited from UIAppearance

	static new(): MBDistanceLabel; // inherited from NSObject

	unitFont: UIFont;

	unitTextColor: UIColor;

	valueFont: UIFont;

	valueTextColor: UIColor;
}

declare class MBDistanceRemainingLabel extends MBStylableLabel {

	static alloc(): MBDistanceRemainingLabel; // inherited from NSObject

	static appearance(): MBDistanceRemainingLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBDistanceRemainingLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBDistanceRemainingLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBDistanceRemainingLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBDistanceRemainingLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBDistanceRemainingLabel; // inherited from UIAppearance

	static new(): MBDistanceRemainingLabel; // inherited from NSObject
}

declare class MBDraggableView extends UIView {

	static alloc(): MBDraggableView; // inherited from NSObject

	static appearance(): MBDraggableView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBDraggableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBDraggableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBDraggableView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBDraggableView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBDraggableView; // inherited from UIAppearance

	static new(): MBDraggableView; // inherited from NSObject

	gradientColors: NSArray<UIColor>;
}

declare class MBEndOfRouteButton extends MBStylableButton {

	static alloc(): MBEndOfRouteButton; // inherited from NSObject

	static appearance(): MBEndOfRouteButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBEndOfRouteButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBEndOfRouteButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBEndOfRouteButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBEndOfRouteButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBEndOfRouteButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MBEndOfRouteButton; // inherited from UIButton

	static new(): MBEndOfRouteButton; // inherited from NSObject
}

declare class MBEndOfRouteCommentView extends MBStylableTextView {

	static alloc(): MBEndOfRouteCommentView; // inherited from NSObject

	static appearance(): MBEndOfRouteCommentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBEndOfRouteCommentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBEndOfRouteCommentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBEndOfRouteCommentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBEndOfRouteCommentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBEndOfRouteCommentView; // inherited from UIAppearance

	static new(): MBEndOfRouteCommentView; // inherited from NSObject
}

declare class MBEndOfRouteContentView extends UIView {

	static alloc(): MBEndOfRouteContentView; // inherited from NSObject

	static appearance(): MBEndOfRouteContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBEndOfRouteContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBEndOfRouteContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBEndOfRouteContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBEndOfRouteContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBEndOfRouteContentView; // inherited from UIAppearance

	static new(): MBEndOfRouteContentView; // inherited from NSObject
}

declare class MBEndOfRouteStaticLabel extends MBStylableLabel {

	static alloc(): MBEndOfRouteStaticLabel; // inherited from NSObject

	static appearance(): MBEndOfRouteStaticLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBEndOfRouteStaticLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBEndOfRouteStaticLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBEndOfRouteStaticLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBEndOfRouteStaticLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBEndOfRouteStaticLabel; // inherited from UIAppearance

	static new(): MBEndOfRouteStaticLabel; // inherited from NSObject
}

declare class MBEndOfRouteTitleLabel extends MBStylableLabel {

	static alloc(): MBEndOfRouteTitleLabel; // inherited from NSObject

	static appearance(): MBEndOfRouteTitleLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBEndOfRouteTitleLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBEndOfRouteTitleLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBEndOfRouteTitleLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBEndOfRouteTitleLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBEndOfRouteTitleLabel; // inherited from UIAppearance

	static new(): MBEndOfRouteTitleLabel; // inherited from NSObject
}

declare class MBFeedbackItem extends NSObject {

	static alloc(): MBFeedbackItem; // inherited from NSObject

	static new(): MBFeedbackItem; // inherited from NSObject

	image: UIImage;

	title: string;
}

declare class MBFeedbackViewController extends UIViewController implements UICollectionViewDataSource, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout, UIGestureRecognizerDelegate, UIViewControllerTransitioningDelegate {

	static alloc(): MBFeedbackViewController; // inherited from NSObject

	static new(): MBFeedbackViewController; // inherited from NSObject

	delegate: FeedbackViewControllerDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { eventsManager: MBNavigationEventsManager; });

	animationControllerForDismissedController(dismissed: UIViewController): UIViewControllerAnimatedTransitioning;

	animationControllerForPresentedControllerPresentingControllerSourceController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIViewControllerAnimatedTransitioning;

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissFeedback(): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	initWithEventsManager(eventsManager: MBNavigationEventsManager): this;

	interactionControllerForDismissal(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	interactionControllerForPresentation(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentationControllerForPresentedViewControllerPresentingViewControllerSourceViewController(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIPresentationController;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class MBFloatingButton extends MBButton {

	static alloc(): MBFloatingButton; // inherited from NSObject

	static appearance(): MBFloatingButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBFloatingButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBFloatingButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBFloatingButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBFloatingButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBFloatingButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MBFloatingButton; // inherited from UIButton

	static new(): MBFloatingButton; // inherited from NSObject
}

declare class MBHighlightedButton extends MBButton {

	static alloc(): MBHighlightedButton; // inherited from NSObject

	static appearance(): MBHighlightedButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBHighlightedButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBHighlightedButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBHighlightedButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBHighlightedButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBHighlightedButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MBHighlightedButton; // inherited from UIButton

	static new(): MBHighlightedButton; // inherited from NSObject
}

declare class MBInstructionLabel extends MBStylableLabel {

	static alloc(): MBInstructionLabel; // inherited from NSObject

	static appearance(): MBInstructionLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBInstructionLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBInstructionLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBInstructionLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBInstructionLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBInstructionLabel; // inherited from UIAppearance

	static new(): MBInstructionLabel; // inherited from NSObject
}

declare class MBInstructionsBannerContentView extends UIView {

	static alloc(): MBInstructionsBannerContentView; // inherited from NSObject

	static appearance(): MBInstructionsBannerContentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBInstructionsBannerContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBInstructionsBannerContentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBInstructionsBannerContentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBInstructionsBannerContentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBInstructionsBannerContentView; // inherited from UIAppearance

	static new(): MBInstructionsBannerContentView; // inherited from NSObject
}

declare class MBInstructionsBannerView extends BaseInstructionsBannerView {

	static alloc(): MBInstructionsBannerView; // inherited from NSObject

	static appearance(): MBInstructionsBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBInstructionsBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBInstructionsBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBInstructionsBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBInstructionsBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBInstructionsBannerView; // inherited from UIAppearance

	static new(): MBInstructionsBannerView; // inherited from NSObject
}

interface MBInstructionsBannerViewDelegate {

	didDragInstructionsBanner?(sender: BaseInstructionsBannerView): void;

	didSwipeInstructionsBannerSwipeDirection?(sender: BaseInstructionsBannerView, direction: UISwipeGestureRecognizerDirection): void;

	didTapInstructionsBanner?(sender: BaseInstructionsBannerView): void;
}
declare var MBInstructionsBannerViewDelegate: {

	prototype: MBInstructionsBannerViewDelegate;
};

declare class MBLaneView extends UIView {

	static alloc(): MBLaneView; // inherited from NSObject

	static appearance(): MBLaneView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBLaneView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBLaneView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBLaneView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBLaneView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBLaneView; // inherited from UIAppearance

	static new(): MBLaneView; // inherited from NSObject

	primaryColor: UIColor;

	secondaryColor: UIColor;
}

declare class MBLanesStyleKit extends NSObject {

	static alloc(): MBLanesStyleKit; // inherited from NSObject

	static drawLane_right_hWithPrimaryColor(primaryColor: UIColor): void;

	static drawLane_right_onlyWithPrimaryColorSecondaryColor(primaryColor: UIColor, secondaryColor: UIColor): void;

	static drawLane_slight_rightWithPrimaryColorScale(primaryColor: UIColor, scale: number): void;

	static drawLane_straightWithPrimaryColor(primaryColor: UIColor): void;

	static drawLane_straight_onlyWithPrimaryColorSecondaryColor(primaryColor: UIColor, secondaryColor: UIColor): void;

	static drawLane_straight_rightWithPrimaryColor(primaryColor: UIColor): void;

	static drawLane_uturnWithPrimaryColor(primaryColor: UIColor): void;

	static new(): MBLanesStyleKit; // inherited from NSObject
}

declare class MBLanesView extends UIView {

	static alloc(): MBLanesView; // inherited from NSObject

	static appearance(): MBLanesView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBLanesView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBLanesView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBLanesView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBLanesView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBLanesView; // inherited from UIAppearance

	static new(): MBLanesView; // inherited from NSObject

	updateForVisualInstructionBanner(visualInstruction: MBVisualInstructionBanner): void;
}

declare class MBLineView extends UIView {

	static alloc(): MBLineView; // inherited from NSObject

	static appearance(): MBLineView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBLineView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBLineView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBLineView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBLineView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBLineView; // inherited from UIAppearance

	static new(): MBLineView; // inherited from NSObject

	lineColor: UIColor;
}

declare class MBManeuverContainerView extends UIView {

	static alloc(): MBManeuverContainerView; // inherited from NSObject

	static appearance(): MBManeuverContainerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBManeuverContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBManeuverContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBManeuverContainerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBManeuverContainerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBManeuverContainerView; // inherited from UIAppearance

	static new(): MBManeuverContainerView; // inherited from NSObject
}

declare class MBManeuverView extends UIView {

	static alloc(): MBManeuverView; // inherited from NSObject

	static appearance(): MBManeuverView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBManeuverView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBManeuverView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBManeuverView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBManeuverView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBManeuverView; // inherited from UIAppearance

	static new(): MBManeuverView; // inherited from NSObject

	isEnd: boolean;

	isStart: boolean;

	primaryColor: UIColor;

	secondaryColor: UIColor;

	visualInstruction: MBVisualInstruction;
}

declare class MBManeuversStyleKit extends NSObject {

	static alloc(): MBManeuversStyleKit; // inherited from NSObject

	static drawArriveWithFrameResizingPrimaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, size: CGSize): void;

	static drawArriveright2WithFrameResizingPrimaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, size: CGSize): void;

	static drawArriverightWithFrameResizingPrimaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, size: CGSize): void;

	static drawArrow180rightWithFrameResizingPrimaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, size: CGSize): void;

	static drawArrowrightWithFrameResizingPrimaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, size: CGSize): void;

	static drawArrowsharprightWithFrameResizingPrimaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, size: CGSize): void;

	static drawArrowslightrightWithFrameResizingPrimaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, size: CGSize): void;

	static drawArrowstraightWithFrameResizingPrimaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, size: CGSize): void;

	static drawDestinationWithFrameResizingPrimaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, size: CGSize): void;

	static drawForkWithFrameResizingPrimaryColorSecondaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, secondaryColor: UIColor, size: CGSize): void;

	static drawMergeWithFrameResizingPrimaryColorSecondaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, secondaryColor: UIColor, size: CGSize): void;

	static drawOfframpWithFrameResizingPrimaryColorSecondaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, secondaryColor: UIColor, size: CGSize): void;

	static drawRoundaboutWithFrameResizingPrimaryColorSecondaryColorSizeRoundabout_angleRoundabout_radius(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, secondaryColor: UIColor, size: CGSize, roundabout_angle: number, roundabout_radius: number): void;

	static drawStartingWithFrameResizingPrimaryColorSize(targetFrame: CGRect, resizing: ManeuversStyleKitResizingBehavior, primaryColor: UIColor, size: CGSize): void;

	static new(): MBManeuversStyleKit; // inherited from NSObject
}

declare class MBMapboxVoiceController extends MBRouteVoiceController implements AVAudioPlayerDelegate {

	static alloc(): MBMapboxVoiceController; // inherited from NSObject

	static new(): MBMapboxVoiceController; // inherited from NSObject

	audioPlayer: AVAudioPlayer;

	stepsAheadToCache: number;

	timeoutIntervalForRequest: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { speechClient: MBSpeechSynthesizer; dataCache: MBBimodalDataCache; audioPlayerType: typeof NSObject; });

	audioPlayerBeginInterruption(player: AVAudioPlayer): void;

	audioPlayerDecodeErrorDidOccurError(player: AVAudioPlayer, error: NSError): void;

	audioPlayerDidFinishPlayingSuccessfully(player: AVAudioPlayer, flag: boolean): void;

	audioPlayerEndInterruption(player: AVAudioPlayer): void;

	audioPlayerEndInterruptionWithFlags(player: AVAudioPlayer, flags: number): void;

	audioPlayerEndInterruptionWithOptions(player: AVAudioPlayer, flags: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	downloadAndCacheSpokenInstructionWithInstruction(instruction: MBSpokenInstruction): void;

	fetchAndSpeakWithInstruction(instruction: MBSpokenInstruction): void;

	initWithSpeechClientDataCacheAudioPlayerType(speechClient: MBSpeechSynthesizer, dataCache: MBBimodalDataCache, audioPlayerType: typeof NSObject): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	play(data: NSData): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	speak(instruction: MBSpokenInstruction): void;

	speakWithDefaultSpeechSynthesizerError(instruction: MBSpokenInstruction, error: NSError): void;
}

declare class MBMarkerView extends UIView {

	static alloc(): MBMarkerView; // inherited from NSObject

	static appearance(): MBMarkerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBMarkerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBMarkerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBMarkerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBMarkerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBMarkerView; // inherited from UIAppearance

	static new(): MBMarkerView; // inherited from NSObject

	innerColor: UIColor;

	pinColor: UIColor;

	shadowColor: UIColor;

	strokeColor: UIColor;
}

interface MBNavigationCarPlayDelegate {

	carPlayNavigationViewControllerDidArrive(carPlayNavigationViewController: MBCarPlayNavigationViewController): void;

	carPlayNavigationViewControllerDidDismissByCanceling(carPlayNavigationViewController: MBCarPlayNavigationViewController, canceled: boolean): void;
}
declare var MBNavigationCarPlayDelegate: {

	prototype: MBNavigationCarPlayDelegate;
};

declare class MBNavigationMapView extends MGLMapView implements UIGestureRecognizerDelegate {

	static alloc(): MBNavigationMapView; // inherited from NSObject

	static appearance(): MBNavigationMapView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBNavigationMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBNavigationMapView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBNavigationMapView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBNavigationMapView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBNavigationMapView; // inherited from UIAppearance

	static new(): MBNavigationMapView; // inherited from NSObject

	defaultAltitude: number;

	longManeuverDistance: number;

	maneuverArrowColor: UIColor;

	maneuverArrowStrokeColor: UIColor;

	minimumFramesPerSecond: number;

	routeAlternateCasingColor: UIColor;

	routeAlternateColor: UIColor;

	routeCasingColor: UIColor;

	tapGestureDistanceThreshold: number;

	trafficHeavyColor: UIColor;

	trafficLowColor: UIColor;

	trafficModerateColor: UIColor;

	trafficSevereColor: UIColor;

	trafficUnknownColor: UIColor;

	userCourseView: UIView;

	zoomedOutMotorwayAltitude: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addArrowWithRouteLegIndexStepIndex(route: MBRoute, legIndex: number, stepIndex: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	localizeLabels(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	recenterMap(): void;

	removeArrow(): void;

	removeRoutes(): void;

	removeWaypoints(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setOverheadCameraViewFromAlongFor(userLocation: CLLocationCoordinate2D, coordinates: NSArray<NSValue>, bounds: UIEdgeInsets): void;

	showRoutesLegIndex(routes: NSArray<MBRoute>, legIndex: number): void;

	showVoiceInstructionsOnMapWithRoute(route: MBRoute): void;

	showWaypointsLegIndex(route: MBRoute, legIndex: number): void;

	showcasePaddingAnimated(routes: NSArray<MBRoute>, padding: UIEdgeInsets, animated: boolean): void;

	updateCourseTrackingWithLocationCameraAnimated(location: CLLocation, camera: MGLMapCamera, animated: boolean): void;

	updatePreferredFrameRateForRouteProgress(routeProgress: MBRouteProgress): void;
}

interface MBNavigationMapViewCourseTrackingDelegate {

	navigationMapViewDidStartTrackingCourse?(mapView: MBNavigationMapView): void;

	navigationMapViewDidStopTrackingCourse?(mapView: MBNavigationMapView): void;
}
declare var MBNavigationMapViewCourseTrackingDelegate: {

	prototype: MBNavigationMapViewCourseTrackingDelegate;
};

interface MBNavigationMapViewDelegate {

	navigationMapViewDidSelectRoute?(mapView: MBNavigationMapView, route: MBRoute): void;

	navigationMapViewDidSelectWaypoint?(mapView: MBNavigationMapView, waypoint: MBWaypoint): void;

	navigationMapViewImageForAnnotation?(mapView: MGLMapView, annotation: MGLAnnotation): MGLAnnotationImage;

	navigationMapViewRouteCasingStyleLayerWithIdentifierSource?(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationMapViewRouteStyleLayerWithIdentifierSource?(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationMapViewShapeForRoutes?(mapView: MBNavigationMapView, routes: NSArray<MBRoute>): MGLShape;

	navigationMapViewShapeForWaypointsLegIndex?(mapView: MBNavigationMapView, waypoints: NSArray<MBWaypoint>, legIndex: number): MGLShape;

	navigationMapViewSimplifiedShapeForRoute?(mapView: MBNavigationMapView, route: MBRoute): MGLShape;

	navigationMapViewUserAnchorPoint?(mapView: MBNavigationMapView): CGPoint;

	navigationMapViewViewForAnnotation?(mapView: MGLMapView, annotation: MGLAnnotation): MGLAnnotationView;

	navigationMapViewWaypointStyleLayerWithIdentifierSource?(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationMapViewWaypointSymbolStyleLayerWithIdentifierSource?(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;
}
declare var MBNavigationMapViewDelegate: {

	prototype: MBNavigationMapViewDelegate;
};

declare class MBNavigationView extends UIView {

	static alloc(): MBNavigationView; // inherited from NSObject

	static appearance(): MBNavigationView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBNavigationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBNavigationView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBNavigationView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBNavigationView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBNavigationView; // inherited from UIAppearance

	static new(): MBNavigationView; // inherited from NSObject
}

declare class MBNavigationViewController extends UIViewController implements MBNavigationMapViewDelegate, MBStyleManagerDelegate, MBVisualInstructionDelegate {

	static alloc(): MBNavigationViewController; // inherited from NSObject

	static new(): MBNavigationViewController; // inherited from NSObject

	annotatesSpokenInstructions: boolean;

	automaticallyAdjustsStyleForTimeOfDay: boolean;

	delegate: MBNavigationViewControllerDelegate;

	readonly directions: MBDirections;

	eventsManager: MBNavigationEventsManager;

	isUsedInConjunctionWithCarPlayWindow: boolean;

	locationManager: MBNavigationLocationManager;

	readonly mapView: MBNavigationMapView;

	navigationService: MBNavigationServiceProtocol;

	origin: MGLAnnotation;

	pendingCamera: MGLMapCamera;

	route: MBRoute;

	routeController: MBRouteController;

	sendsNotifications: boolean;

	shouldManageApplicationIdleTimer: boolean;

	showsEndOfRouteFeedback: boolean;

	showsReportFeedback: boolean;

	snapsUserLocationAnnotationToRoute: boolean;

	voiceController: MBRouteVoiceController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { route: MBRoute; directions: MBDirections; styles: NSArray<MBStyle>; routeController: MBRouteController; locationManager: MBNavigationLocationManager; voiceController: MBRouteVoiceController; eventsManager: MBNavigationEventsManager; });

	constructor(o: { route: MBRoute; styles: NSArray<MBStyle>; navigationService: MBNavigationServiceProtocol; voiceController: MBRouteVoiceController; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithRouteDirectionsStylesRouteControllerLocationManagerVoiceControllerEventsManager(route: MBRoute, directions: MBDirections, styles: NSArray<MBStyle>, routeController: MBRouteController, locationManager: MBNavigationLocationManager, voiceController: MBRouteVoiceController, eventsManager: MBNavigationEventsManager): this;

	initWithRouteStylesNavigationServiceVoiceController(route: MBRoute, styles: NSArray<MBStyle>, navigationService: MBNavigationServiceProtocol, voiceController: MBRouteVoiceController): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	labelWillPresentVisualInstructionAsAttributedString(label: MBInstructionLabel, instruction: MBVisualInstruction, presented: NSAttributedString): NSAttributedString;

	locationForStyleManager(styleManager: MBStyleManager): CLLocation;

	navigationMapViewDidSelectRoute(mapView: MBNavigationMapView, route: MBRoute): void;

	navigationMapViewDidSelectWaypoint(mapView: MBNavigationMapView, waypoint: MBWaypoint): void;

	navigationMapViewImageForAnnotation(mapView: MGLMapView, annotation: MGLAnnotation): MGLAnnotationImage;

	navigationMapViewRouteCasingStyleLayerWithIdentifierSource(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationMapViewRouteStyleLayerWithIdentifierSource(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationMapViewShapeForRoutes(mapView: MBNavigationMapView, routes: NSArray<MBRoute>): MGLShape;

	navigationMapViewShapeForWaypointsLegIndex(mapView: MBNavigationMapView, waypoints: NSArray<MBWaypoint>, legIndex: number): MGLShape;

	navigationMapViewSimplifiedShapeForRoute(mapView: MBNavigationMapView, route: MBRoute): MGLShape;

	navigationMapViewUserAnchorPoint(mapView: MBNavigationMapView): CGPoint;

	navigationMapViewViewForAnnotation(mapView: MGLMapView, annotation: MGLAnnotation): MGLAnnotationView;

	navigationMapViewWaypointStyleLayerWithIdentifierSource(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationMapViewWaypointSymbolStyleLayerWithIdentifierSource(mapView: MBNavigationMapView, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationServiceDidArriveAtWaypoint(service: MBNavigationServiceProtocol, waypoint: MBWaypoint): boolean;

	navigationServiceDidFailToRerouteWithError(service: MBNavigationServiceProtocol, error: NSError): void;

	navigationServiceDidRerouteAlongRouteAtProactive(service: MBNavigationServiceProtocol, route: MBRoute, at: CLLocation, proactive: boolean): void;

	navigationServiceDidUpdateProgressWithLocationRawLocation(service: MBNavigationServiceProtocol, progress: MBRouteProgress, location: CLLocation, rawLocation: CLLocation): void;

	navigationServiceShouldDiscardLocation(service: MBNavigationServiceProtocol, location: CLLocation): boolean;

	navigationServiceShouldRerouteFromLocation(service: MBNavigationServiceProtocol, location: CLLocation): boolean;

	navigationServiceWillArriveAtWaypointAfterDistance(service: MBNavigationServiceProtocol, waypoint: MBWaypoint, remainingTimeInterval: number, distance: number): void;

	navigationServiceWillRerouteFromLocation(service: MBNavigationServiceProtocol, location: CLLocation): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	styleManagerDidApply(styleManager: MBStyleManager, style: MBStyle): void;

	styleManagerDidRefreshAppearance(styleManager: MBStyleManager): void;
}

interface MBNavigationViewControllerDelegate extends MBVisualInstructionDelegate {

	navigationViewControllerDidArriveAtWaypoint?(navigationViewController: MBNavigationViewController, waypoint: MBWaypoint): boolean;

	navigationViewControllerDidDismissByCanceling?(navigationViewController: MBNavigationViewController, canceled: boolean): void;

	navigationViewControllerDidFailToRerouteWithError?(navigationViewController: MBNavigationViewController, error: NSError): void;

	navigationViewControllerDidRerouteAlongRoute?(navigationViewController: MBNavigationViewController, route: MBRoute): void;

	navigationViewControllerDidSelectRoute?(navigationViewController: MBNavigationViewController, route: MBRoute): void;

	navigationViewControllerImageForAnnotation?(navigationViewController: MBNavigationViewController, annotation: MGLAnnotation): MGLAnnotationImage;

	navigationViewControllerMapViewUserAnchorPoint?(navigationViewController: MBNavigationViewController, mapView: MBNavigationMapView): CGPoint;

	navigationViewControllerRoadNameAtLocation?(navigationViewController: MBNavigationViewController, location: CLLocation): string;

	navigationViewControllerRouteCasingStyleLayerWithIdentifierSource?(navigationViewController: MBNavigationViewController, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationViewControllerRouteStyleLayerWithIdentifierSource?(navigationViewController: MBNavigationViewController, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationViewControllerShapeForRoutes?(navigationViewController: MBNavigationViewController, routes: NSArray<MBRoute>): MGLShape;

	navigationViewControllerShapeForWaypointsLegIndex?(navigationViewController: MBNavigationViewController, waypoints: NSArray<MBWaypoint>, legIndex: number): MGLShape;

	navigationViewControllerShouldDiscardLocation?(navigationViewController: MBNavigationViewController, location: CLLocation): boolean;

	navigationViewControllerShouldRerouteFromLocation?(navigationViewController: MBNavigationViewController, location: CLLocation): boolean;

	navigationViewControllerSimplifiedShapeForRoute?(navigationViewController: MBNavigationViewController, route: MBRoute): MGLShape;

	navigationViewControllerViewForAnnotation?(navigationViewController: MBNavigationViewController, annotation: MGLAnnotation): MGLAnnotationView;

	navigationViewControllerWaypointStyleLayerWithIdentifierSource?(navigationViewController: MBNavigationViewController, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationViewControllerWaypointSymbolStyleLayerWithIdentifierSource?(navigationViewController: MBNavigationViewController, identifier: string, source: MGLSource): MGLStyleLayer;

	navigationViewControllerWillArriveAtWaypointAfterDistance?(navigationViewController: MBNavigationViewController, waypoint: MBWaypoint, remainingTimeInterval: number, distance: number): void;

	navigationViewControllerWillRerouteFromLocation?(navigationViewController: MBNavigationViewController, location: CLLocation): void;
}
declare var MBNavigationViewControllerDelegate: {

	prototype: MBNavigationViewControllerDelegate;
};

declare class MBNextBannerView extends UIView {

	static alloc(): MBNextBannerView; // inherited from NSObject

	static appearance(): MBNextBannerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBNextBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBNextBannerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBNextBannerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBNextBannerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBNextBannerView; // inherited from UIAppearance

	static new(): MBNextBannerView; // inherited from NSObject

	updateForVisualInstructionBanner(visualInstruction: MBVisualInstructionBanner): void;
}

declare class MBNextInstructionLabel extends MBInstructionLabel {

	static alloc(): MBNextInstructionLabel; // inherited from NSObject

	static appearance(): MBNextInstructionLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBNextInstructionLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBNextInstructionLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBNextInstructionLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBNextInstructionLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBNextInstructionLabel; // inherited from UIAppearance

	static new(): MBNextInstructionLabel; // inherited from NSObject
}

declare class MBNightStyle extends MBDayStyle {

	static alloc(): MBNightStyle; // inherited from NSObject

	static new(): MBNightStyle; // inherited from NSObject
}

declare class MBPrimaryLabel extends MBInstructionLabel {

	static alloc(): MBPrimaryLabel; // inherited from NSObject

	static appearance(): MBPrimaryLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBPrimaryLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBPrimaryLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBPrimaryLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBPrimaryLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBPrimaryLabel; // inherited from UIAppearance

	static new(): MBPrimaryLabel; // inherited from NSObject
}

declare class MBProgressBar extends UIView {

	static alloc(): MBProgressBar; // inherited from NSObject

	static appearance(): MBProgressBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBProgressBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBProgressBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBProgressBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBProgressBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBProgressBar; // inherited from UIAppearance

	static new(): MBProgressBar; // inherited from NSObject

	barColor: UIColor;
}

declare class MBReportButton extends MBButton {

	static alloc(): MBReportButton; // inherited from NSObject

	static appearance(): MBReportButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBReportButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBReportButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBReportButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBReportButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBReportButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MBReportButton; // inherited from UIButton

	static new(): MBReportButton; // inherited from NSObject
}

declare class MBResumeButton extends UIControl {

	static alloc(): MBResumeButton; // inherited from NSObject

	static appearance(): MBResumeButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBResumeButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBResumeButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBResumeButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBResumeButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBResumeButton; // inherited from UIAppearance

	static new(): MBResumeButton; // inherited from NSObject
}

declare class MBRouteVoiceController extends NSObject implements AVSpeechSynthesizerDelegate {

	static alloc(): MBRouteVoiceController; // inherited from NSObject

	static new(): MBRouteVoiceController; // inherited from NSObject

	playRerouteSound: boolean;

	rerouteSoundPlayer: AVAudioPlayer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPassSpokenInstructionPointWithNotification(notification: NSNotification): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	speechSynthesizerDidCancelSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerDidContinueSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerDidFinishSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerDidPauseSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerDidStartSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerWillSpeakRangeOfSpeechStringUtterance(synthesizer: AVSpeechSynthesizer, characterRange: NSRange, utterance: AVSpeechUtterance): void;
}

declare class MBSecondaryLabel extends MBInstructionLabel {

	static alloc(): MBSecondaryLabel; // inherited from NSObject

	static appearance(): MBSecondaryLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBSecondaryLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBSecondaryLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBSecondaryLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBSecondaryLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBSecondaryLabel; // inherited from UIAppearance

	static new(): MBSecondaryLabel; // inherited from NSObject
}

declare class MBSeparatorView extends UIView {

	static alloc(): MBSeparatorView; // inherited from NSObject

	static appearance(): MBSeparatorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBSeparatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBSeparatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBSeparatorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBSeparatorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBSeparatorView; // inherited from UIAppearance

	static new(): MBSeparatorView; // inherited from NSObject
}

declare var MBSpokenInstructionErrorCodeKey: string;

declare class MBStatusView extends UIView {

	static alloc(): MBStatusView; // inherited from NSObject

	static appearance(): MBStatusView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBStatusView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBStatusView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBStatusView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBStatusView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBStatusView; // inherited from UIAppearance

	static new(): MBStatusView; // inherited from NSObject

	canChangeValue: boolean;

	delegate: StatusViewDelegate;
}

declare class MBStepInstructionsView extends BaseInstructionsBannerView {

	static alloc(): MBStepInstructionsView; // inherited from NSObject

	static appearance(): MBStepInstructionsView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBStepInstructionsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBStepInstructionsView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBStepInstructionsView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBStepInstructionsView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBStepInstructionsView; // inherited from UIAppearance

	static new(): MBStepInstructionsView; // inherited from NSObject
}

declare class MBStepTableViewCell extends UITableViewCell {

	static alloc(): MBStepTableViewCell; // inherited from NSObject

	static appearance(): MBStepTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBStepTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBStepTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBStepTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBStepTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBStepTableViewCell; // inherited from UIAppearance

	static new(): MBStepTableViewCell; // inherited from NSObject
}

declare class MBStepsBackgroundView extends UIView {

	static alloc(): MBStepsBackgroundView; // inherited from NSObject

	static appearance(): MBStepsBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBStepsBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBStepsBackgroundView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBStepsBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBStepsBackgroundView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBStepsBackgroundView; // inherited from UIAppearance

	static new(): MBStepsBackgroundView; // inherited from NSObject
}

declare class MBStepsViewController extends UIViewController implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): MBStepsViewController; // inherited from NSObject

	static new(): MBStepsViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class MBStylableButton extends UIButton {

	static alloc(): MBStylableButton; // inherited from NSObject

	static appearance(): MBStylableButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBStylableButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBStylableButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBStylableButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBStylableButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBStylableButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): MBStylableButton; // inherited from UIButton

	static new(): MBStylableButton; // inherited from NSObject

	borderColor: UIColor;

	borderWidth: number;

	cornerRadius: number;

	textColor: UIColor;

	textFont: UIFont;
}

declare class MBStylableLabel extends UILabel {

	static alloc(): MBStylableLabel; // inherited from NSObject

	static appearance(): MBStylableLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBStylableLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBStylableLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBStylableLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBStylableLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBStylableLabel; // inherited from UIAppearance

	static new(): MBStylableLabel; // inherited from NSObject

	normalFont: UIFont;

	normalTextColor: UIColor;
}

declare class MBStylableTextView extends UITextView {

	static alloc(): MBStylableTextView; // inherited from NSObject

	static appearance(): MBStylableTextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBStylableTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBStylableTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBStylableTextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBStylableTextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBStylableTextView; // inherited from UIAppearance

	static new(): MBStylableTextView; // inherited from NSObject

	normalTextColor: UIColor;
}

declare class MBStylableView extends UIView {

	static alloc(): MBStylableView; // inherited from NSObject

	static appearance(): MBStylableView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBStylableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBStylableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBStylableView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBStylableView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBStylableView; // inherited from UIAppearance

	static new(): MBStylableView; // inherited from NSObject
}

declare class MBStyle extends NSObject {

	static alloc(): MBStyle; // inherited from NSObject

	static new(): MBStyle; // inherited from NSObject

	fontFamily: string;

	mapStyleURL: NSURL;

	previewMapStyleURL: NSURL;

	styleType: MBStyleType;

	tintColor: UIColor;

	apply(): void;
}

declare class MBStyleKitMarker extends NSObject {

	static alloc(): MBStyleKitMarker; // inherited from NSObject

	static drawMarkerWithFrameInnerColorShadowColorPinColorStrokeColor(frame: CGRect, innerColor: UIColor, shadowColor: UIColor, pinColor: UIColor, strokeColor: UIColor): void;

	static new(): MBStyleKitMarker; // inherited from NSObject
}

declare class MBStyleManager extends NSObject {

	static alloc(): MBStyleManager; // inherited from NSObject

	static new(): MBStyleManager; // inherited from NSObject

	automaticallyAdjustsStyleForTimeOfDay: boolean;

	delegate: MBStyleManagerDelegate;

	styles: NSArray<MBStyle>;
}

interface MBStyleManagerDelegate extends NSObjectProtocol {

	locationForStyleManager(styleManager: MBStyleManager): CLLocation;

	styleManagerDidApply?(styleManager: MBStyleManager, style: MBStyle): void;

	styleManagerDidRefreshAppearance?(styleManager: MBStyleManager): void;
}
declare var MBStyleManagerDelegate: {

	prototype: MBStyleManagerDelegate;
};

declare const enum MBStyleType {

	Day = 0,

	Night = 1
}

declare class MBSubtitleLabel extends MBStylableLabel {

	static alloc(): MBSubtitleLabel; // inherited from NSObject

	static appearance(): MBSubtitleLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBSubtitleLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBSubtitleLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBSubtitleLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBSubtitleLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBSubtitleLabel; // inherited from UIAppearance

	static new(): MBSubtitleLabel; // inherited from NSObject
}

declare class MBTimeRemainingLabel extends MBStylableLabel {

	static alloc(): MBTimeRemainingLabel; // inherited from NSObject

	static appearance(): MBTimeRemainingLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBTimeRemainingLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBTimeRemainingLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBTimeRemainingLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBTimeRemainingLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBTimeRemainingLabel; // inherited from UIAppearance

	static new(): MBTimeRemainingLabel; // inherited from NSObject

	trafficHeavyColor: UIColor;

	trafficLowColor: UIColor;

	trafficModerateColor: UIColor;

	trafficSevereColor: UIColor;

	trafficUnknownColor: UIColor;
}

declare class MBTitleLabel extends MBStylableLabel {

	static alloc(): MBTitleLabel; // inherited from NSObject

	static appearance(): MBTitleLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBTitleLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBTitleLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBTitleLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBTitleLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBTitleLabel; // inherited from UIAppearance

	static new(): MBTitleLabel; // inherited from NSObject
}

interface MBUserCourseView {

	direction?: number;

	location?: CLLocation;

	pitch?: number;

	updateWithLocationPitchDirectionAnimatedTracksUserCourse?(location: CLLocation, pitch: number, direction: number, animated: boolean, tracksUserCourse: boolean): void;
}
declare var MBUserCourseView: {

	prototype: MBUserCourseView;
};

declare class MBUserPuckCourseView extends UIView implements MBUserCourseView {

	static alloc(): MBUserPuckCourseView; // inherited from NSObject

	static appearance(): MBUserPuckCourseView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBUserPuckCourseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBUserPuckCourseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBUserPuckCourseView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBUserPuckCourseView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBUserPuckCourseView; // inherited from UIAppearance

	static new(): MBUserPuckCourseView; // inherited from NSObject

	fillColor: UIColor;

	puckColor: UIColor;

	shadowColor: UIColor;

	direction: number; // inherited from MBUserCourseView

	location: CLLocation; // inherited from MBUserCourseView

	pitch: number; // inherited from MBUserCourseView

	updateWithLocationPitchDirectionAnimatedTracksUserCourse(location: CLLocation, pitch: number, direction: number, animated: boolean, tracksUserCourse: boolean): void;
}

interface MBVisualInstructionDelegate {

	labelWillPresentVisualInstructionAsAttributedString?(label: MBInstructionLabel, instruction: MBVisualInstruction, presented: NSAttributedString): NSAttributedString;
}
declare var MBVisualInstructionDelegate: {

	prototype: MBVisualInstructionDelegate;
};

interface MBVoiceControllerDelegate {

	voiceControllerDidInterruptSpokenInstructionWithInstruction?(voiceController: MBRouteVoiceController, interruptedInstruction: MBSpokenInstruction, interruptingInstruction: MBSpokenInstruction): void;

	voiceControllerSpokenInstrucionsDidFailWithError?(voiceController: MBRouteVoiceController, error: NSError): void;

	voiceControllerWillSpeakSpokenInstructionRouteProgress?(voiceController: MBRouteVoiceController, instruction: MBSpokenInstruction, routeProgress: MBRouteProgress): MBSpokenInstruction;
}
declare var MBVoiceControllerDelegate: {

	prototype: MBVoiceControllerDelegate;
};

declare class MBWayNameLabel extends MBStylableLabel {

	static alloc(): MBWayNameLabel; // inherited from NSObject

	static appearance(): MBWayNameLabel; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBWayNameLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBWayNameLabel; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBWayNameLabel; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBWayNameLabel; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBWayNameLabel; // inherited from UIAppearance

	static new(): MBWayNameLabel; // inherited from NSObject
}

declare class MBWayNameView extends UIView {

	static alloc(): MBWayNameView; // inherited from NSObject

	static appearance(): MBWayNameView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MBWayNameView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MBWayNameView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MBWayNameView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MBWayNameView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MBWayNameView; // inherited from UIAppearance

	static new(): MBWayNameView; // inherited from NSObject

	borderColor: UIColor;
}

declare const enum ManeuversStyleKitResizingBehavior {

	AspectFit = 0,

	AspectFill = 1,

	Stretch = 2,

	Center = 3
}

declare var MapboxNavigationVersionNumber: number;

declare var MapboxNavigationVersionNumberVar: number;

declare var MapboxNavigationVersionString: interop.Reference<number>;

declare var MapboxNavigationVersionStringVar: interop.Reference<number>;

interface StatusViewDelegate {

	statusViewValueChangedTo?(statusView: MBStatusView, value: number): void;
}
declare var StatusViewDelegate: {

	prototype: StatusViewDelegate;
};

interface StepsViewControllerDelegate {

	didDismissStepsViewController(viewController: MBStepsViewController): void;

	stepsViewControllerDidSelectStepIndexCell?(viewController: MBStepsViewController, legIndex: number, stepIndex: number, cell: MBStepTableViewCell): void;
}
declare var StepsViewControllerDelegate: {

	prototype: StepsViewControllerDelegate;
};
