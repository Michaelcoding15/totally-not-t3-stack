<script lang="ts">
	import { signIn, signOut } from "@auth/sveltekit/client"
	import { page } from "$app/stores"
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={() => signIn()}>Sign in!</button>
<button on:click={() => signOut()}>Sign out!</button>
<h1>{$page.data.session?.user?.name}</h1>
<h1>{data.greeting}</h1>