<script>
	import { loop_guard } from 'svelte/internal';
	import PostCard from '../lib/components/PostCard.svelte';

	export let data;
	let posts = data.posts;
</script>

<div class="container h-full mx-auto flex justify-center items-center px-10 py-5 lg:px-40 lg:py-5">
	<div class="grid grid-flow-row grid-cols-1 auto-rows-fr gap-5 lg:grid-cols-2 lg:gap-10">
		{#each posts as post}
			{#if post.active}
				<PostCard {...post}/>
			{/if}
		{/each}
	</div>
</div>
