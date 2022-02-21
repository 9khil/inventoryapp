<script>
    import InStockComponent from './ItemActions/InStockComponent.svelte';
    import DeleteComponent from './ItemActions/DeleteComponent.svelte';

    export let row;
    export let col;

    export let onInStockToggle;
</script>

<div class="item-actions-container">
    <InStockComponent row={row} onInStockToggle={onInStockToggle}/>
    <DeleteComponent row={row}/>
</div>

<style>
    .item-actions-container{
        display: grid;
        grid-template-columns: 35px 35px;
        width: 16px;
        column-gap: 9px;
    }
</style>