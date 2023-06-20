<script>
    import PostForm from "../../../lib/components/PostForm.svelte";


	export let form;
</script>


<div class="container h-auto mx-auto justify-center py-5 px-36">
	<div class="card h-full px-10 py-5">
		{#if form?.success}
		<div class="alert variant-filled-success">
			<p class="font-sm">Post został dodany!</p>
		</div>
		{/if}
		<PostForm />
	</div>
</div>
