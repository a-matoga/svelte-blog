<script>
	import Navigation from './../lib/components/Navigation.svelte';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { AppShell, AppBar, Avatar, storePopup, popup, LightSwitch } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const popupMenu = {
		event: 'click',
		placement: 'bottom',
		target: 'popupMenu'
	};

	export let data;
	let user = data.user;

	async function handleLogout(event) {
		const status = event.detail.logout;
		await goto(`/?logout=${status}/`)
	}


</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="flex items-center"><strong class="text-xl uppercase">ZELDA BLOG</strong><img src="/favicon.png" class="h-8" alt="logo"></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Navigation user="{data.user}" on:logout="{handleLogout}"/>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
