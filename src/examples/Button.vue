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
			<DexiosButton class="plain">
				<span>Button</span>
			</DexiosButton>
		</section>

		<section>
			<h3>Compact</h3>
			<DexiosButton class="compact">
				<span>Button</span>
			</DexiosButton>
		</section>

		<section>
			<h3>Emphasis</h3>
			<div class="space-x-2">
				<DexiosButton class="primary">
					<span>Primary</span>
				</DexiosButton>
				<DexiosButton class="secondary">
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
				<DexiosButton class="plain" disabled>
					<span>Plain</span>
				</DexiosButton>
				<DexiosButton class="primary" disabled>
					<span>Primary</span>
				</DexiosButton>
			</div>
		</section>

		<section>
			<h3>Icon</h3>
			<div class="space-x-2">
				<DexiosButton class="icon" icon="email"></DexiosButton>
				<DexiosButton class="icon" icon="email" circular></DexiosButton>
			</div>
		</section>

		<section>
			<h3>Labeled Icon</h3>
			<div class="space-x-2">
				<DexiosButton class="plain" icon="email">
					<span>Label</span>
				</DexiosButton>
				<DexiosButton icon="email">
					<span>Label</span>
				</DexiosButton>
				<DexiosButton class="primary" icon="content-save">
					<span>Primary</span>
				</DexiosButton>
				<DexiosButton class="secondary" icon="delete">
					<span>Secondary</span>
				</DexiosButton>
			</div>
		</section>

		<section>
			<h3>Button Group</h3>
			<div class="flex flex-col items-start space-y-3">
				<DexiosButtons class="plain">
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
				<DexiosButtons class="primary">
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
				<DexiosButtons class="secondary">
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
				<DexiosButtons class="plain vertical">
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
				<DexiosButtons class="vertical">
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
				<DexiosButtons class="primary vertical">
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
				<DexiosButtons class="secondary vertical">
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
