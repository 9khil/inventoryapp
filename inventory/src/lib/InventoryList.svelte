<script>
    import { onMount } from "svelte";
    import SvelteTable from "svelte-table"

    import Item from "./Item.svelte";
    
    let items = []; 
    let search = undefined;

    $: searchResults = search ?
		items.filter(item => {
			return (item.name).toLowerCase().match(`${search}.*`) || item.description.toLowerCase().match(`${search}.*`)
		}) : items;


    const columns = [
        {
            key: "name",
            title: "Item",
            value: v => v.name,
            sortable: true,
        },
        {
            key: "description",
            title: "Description",
            value: v => v.description,
            sortable: false
        }
    ]

    onMount(async () => {
        await fetch(`http://localhost:4000/api/inventory/`)
            .then(r => r.json())
            .then(data => {
                items = data;
            })
    });

</script>

<input type="search" bind:value={search}  placeholder="Search.." />
<SvelteTable columns="{columns}" rows="{typeof search == "undefined" ? items : searchResults}">
    <svelte:fragment slot="expanded" let:row>{row.description}</svelte:fragment>
</SvelteTable>

<style>
input[type='search']{
    height: 38px;
    width: 300px;
    padding: 5px;
    margin-bottom: 40px;
}
</style>

