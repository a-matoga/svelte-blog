<script>
	import Login from "../../lib/components/Login.svelte";

	export let form;
</script>

<div class="container h-auto mx-auto flex justify-center p-8">
	<div class="card px-10 py-10">
		{#if form?.incorrect}
		<div class="alert variant-filled-warning">
			<p class=" text-sm">Nieprawidłowa nazwa użytkownika lub adres e-mail</p>
		</div>
		{/if}

		<Login />
	</div>
</div>
