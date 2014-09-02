#Bandwidth 0.0.1
_Test your bandwidth by downloading an image. Bigger image is more accurate._



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

###"THE BEER-WARE LICENSE" (Revision 43):
<https://github.com/kristofer-> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return Kristofer

####If a _callback_ is defined
Result JSON will be returned to that callback.

####If _callback_ is NOT defined
The target (image) element will get the data-bandwidth attribute set to that JSON.

####If _setImage_ is set to true
Then the image source will be set to the value that the data-bandwidth attribute has.
