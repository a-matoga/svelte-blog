<script>
	import { createEventDispatcher } from 'svelte';

	export let posts;

	const dispatch = createEventDispatcher();

	const onClick = (id) => {
		dispatch('delete', id);
	};
</script>

<div class="table-container">
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Tytuł</th>
				<th>Akcja</th>
			</tr>
		</thead>
		<tbody>
			{#each posts as post}
				<tr>
					<td>{post.title}</td>
					<td>
						<button
							class="btn variant-filled-error"
							on:click={() => onClick(post.id)} >Usuń
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
