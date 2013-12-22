#Bandwidth 0.0.1
_Test your bandwidth by downloading an image._



##Usage
set attribute data-bandwidth="the-file-to-test-with.jpg"

Markup
```html
<img src="dome/url/to/image.png" data-bandwidth="the-file-to-test-with.jpg">
```
Script
```javascript
$('[data-bandwidth$=".jpg"]').bandwidth({callback:yourFunction});
/* and/or */
$('[data-bandwidth$=".jpg"]').on('bandwidth', function (event, bandwidthData){
    // Do your stuff here
});
```
##Options
```json
{
    callback:   function,
    setImage:   true/false
}
```

##Returns
```json
{
    mbps: "9.92",
    kbps: "10159.90",
    bps: "10403741.94",
    duration: 0.062,
    bits: 645032
}
```

##Events
When bandwith has foud out the speed, a 'bandwidth' event will be thrown.

##License
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">jQuery Bandwidth</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/kristofer-/bandwidth" property="cc:attributionName" rel="cc:attributionURL">kristofer-@github</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

---

####If a _callback_ is defined
Result JSON will be returned to that callback.

####If _callback_ is NOT defined
The target (image) element will get the data-bandwidth attribute set to that JSON.

####If _setImage_ is set to true
Then the image source will be set to the value that the data-bandwidth attribute has.
