<script>
	export let title = '';
	export let abstract = '';
	export let image = '';
	export let createdAt = '';
	export let author = '';
	export let slug = '';

	const url = `/post/${slug}`;

	const date = new Date(createdAt);

	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	const formDate = `${day}-${month}-${year}`;
</script>

<a href={url} class="flex">
	<div class="card card-hover overflow-hidden flex flex-col w-full h-full">
		<div class="">
			<img src="/{image}" class="bg-black/50 object-cover aspect-[21/9] w-full" alt="/{image}" />
		</div>

		<div class="p-4 space-y-4">
			<header>
				<h3 class="h3">{title}</h3>
			</header>

			<section>
				<p class="text-justify">
					{abstract}
				</p>
			</section>
		</div>

		<footer class="p-4 w-full mt-auto">
			<hr />
			<div class="flex-auto flex justify-between items-center p-2">
				<h6 class="h6">Autor: {author.username}</h6>
				<small>{formDate}</small>
			</div>
		</footer>
	</div>
</a>
