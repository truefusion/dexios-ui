<template>
	<article class="menu prose">
		<h1>Menu</h1>
		<DexiosMenu>
			<DexiosItem active href="#">Item</DexiosItem>
			<DexiosItem href="#">Item</DexiosItem>
			<DexiosItem href="#">Item</DexiosItem>
		</DexiosMenu>

		<h3>Flat</h3>
		<DexiosMenu flat>
			<DexiosItem active href="#">Item</DexiosItem>
			<DexiosItem href="#">Item</DexiosItem>
			<DexiosItem href="#">Item</DexiosItem>
		</DexiosMenu>

		<h3>Secondary</h3>
		<DexiosMenu secondary>
			<DexiosItem active href="#">Item</DexiosItem>
			<DexiosItem href="#">Item</DexiosItem>
			<DexiosItem href="#">Item</DexiosItem>
		</DexiosMenu>

		<h3>Components</h3>
		<DexiosMenu>
			<DexiosHeader>Header</DexiosHeader>
			<DexiosInput icon-left="filter" placeholder="Filter"></DexiosInput>
			<DexiosDropdown>
				<span>Dropdown</span>
				<template #menu="{close}">
					<DexiosItem>Item</DexiosItem>
					<DexiosItem>Item</DexiosItem>
					<DexiosItem>Item</DexiosItem>
				</template>
			</DexiosDropdown>
			<DexiosDropdown selection>
				<span>Selection</span>
				<template #menu="{close}">
					<DexiosItem>Item</DexiosItem>
					<DexiosItem>Item</DexiosItem>
					<DexiosItem>Item</DexiosItem>
				</template>
			</DexiosDropdown>
			<DexiosButton>Button</DexiosButton>
			<DexiosButton disabled>Disabled</DexiosButton>
			<DexiosButton icon="emoticon"></DexiosButton>
			<DexiosItem href="#">Link</DexiosItem>
		</DexiosMenu>
		<DexiosMenu flat>
			<DexiosHeader>Header</DexiosHeader>
			<DexiosInput icon-left="filter" placeholder="Filter"></DexiosInput>
			<DexiosDropdown>
				<span>Dropdown</span>
				<template #menu="{close}">
					<DexiosItem>Item</DexiosItem>
					<DexiosItem>Item</DexiosItem>
					<DexiosItem>Item</DexiosItem>
				</template>
			</DexiosDropdown>
			<DexiosDropdown selection>
				<span>Selection</span>
				<template #menu="{close}">
					<DexiosItem>Item</DexiosItem>
					<DexiosItem>Item</DexiosItem>
					<DexiosItem>Item</DexiosItem>
				</template>
			</DexiosDropdown>
			<DexiosButton>Button</DexiosButton>
			<DexiosButton disabled>Disabled</DexiosButton>
			<DexiosButton icon="emoticon"></DexiosButton>
			<DexiosItem href="#">Link</DexiosItem>
		</DexiosMenu>

		<h3>Tabs</h3>
		<DexiosMenu tabular>
			<DexiosItem active href="#">Item</DexiosItem>
			<DexiosItem href="#">Item</DexiosItem>
			<DexiosItem href="#">Item</DexiosItem>
		</DexiosMenu>

		<h3>Header</h3>
		<DexiosMenu>
			<DexiosItem header>Header</DexiosItem>
			<DexiosItem active href="#">Item</DexiosItem>
			<DexiosItem href="#">Item</DexiosItem>
			<DexiosItem href="#">Item</DexiosItem>
		</DexiosMenu>

		<h3>Vertical</h3>
		<div class="flex items-start space-x-5">
			<DexiosMenu class="flex-1" vertical>
				<DexiosMenu plain vertical>
					<DexiosItem header>Header</DexiosItem>
					<DexiosItem active href="#">Item</DexiosItem>
					<DexiosItem href="#">Item</DexiosItem>
					<DexiosItem href="#">Item</DexiosItem>
				</DexiosMenu>
				<DexiosMenu plain vertical>
					<DexiosItem header>Header</DexiosItem>
					<DexiosItem href="#">Item</DexiosItem>
					<DexiosItem href="#">Item</DexiosItem>
					<DexiosItem href="#">Item</DexiosItem>
				</DexiosMenu>
				<DexiosMenu plain vertical>
					<DexiosItem header>Header</DexiosItem>
					<DexiosItem href="#">Item</DexiosItem>
					<DexiosItem href="#">Item</DexiosItem>
					<DexiosItem href="#">Item</DexiosItem>
				</DexiosMenu>
			</DexiosMenu>
			<DexiosMenu class="flex-1" vertical>
				<DexiosItem active href="#">Item</DexiosItem>
				<DexiosItem href="#">Item</DexiosItem>
				<DexiosItem href="#">Item</DexiosItem>
			</DexiosMenu>
			<DexiosMenu class="flex-1" vertical>
				<DexiosItem active href="#">
					<DexiosHeader>Header</DexiosHeader>
					<div>Some text here.</div>
				</DexiosItem>
				<DexiosItem href="#">
					<DexiosHeader>Header</DexiosHeader>
					<div>Some text here.</div>
				</DexiosItem>
				<DexiosItem href="#">
					<DexiosHeader>Header</DexiosHeader>
					<div>Some text here.</div>
				</DexiosItem>
			</DexiosMenu>
			<DexiosMenu class="flex-1" vertical>
				<DexiosItem active class="flex" href="#">
					<span class="flex-1">Item</span>
					<DexiosLabel>
						<span>100</span>
					</DexiosLabel>
				</DexiosItem>
				<DexiosItem class="flex" href="#">
					<span class="flex-1">Item</span>
					<DexiosLabel plain>
						<span>100</span>
					</DexiosLabel>
				</DexiosItem>
				<DexiosItem href="#">Item</DexiosItem>
				<DexiosInput icon-right="magnify" placeholder="Search"></DexiosInput>
			</DexiosMenu>
		</div>
		<div class="flex items-start space-x-5">
			<DexiosMenu class="flex-1" flat vertical>
				<DexiosItem active href="#">Item</DexiosItem>
				<DexiosItem href="#">Item</DexiosItem>
				<DexiosItem href="#">Item</DexiosItem>
			</DexiosMenu>
			<DexiosMenu class="flex-1" secondary vertical>
				<DexiosItem active href="#">Item</DexiosItem>
				<DexiosItem href="#">Item</DexiosItem>
				<DexiosItem href="#">Item</DexiosItem>
			</DexiosMenu>
			<DexiosMenu class="flex-1" tabular vertical>
				<DexiosItem active href="#">Item</DexiosItem>
				<DexiosItem href="#">Item</DexiosItem>
				<DexiosItem href="#">Item</DexiosItem>
			</DexiosMenu>
		</div>
	</article>
</template>
