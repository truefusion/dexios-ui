<template>
	<article class="divider prose">
		<h1>Divider</h1>
		<VigilDivider></VigilDivider>
		<VigilSegment plain>
			<VigilDivider vertical></VigilDivider>
		</VigilSegment>

		<h3>With Text</h3>
		<VigilDivider>OR</VigilDivider>
		<VigilSegment plain>
			<VigilDivider vertical>OR</VigilDivider>
		</VigilSegment>
	</article>
</template>

<style lang="less">
	.view.divider {
		.segment {
			@apply min-h-64;
		}
	}
</style>
