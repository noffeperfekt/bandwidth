#Bandwidth 1.0.0

_Test your bandwidth by downloading an image._

##Usage
set attribute data-bandwidth="the-file-to-test-with.jpg"

Markup
```html
<img src="dome/url/to/image.png" data-bandwidth="the-file-to-test-with.jpg">
```
Script
```javascript
$('img').bandwidth({callback:yourFunction})
```
##Options
```javascript
{
    callback:   function,
    setImage:   true/false
}
```

##Returns
```json
{mbps: "9.92", kbps: "10159.90", bps: "10403741.94", duration: 0.062, bits: 645032}
```
####If a _callback_ is defined
Result JSON will be returned to that callback.

####If _callback_ is NOT defined
The target (image) element will get the data-bandwidth attribute set to that JSON.

####If _setImage_ is set to true
Then the image source will be set to the value that the data-bandwidth attribute has.
