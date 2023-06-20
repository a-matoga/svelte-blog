<script>
	import Register from '../../lib/components/Register.svelte';

	export let form;
</script>

<div class="container h-auto mx-auto flex justify-center p-8">
	<div class="card px-10 py-10">

		{#if form?.success}
			<div class="alert variant-filled-success">
				<p class="font-sm">Udało się zarejestrować użytkownika!</p>
			</div>
		{:else if form?.exist}
		<div class="alert variant-filled-warning">
			<p class="font-sm">Konto z podaną nazwą użytkownika/adresem e-mail już istnieje</p>
		</div>
		{/if}

		<Register />
	</div>
</div>
