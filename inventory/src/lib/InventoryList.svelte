<script>
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

    import { onMount } from "svelte";
    import SvelteTable from "svelte-table"
    import InStockComponent from "./InStockComponent.svelte";
    
    let items = []; 
    let search = undefined;

    $: searchResults = search ?
		items.filter(item => {
			return (item.name).toLowerCase().match(`${search}.*`) || item.description.toLowerCase().match(`${search}.*`)
		}) : items;
    
    async function onInStockToggle(row) {
        row.inStock = !row.inStock;
        saveItem(row);
    }

    async function saveItem(item){
        const response = await fetch('http://localhost:4000/api/inventory/',{
        method:'PUT',
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json"
        }
    });
    }

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
        },
        {
            key: "location",
            title: "Location",
            value: v => typeof v.location != "undefined" ? v.location : "",
            sortable: true
        },
        {
            key: "actions",
            title: "",
            sortable: false,
            renderComponent: {
                component: InStockComponent,
                props:  { onInStockToggle }
            }
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
<SvelteTable 
    columns="{columns}" 
    rows="{typeof search == "undefined" ? items : searchResults}"
    iconSortable="<span style='color: grey;'>▲▼</span>"
>
    <svelte:fragment slot="expanded" let:row>{row.description}</svelte:fragment>
</SvelteTable>

<style>
input[type='search']{
    height: 38px;
    width: 300px;
    padding: 5px;
    margin-bottom: 40px;
}

:global(tbody tr td){
    padding: 5px 0;
}

:global(tbody tr:nth-child(2n)){
    background: #ececec;
}

</style>

