<template>
	<button class="dexios-btn" type="button">
		<slot></slot>
	</button>
</template>

<style lang="less">
	[animated=""] {
		.button-hover {
			transform: translatex(-150%);
		}

		&:hover {
			.button-hover {
				transform: translatex(0);
			}

			.button-label {
				transform: translatex(150%);
			}
		}
	}

	[animated="fade"] {
		.button-hover {
			opacity: 0;
		}

		&:hover {
			.button-hover {
				opacity: 1;
			}

			.button-label {
				opacity: 0;
			}
		}
	}

	[animated="vertical"] {
		.button-hover {
			transform: translateY(-150%);
		}

		&:hover {
			.button-hover {
				transform: translateY(0);
			}

			.button-label {
				transform: translateY(150%);
			}
		}
	}
</style>
