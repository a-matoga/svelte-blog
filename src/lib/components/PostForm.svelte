<script>
</script>

<form method="POST" action="?/create" enctype="multipart/form-data">
	<div class="grid-col-1 space-y-4 my-5">
		<label class="label">
			<span>Tytuł</span>
			<input name="title" class="input" type="text" required/>
		</label>

		<label class="label">
			<span>Streszczenie</span>
			<textarea name="abstract" class="textarea" required/>
		</label>

		<label class="label">
			<span>Treść</span>
			<textarea name="content" class="textarea" required/>
		</label>

		<label class="label">
            <span>Wybierz plik</span>
			<input type="file" accept="image/png, image/jpeg" name="image" required
            class="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100" />
		</label>
		<div>
			<button type="submit" class="btn variant-filled">Wstaw post</button>
		</div>
	</div>
</form>
