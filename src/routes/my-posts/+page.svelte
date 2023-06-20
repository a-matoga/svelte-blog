<script>
    import PostList from "../../lib/components/PostList.svelte";

    export let data;
    let posts = data.posts;

    const onDelete = async (event) => {
        const postId = event.detail;
		const result = await fetch('/api/posts/', {
			method: 'DELETE',
			body: JSON.stringify({ postId }),
			headers: {
				'content-type': 'application/json'
			}
		});

		posts = await result.json();
	};

</script>


<div class="container h-auto mx-auto grid grid-cols-1 gap-8 justify-center p-8">
    <div>
        <h1 class="h1">Moje posty</h1>
    </div>
	<div>
        <PostList {posts} on:delete={onDelete}/>
    </div>
</div>
