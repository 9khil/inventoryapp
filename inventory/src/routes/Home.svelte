<script>
    import InventoryList from './../lib/InventoryList.svelte';
    import AddItem from './../lib/AddItem.svelte';
    import { showAddItem } from './../store.js';

    let showAddItemValue = false;
    
    showAddItem.subscribe(value => {
        showAddItemValue = value;
    });
</script>

{#if showAddItemValue}   
    <AddItem/>
{/if}

<InventoryList/>