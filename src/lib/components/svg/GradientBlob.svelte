<script context="module">
	let counter = 0;
	function getId() {
		return `gradient-blob-${counter++}`;
	}
</script>

<script lang="ts">
	let gradientId = getId();
</script>

<!-- #f1f6f9 -->
<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 550 550"
	{...$$props}
>
	<defs>
		<linearGradient
			id={gradientId}
			x1="0.9"
			y1="0.1"
			x2="0.1"
			y2="0.9"
			gradientUnits="objectBoundingBox"
		>
			<stop offset="0" stop-color="currentColor" />
			<stop offset="1" stop-color="currentColor" stop-opacity="0" />
		</linearGradient>
	</defs>
	<g id="blob-shape" transform="translate(300 300)">
		<path
			id="Path_1449"
			data-name="Path 1449"
			d="M76.1-157.222C91.746-135.8,87.2-94.273,99.993-61.945c12.7,32.328,42.661,55.459,39.248,73.282-3.318,17.823-40.007,30.337-65.6,43.325-25.5,12.988-39.912,26.545-60.01,42.566-20.1,16.116-46.074,34.6-63.328,27.682-17.349-6.921-25.976-39.153-59.915-59.82s-93.1-29.768-105.325-51.478,22.373-56.028,43.609-93.949c21.331-37.921,29.2-79.35,53.563-96.793,24.459-17.444,65.414-10.9,103.9-6.921C24.531-180.069,60.461-178.647,76.1-157.222Z"
			fill="url(#{gradientId})"
		/>
	</g>
</svg>
