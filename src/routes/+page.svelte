<script lang="ts">
	import { signIn, signOut } from "@auth/sveltekit/client"
	import { page } from "$app/stores"
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<br>
<button on:click={() => $page.data.session ? signOut() : signIn()} class="border-2 border-black p-1">{$page.data.session ? "Sign out!" : "Sign in!"}</button>
<br><br>
<h1>{$page.data.session?.user?.name ? $page.data.session?.user?.name : "Hello!"}</h1>
<h1>{data.greeting}</h1>