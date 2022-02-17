<script>
    import { onMount } from "svelte";
    import Item from "./Item.svelte";

    let items = []; 

    onMount(async () => {
        await fetch(`http://localhost:4000/api/inventory/`)
            .then(r => r.json())
            .then(data => {
                items = data;
            })
    });

</script>

{ #if items }
{ #each items as item }
<ul>
    <li>
        <Item {item} />
    </li>
</ul>
{/each}
{:else }
<p class="loading">Fetching inventory..</p>
{ /if}


<style>
ul {
    width: 80%;
    margin: 10px auto;
    list-style-type: none;
    padding: 0px;
}

li {
    display: block
}

.loading {
    opacity: 0;
    animation: 0.5s 0.6s forwards fade-in;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

</style>

