### Slider

Integrated: https://github.com/ganlanyuan/tiny-slider

1. Import: `import Slider from "components/Slider/Slider.astro"`

2. Pass settings object as props.

```javascript
<Slider
	settings={{
		items: 1,
		loop: false,
		controls: false,
		nav: true,
		arrowKeys: false,
		mouseDrag: true,
		navPosition: "bottom",
		responsive: {
			768: { items: 2 },
		},
	}}
/>
```
