<template>
	<article class="menu prose">
		<h1>Menu</h1>
		<VigilMenu>
			<VigilItem active href="#">Item</VigilItem>
			<VigilItem href="#">Item</VigilItem>
			<VigilItem href="#">Item</VigilItem>
		</VigilMenu>

		<h3>Flat</h3>
		<VigilMenu flat>
			<VigilItem active href="#">Item</VigilItem>
			<VigilItem href="#">Item</VigilItem>
			<VigilItem href="#">Item</VigilItem>
		</VigilMenu>

		<h3>Secondary</h3>
		<VigilMenu secondary>
			<VigilItem active href="#">Item</VigilItem>
			<VigilItem href="#">Item</VigilItem>
			<VigilItem href="#">Item</VigilItem>
		</VigilMenu>

		<h3>Tabs</h3>
		<VigilMenu tabular>
			<VigilItem active href="#">Item</VigilItem>
			<VigilItem href="#">Item</VigilItem>
			<VigilItem href="#">Item</VigilItem>
		</VigilMenu>

		<h3>Header</h3>
		<VigilMenu>
			<VigilItem header>Header</VigilItem>
			<VigilItem active href="#">Item</VigilItem>
			<VigilItem href="#">Item</VigilItem>
			<VigilItem href="#">Item</VigilItem>
		</VigilMenu>

		<h3>Vertical</h3>
		<div class="flex items-start space-x-5">
			<VigilMenu class="flex-1" vertical>
				<VigilMenu plain vertical>
					<VigilItem header>Header</VigilItem>
					<VigilItem active href="#">Item</VigilItem>
					<VigilItem href="#">Item</VigilItem>
					<VigilItem href="#">Item</VigilItem>
				</VigilMenu>
				<VigilMenu plain vertical>
					<VigilItem header>Header</VigilItem>
					<VigilItem href="#">Item</VigilItem>
					<VigilItem href="#">Item</VigilItem>
					<VigilItem href="#">Item</VigilItem>
				</VigilMenu>
				<VigilMenu plain vertical>
					<VigilItem header>Header</VigilItem>
					<VigilItem href="#">Item</VigilItem>
					<VigilItem href="#">Item</VigilItem>
					<VigilItem href="#">Item</VigilItem>
				</VigilMenu>
			</VigilMenu>
			<VigilMenu class="flex-1" vertical>
				<VigilItem active href="#">Item</VigilItem>
				<VigilItem href="#">Item</VigilItem>
				<VigilItem href="#">Item</VigilItem>
			</VigilMenu>
			<VigilMenu class="flex-1" vertical>
				<VigilItem active href="#">
					<VigilHeader>Header</VigilHeader>
					<div>Some text here.</div>
				</VigilItem>
				<VigilItem href="#">
					<VigilHeader>Header</VigilHeader>
					<div>Some text here.</div>
				</VigilItem>
				<VigilItem href="#">
					<VigilHeader>Header</VigilHeader>
					<div>Some text here.</div>
				</VigilItem>
			</VigilMenu>
			<VigilMenu class="flex-1" vertical>
				<VigilItem active class="flex" href="#">
					<span class="flex-1">Item</span>
					<VigilLabel>
						<span>100</span>
					</VigilLabel>
				</VigilItem>
				<VigilItem class="flex" href="#">
					<span class="flex-1">Item</span>
					<VigilLabel plain>
						<span>100</span>
					</VigilLabel>
				</VigilItem>
				<VigilItem href="#">Item</VigilItem>
				<VigilInput icon-right="magnify" placeholder="Search"></VigilInput>
			</VigilMenu>
		</div>
		<div class="flex items-start space-x-5">
			<VigilMenu class="flex-1" flat vertical>
				<VigilItem active href="#">Item</VigilItem>
				<VigilItem href="#">Item</VigilItem>
				<VigilItem href="#">Item</VigilItem>
			</VigilMenu>
			<VigilMenu class="flex-1" secondary vertical>
				<VigilItem active href="#">Item</VigilItem>
				<VigilItem href="#">Item</VigilItem>
				<VigilItem href="#">Item</VigilItem>
			</VigilMenu>
			<VigilMenu class="flex-1" tabular vertical>
				<VigilItem active href="#">Item</VigilItem>
				<VigilItem href="#">Item</VigilItem>
				<VigilItem href="#">Item</VigilItem>
			</VigilMenu>
		</div>

		<h3>Components</h3>
		<VigilMenu>
			<VigilHeader>Header</VigilHeader>
			<VigilInput icon-left="filter" placeholder="Filter"></VigilInput>
			<VigilDropdown>
				<span>Dropdown</span>
				<template #menu="{close}">
					<VigilItem>Item</VigilItem>
					<VigilItem>Item</VigilItem>
					<VigilItem>Item</VigilItem>
				</template>
			</VigilDropdown>
			<VigilDropdown selection>
				<span>Selection</span>
				<template #menu="{close}">
					<VigilItem>Item</VigilItem>
					<VigilItem>Item</VigilItem>
					<VigilItem>Item</VigilItem>
				</template>
			</VigilDropdown>
			<VigilButton>Button</VigilButton>
			<VigilButton icon="emoticon"></VigilButton>
			<VigilItem href="#">Link</VigilItem>
		</VigilMenu>
		<VigilMenu flat>
			<VigilHeader>Header</VigilHeader>
			<VigilInput icon-left="filter" placeholder="Filter"></VigilInput>
			<VigilDropdown>
				<span>Dropdown</span>
				<template #menu="{close}">
					<VigilItem>Item</VigilItem>
					<VigilItem>Item</VigilItem>
					<VigilItem>Item</VigilItem>
				</template>
			</VigilDropdown>
			<VigilDropdown selection>
				<span>Selection</span>
				<template #menu="{close}">
					<VigilItem>Item</VigilItem>
					<VigilItem>Item</VigilItem>
					<VigilItem>Item</VigilItem>
				</template>
			</VigilDropdown>
			<VigilButton>Button</VigilButton>
			<VigilButton icon="emoticon"></VigilButton>
			<VigilItem href="#">Link</VigilItem>
		</VigilMenu>
	</article>
</template>
