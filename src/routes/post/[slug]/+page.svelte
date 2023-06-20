<script>
    import Post from '../../../lib/components/Post.svelte';

    export let data;
    const {post} = data;


</script>

<div class="container h-full mx-auto flex justify-center items-center px-10 py-5 lg:px-40 lg:py-5">
	<Post {...post}/>
</div>