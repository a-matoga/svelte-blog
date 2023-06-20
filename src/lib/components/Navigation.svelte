<script>
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { Avatar, storePopup, popup } from '@skeletonlabs/skeleton';
	import { createEventDispatcher} from 'svelte';
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
    
    export let user;

    const dispatch = createEventDispatcher();


    const handleLogout = () => {
        user = undefined;
        dispatch('logout', {
            logout: true
        });
    }

    const popupMenu = {
		event: 'click',
		placement: 'bottom',
		target: 'popupMenu'
	};

</script>

{#if user?.isAuthenticated}
					<span>Witaj {user.username}!</span>
					<button class="" use:popup={popupMenu}>
						<Avatar
							border="border-2 border-surface-300-600-token hover:!border-primary-500"
							cursor="cursor-pointer"
							src="../{user.avatar}"
							initials={user.username.charAt(0)}
							class="w-9"
							background="bg-red-700"
						/>
					</button>

					<div class="card p-4 w-40" data-popup="popupMenu">
						<ul class="flex flex-col space-y-4">
							<!--<a href="/account/"><li class="hover:bg-lime-500 p-1 rounded">Konto</li></a>>-->
							<a href="/create/post/"><li class="hover:bg-lime-500 p-1 rounded">Dodaj post</li></a>
							<a href="/my-posts/"><li class="hover:bg-lime-500 p-1 rounded">Moje posty</li></a>
							<li class="hover:bg-lime-500 p-1 rounded"><button on:click="{handleLogout}">Wyloguj się</button></li>
						</ul>
					</div>
				{:else}
					<a class="btn btn-sm variant-ghost-surface" href="/login/"> Zaloguj się </a>

					<a class="btn btn-sm variant-ghost-surface" href="/register/"> Zarejestruj się </a>
				{/if}