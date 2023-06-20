<script>
    

</script>

<form method="POST" action="?/login">
    <div class="grid-col-1 space-y-4 my-5">
        <label class="label">
            <span>Nazwa użytkownika</span>
            <input name="username" class="input" type="text" placeholder="Nazwa użytkownika" required />
        </label>

        <label class="label">
            <span>Hasło</span>
            <input name="password" class="input" type="password" placeholder="Hasło" required />
        </label>

        <div>
            <button type="submit" class="btn variant-filled">Zaloguj się</button>
        </div>
    </div>
</form>