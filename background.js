const defaultFilters = [
	"*://*.zedo.com/*",
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analutics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
	function(details) { return { cancel: true} },
	{ urls: defaultFilters},
	["blocking"]
)