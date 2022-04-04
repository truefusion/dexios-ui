<template>
	<article class="button prose">
		<section>
			<h1>Button</h1>
			<VigilButton>Button</VigilButton>
		</section>

		<section>
			<h3>Plain</h3>
			<VigilButton plain>Button</VigilButton>
		</section>

		<section>
			<h3>Compact</h3>
			<VigilButton compact>Button</VigilButton>
		</section>

		<section>
			<h3>Emphasis</h3>
			<div class="space-x-2">
				<VigilButton primary>Primary</VigilButton>
				<VigilButton secondary>Secondary</VigilButton>
			</div>
		</section>

		<section>
			<h3>Content Switching</h3>
			<div class="space-x-2">
				<VigilButton animated>
					Hover over me!
					<template #hover>Hey, there!</template>
				</VigilButton>
				<VigilButton animated="vertical">
					Hover over me!
					<template #hover>Hey, there!</template>
				</VigilButton>
				<VigilButton animated="fade">
					Hover over me!
					<template #hover>Hey, there!</template>
				</VigilButton>
			</div>
		</section>

		<section>
			<h3>Disabled</h3>
			<VigilButton disabled>
				Disabled
			</VigilButton>
		</section>

		<section>
			<h3>Icon</h3>
			<div class="space-x-2">
				<VigilButton icon="email"></VigilButton>
				<VigilButton icon="email" circular></VigilButton>
			</div>
		</section>

		<section>
			<h3>Labeled Icon</h3>
			<div class="space-x-2">
				<VigilButton icon="email" plain>Label</VigilButton>
				<VigilButton icon="email">Label</VigilButton>
				<VigilButton icon="content-save" primary>Primary</VigilButton>
				<VigilButton icon="delete" secondary>Secondary</VigilButton>
			</div>
		</section>

		<section>
			<h3>Button Group</h3>
			<div class="flex flex-col items-start space-y-3">
				<VigilButtons plain>
					<VigilButton icon="reply">Reply</VigilButton>
					<VigilButton icon="forward">Forward</VigilButton>
					<VigilButton icon="delete">Delete</VigilButton>
				</VigilButtons>
				<VigilButtons>
					<VigilButton icon="reply">Reply</VigilButton>
					<VigilButton icon="forward">Forward</VigilButton>
					<VigilButton icon="delete">Delete</VigilButton>
				</VigilButtons>
				<VigilButtons primary>
					<VigilButton icon="reply">Reply</VigilButton>
					<VigilButton icon="forward">Forward</VigilButton>
					<VigilButton icon="delete">Delete</VigilButton>
				</VigilButtons>
				<VigilButtons secondary>
					<VigilButton icon="reply">Reply</VigilButton>
					<VigilButton icon="forward">Forward</VigilButton>
					<VigilButton icon="delete">Delete</VigilButton>
				</VigilButtons>
			</div>
		</section>

		<section>
			<h3>Button Group (Vertical)</h3>
			<div class="flex space-x-3">
				<VigilButtons plain vertical>
					<VigilButton icon="reply">Reply</VigilButton>
					<VigilButton icon="forward">Forward</VigilButton>
					<VigilButton icon="delete">Delete</VigilButton>
				</VigilButtons>
				<VigilButtons vertical>
					<VigilButton icon="reply">Reply</VigilButton>
					<VigilButton icon="forward">Forward</VigilButton>
					<VigilButton icon="delete">Delete</VigilButton>
				</VigilButtons>
				<VigilButtons primary vertical>
					<VigilButton icon="reply">Reply</VigilButton>
					<VigilButton icon="forward">Forward</VigilButton>
					<VigilButton icon="delete">Delete</VigilButton>
				</VigilButtons>
				<VigilButtons secondary vertical>
					<VigilButton icon="reply">Reply</VigilButton>
					<VigilButton icon="forward">Forward</VigilButton>
					<VigilButton icon="delete">Delete</VigilButton>
				</VigilButtons>
			</div>
		</section>
	</article>
</template>
