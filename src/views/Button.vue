<template>
	<article class="button prose">
		<section>
			<h1>Button</h1>
			<DexiosButton>
				<span>Button</span>
			</DexiosButton>
		</section>

		<section>
			<h3>Plain</h3>
			<DexiosButton plain>
				<span>Button</span>
			</DexiosButton>
		</section>

		<section>
			<h3>Compact</h3>
			<DexiosButton compact>
				<span>Button</span>
			</DexiosButton>
		</section>

		<section>
			<h3>Emphasis</h3>
			<div class="space-x-2">
				<DexiosButton primary>
					<span>Primary</span>
				</DexiosButton>
				<DexiosButton secondary>
					<span>Secondary</span>
				</DexiosButton>
			</div>
		</section>

		<section>
			<h3>Content Switching</h3>
			<div class="space-x-2">
				<DexiosButton animated>
					Hover over me!
					<template #hover>Hey, there!</template>
				</DexiosButton>
				<DexiosButton animated="vertical">
					Hover over me!
					<template #hover>Hey, there!</template>
				</DexiosButton>
				<DexiosButton animated="fade">
					Hover over me!
					<template #hover>Hey, there!</template>
				</DexiosButton>
			</div>
		</section>

		<section>
			<h3>Disabled</h3>
			<div class="space-x-2">
				<DexiosButton disabled>
					<span>Button</span>
				</DexiosButton>
				<DexiosButton disabled plain>
					<span>Plain</span>
				</DexiosButton>
				<DexiosButton disabled primary>
					<span>Primary</span>
				</DexiosButton>
			</div>
		</section>

		<section>
			<h3>Icon</h3>
			<div class="space-x-2">
				<DexiosButton icon="email"></DexiosButton>
				<DexiosButton icon="email" circular></DexiosButton>
			</div>
		</section>

		<section>
			<h3>Labeled Icon</h3>
			<div class="space-x-2">
				<DexiosButton icon="email" plain>
					<span>Label</span>
				</DexiosButton>
				<DexiosButton icon="email">
					<span>Label</span>
				</DexiosButton>
				<DexiosButton icon="content-save" primary>
					<span>Primary</span>
				</DexiosButton>
				<DexiosButton icon="delete" secondary>
					<span>Secondary</span>
				</DexiosButton>
			</div>
		</section>

		<section>
			<h3>Button Group</h3>
			<div class="flex flex-col items-start space-y-3">
				<DexiosButtons plain>
					<DexiosButton icon="reply">
						<span>Reply</span>
					</DexiosButton>
					<DexiosButton icon="forward">
						<span>Forward</span>
					</DexiosButton>
					<DexiosButton icon="delete">
						<span>Delete</span>
					</DexiosButton>
				</DexiosButtons>
				<DexiosButtons>
					<DexiosButton icon="reply">
						<span>Reply</span>
					</DexiosButton>
					<DexiosButton icon="forward">
						<span>Forward</span>
					</DexiosButton>
					<DexiosButton icon="delete">
						<span>Delete</span>
					</DexiosButton>
				</DexiosButtons>
				<DexiosButtons primary>
					<DexiosButton icon="reply">
						<span>Reply</span>
					</DexiosButton>
					<DexiosButton icon="forward">
						<span>Forward</span>
					</DexiosButton>
					<DexiosButton icon="delete">
						<span>Delete</span>
					</DexiosButton>
				</DexiosButtons>
				<DexiosButtons secondary>
					<DexiosButton icon="reply">
						<span>Reply</span>
					</DexiosButton>
					<DexiosButton icon="forward">
						<span>Forward</span>
					</DexiosButton>
					<DexiosButton icon="delete">
						<span>Delete</span>
					</DexiosButton>
				</DexiosButtons>
			</div>
		</section>

		<section>
			<h3>Button Group (Vertical)</h3>
			<div class="flex space-x-3">
				<DexiosButtons plain vertical>
					<DexiosButton icon="reply">
						<span>Reply</span>
					</DexiosButton>
					<DexiosButton icon="forward">
						<span>Forward</span>
					</DexiosButton>
					<DexiosButton icon="delete">
						<span>Delete</span>
					</DexiosButton>
				</DexiosButtons>
				<DexiosButtons vertical>
					<DexiosButton icon="reply">
						<span>Reply</span>
					</DexiosButton>
					<DexiosButton icon="forward">
						<span>Forward</span>
					</DexiosButton>
					<DexiosButton icon="delete">
						<span>Delete</span>
					</DexiosButton>
				</DexiosButtons>
				<DexiosButtons primary vertical>
					<DexiosButton icon="reply">
						<span>Reply</span>
					</DexiosButton>
					<DexiosButton icon="forward">
						<span>Forward</span>
					</DexiosButton>
					<DexiosButton icon="delete">
						<span>Delete</span>
					</DexiosButton>
				</DexiosButtons>
				<DexiosButtons secondary vertical>
					<DexiosButton icon="reply">
						<span>Reply</span>
					</DexiosButton>
					<DexiosButton icon="forward">
						<span>Forward</span>
					</DexiosButton>
					<DexiosButton icon="delete">
						<span>Delete</span>
					</DexiosButton>
				</DexiosButtons>
			</div>
		</section>
	</article>
</template>
