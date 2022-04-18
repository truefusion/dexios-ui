<template>
	<article class="button prose">
		<section>
			<h1>Button</h1>
			<VigilButton>
				<span>Button</span>
			</VigilButton>
		</section>

		<section>
			<h3>Plain</h3>
			<VigilButton plain>
				<span>Button</span>
			</VigilButton>
		</section>

		<section>
			<h3>Compact</h3>
			<VigilButton compact>
				<span>Button</span>
			</VigilButton>
		</section>

		<section>
			<h3>Emphasis</h3>
			<div class="space-x-2">
				<VigilButton primary>
					<span>Primary</span>
				</VigilButton>
				<VigilButton secondary>
					<span>Secondary</span>
				</VigilButton>
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
			<div class="space-x-2">
				<VigilButton disabled>
					<span>Button</span>
				</VigilButton>
				<VigilButton disabled plain>
					<span>Plain</span>
				</VigilButton>
				<VigilButton disabled primary>
					<span>Primary</span>
				</VigilButton>
			</div>
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
				<VigilButton icon="email" plain>
					<span>Label</span>
				</VigilButton>
				<VigilButton icon="email">
					<span>Label</span>
				</VigilButton>
				<VigilButton icon="content-save" primary>
					<span>Primary</span>
				</VigilButton>
				<VigilButton icon="delete" secondary>
					<span>Secondary</span>
				</VigilButton>
			</div>
		</section>

		<section>
			<h3>Button Group</h3>
			<div class="flex flex-col items-start space-y-3">
				<VigilButtons plain>
					<VigilButton icon="reply">
						<span>Reply</span>
					</VigilButton>
					<VigilButton icon="forward">
						<span>Forward</span>
					</VigilButton>
					<VigilButton icon="delete">
						<span>Delete</span>
					</VigilButton>
				</VigilButtons>
				<VigilButtons>
					<VigilButton icon="reply">
						<span>Reply</span>
					</VigilButton>
					<VigilButton icon="forward">
						<span>Forward</span>
					</VigilButton>
					<VigilButton icon="delete">
						<span>Delete</span>
					</VigilButton>
				</VigilButtons>
				<VigilButtons primary>
					<VigilButton icon="reply">
						<span>Reply</span>
					</VigilButton>
					<VigilButton icon="forward">
						<span>Forward</span>
					</VigilButton>
					<VigilButton icon="delete">
						<span>Delete</span>
					</VigilButton>
				</VigilButtons>
				<VigilButtons secondary>
					<VigilButton icon="reply">
						<span>Reply</span>
					</VigilButton>
					<VigilButton icon="forward">
						<span>Forward</span>
					</VigilButton>
					<VigilButton icon="delete">
						<span>Delete</span>
					</VigilButton>
				</VigilButtons>
			</div>
		</section>

		<section>
			<h3>Button Group (Vertical)</h3>
			<div class="flex space-x-3">
				<VigilButtons plain vertical>
					<VigilButton icon="reply">
						<span>Reply</span>
					</VigilButton>
					<VigilButton icon="forward">
						<span>Forward</span>
					</VigilButton>
					<VigilButton icon="delete">
						<span>Delete</span>
					</VigilButton>
				</VigilButtons>
				<VigilButtons vertical>
					<VigilButton icon="reply">
						<span>Reply</span>
					</VigilButton>
					<VigilButton icon="forward">
						<span>Forward</span>
					</VigilButton>
					<VigilButton icon="delete">
						<span>Delete</span>
					</VigilButton>
				</VigilButtons>
				<VigilButtons primary vertical>
					<VigilButton icon="reply">
						<span>Reply</span>
					</VigilButton>
					<VigilButton icon="forward">
						<span>Forward</span>
					</VigilButton>
					<VigilButton icon="delete">
						<span>Delete</span>
					</VigilButton>
				</VigilButtons>
				<VigilButtons secondary vertical>
					<VigilButton icon="reply">
						<span>Reply</span>
					</VigilButton>
					<VigilButton icon="forward">
						<span>Forward</span>
					</VigilButton>
					<VigilButton icon="delete">
						<span>Delete</span>
					</VigilButton>
				</VigilButtons>
			</div>
		</section>
	</article>
</template>
