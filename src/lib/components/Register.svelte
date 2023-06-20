<script>
	let username = '';
	let email = '';
	let password = '';
	let repassword = '';

	let validUsername = true;
	let validEmail = true;
	let validPassword = true;
	let validRepassword = true;


	function validateUsername() {
        const usernameRegex = /^([A-Za-z1-9_.])+$/;
		validUsername = usernameRegex.test(username);
	}

	function validatePassword() {
        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/;
		validPassword = passwordRegex.test(password);
	}

	function validateEmail() {
        const emailRegex = /^[A-Za-z0-9.-]+\@[A-Za-z0-9]+\.[a-z]+$/;
		validEmail = emailRegex.test(email);
	}

	function validateRepassword() {
		validRepassword = password == repassword;
	}
</script>

<form method="POST" action="?/register">
	<div class="grid-col-1 space-y-4">
		<label class="label">
			<span>Nazwa użytkownika</span>
			{#if !validUsername && username}
				<p class="text-xs text-red-500">Nazwa użytkownika nie może zawierać znaków specjalnych!</p>
			{/if}
			<input
				name="username"
				class="input"
				type="text"
				placeholder="Nazwa użytkownika"
				required
                bind:value="{username}"
				on:input="{validateUsername}"
			/>
		</label>

		<label class="label">
			<span>E-mail</span>
			{#if !validEmail && email}
				<p class="text-xs text-red-500">Nieprawidłowy adres e-mail!</p>
			{/if}
			<input
				name="email"
				class="input"
				type="email"
				placeholder="E-mail"
				required
                bind:value="{email}"
				on:input="{validateEmail}"
			/>
		</label>

		<label class="label">
			<span>Hasło</span>
			{#if !validPassword && password}
				<p class="text-xs text-red-500">Twoje hasło jest za słabe!</p>
			{/if}
			<input
				name="password"
				class="input"
				type="password"
				placeholder="Hasło"
				required
                bind:value="{password}"
				on:input="{validatePassword}"
			/>
		</label>

		<label class="label">
			<span>Powtórz hasło</span>
			{#if !validRepassword && repassword}
				<p class="text-xs text-red-500">Nieprawidłowe hasło</p>
			{/if}
			<input
				name="repassword"
				class="input"
				type="password"
				placeholder="Powtórz hasło"
				required
                bind:value="{repassword}"
				on:input="{validateRepassword}"
			/>
		</label>

		<div>
			<button
				type="submit"
				disabled="{!validEmail && !validPassword && !validEmail && !validRepassword}"
				class="btn variant-filled">Zarejestruj się</button
			>
		</div>
	</div>
</form>
