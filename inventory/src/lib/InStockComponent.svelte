<script>
    import { onMount } from "svelte";
    import Fa from 'svelte-fa';
    import { faBox } from '@fortawesome/free-solid-svg-icons';

    export let row;
    export let onInStockToggle;
    export let col;

    let inStock = false;

    onMount(async () => {
        inStock = row.inStock;
    });
    
    function toggleStock(row){
        inStock = !row.inStock;
        onInStockToggle(row);
    }
</script>

<div class="instock-icons-container" on:click={() => toggleStock(row)}>
    {#if inStock}
        <span title="In stock" class="instock"><Fa class="box-icon" icon={faBox}/></span>  
    {:else}
        <span title="Out of stock" class="notinstock"><Fa class="box-icon" icon={faBox}/></span>
    {/if}
</div>

<style>
    .instock :global(.box-icon){
        color: #14cd14;
    }

    .notinstock :global(.box-icon){
        color: #d7d7d7;
    }
</style>