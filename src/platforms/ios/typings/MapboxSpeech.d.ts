
declare const enum MBAudioFormat {

	Mp3 = 0
}

declare const enum MBSpeechGender {

	Female = 0,

	Male = 1,

	Neuter = 2
}

declare class MBSpeechOptions extends NSObject {

	static alloc(): MBSpeechOptions; // inherited from NSObject

	static new(): MBSpeechOptions; // inherited from NSObject

	locale: NSLocale;

	outputFormat: MBAudioFormat;

	speechGender: MBSpeechGender;

	text: string;

	constructor(o: { ssml: string; });

	constructor(o: { text: string; });

	initWithSsml(ssml: string): this;

	initWithText(text: string): this;
}

declare class MBSpeechSynthesizer extends NSObject {

	static alloc(): MBSpeechSynthesizer; // inherited from NSObject

	static new(): MBSpeechSynthesizer; // inherited from NSObject

	readonly accessToken: string;

	readonly apiEndpoint: NSURL;

	static readonly sharedSpeechSynthesizer: MBSpeechSynthesizer;

	constructor(o: { accessToken: string; });

	constructor(o: { accessToken: string; host: string; });

	URLForSynthesizingSpeechWithOptions(options: MBSpeechOptions): NSURL;

	audioDataWithOptionsCompletionHandler(options: MBSpeechOptions, completionHandler: (p1: NSData, p2: NSError) => void): NSURLSessionDataTask;

	initWithAccessToken(accessToken: string): this;

	initWithAccessTokenHost(accessToken: string, host: string): this;
}

declare const enum MBTextType {

	Text = 0,

	Ssml = 1
}

declare var MapboxSpeechVersionNumber: number;

declare var MapboxSpeechVersionNumberVar: number;

declare var MapboxSpeechVersionString: interop.Reference<number>;

declare var MapboxSpeechVersionStringVar: interop.Reference<number>;
