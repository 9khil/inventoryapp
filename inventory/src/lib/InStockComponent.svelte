<script>
    export let row;
    export let onInStockToggle;
    export let col;
</script>

<input type="checkbox" checked={row.inStock} on:click={() => onInStockToggle(row)} label={col.title}/>