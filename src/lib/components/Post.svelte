<script>
	export let title = '';
	export let abstract = '';
    export let content = '';
	export let image = '';
	export let createdAt = '';
	export let author = '';
	

	const date = new Date(createdAt);

	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	const formDate = `${day}-${month}-${year}`;
</script>

	<div class="card overflow-hidden flex flex-col w-full">
		<div class="">
			<img src="/{image}" class="bg-black/50 object-cover aspect-[21/9] w-full" alt="post" />
		</div>

		<div class="p-10 space-y-4">
			<header>
				<h1 class="h1">{title}</h1>
			</header>

			<section>
				<p class="text-justify">
					{abstract}
				</p>
			</section>

            <article class="text-justify">
				<p>
					{content}
				</p>
            </article>
		</div>

		<footer class="p-4 w-full mt-auto">
			<hr />
			<div class="flex-auto flex justify-between items-center p-2">
				<h6 class="h6">Autor: {author.username}</h6>
				<small>{formDate}</small>
			</div>
		</footer>
	</div>
